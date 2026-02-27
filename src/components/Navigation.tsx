import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  currentTheme: string;
  onThemeChange: (theme: any) => void;
}

export function Navigation({ currentTheme, onThemeChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#colors", label: "Colors" },
    { href: "#components", label: "Components" },
    { href: "#logos", label: "Logos" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-[10px] border-b border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl tracking-tight text-[var(--color-text-main)] font-[Nunito]">
              Allia Health Group
            </span>
            <Badge variant="outline" className="hidden border-gray-200 text-gray-500 font-normal bg-gray-50 sm:inline-flex">
              Style Guide v2.0
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex space-x-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-[var(--color-secondary)] transition-colors font-[Rubik] font-[Nunito]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 -mr-2 text-gray-600 hover:text-[var(--color-secondary)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-[var(--color-secondary)] hover:bg-gray-50 rounded-md transition-colors font-[Rubik] font-[Nunito]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-3">
                <Badge variant="outline" className="border-gray-200 text-gray-500 font-normal bg-gray-50 w-full justify-center py-1">
                  Style Guide v2.0
                </Badge>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}