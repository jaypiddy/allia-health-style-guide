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
      >
        <GradientSystemImport />
      </motion.div>
    </section>
  );
}