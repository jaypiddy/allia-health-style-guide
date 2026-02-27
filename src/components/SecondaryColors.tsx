import React from 'react';
import { motion } from 'motion/react';

interface SecondaryColorCardProps {
  name: string;
  hex: string;
  usage: string;
  bgColor: string;
  textColor: string;
  height: string;
  nameSize?: string;
  hexSize?: string;
  tracking?: string;
}

function SecondaryColorCard({
  name,
  hex,
  usage,
  bgColor,
  textColor,
  height,
  nameSize = '18px',
  hexSize = '18px',
  tracking = '0'
}: SecondaryColorCardProps) {
  return (
    <div
      className={`${height} p-5 flex flex-col justify-between`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full">
        <p
          style={{
            fontFamily: 'PP_Neue_Montreal',
            fontWeight: 700,
            fontSize: nameSize,
            lineHeight: '24px',
            color: textColor,
            letterSpacing: tracking
          }}
        >
          {name}
        </p>
      </div>
      <div className="w-full">
        <div className="mb-4">
          <p
            className="uppercase mb-1"
            style={{
              fontFamily: 'PP_Neue_Montreal',
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
              fontFamily: 'PP_Neue_Montreal',
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
          className="pt-4"
          style={{
            borderTop: textColor === '#FFFFFF' || textColor === 'white'
              ? '1px solid rgba(255, 255, 255, 0.2)'
              : '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <p
            style={{
              fontFamily: 'PP_Neue_Montreal',
              fontWeight: hexSize === '24px' ? 700 : 500,
              fontSize: hexSize,
              lineHeight: '28px',
              color: textColor,
              letterSpacing: hexSize === '24px' ? '-0.6px' : '0'
            }}
          >
            {hex}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SecondaryColors() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="space-y-8 mt-16">
      {/* Secondary Color Section Header */}
      <h3
        style={{
          fontFamily: 'PP_Neue_Montreal',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '28px',
          color: 'var(--color-text-main)'
        }}
      >
        Secondary Color
      </h3>

      {/* Color Cards Grid - Mobile Horizontal Scroll / Desktop Grid */}
      <motion.div
        className="
          /* Mobile: Horizontal Scroll */
          flex overflow-x-auto gap-4 pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory
          /* Desktop: Grid */
          lg:grid lg:grid-cols-6 lg:gap-0 lg:pb-0 lg:mx-0 lg:px-0 lg:rounded-[32px] lg:overflow-hidden lg:shadow-sm
        "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Column 1: Oxygenated Mist */}
        <motion.div variants={item} className="flex-none w-[85vw] lg:w-full flex justify-center snap-center lg:snap-align-none">
          <div className="w-full lg:w-[120%]"> {/* Keep 120% only for Desktop overlapping effect if needed, but constrain on mobile */}
            <SecondaryColorCard
              name="Oxygenated Mist"
              hex="#F4F8FA"
              usage="Primary page background."
              bgColor="#F4F8FA"
              textColor="#1e2939"
              height="h-[400px] lg:h-[878px]"
            />
          </div>
        </motion.div>

        {/* Column 2: Laser Scalpel Teal */}
        <motion.div variants={item} className="flex-none w-[85vw] lg:w-full h-[400px] lg:h-[878px] flex flex-col justify-center snap-center lg:snap-align-none">
          <div className="w-full lg:w-[120%] h-full flex flex-col">
            <div className="flex-1">
              <SecondaryColorCard
                name="Laser Scalpel Teal"
                hex="#21E6C1"
                usage="Primary buttons and icons"
                bgColor="#21E6C1"
                textColor="#0F2537"
                height="h-full"
                hexSize="24px"
                tracking="-0.45px"
              />
            </div>

            <div className="flex h-[224px]">
              <div className="flex-1">
                <SecondaryColorCard
                  name="Saline Solution"
                  hex="#D0F5F0"
                  usage="Highlight sections."
                  bgColor="#D0F5F0"
                  textColor="#1e2939"
                  height="h-full"
                  nameSize="16px"
                />
              </div>

              <div className="flex-1">
                <SecondaryColorCard
                  name="Deep Scrub Navy"
                  hex="#0F2537"
                  usage="Hero and footer"
                  bgColor="#0F2537"
                  textColor="#FFFFFF"
                  height="h-full"
                  nameSize="16px"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Column 3: Vitamin C Burst */}
        <motion.div variants={item} className="flex-none w-[85vw] lg:w-full flex justify-center snap-center lg:snap-align-none">
          <div className="w-full lg:w-[80%]">
            <SecondaryColorCard
              name="Vitamin C Burst"
              hex="#FF9F29"
              usage="Secondary buttons and icons"
              bgColor="#FF9F29"
              textColor="#422016"
              height="h-[400px] lg:h-[878px]"
              tracking="-0.45px"
            />
          </div>
        </motion.div>

        {/* Column 4: Epidermal Glow */}
        <motion.div variants={item} className="flex-none w-[85vw] lg:w-full flex justify-center snap-center lg:snap-align-none">
          <div className="w-full lg:w-[80%]">
            <SecondaryColorCard
              name="Epidermal Glow"
              hex="#FFE8D1"
              usage="Highlight sections"
              bgColor="#FFE8D1"
              textColor="#1e2939"
              height="h-[400px] lg:h-[878px]"
            />
          </div>
        </motion.div>

        {/* Column 5: Bio-Lumen Lime */}
        <motion.div variants={item} className="flex-none w-[85vw] lg:w-full flex justify-center snap-center lg:snap-align-none">
          <div className="w-full lg:w-[80%]">
            <SecondaryColorCard
              name="Bio-Lumen Lime"
              hex="#CDEF63"
              usage="Secondary buttons and icons"
              bgColor="#CDEF63"
              textColor="#132a26"
              height="h-[400px] lg:h-[878px]"
              tracking="-0.45px"
            />
          </div>
        </motion.div>

        {/* Column 6: Aloe Vera Soothe */}
        <motion.div variants={item} className="flex-none w-[85vw] lg:w-full flex justify-center snap-center lg:snap-align-none">
          <div className="w-full lg:w-[80%]">
            <SecondaryColorCard
              name="Aloe Vera Soothe"
              hex="#E8F5D6"
              usage="Highlight sections"
              bgColor="#E8F5D6"
              textColor="#1e2939"
              height="h-[400px] lg:h-[878px]"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Scroll Hint */}
      <div className="lg:hidden text-center -mt-4 text-xs text-gray-400 font-medium animate-pulse">
        ← Swipe to view all colors →
      </div>
    </div>
  );
}