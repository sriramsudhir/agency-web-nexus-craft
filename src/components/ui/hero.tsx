
"use client";
 
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import CustomerPopup from "./customer-popup";
 
export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <section
        id="home"
        className="relative w-full overflow-hidden bg-[#0a0613] pb-10 pt-20 sm:pt-24 md:pt-32 font-light text-white antialiased min-h-screen flex items-center scroll-smooth"
        style={{
          background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div
          className="absolute right-0 top-0 h-1/2 w-1/2"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
          }}
        />
        <div
          className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
          }}
        />
 
        <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#9b87f5]/30 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#9b87f5]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              #1 WEB DEVELOPMENT COMPANY IN CHENNAI, TAMIL NADU
            </motion.div>
            
            <motion.h1 
              className="mx-auto mb-6 sm:mb-8 max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Build <span className="relative">
                <span className="gradient-text">Extraordinary</span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>{" "}
              Digital Experiences That Convert
            </motion.h1>
            
            <motion.p 
              className="mx-auto mb-8 sm:mb-12 max-w-3xl text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Tidelix - Chennai's premier web development and digital marketing agency. Creating stunning, high-performance websites and applications that drive business growth across Tamil Nadu and India.
            </motion.p>
 
            <motion.div 
              className="mb-12 sm:mb-16 flex flex-col items-center justify-center gap-4 sm:gap-6 sm:flex-row px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <motion.button
                onClick={openPopup}
                className="neumorphic-button hover:shadow-[0_0_30px_rgba(155, 135, 245, 0.6)] relative w-full sm:w-auto overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg text-white shadow-lg transition-all duration-500 hover:border-[#9b87f5]/50 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3 justify-center">
                  Contact Now
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex w-full sm:w-auto items-center justify-center gap-3 text-base sm:text-lg text-white/70 transition-all duration-300 hover:text-white group"
                whileHover={{ y: -2 }}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                <span>View Our Portfolio</span>
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-y-1" />
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative px-4 sm:px-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          >
            <div className="w-full flex h-32 sm:h-40 md:h-64 relative overflow-hidden">
              <div
                className="absolute px-4 top-0 left-1/2 -translate-x-1/2 mx-auto -z-10 opacity-80 w-64 h-64 sm:w-96 sm:h-96 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(155, 135, 245, 0.15) 0%, transparent 70%)",
                }}
              />
            </div>
            
            <motion.div 
              className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_0_80px_rgba(155,135,245,0.3)]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                  alt="Modern Web Development Team Working on Innovative Digital Solutions - Tidelix Chennai"
                  className="h-auto w-full rounded-xl sm:rounded-2xl border border-white/20 transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <motion.div
                    className="flex items-center gap-2 text-sm opacity-80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Live Development Environment
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CustomerPopup isOpen={showPopup} onClose={closePopup} />
    </>
  );
}
