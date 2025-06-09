
"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
    icon: "🌐",
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and customer analytics.",
    icon: "🛒",
    features: ["Payment Gateway", "Inventory System", "Analytics Dashboard"]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    icon: "📱",
    features: ["iOS & Android", "Cross-platform", "App Store Ready"]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers and enhance user satisfaction.",
    icon: "🎨",
    features: ["User Research", "Wireframing", "Prototype Testing"]
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
    icon: "📈",
    features: ["SEO Optimization", "Social Media", "Content Strategy"]
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing technical support, updates, and maintenance to keep your digital assets running smoothly.",
    icon: "🔧",
    features: ["24/7 Support", "Regular Updates", "Performance Monitoring"]
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
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
