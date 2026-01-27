import React from 'react';
import { motion } from 'motion/react';

export function Typography() {
  return (
    <section id="typography" className="scroll-mt-24">
      <div className="grid grid-cols-1 gap-12">
        {/* Typography Column */}
        <motion.div
          className="hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
             <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] font-bold text-sm">03</span>
                <h2 className="text-3xl font-['Nunito'] font-bold text-gray-900 dark:text-white">Typography</h2>
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4"></div>
            </div>

            <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex items-baseline justify-between mb-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                        <span className="font-['Nunito'] font-bold text-2xl text-gray-900 dark:text-white">Nunito</span>
                        <span className="text-sm text-gray-500 font-mono">Headings</span>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-['Nunito'] font-bold text-gray-900 dark:text-white">Display Heading</h1>
                            <span className="text-xs text-gray-400 font-mono mt-1 block">Bold 800 / 48px</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-['Nunito'] font-bold text-gray-900 dark:text-white">Section Title</h2>
                            <span className="text-xs text-gray-400 font-mono mt-1 block">Bold 700 / 30px</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-['Nunito'] font-semibold text-gray-900 dark:text-white">Component Header</h3>
                            <span className="text-xs text-gray-400 font-mono mt-1 block">SemiBold 600 / 20px</span>
                        </div>
                    </div>
                </div>

                 <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex items-baseline justify-between mb-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                        <span className="font-['PP_Neue_Montreal'] font-bold text-2xl text-gray-900 dark:text-white">PP Neue Montreal</span>
                        <span className="text-sm text-gray-500 font-mono">Body Copy</span>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 font-['PP_Neue_Montreal']">
                                The quick brown fox jumps over the lazy dog. Design is not just what it looks like and feels like. Design is how it works. Good design is obvious. Great design is transparent.
                            </p>
                            <span className="text-xs text-gray-400 font-mono mt-2 block">Regular 400 / 16px</span>
                        </div>
                        <div>
                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 font-['PP_Neue_Montreal']">
                                Secondary text for captions, timestamps, and metadata. It should be legible but not distracting.
                            </p>
                            <span className="text-xs text-gray-400 font-mono mt-2 block">Regular 400 / 14px</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}