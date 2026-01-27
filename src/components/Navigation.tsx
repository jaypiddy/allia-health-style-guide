import React from 'react';
import { Badge } from './ui/badge';

interface NavigationProps {
  currentTheme: string;
  onThemeChange: (theme: any) => void;
}

export function Navigation({ currentTheme, onThemeChange }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-[10px] border-b border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <span className="font-['Rubik'] font-bold text-xl tracking-tight hidden sm:block text-[var(--color-text-main)] font-[Nunito]">
              Allia Health Group
            </span>
            <Badge variant="outline" className="hidden sm:inline-flex border-gray-200 text-gray-500 font-normal bg-gray-50">
              Style Guide v2.0
            </Badge>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#colors" className="text-gray-600 hover:text-[var(--color-secondary)] transition-colors font-[Rubik] font-[Nunito]">Colors</a>
              <a href="#components" className="text-gray-600 hover:text-[var(--color-secondary)] transition-colors font-[Rubik] font-[Nunito]">Components</a>
              <a href="#logos" className="text-gray-600 hover:text-[var(--color-secondary)] transition-colors font-[Rubik] font-[Nunito]">Logos</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}