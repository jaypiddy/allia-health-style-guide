import React from 'react';
import { motion } from 'motion/react';

interface ColorCardProps {
  name: string;
  hex: string;
  usage: string;
  bgColor: string;
  textColor: string;
  tracking?: string;
  onCopyAction?: (hex: string, name: string) => void;
}

function PrimaryColorHoverCard({
  name,
  hex,
  usage,
  bgColor,
  textColor,
  tracking = '0',
  onCopyAction
}: ColorCardProps) {
  const handleCopy = () => {
    if (onCopyAction) {
      onCopyAction(hex, name);
    } else {
      navigator.clipboard.writeText(hex);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className="group h-[500px] w-full p-5 flex flex-col justify-between cursor-pointer transition-none lg:hover:w-[125%] origin-left lg:hover:z-10 focus:z-10 duration-500 ease-out flex-shrink-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full">
        <p
          className="group-hover:opacity-80 transition-opacity"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '24px',
            color: textColor,
            letterSpacing: tracking
          }}
        >
          {name}
        </p>
      </div>
      <div className="w-full">
        <div className="mb-4 group-hover:-translate-y-1 transition-transform duration-300">
          <p
            className="uppercase mb-1"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '16px',
              color: textColor,
              opacity: 0.6
            }}
          >
            USAGE
          </p>
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '17.5px',
              color: textColor
            }}
          >
            {usage}
          </p>
        </div>
        <div
          className="pt-4 group-hover:bg-black/5"
          style={{
            borderTop: textColor === '#FFFFFF' || textColor === 'white'
              ? '1px solid rgba(255, 255, 255, 0.2)'
              : '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '28px',
              color: textColor,
            }}
          >
            {hex}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Colors({ onCopy }: { onCopy?: (text: string) => void, currentTheme?: string }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const internalCopy = (hex: string, name: string) => {
    if (onCopy) {
      onCopy(`${name} (${hex})`);
    } else {
      navigator.clipboard.writeText(hex);
    }
  };

  return (
    <section id="colors" className="scroll-mt-24">
      {/* Primary Color Header */}
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[20px] mb-6">
        <p className="font-['Inter'] font-bold text-[#99a1af] tracking-[0.7px] uppercase text-[14px]">
          Primary Colors
        </p>
        <p className="font-['Inter'] font-medium text-[#0f2537] text-[14px]">
          This is the main colour that make up the majority of the colours used in the design system.
        </p>
      </div>

      {/* Color Cards Layout */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full h-full flex overflow-x-auto gap-4 lg:grid lg:grid-cols-4 lg:gap-0 lg:rounded-[32px] lg:overflow-hidden lg:shadow-md pb-8 px-4 -mx-4 lg:pb-0 lg:mx-0 lg:px-0 scrollbar-hide snap-x"
      >
        <motion.div variants={item} className="flex-none w-[85vw] lg:w-full snap-center h-full">
          <PrimaryColorHoverCard
            name="Oxygenated Mist"
            hex="#F4F8FA"
            usage="Primary page background."
            bgColor="#F4F8FA"
            textColor="#1E2939"
            onCopyAction={internalCopy}
          />
        </motion.div>

        <motion.div variants={item} className="flex-none w-[85vw] lg:w-full snap-center h-full">
          <PrimaryColorHoverCard
            name="Laser Scalpel Teal"
            hex="#21E6C1"
            usage="Primary buttons and icons"
            bgColor="#21E6C1"
            textColor="#0F2537"
            tracking="-0.45px"
            onCopyAction={internalCopy}
          />
        </motion.div>

        <motion.div variants={item} className="flex-none w-[85vw] lg:w-full snap-center h-full">
          <PrimaryColorHoverCard
            name="Saline Solution"
            hex="#D0F5F0"
            usage="Secondary background specific sections."
            bgColor="#D0F5F0"
            textColor="#1E2939"
            onCopyAction={internalCopy}
          />
        </motion.div>

        <motion.div variants={item} className="flex-none w-[85vw] lg:w-full snap-center h-full">
          <PrimaryColorHoverCard
            name="Deep Scrub Navy"
            hex="#0F2537"
            usage="Hero section and footer"
            bgColor="#0F2537"
            textColor="#FFFFFF"
            onCopyAction={internalCopy}
          />
        </motion.div>

      </motion.div>
      <div className="md:hidden text-center mt-2 text-xs text-gray-400 font-medium animate-pulse">
        ← Swipe to view full palette →
      </div>
    </section>
  );
}