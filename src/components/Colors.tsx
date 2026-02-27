import React from 'react';
import { motion } from 'motion/react';
import Colors22 from '../generated/Colors-60-316';

interface ColorsProps {
  onCopy: (text: string) => void;
  currentTheme?: string;
}

export function Colors({ onCopy, currentTheme = 'regenerative-life' }: ColorsProps) {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="colors" className="scroll-mt-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full"
      >
        <div className="w-full overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
          <div className="min-w-[1217px] md:min-w-0">
            <Colors22 />
          </div>
        </div>
        {/* Mobile Scroll Hint */}
        <div className="md:hidden text-center mt-2 text-xs text-gray-400 font-medium animate-pulse">
          ← Scroll to view full palette →
        </div>
      </motion.div>
    </section>
  );
}