import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Colors } from '@/components/Colors';
import { SecondaryColors } from '@/components/SecondaryColors';
import { GradientSystem } from '@/components/GradientSystem';
import { Typography } from '@/components/Typography';
import { Interactive } from '@/components/Interactive';
import { LogoAssets } from '@/components/LogoAssets';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { Theme, themes } from '@/styles/themes';

export default function App() {
  const [toastState, setToastState] = useState({ message: '', isVisible: false });
  const [currentTheme, setCurrentTheme] = useState<Theme>('clinical-vitality-life');

  const showToast = (message: string) => {
    setToastState({ message: `Copied ${message} to clipboard!`, isVisible: true });
  };

  const closeToast = () => {
    setToastState(prev => ({ ...prev, isVisible: false }));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(text);
    }).catch(() => {
      setToastState({ message: 'Failed to copy', isVisible: true });
    });
  };

  return (
    <div
      style={themes[currentTheme]}
      className={`min-h-screen transition-colors duration-300 bg-[var(--color-background)] text-[var(--color-text-main)] selection:bg-[var(--color-primary)] selection:text-[var(--color-secondary)]`}
    >
      <Navigation currentTheme={currentTheme} onThemeChange={setCurrentTheme} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12 md:space-y-24">
        <Hero />
        <Colors onCopy={handleCopy} currentTheme={currentTheme} />
        <SecondaryColors onCopy={handleCopy} />
        <GradientSystem />
        <Typography />
        <Interactive />
        <LogoAssets />
      </main>

      <Footer />

      <Toast
        message={toastState.message}
        isVisible={toastState.isVisible}
        onClose={closeToast}
      />
    </div>
  );
}