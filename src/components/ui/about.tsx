
"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "250+", label: "Projects Completed" },
  { number: "100+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
];

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-slate-50 py-16 md:py-24 lg:py-32">
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
            ABOUT TIDELIX AGENCY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            About <span className="gradient-text">Tidelix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and strategists dedicated to creating 
            exceptional digital experiences that drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-light mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              At Tidelix, we believe that great design and powerful technology should work 
              together to create digital experiences that not only look amazing but also deliver 
              real business results for our clients.
            </p>
            <p className="text-muted-foreground mb-8">
              We partner with businesses of all sizes, from startups to enterprises, helping them 
              establish a strong online presence and achieve their digital goals through innovative 
              web solutions and strategic digital marketing.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Modern web development team collaboration at Tidelix"
              className="rounded-xl shadow-lg w-full border border-white/20"
            />
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-light mb-8">Why Choose Tidelix?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
              <p className="text-muted-foreground">Quick turnaround times without compromising on quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Results Focused</h4>
              <p className="text-muted-foreground">Every project is designed to achieve your business goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Ongoing Support</h4>
              <p className="text-muted-foreground">Continuous support and maintenance for your success</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
