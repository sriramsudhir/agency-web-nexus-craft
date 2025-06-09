
"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Palette, ShoppingCart, TrendingUp, Headphones } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js for optimal performance.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure & Scalable"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
    features: ["Native Performance", "Cross-Platform", "Offline Support", "Push Notifications"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the forefront, ensuring engagement and conversion.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and analytics to boost your sales.",
    features: ["Payment Gateway", "Inventory Management", "Analytics", "Mobile Commerce"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, social media, and content marketing to grow your business.",
    features: ["SEO Optimization", "Social Media", "Content Marketing", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your digital assets running smoothly with regular updates and monitoring.",
    features: ["24/7 Monitoring", "Regular Updates", "Security Patches", "Performance Optimization"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-[#0a0613] py-12 sm:py-16 md:py-24 lg:py-32 text-white">
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
            OUR EXPERT SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Digital <span className="gradient-text">Solutions</span> for Growth
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto px-4 sm:px-0">
            Transform your business with our comprehensive digital services designed to drive success in the modern marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl glass-effect border border-white/10 hover:border-[#9b87f5]/50 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0613] via-transparent to-transparent" />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <div className="glass-effect p-3 sm:p-4 rounded-xl border border-white/20">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#9b87f5]" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">{service.title}</h3>
                <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-white/60">
                      <div className="w-1.5 h-1.5 bg-[#9b87f5] rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="w-full glass-effect px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-white/20 text-white hover:border-[#9b87f5]/50 hover:bg-[#9b87f5]/10 transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
