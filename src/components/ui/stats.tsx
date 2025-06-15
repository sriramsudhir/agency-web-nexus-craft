
"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Globe, Award } from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses transformed"
  },
  {
    icon: Globe,
    number: 1000,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful deliveries"
  },
  {
    icon: TrendingUp,
    number: 95,
    suffix: "%",
    label: "Client Satisfaction",
    description: "5-star reviews"
  },
  {
    icon: Award,
    number: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Industry expertise"
  }
];

function CountUpAnimation({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(endTime - now, 0);
      const rate = remaining / duration;
      const currentCount = Math.round(end - (end * rate));

      setCount(currentCount);

      if (remaining === 0) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text"
    >
      {count}{suffix}
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0613] py-12 sm:py-16 md:py-24 text-white">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 h-full w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 50%, rgba(155, 135, 245, 0.1) 0%, rgba(13, 10, 25, 0) 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 sm:mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs sm:text-sm text-[#9b87f5]">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Our success is measured by the growth and satisfaction of our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="glass-effect p-8 rounded-xl border border-white/10 hover:border-[#9b87f5]/50 transition-all duration-300 group-hover:scale-105"
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] mb-6 group-hover:shadow-[0_0_30px_rgba(155,135,245,0.5)] transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <CountUpAnimation 
                  end={stat.number} 
                  suffix={stat.suffix}
                />
                
                <h3 className="text-xl font-semibold text-white mt-4 mb-2 group-hover:text-[#9b87f5] transition-colors">
                  {stat.label}
                </h3>
                <p className="text-white/60 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect p-8 rounded-xl border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light mb-4">
              Ready to be our <span className="gradient-text">next success story?</span>
            </h3>
            <p className="text-white/60 mb-6">
              Join hundreds of businesses that have transformed their digital presence with Tidelix
            </p>
            <motion.button
              className="neumorphic-button px-8 py-4 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(155,135,245,0.6)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
