import React from 'react';
import { motion } from 'motion/react';
import heroBackground from 'figma:asset/84e4212d518a7a34ddab82c6a8341be17cbaff0f.png';

export function Hero() {
  return (
    <motion.section
      id="essence"
      className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-[var(--color-secondary)] text-white p-8 md:p-16 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Healthcare professionals"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-secondary)]/80 to-transparent"></div>
      </div>

      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-surface)] opacity-10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-3 py-1 rounded-full bg-[rgba(255,232,209,0.1)] text-[#ff9f29] text-xs font-bold uppercase tracking-wider mb-6 border border-[#ff9f29]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Allia Health Group
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-museum font-normal leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Bold, Natural, <br />
            <span className="bg-gradient-to-br from-[#21e6c1] to-[#45f0d5] bg-clip-text text-transparent font-museum font-normal">Accessible.</span>
          </motion.h1>
          <motion.p
            className="text-lg text-[#d1d5dc] leading-relaxed mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Our visual language combines the organic warmth of nature with the sharp precision of modern digital interfaces.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-gradient-to-b from-[#21e6c1] to-[#d0f5f0] text-[#0f2537] px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all w-full sm:w-auto">
              Primary
            </button>
            <button className="bg-gradient-to-b from-[#cdef63] to-[#e8f5d6] text-[#0f2537] px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all w-full sm:w-auto">
              Secondary
            </button>
            <button className="bg-transparent border border-[#ff9f29] text-[#ff9f29] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#ff9f29]/10 transition-all w-full sm:w-auto">
              Outline
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative hidden md:block h-64 md:h-80"
          initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 3, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.02, rotate: 2, transition: { duration: 0.3 } }}
        >
          <div className="absolute bottom-6 left-6">
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}