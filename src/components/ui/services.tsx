
"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript for exceptional performance.",
    icon: "🌐",
    features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks"]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and customer analytics to boost your sales.",
    icon: "🛒",
    features: ["Payment Gateway", "Inventory System", "Analytics Dashboard", "Mobile Commerce"]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
    icon: "📱",
    features: ["iOS & Android", "Cross-platform", "App Store Ready", "Push Notifications"]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers and enhance user satisfaction with modern aesthetics.",
    icon: "🎨",
    features: ["User Research", "Wireframing", "Prototype Testing", "Brand Identity"]
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive sustainable business growth.",
    icon: "📈",
    features: ["SEO Optimization", "Social Media", "Content Strategy", "Performance Analytics"]
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing technical support, updates, and maintenance to keep your digital assets running smoothly 24/7.",
    icon: "🔧",
    features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Security Patches"]
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-[#0a0613] py-16 md:py-24 lg:py-32 text-white">
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.08) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />
      <div
        className="absolute left-0 bottom-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.08) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs text-[#9b87f5]">
            COMPREHENSIVE DIGITAL SOLUTIONS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl p-8 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)] transition-all duration-300 border border-white/10 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-white/60">
                    <span className="w-2 h-2 bg-[#9b87f5] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
