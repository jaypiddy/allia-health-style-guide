import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12 mt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <p className="text-white text-sm font-[Nunito]">© {new Date().getFullYear()} - Allia Health Group.</p>
      </div>
    </footer>
  );
}
