
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced features, payment integration, and real-time analytics dashboard for seamless online shopping experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "E-commerce",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform for patient management, appointment scheduling, and medical records with secure data handling.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Healthcare",
    tech: ["React", "TypeScript", "PostgreSQL", "AWS"],
    link: "#"
  },
  {
    title: "Financial Dashboard",
    description: "Real-time financial analytics dashboard with advanced charting, portfolio tracking, and comprehensive market insights for investors.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Finance",
    tech: ["Next.js", "D3.js", "Redis", "WebSocket"],
    link: "#"
  },
  {
    title: "Learning Management System",
    description: "Interactive online learning platform with video streaming, progress tracking, and comprehensive certification system for modern education.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Education",
    tech: ["Vue.js", "Express", "MySQL", "Socket.io"],
    link: "#"
  },
  {
    title: "Restaurant Chain App",
    description: "Multi-location restaurant management system with online ordering, inventory management, and customer loyalty program features.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Food & Beverage",
    tech: ["React Native", "Firebase", "Node.js", "PayPal"],
    link: "#"
  },
  {
    title: "Real Estate Platform",
    description: "Comprehensive property listing platform with virtual tours, advanced mortgage calculator, and direct agent connectivity features.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Real Estate",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Mapbox"],
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full overflow-hidden bg-[#0a0613] py-12 sm:py-16 md:py-24 lg:py-32 text-white">
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.1) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 sm:mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs sm:text-sm text-[#9b87f5]">
            OUR SUCCESSFUL PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Featured <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto px-4 sm:px-0">
            Explore our collection of successful projects that showcase our expertise in creating 
            innovative digital solutions across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl glass-effect border border-white/10 hover:border-[#9b87f5]/50 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0613]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="mb-3">
                  <span className="inline-block px-2 sm:px-3 py-1 text-xs font-medium bg-[#9b87f5]/20 text-[#9b87f5] rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{project.title}</h3>
                <p className="text-white/70 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.5)] text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
