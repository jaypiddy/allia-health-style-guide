import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import clsx from 'clsx';
import { downloadFile } from '../utils/download';
import svgPaths from '../generated/svg-up90gm7utk';
import blackSymbolPaths from '../generated/svg-9yzw6ldkbn';
import colorSymbolPaths from '../generated/svg-gxke2chzoc';
import whiteSymbolPaths from '../generated/svg-py2m1qqxax';
import blackMonogramPaths from '../generated/svg-asud82duhu';
import colorMonogramPaths from '../generated/svg-m81oak7oo5';
import whiteMonogramPaths from '../generated/svg-nofwusn59m';
import colorFullLogoPaths from '../generated/svg-40mw2103vt';
import blackFullLogoPaths from '../generated/svg-qidn0wgfgz';
import whiteFullLogoPaths from '../generated/svg-ojqowbrxrk';

// Unity Symbol Black - Updated with new SVG
function UnitySymbolBlack() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 117.783 117.943">
      <g>
        <path d={blackSymbolPaths.pa95cd00} fill="black" />
        <path d={blackSymbolPaths.p375e1500} fill="black" />
        <path d={blackSymbolPaths.p33e85080} fill="black" />
        <path d={blackSymbolPaths.p332b32f0} fill="black" />
      </g>
    </svg>
  );
}

// Unity Symbol Color - Updated with new gradient
function UnitySymbolColor() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 117.783 117.943">
      <g>
        <path d={colorSymbolPaths.p1bdda100} fill="url(#paint0_radial_unity_color)" />
        <path d={colorSymbolPaths.p147c5440} fill="url(#paint1_radial_unity_color)" />
        <path d={colorSymbolPaths.p3a6e8200} fill="url(#paint2_radial_unity_color)" />
        <path d={colorSymbolPaths.p3efa6170} fill="url(#paint3_radial_unity_color)" />
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-58 58 -141.613 -181.795 132 -14.2187)" gradientUnits="userSpaceOnUse" id="paint0_radial_unity_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-58 -58 -141.613 181.795 132 132.162)" gradientUnits="userSpaceOnUse" id="paint1_radial_unity_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(58 58 141.613 -181.795 -14.2166 -14.2187)" gradientUnits="userSpaceOnUse" id="paint2_radial_unity_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(58 -58 141.613 181.795 -14.2166 132.162)" gradientUnits="userSpaceOnUse" id="paint3_radial_unity_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// Unity Symbol White - Updated with new SVG
function UnitySymbolWhite() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 117.783 117.943">
      <g>
        <path d={whiteSymbolPaths.p1c0e00} fill="white" />
        <path d={whiteSymbolPaths.p375e1500} fill="white" />
        <path d={whiteSymbolPaths.p33e85080} fill="white" />
        <path d={whiteSymbolPaths.p332b32f0} fill="white" />
      </g>
    </svg>
  );
}

// Symbol and AHG Monogram Black - Updated with new frame structure
function MonogramBlack() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 205.68 67.4">
      <g>
        {/* AHG Letters - Union path */}
        <path d={blackMonogramPaths.p2052c200} fill="black" transform="translate(75.66, 9.53)" />
        {/* Symbol - 4 petals */}
        <path d={blackMonogramPaths.p12373100} fill="black" />
        <path d={blackMonogramPaths.pe3f8700} fill="black" />
        <path d={blackMonogramPaths.p2914f040} fill="black" />
        <path d={blackMonogramPaths.p36c0fa10} fill="black" />
      </g>
    </svg>
  );
}

// Symbol and AHG Monogram White - Updated with new frame structure
function MonogramWhite() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 205.68 67.4">
      <g>
        {/* AHG Letters - Union path */}
        <path d={whiteMonogramPaths.p2052c200} fill="white" transform="translate(75.66, 9.53)" />
        {/* Symbol - 4 petals */}
        <path d={whiteMonogramPaths.p12373100} fill="white" />
        <path d={whiteMonogramPaths.pe3f8700} fill="white" />
        <path d={whiteMonogramPaths.p2914f040} fill="white" />
        <path d={whiteMonogramPaths.p36c0fa10} fill="white" />
      </g>
    </svg>
  );
}

