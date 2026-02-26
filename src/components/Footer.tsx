import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12 mt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Designed By */}
        <div className="flex items-center gap-2 order-2 md:order-1">
          <span className="text-white text-xs font-[Nunito] uppercase tracking-wider">Designed by:</span>
          <a
            href="https://powershifter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/powershifter-logo.png"
              alt="PowerShifter"
              className="h-5 w-auto brightness-0 invert"
            />
          </a>
        </div>

        <p className="text-white text-sm font-[Nunito] order-1 md:order-2">© {new Date().getFullYear()} - Allia Health Group.</p>
      </div>
    </footer>
  );
}
