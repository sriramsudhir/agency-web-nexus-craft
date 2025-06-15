
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import CustomerPopup from "./customer-popup";
import { isAdmin } from "@/utils/adminCheck";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user } = useUser();

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  // Check if current user is admin
  const userIsAdmin = user && isAdmin(user.primaryEmailAddress?.emailAddress);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0613]/80 backdrop-blur-lg border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                <span className="gradient-text">Tidelix</span>
              </div>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
                {["Home", "Services", "Portfolio", "About", "Contact"].map((item, index) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-white transition-colors relative text-sm lg:text-base"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-lg glass-effect text-white hover:bg-white/20 transition-colors"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
              
              <SignedOut>
                <SignInButton mode="modal">
                  <motion.button 
                    className="glass-effect px-4 lg:px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] text-sm lg:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Admin Login
                  </motion.button>
                </SignInButton>
              </SignedOut>
              
              <SignedIn>
                {userIsAdmin ? (
                  <>
                    <div className="text-white/70 text-sm">
                      Welcome, Admin
                    </div>
                    <UserButton afterSignOutUrl="/" />
                  </>
                ) : (
                  <div className="text-red-400 text-sm">
                    Unauthorized Access
                  </div>
                )}
              </SignedIn>
              
              <motion.button 
                onClick={openPopup}
                className="glass-effect px-4 lg:px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-lg glass-effect text-white hover:bg-white/20 transition-colors"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
              
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="p-2 rounded-lg glass-effect text-white hover:bg-white/20 transition-colors text-xs">
                    Admin Login
                  </button>
                </SignInButton>
              </SignedOut>
              
              <SignedIn>
                {userIsAdmin ? (
                  <UserButton afterSignOutUrl="/" />
                ) : (
                  <div className="text-red-400 text-xs">
                    Unauthorized
                  </div>
                )}
              </SignedIn>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none p-2"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="block text-white/70 hover:text-white transition-colors py-2 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button 
                  onClick={() => {
                    openPopup();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-white/70 hover:text-white transition-colors py-2 text-sm"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      <CustomerPopup isOpen={showPopup} onClose={closePopup} />
    </>
  );
}
