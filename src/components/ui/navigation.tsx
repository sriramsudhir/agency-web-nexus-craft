
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0613]/80 backdrop-blur-lg border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-white">
              <span className="gradient-text">WebCraft</span> Agency
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="glass-effect px-6 py-2 rounded-full text-white hover:bg-white/20 transition-colors">
              Get Quote
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10">
              <a href="#home" className="block text-white/70 hover:text-white transition-colors py-2">Home</a>
              <a href="#services" className="block text-white/70 hover:text-white transition-colors py-2">Services</a>
              <a href="#portfolio" className="block text-white/70 hover:text-white transition-colors py-2">Portfolio</a>
              <a href="#about" className="block text-white/70 hover:text-white transition-colors py-2">About</a>
              <a href="#contact" className="block text-white/70 hover:text-white transition-colors py-2">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
