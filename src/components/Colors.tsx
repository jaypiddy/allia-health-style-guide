import React from 'react';
import { motion } from 'motion/react';
import Frame764 from '../generated/Frame764';

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
      >
        <Frame764 />
      </motion.div>
    </section>
  );
}