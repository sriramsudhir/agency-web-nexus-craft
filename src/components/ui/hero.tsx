
"use client";
 
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
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
        className="relative w-full overflow-hidden bg-[#0a0613] pb-10 pt-20 sm:pt-24 md:pt-32 font-light text-white antialiased min-h-screen flex items-center"
        style={{
          background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
        }}
      >
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
            <motion.span 
              className="mb-4 sm:mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#9b87f5]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              NEXT GENERATION WEB DEVELOPMENT SOLUTIONS
            </motion.span>
            <motion.h1 
              className="mx-auto mb-6 sm:mb-8 max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Build Modern{" "}
              <span className="gradient-text">Digital Experiences</span> That Convert
            </motion.h1>
            <motion.p 
              className="mx-auto mb-8 sm:mb-12 max-w-3xl text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Tidelix creates stunning, high-performance websites and applications that drive results. 
              From concept to launch, we bring your digital vision to life with cutting-edge technology and expert craftsmanship.
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
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Modern Web Development Dashboard - Tidelix Portfolio showcasing responsive design and user interface"
                className="h-auto w-full rounded-xl sm:rounded-2xl border border-white/20"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CustomerPopup isOpen={showPopup} onClose={closePopup} />
    </>
  );
}
