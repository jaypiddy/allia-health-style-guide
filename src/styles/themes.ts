import React from 'react';

export type Theme =
    | 'regenerative-life'
    | 'holistic-vitality'
    | 'clinical-precision'
    | 'clinical-vitality-life'
    | 'neuro-connectivity'
    | 'analogous-fluidity'
    | 'clinical-vitality'
    | 'cyber-bio'
    | 'amber-glow'
    | 'dynamic-tension'
    | 'grounded'
    | 'soft-clinical';

export const themes: Record<Theme, React.CSSProperties> = {
    'regenerative-life': {
        '--color-primary': '#CDEF63', // Bio-Lumen Lime
        '--color-primary-gradient-to': '#B5D948',
        '--color-secondary': '#132A26', // Apothecary Emerald
        '--color-secondary-gradient-to': '#1E3F39',
        '--color-background': '#F8F6EB', // Calcium Cream
        '--color-surface': '#E8F5D6', // Highlight
        '--color-text-main': '#1A1A1A', // Diagnostic Slate
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'holistic-vitality': {
        '--color-primary': '#FF9F29', // Vitamin C Burst
        '--color-primary-gradient-to': '#FFB052',
        '--color-secondary': '#422016', // Organic Iodine
        '--color-secondary-gradient-to': '#5C2D1F',
        '--color-background': '#F9F6F1', // Warm Gauze
        '--color-surface': '#FFE8D1', // Epidermal Glow
        '--color-text-main': '#1A1A1A', // Carbon Trace
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'clinical-precision': {
        '--color-primary': '#21E6C1', // Laser Scalpel Teal
        '--color-primary-gradient-to': '#45F0D5',
        '--color-secondary': '#0F2537', // Deep Scrub Navy
        '--color-secondary-gradient-to': '#17364F',
        '--color-background': '#F4F8FA', // Oxygenated Mist
        '--color-surface': '#D0F5F0', // Saline Solution
        '--color-text-main': '#1E293B', // Titanium Grey
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'clinical-vitality-life': {
        '--color-primary': '#21E6C1', // Laser Scalpel Teal
        '--color-primary-gradient-to': '#45F0D5',
        '--color-secondary': '#0F2537', // Deep Scrub Navy
        '--color-secondary-gradient-to': '#17364F',
        '--color-background': '#F4F8FA', // Oxygenated Mist
        '--color-surface': '#D0F5F0', // Saline Solution
        '--color-text-main': '#1E293B', // Titanium Grey
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'neuro-connectivity': {
        '--color-primary': '#20E19F', // Synaptic Mint
        '--color-primary-gradient-to': '#4AF0B8',
        '--color-secondary': '#2E2145', // Cranial Violet
        '--color-secondary-gradient-to': '#423063',
        '--color-background': '#F7F5FA', // Myelin Sheath
        '--color-surface': '#FEB089',
        '--color-text-main': '#2D2833',
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'analogous-fluidity': {
        '--color-primary': '#FF5EAC', // Magenta Spark
        '--color-primary-gradient-to': '#FF8ACC',
        '--color-secondary': '#0B081F', // Deep Neurology Blue
        '--color-secondary-gradient-to': '#241845',
        '--color-background': '#F5F3F8', // Lavender Mist
        '--color-surface': '#D6C6F0',
        '--color-text-main': '#221E33',
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'clinical-vitality': {
        '--color-primary': '#FF9F29', // Vitamin C Burst
        '--color-primary-gradient-to': '#FFB95C',
        '--color-secondary': '#0F2537', // Scrub Navy
        '--color-secondary-gradient-to': '#1C354A',
        '--color-background': '#F5F7FA', // Clinical Neutral
        '--color-surface': '#FFEDD5',
        '--color-text-main': '#1E293B',
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'cyber-bio': {
        '--color-primary': '#00FF94', // Bio-Neon Green
        '--color-primary-gradient-to': '#00D1FF',
        '--color-secondary': '#020420', // Deep Cyber Indigo
        '--color-secondary-gradient-to': '#0D1642',
        '--color-background': '#F0F4F8', // Cool Tech Mist
        '--color-surface': '#CCFBF1',
        '--color-text-main': '#0F172A',
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'amber-glow': {
        '--color-primary': '#F59E0B', // Warm Amber
        '--color-primary-gradient-to': '#FCD34D',
        '--color-secondary': '#0F172A', // Deep Slate Blue
        '--color-secondary-gradient-to': '#1F2E4D',
        '--color-background': '#FFFBEB', // Warm Ivory
        '--color-surface': '#FDE68A',
        '--color-text-main': '#1E293B',
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'dynamic-tension': {
        '--color-primary': '#C8E600', // Hyper Citron
        '--color-primary-gradient-to': '#E1FF26',
        '--color-secondary': '#2E004F', // Midnight Violet
        '--color-secondary-gradient-to': '#4B0082',
        '--color-background': '#F8FAFC', // Cool Slate Mist
        '--color-surface': '#F5F3FF',
        '--color-text-main': '#0F172A',
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'grounded': {
        '--color-primary': '#D4886A', // Warm Terracotta
        '--color-primary-gradient-to': '#E09D80',
        '--color-secondary': '#2C241F', // Rich Earth
        '--color-secondary-gradient-to': '#453A32',
        '--color-background': '#FAF7F2', // Ivory Sand
        '--color-surface': '#EAD8C9', // Clay Dust
        '--color-text-main': '#2C241F', // Earth Shadow
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
    'soft-clinical': {
        '--color-primary': '#7A9B7E', // Botanical Green
        '--color-primary-gradient-to': '#92B096',
        '--color-secondary': '#1F2E23', // Deep Pine
        '--color-secondary-gradient-to': '#354238',
        '--color-background': '#F5F3F0', // Parchment
        '--color-surface': '#E3E8E1', // Herbal Mist
        '--color-text-main': '#1F2E23', // Pine Ink
        '--color-component-bg': '#FFFFFF',
    } as React.CSSProperties,
};
