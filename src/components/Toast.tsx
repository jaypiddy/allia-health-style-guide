import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import clsx from 'clsx';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div 
      className={clsx(
        "fixed bottom-5 right-5 bg-[#132A26] text-white px-5 py-3 rounded-xl shadow-xl transition-all duration-300 z-50 text-sm font-medium flex items-center gap-2",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      )}
    >
      <CheckCircle className="w-5 h-5 text-[#CDEF63]" />
      <span>{message}</span>
    </div>
  );
}
