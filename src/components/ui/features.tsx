
"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  Rocket, 
  Code, 
  Search, 
  Users,
  TrendingUp,
  Award,
  Clock,
  Headphones
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Ultra-fast loading websites optimized for performance and speed",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee",
    color: "from-green-400 to-blue-500"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive designs that look perfect on all devices",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "SEO optimized websites for worldwide visibility",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "Modern Technology",
    description: "Built with cutting-edge frameworks and technologies",
    color: "from-red-400 to-pink-500"
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Maintainable, scalable, and well-documented code",
    color: "from-indigo-400 to-purple-500"
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Rank higher on Google with our SEO expertise",
    color: "from-teal-400 to-green-500"
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Intuitive designs focused on user engagement",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Track performance with detailed analytics",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in web development",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality",
    color: "from-pink-400 to-purple-500"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support for all your needs",
    color: "from-emerald-400 to-teal-500"
  }
];

export default function Features() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0613] py-12 sm:py-16 md:py-24 lg:py-32 text-white">
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.1) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />
      <div
        className="absolute left-0 bottom-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.1) 0%, rgba(13, 10, 25, 0) 60%)",
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
            POWERFUL FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Why Choose <span className="gradient-text">Tidelix</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Discover the powerful features that make us Chennai's leading web development company
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative overflow-hidden glass-effect p-6 rounded-xl border border-white/10 hover:border-[#9b87f5]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#9b87f5] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
