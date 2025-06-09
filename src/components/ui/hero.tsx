
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
        className="relative w-full overflow-hidden bg-[#0a0613] pb-10 pt-32 font-light text-white antialiased md:pb-16 md:pt-20 min-h-screen flex items-center"
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
              className="mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-4 py-2 text-sm text-[#9b87f5]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              NEXT GENERATION WEB DEVELOPMENT SOLUTIONS
            </motion.span>
            <motion.h1 
              className="mx-auto mb-8 max-w-5xl text-5xl font-light md:text-6xl lg:text-8xl leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Build Modern{" "}
              <span className="gradient-text">Digital Experiences</span> That Convert
            </motion.h1>
            <motion.p 
              className="mx-auto mb-12 max-w-3xl text-xl text-white/70 md:text-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Tidelix creates stunning, high-performance websites and applications that drive results. 
              From concept to launch, we bring your digital vision to life with cutting-edge technology and expert craftsmanship.
            </motion.p>
 
            <motion.div 
              className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <motion.button
                onClick={openPopup}
                className="neumorphic-button hover:shadow-[0_0_30px_rgba(155, 135, 245, 0.6)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-10 py-5 text-lg text-white shadow-lg transition-all duration-500 hover:border-[#9b87f5]/50 sm:w-auto group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  Contact Now
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex w-full items-center justify-center gap-3 text-lg text-white/70 transition-all duration-300 hover:text-white sm:w-auto group"
                whileHover={{ y: -2 }}
              >
                <span>View Our Portfolio</span>
                <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          >
            <div className="w-full flex h-40 md:h-64 relative overflow-hidden">
              <div
                className="absolute px-4 top-0 left-1/2 -translate-x-1/2 mx-auto -z-10 opacity-80 w-96 h-96 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(155, 135, 245, 0.15) 0%, transparent 70%)",
                }}
              />
            </div>
            <motion.div 
              className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-[0_0_80px_rgba(155,135,245,0.3)]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Modern Web Development Dashboard - Tidelix Portfolio showcasing responsive design and user interface"
                className="h-auto w-full rounded-2xl border border-white/20"
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
