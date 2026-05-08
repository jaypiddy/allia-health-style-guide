import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import ppMuseumFontUrl from '../assets/fonts/PPMuseum-Variable.ttf';
import ppMontrealFontUrl from '../assets/fonts/PPNeueMontreal-Variable.ttf';

export function Typography() {
  return (
    <section id="typography" className="scroll-mt-24">
      <div className="grid grid-cols-1 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
             <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] font-bold text-sm">03</span>
                <h2 className="text-3xl font-museum font-bold text-[var(--color-text-main)] dark:text-white">Typography</h2>
                <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4"></div>
            </div>

            <div className="space-y-8">
                {/* PP Museum Section */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col md:flex-row items-baseline justify-between mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 gap-4">
                        <div className="flex items-center gap-4">
                          <span className="font-museum font-bold text-2xl text-[var(--color-text-main)] dark:text-white">PP Museum</span>
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 font-mono px-2 py-1 rounded-md">Headings (H1 - H6)</span>
                        </div>
                        <a 
                          href={ppMuseumFontUrl} 
                          download="PPMuseum-Variable.ttf"
                          className="flex items-center gap-2 bg-[#21e6c1] text-[#0f2537] px-6 py-3 rounded-full font-bold font-montreal text-sm hover:brightness-110 transition-all active:scale-95 w-fit"
                        >
                          <Download className="w-4 h-4" />
                          Download Font (.ttf)
                        </a>
                    </div>
                    
                    <div className="mb-8">
                        <p className="text-sm text-gray-500 font-montreal mb-2">Live CSS Implementation:</p>
                        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-sm font-mono text-gray-600 dark:text-gray-400 overflow-x-auto">
{`h1, h2, h3, h4, h5, h6 {
  font-family: "PPMuseum Variable", Georgia, sans-serif;
  font-weight: 400; /* or bold/700 depending on use case */
}`}
                        </pre>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-museum font-bold text-[var(--color-text-main)] dark:text-white">Display Heading (H1)</h1>
                            <span className="text-xs text-gray-400 font-mono mt-1 block">Bold 700 / 48px</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-museum font-bold text-[var(--color-text-main)] dark:text-white">Section Title (H2)</h2>
                            <span className="text-xs text-gray-400 font-mono mt-1 block">Bold 700 / 30px</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-museum font-semibold text-[var(--color-text-main)] dark:text-white">Component Header (H3)</h3>
                            <span className="text-xs text-gray-400 font-mono mt-1 block">SemiBold 600 / 20px</span>
                        </div>
                    </div>
                </div>

                {/* PP Neue Montreal Section */}
                 <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col md:flex-row items-baseline justify-between mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 gap-4">
                        <div className="flex items-center gap-4">
                          <span className="font-montreal font-bold text-2xl text-[var(--color-text-main)] dark:text-white">PP Neue Montreal</span>
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 font-mono px-2 py-1 rounded-md">Body Copy, Links, Buttons</span>
                        </div>
                         <a 
                          href={ppMontrealFontUrl} 
                          download="PPNeueMontreal-Variable.ttf"
                          className="flex items-center gap-2 bg-[#21e6c1] text-[#0f2537] px-6 py-3 rounded-full font-bold font-montreal text-sm hover:brightness-110 transition-all active:scale-95 w-fit"
                        >
                          <Download className="w-4 h-4" />
                          Download Font (.ttf)
                        </a>
                    </div>

                     <div className="mb-8">
                        <p className="text-sm text-gray-500 font-montreal mb-2">Live CSS Implementation:</p>
                        <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-sm font-mono text-gray-600 dark:text-gray-400 overflow-x-auto">
{`p, a, button, li, span {
  font-family: "PPNeueMontreal Variable", Arial, sans-serif;
  font-weight: 400; /* Use 500/600 for emphasis or buttons */
}`}
                        </pre>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <p className="text-base leading-relaxed text-[#6a7282] dark:text-gray-300 font-montreal">
                                Body Text: The quick brown fox jumps over the lazy dog. Design is not just what it looks like and feels like. Design is how it works. Good design is obvious. Great design is transparent.
                            </p>
                            <span className="text-xs text-gray-400 font-mono mt-2 block">Regular 400 / 16px</span>
                        </div>
                        <div>
                            <p className="text-sm leading-relaxed text-[#6a7282] dark:text-gray-400 font-montreal">
                                Captions: Secondary text for captions, timestamps, and metadata. It should be legible but not distracting.
                            </p>
                            <span className="text-xs text-gray-400 font-mono mt-2 block">Regular 400 / 14px</span>
                        </div>
                        <div>
                            <button className="bg-[#21e6c1] text-[#0f2537] px-6 py-3 rounded-full font-bold font-montreal text-sm hover:brightness-110 transition-all active:scale-95 w-fit">
                                Call to Action (Button)
                            </button>
                            <span className="text-xs text-gray-400 font-mono mt-3 block">Bold 700 / 16px</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}