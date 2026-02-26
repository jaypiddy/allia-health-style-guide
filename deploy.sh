#!/bin/bash
set -e

# ==========================================
# Google Cloud Run Deployment Script
# ==========================================

# TODO: Replace with your actual Google Cloud Project ID
PROJECT_ID="gen-lang-client-0804834480" 

APP_NAME="ps-style-guide"
REGION="us-central1"

# Check if Project ID is set
if [ "$PROJECT_ID" = "your-project-id" ]; then
  echo "❌ Error: Please open 'deploy.sh' and replace 'your-project-id' with your actual GCP Project ID."
  exit 1
fi

echo "🚀 Starting deployment for $APP_NAME..."
echo "📍 Region: $REGION"
echo "ID Project: $PROJECT_ID"

# Determine gcloud command path
MSG_PREFIX="🚀"
GCLOUD_CMD="gcloud"

if ! command -v gcloud &> /dev/null; then
    if [ -f "./google-cloud-sdk/bin/gcloud" ]; then
        GCLOUD_CMD="./google-cloud-sdk/bin/gcloud"
        echo "$MSG_PREFIX Using local gcloud: $GCLOUD_CMD"
    else
        echo "❌ Error: gcloud not found in PATH or locally."
        exit 1
    fi
fi

# Check for authentication
ACTIVE_ACCOUNT=$($GCLOUD_CMD auth list --filter=status:ACTIVE --format="value(account)")
if [ -z "$ACTIVE_ACCOUNT" ]; then
    echo "$MSG_PREFIX Authentication required. Launching login..."
    $GCLOUD_CMD auth login
fi

# 1. Build and Submit Container to Container Registry
echo "📦 Building container..."
$GCLOUD_CMD builds submit --tag gcr.io/$PROJECT_ID/$APP_NAME --project "$PROJECT_ID"

# 2. Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
$GCLOUD_CMD run deploy $APP_NAME \
  --image gcr.io/$PROJECT_ID/$APP_NAME \
  --platform managed \
  --allow-unauthenticated \
  --region $REGION \
  --project "$PROJECT_ID"

echo "✅ Deployment complete!"
