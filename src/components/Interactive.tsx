import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, EyeOff, ChevronDown, ArrowRight, Plus } from 'lucide-react';
import clsx from 'clsx';

export function Interactive() {
  const [showCodeButtons, setShowCodeButtons] = useState(false);
  const [showCodeBadges, setShowCodeBadges] = useState(false);
  const [showCodeForms, setShowCodeForms] = useState(false);

  const toggleCode = (section: 'buttons' | 'badges' | 'forms') => {
    if (section === 'buttons') setShowCodeButtons(!showCodeButtons);
    if (section === 'badges') setShowCodeBadges(!showCodeBadges);
    if (section === 'forms') setShowCodeForms(!showCodeForms);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="components" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] font-bold text-sm">03</span>
        <h2 className="text-3xl font-museum font-normal text-gray-900 dark:text-white">Interactive Components</h2>
        <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4"></div>
      </div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Buttons & Actions Container */}
        <div className="space-y-12">
          {/* Button Variants */}
          <motion.div variants={item}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Buttons</h3>
            
            {/* First Row - Filled Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <button className="bg-[#21e6c1] text-[#0f2537] px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all active:scale-95">
                Primary Action
              </button>
              <button className="bg-[#ff9f29] text-[#0f2537] px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all active:scale-95">
                Secondary
              </button>
              <button className="bg-gradient-to-br from-[#cdef63] to-[#e8f5d6] text-[#0f2537] px-6 py-3 rounded-full font-bold text-sm hover:brightness-105 transition-all active:scale-95">
                Secondary
              </button>
              <button className="text-[#0f2537] dark:text-white font-bold text-sm hover:underline px-2 py-3">
                Link Style
              </button>
            </div>

            {/* Second Row - Outline Buttons on Dark Background */}
            <div className="bg-[#0f2537] rounded-full p-4 inline-flex flex-wrap items-center gap-4">
              <button className="border border-[#d1d5dc] text-[#d1d5dc] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#1a3a4f] transition-all active:scale-95">
                Outline
              </button>
              <button className="border border-[#21e6c1] text-[#21e6c1] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#1a3a4f] transition-all active:scale-95">
                Outline
              </button>
              <button className="border border-[#ff9f29] text-[#ff9f29] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#1a3a4f] transition-all active:scale-95">
                Outline
              </button>
              <button className="border border-[#cdef63] text-[#cdef63] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#1a3a4f] transition-all active:scale-95">
                Outline
              </button>
            </div>

            {/* Code Snippet */}
            {showCodeButtons && (
              <div className="mt-6">
                <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl overflow-x-auto text-xs text-gray-700 dark:text-gray-300 font-mono">
                  <code>{`<button class="bg-[#21e6c1] text-[#0f2537] rounded-full...">Primary Action</button>
<button class="bg-[#ff9f29] text-[#0f2537] rounded-full...">Secondary</button>
<button class="border border-[#21e6c1] text-[#21e6c1] rounded-full...">Outline</button>`}</code>
                </pre>
              </div>
            )}
          </motion.div>

          {/* Badges & Toggles */}
          <motion.div variants={item}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Badges</h3>
            
            <div className="space-y-4">
              {/* Teal Row */}
              <div className="bg-[#0f2537] rounded-full px-6 py-4 inline-flex flex-wrap items-center gap-4">
                <span className="px-2 py-0.5 rounded-full bg-[#21e6c1] text-[#0f2537] text-[10px] leading-[16px] font-bold uppercase">New</span>
                <span className="px-2 py-0.5 rounded-full bg-[#0f2537] text-[#21e6c1] text-[10px] leading-[16px] font-bold uppercase">Featured</span>
                <span className="px-2 py-0.5 rounded-full bg-gray-100 text-[#4a5565] text-[10px] leading-[16px] font-bold uppercase">Neutral</span>
                <span className="relative px-2 py-0.5 rounded-full text-[#21e6c1] text-[10px] leading-[16px] font-bold uppercase">
                  <div aria-hidden="true" className="absolute border border-[#21e6c1] border-solid inset-0 pointer-events-none rounded-full" />
                  Outline
                </span>
              </div>

              {/* Orange Row */}
              <div className="bg-[#0f2537] rounded-full px-6 py-4 inline-flex flex-wrap items-center gap-4">
                <span className="px-2 py-0.5 rounded-full bg-[#ff9f29] text-[#0f2537] text-[10px] leading-[16px] font-bold uppercase">New</span>
                <span className="px-2 py-0.5 rounded-full bg-[#0f2537] text-[#ff9f29] text-[10px] leading-[16px] font-bold uppercase">Featured</span>
                <span className="px-2 py-0.5 rounded-full bg-gray-100 text-[#4a5565] text-[10px] leading-[16px] font-bold uppercase">Neutral</span>
                <span className="relative px-2 py-0.5 rounded-full text-[#ff9f29] text-[10px] leading-[16px] font-bold uppercase">
                  <div aria-hidden="true" className="absolute border border-[#ff9f29] border-solid inset-0 pointer-events-none rounded-full" />
                  Outline
                </span>
              </div>

              {/* Lime Row */}
              <div className="bg-[#0f2537] rounded-full px-6 py-4 inline-flex flex-wrap items-center gap-4">
                <span className="px-2 py-0.5 rounded-full bg-[#cdef63] text-[#0f2537] text-[10px] leading-[16px] font-bold uppercase">New</span>
                <span className="px-2 py-0.5 rounded-full bg-[#0f2537] text-[#cdef63] text-[10px] leading-[16px] font-bold uppercase">Featured</span>
                <span className="px-2 py-0.5 rounded-full bg-gray-100 text-[#4a5565] text-[10px] leading-[16px] font-bold uppercase">Neutral</span>
                <span className="relative px-2 py-0.5 rounded-full text-[#cdef63] text-[10px] leading-[16px] font-bold uppercase">
                  <div aria-hidden="true" className="absolute border border-[#cdef63] border-solid inset-0 pointer-events-none rounded-full" />
                  Outline
                </span>
              </div>
            </div>

             {showCodeBadges && (
              <div className="mt-6">
                <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl overflow-x-auto text-xs text-gray-700 dark:text-gray-300 font-mono">
                  <code>{`<span class="bg-[#21e6c1] text-[#0f2537]...">New</span>
<span class="bg-[#0f2537] text-[#21e6c1]...">Featured</span>
<span class="border border-[#21e6c1] text-[#21e6c1]...">Outline</span>`}</code>
                </pre>
              </div>
            )}
          </motion.div>
        </div>

        {/* Forms & Inputs */}
        <motion.div variants={item}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Inputs</h3>
          
          <div className="space-y-6">
            {/* Standard Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input type="email" placeholder="name@example.com" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all" />
            </div>

             {/* Underline Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Username</label>
              <input type="text" placeholder="@username" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all" />
            </div>

            {/* Select */}
            <div>
               <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Category</label>
               <div className="relative">
                <select className="w-full appearance-none bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all">
                  <option>Design System</option>
                  <option>Development</option>
                  <option>Marketing</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
               </div>
            </div>

            {/* Radio Group */}
             <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:border-[var(--color-secondary)] transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)] opacity-0 group-hover:opacity-50"></div>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Option A</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="w-5 h-5 rounded-full border-2 border-[var(--color-secondary)] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)]"></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Selected</span>
              </label>
            </div>
          </div>
           {showCodeForms && (
              <div className="mt-6">
                <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl overflow-x-auto text-xs text-gray-700 dark:text-gray-300 font-mono">
                  <code>{`<input class="bg-gray-50 border rounded-lg focus:ring-brand-sulu..." />
<input class="bg-transparent border-b-2 focus:border-brand-timber..." />`}</code>
                </pre>
              </div>
            )}
        </motion.div>

      </motion.div>

       {/* Cards Section */}
      <div className="mt-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Card Layouts</h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Card Style 1 - Misty Forests (Image Overlay) */}
          <motion.div variants={item} className="group relative rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 h-[362px]">
             <img src="https://images.unsplash.com/photo-1742522450616-a2cf0cba1274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMG91dGRvb3JzfGVufDF8fHx8MTc2NDg4Mzc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Happy people outdoors" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-6 text-white w-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#21e6c1] text-[#0f2537] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">New</span>
                <span className="text-xs font-medium text-white/80">5 mins ago</span>
              </div>
              <h4 className="font-museum font-normal text-xl mb-2">Misty Forests</h4>
              <p className="text-sm text-[#d1d5dc]">Discover the secrets hidden within the ancient trees.</p>
             </div>
          </motion.div>

          {/* Card Style 2 - Highland Peaks */}
          <motion.div variants={item} className="group relative rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 bg-white dark:bg-gray-900 border border-[#f4f8fa] dark:border-gray-800 h-[362px]">
            <div className="h-40 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1758599670001-1253d37908ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3lmdWwlMjBkaXZlcnNlJTIwcGVvcGxlfGVufDF8fHx8MTc2NDg4MzYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Joyful diverse people" />
            </div>
            <div className="p-4">
              <span className="inline-block bg-[#0f2537] text-[#ff9f29] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-3">Nature</span>
              <h4 className="font-museum font-normal text-xl mb-3 text-[#101828] dark:text-white">Highland Peaks</h4>
              <p className="text-sm text-[#6a7282] dark:text-gray-400 mb-4">Explore the rugged beauty of the highlands with our guided tours.</p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-[#0f2537] dark:text-white hover:underline">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>

          {/* Card Style 3 - Standard Plan (Dark) */}
          <motion.div variants={item} className="bg-[#0f2537] rounded-[2rem] p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col h-[362px] justify-between">
            <div>
              <span className="inline-block border-2 border-[#cdef63] text-[#cdef63] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-2">Info</span>
              <h4 className="font-museum font-normal text-xl mb-2 text-white">Standard Plan</h4>
              <p className="text-sm text-white">Get access to all basic features including health tracking and weekly reports.</p>
            </div>
            <button className="w-full bg-gradient-to-b from-[#cdef63] to-[#e8f5d6] text-[#0f2537] px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-105 transition-all shadow-sm hover:shadow-md active:scale-95">
              Get Started
            </button>
          </motion.div>

          {/* Card Style 4 - Standard Plan (Light) */}
          <motion.div variants={item} className="bg-white dark:bg-gray-900 rounded-[2rem] p-6 border border-gray-100 dark:border-gray-800 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col h-[362px] justify-between">
            <div>
              <span className="inline-block border-2 border-[#ff9f29] text-[#ff9f29] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-2">Info</span>
              <h4 className="font-museum font-normal text-xl mb-2 text-[#0f2537] dark:text-white">Standard Plan</h4>
              <p className="text-sm text-[#6a7282] dark:text-gray-400">Get access to all basic features including health tracking and weekly reports.</p>
            </div>
            <button className="w-full bg-[#ff9f29] text-[#0f2537] px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-sm hover:shadow-md active:scale-95">
              Get Started
            </button>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}