// Symbol and AHG Monogram Color - Updated with new frame structure and gradient
function MonogramColor() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 205.68 67.094">
      <g>
        {/* AHG Letters - Union path */}
        <path d={colorMonogramPaths.p2052c200} fill="#0F2537" transform="translate(75.66, 9.53)" />
        {/* Symbol with gradient - 4 petals */}
        <path d={colorMonogramPaths.p1ba1e980} fill="url(#paint0_radial_mono_color)" />
        <path d={colorMonogramPaths.p106cb900} fill="url(#paint1_radial_mono_color)" />
        <path d={colorMonogramPaths.p3ce96000} fill="url(#paint2_radial_mono_color)" />
        <path d={colorMonogramPaths.p3aa60c00} fill="url(#paint3_radial_mono_color)" />
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-32.9937 32.9937 -80.5575 -103.415 75.0892 -8.08841)" gradientUnits="userSpaceOnUse" id="paint0_radial_mono_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-32.9937 -32.9937 -80.5575 103.415 75.0892 75.1814)" gradientUnits="userSpaceOnUse" id="paint1_radial_mono_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(32.9937 32.9937 80.5575 -103.415 -8.08721 -8.08841)" gradientUnits="userSpaceOnUse" id="paint2_radial_mono_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(32.9937 -32.9937 80.5575 103.415 -8.08721 75.1814)" gradientUnits="userSpaceOnUse" id="paint3_radial_mono_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// Full Logo - COLOUR
function FullLogoColor() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 475.06 118.164">
      <g>
        {/* Unity Symbol with gradient - 4 petals */}
        <path d={colorFullLogoPaths.p31aac200} fill="url(#paint0_radial_full_color)" />
        <path d={colorFullLogoPaths.p176ffa00} fill="url(#paint1_radial_full_color)" />
        <path d={colorFullLogoPaths.p3f951880} fill="url(#paint2_radial_full_color)" />
        <path d={colorFullLogoPaths.p38fbb100} fill="url(#paint3_radial_full_color)" />
        {/* ALLIA HEALTH text - positioned at (131.05, 20.41) */}
        <g transform="translate(131.05, 20.41)">
          <path d={colorFullLogoPaths.p23116d40} fill="#0F2537" />
        </g>
        {/* GROUP text - positioned at (131.05, 83.14) */}
        <g transform="translate(131.05, 83.14)">
          <path d={colorFullLogoPaths.p1a6ad600} fill="#0F2537" />
        </g>
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-57.6159 58.1083 -140.675 -182.134 131.126 -14.2453)" gradientUnits="userSpaceOnUse" id="paint0_radial_full_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(-57.6159 -58.1083 -140.675 182.134 131.126 132.409)" gradientUnits="userSpaceOnUse" id="paint1_radial_full_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(57.6159 58.1083 140.675 -182.134 -14.1224 -14.2453)" gradientUnits="userSpaceOnUse" id="paint2_radial_full_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(57.6159 -58.1083 140.675 182.134 -14.1224 132.409)" gradientUnits="userSpaceOnUse" id="paint3_radial_full_color" r="1">
          <stop offset="0.65" stopColor="#21E6C1" />
          <stop offset="1" stopColor="#CDEF63" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// Full Logo - Black
function FullLogoBlack() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 475.06 118.164">
      <g>
        {/* Unity Symbol - 4 petals in black */}
        <path d={blackFullLogoPaths.p1c0e00} fill="black" />
        <path d={blackFullLogoPaths.p375e1500} fill="black" />
        <path d={blackFullLogoPaths.p33e85080} fill="black" />
        <path d={blackFullLogoPaths.p332b32f0} fill="black" />
        {/* ALLIA HEALTH text - positioned at (131.05, 20.41) */}
        <g transform="translate(131.05, 20.41)">
          <path d={blackFullLogoPaths.p23116d40} fill="black" />
        </g>
        {/* GROUP text - positioned at (131.05, 83.14) */}
        <g transform="translate(131.05, 83.14)">
          <path d={blackFullLogoPaths.p36edd200} fill="black" />
        </g>
      </g>
    </svg>
  );
}

