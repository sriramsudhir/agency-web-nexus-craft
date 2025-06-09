
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced features, payment integration, and real-time analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "E-commerce",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform for patient management, appointment scheduling, and medical records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Healthcare",
    tech: ["React", "TypeScript", "PostgreSQL", "AWS"],
    link: "#"
  },
  {
    title: "Financial Dashboard",
    description: "Real-time financial analytics dashboard with advanced charting, portfolio tracking, and market insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Finance",
    tech: ["Next.js", "D3.js", "Redis", "WebSocket"],
    link: "#"
  },
  {
    title: "Learning Management System",
    description: "Interactive online learning platform with video streaming, progress tracking, and certification system.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Education",
    tech: ["Vue.js", "Express", "MySQL", "Socket.io"],
    link: "#"
  },
  {
    title: "Restaurant Chain App",
    description: "Multi-location restaurant management system with ordering, inventory, and customer loyalty features.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Food & Beverage",
    tech: ["React Native", "Firebase", "Node.js", "PayPal"],
    link: "#"
  },
  {
    title: "Real Estate Platform",
    description: "Comprehensive property listing platform with virtual tours, mortgage calculator, and agent connectivity.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Real Estate",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Mapbox"],
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full overflow-hidden bg-slate-50 py-16 md:py-24 lg:py-32">
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.05) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs text-[#9b87f5]">
            OUR SUCCESSFUL PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Featured <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of successful projects that showcase our expertise in creating 
            innovative digital solutions across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[#9b87f5]/10 text-[#9b87f5] rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
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
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.5)]"
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
