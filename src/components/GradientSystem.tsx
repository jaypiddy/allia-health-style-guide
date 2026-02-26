import React from 'react';
import { motion } from 'motion/react';
import GradientSystemImport from '../generated/GradientSystem-105-2257';

export function GradientSystem() {
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
    <section id="gradients" className="scroll-mt-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full"
      >
        <div className="w-full overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
          <div className="min-w-[1024px] md:min-w-0">
            <GradientSystemImport />
          </div>
        </div>
        {/* Mobile Scroll Hint */}
        <div className="md:hidden text-center mt-2 text-xs text-gray-400 font-medium animate-pulse">
          ← Scroll to view full gradients →
        </div>
      </motion.div>
    </section>
  );
}