// Full Logo - White
function FullLogoWhite() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 475.06 118.164">
      <g>
        {/* Unity Symbol - 4 petals in white */}
        <path d={whiteFullLogoPaths.p1c0e00} fill="white" />
        <path d={whiteFullLogoPaths.p375e1500} fill="white" />
        <path d={whiteFullLogoPaths.p33e85080} fill="white" />
        <path d={whiteFullLogoPaths.p332b32f0} fill="white" />
        {/* ALLIA HEALTH text - positioned at (131.05, 20.41) */}
        <g transform="translate(131.05, 20.41)">
          <path d={whiteFullLogoPaths.p23116d40} fill="white" />
        </g>
        {/* GROUP text - positioned at (131.05, 83.14) */}
        <g transform="translate(131.05, 83.14)">
          <path d={whiteFullLogoPaths.p36edd200} fill="white" />
        </g>
      </g>
    </svg>
  );
}

interface LogoCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  bgColor?: string;
  variant?: 'symbol' | 'monogram' | 'full';
  assetName: string;
}

function LogoCard({ title, description, children, bgColor = 'white', variant = 'symbol', assetName }: LogoCardProps) {
  const handleDownload = (format: 'svg' | 'png' | 'jpg') => {
    const fileName = `${assetName}.${format}`;
    const url = `/assets/logos/${fileName}`;
    downloadFile(url, fileName);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
      }}
      className="bg-[var(--color-component-bg)] rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100"
    >
      {/* Logo Display Area */}
      <div
        className={clsx(
          "h-48 flex items-center justify-center p-8",
          bgColor === 'dark' && 'bg-[#0f2537]',
          bgColor === 'gray' && 'bg-gray-100',
          bgColor === 'white' && 'bg-white'
        )}
      >
        <div className={clsx(
          "flex items-center justify-center",
          variant === 'symbol' && "w-24 h-24",
          variant === 'monogram' && "w-48 h-16",
          variant === 'full' && "w-full max-w-md h-20"
        )}>
          {children}
        </div>
      </div>

      {/* Info & Actions */}
      <div className="p-6 space-y-4">
        <div>
          <h4 className="font-['PP_Museum'] font-normal text-lg mb-1 text-[var(--color-text-main)]">
            {title}
          </h4>
          <p className="font-['PP_Neue_Montreal'] text-sm text-[#6a7282]">{description}</p>
        </div>

        {/* Download Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => handleDownload('svg')}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient-to)] text-[var(--color-secondary)] px-4 py-2.5 rounded-full font-bold text-xs hover:brightness-110 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            SVG
          </button>
          <button
            onClick={() => handleDownload('png')}
            className="flex-1 flex items-center justify-center gap-2 bg-[#FF9F29] text-white px-4 py-2.5 rounded-full font-bold text-xs hover:brightness-110 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            PNG
          </button>
          {/* JPG doesn't support transparency, so 'white on white' is invisible. We hide it for white logos. */}
          {!assetName.includes('white') && !assetName.includes('wht') && (
            <button
              onClick={() => handleDownload('jpg')}
              className="flex-1 flex items-center justify-center gap-2 bg-[#CDEF63] text-[#0f2537] px-4 py-2.5 rounded-full font-bold text-xs hover:brightness-105 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              JPG
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function LogoAssets() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="logos" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient-to)] text-[var(--color-secondary)] font-bold text-sm">04</span>
        <h2 className="text-3xl font-['PP_Museum'] font-normal text-[var(--color-text-main)]">Logo Assets</h2>
        <div className="h-px bg-gray-200 flex-1 ml-4"></div>
      </div>

      <p className="font-['PP_Neue_Montreal'] text-[#6a7282] mb-12 max-w-3xl">
        Download the Allia Health Group logos in various formats and color variations.
        All logos are available in SVG, PNG, and JPG formats for different use cases.
      </p>

      {/* Unity Symbol Section */}
      <div className="mb-16">
        <h3 className="text-sm font-normal uppercase tracking-wider text-gray-400 mb-6">Unity Symbol</h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <LogoCard
            title="Unity Symbol - Color"
            description="Version with teal to lime gradient"
            bgColor="white"
            variant="symbol"
            assetName="unity-symbol-color"
          >
            <UnitySymbolColor />
          </LogoCard>

          <LogoCard
            title="Unity Symbol - Black"
            description="Solid black version for light backgrounds"
            bgColor="white"
            variant="symbol"
            assetName="unity-symbol-black"
          >
            <UnitySymbolBlack />
          </LogoCard>

          <LogoCard
            title="Unity Symbol - White"
            description="White version for dark backgrounds"
            bgColor="dark"
            variant="symbol"
            assetName="unity-symbol-white"
          >
            <UnitySymbolWhite />
          </LogoCard>
        </motion.div>
      </div>

      {/* Monogram Section */}
      <div className="mb-16">
        <h3 className="text-sm font-normal uppercase tracking-wider text-gray-400 mb-6">Symbol & AHG Monogram</h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <LogoCard
            title="Monogram - Color"
            description="Symbol with gradient and AHG letters"
            bgColor="white"
            variant="monogram"
            assetName="monogram-color"
          >
            <MonogramColor />
          </LogoCard>

          <LogoCard
            title="Monogram - Black"
            description="Symbol with AHG letters in black"
            bgColor="white"
            variant="monogram"
            assetName="monogram-black"
          >
            <MonogramBlack />
          </LogoCard>

          <LogoCard
            title="Monogram - White"
            description="Symbol with AHG letters in white"
            bgColor="dark"
            variant="monogram"
            assetName="monogram-white"
          >
            <MonogramWhite />
          </LogoCard>
        </motion.div>
      </div>

      {/* Full Logo Section */}
      <div>
        <h3 className="text-sm font-normal uppercase tracking-wider text-gray-400 mb-6">Full Allia Health Logo</h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <LogoCard
            title="Full Logo - Color"
            description="Version with teal to lime gradient"
            bgColor="white"
            variant="full"
            assetName="full-logo-color"
          >
            <FullLogoColor />
          </LogoCard>

          <LogoCard
            title="Full Logo - Black"
            description="Complete logo in solid black"
            bgColor="white"
            variant="full"
            assetName="full-logo-black"
          >
            <FullLogoBlack />
          </LogoCard>

          <LogoCard
            title="Full Logo - White"
            description="Complete logo in white for dark backgrounds"
            bgColor="dark"
            variant="full"
            assetName="full-logo-white"
          >
            <FullLogoWhite />
          </LogoCard>

          <LogoCard
            title="Full Logo - Monogram White"
            description="Color symbol with white monogram text"
            bgColor="dark"
            variant="full"
            assetName="full-logo-color-wht-monogram"
          >
            <img src="/assets/logos/full-logo-color-wht-monogram.svg" className="w-full h-full object-contain" alt="Full Logo Color White Monogram" />
          </LogoCard>

          <LogoCard
            title="Full Logo - Wordmark White"
            description="Color symbol with white wordmark text"
            bgColor="dark"
            variant="full"
            assetName="full-logo-color-wht-wordmark"
          >
            <img src="/assets/logos/full-logo-color-wht-wordmark.svg" className="w-full h-full object-contain" alt="Full Logo Color White Wordmark" />
          </LogoCard>
        </motion.div>
      </div>

      {/* Usage Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 rounded-[2rem] p-8 border border-gray-100"
      >
        <h3 className="font-['PP_Museum'] font-normal text-xl mb-4 text-[var(--color-text-main)]">
          Usage Guidelines
        </h3>
        <div className="font-['PP_Neue_Montreal'] grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#6a7282]">
          <div>
            <h4 className="font-bold text-[var(--color-text-main)] mb-2">When to use each version:</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Color:</strong> Primary brand materials, digital applications</li>
              <li><strong>Black:</strong> Print materials, light backgrounds</li>
              <li><strong>White:</strong> Dark backgrounds, photography overlays</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[var(--color-text-main)] mb-2">File format recommendations:</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>SVG:</strong> Web, scalable applications (recommended)</li>
              <li><strong>PNG:</strong> Digital with transparency needs</li>
              <li><strong>JPG:</strong> Email signatures, presentations</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}