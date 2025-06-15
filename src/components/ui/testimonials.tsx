
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CEO, TechStart Solutions",
    company: "Chennai",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    content: "Tidelix transformed our online presence completely. Their team delivered a stunning website that increased our leads by 300%. Exceptional work!",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Marketing Director",
    company: "Digital Innovations",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    content: "Outstanding service! The team understood our vision perfectly and delivered beyond expectations. Our website now ranks #1 on Google.",
    rating: 5,
    project: "Corporate Website"
  },
  {
    id: 3,
    name: "Arjun Patel",
    position: "Founder",
    company: "StartupHub India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    content: "Professional, creative, and reliable. Tidelix helped us build a world-class platform that our users love. Highly recommended!",
    rating: 5,
    project: "Mobile App Development"
  },
  {
    id: 4,
    name: "Meera Nair",
    position: "Business Owner",
    company: "Boutique Fashion",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    content: "Amazing experience working with Tidelix! They created a beautiful online store that perfectly represents our brand. Sales have tripled!",
    rating: 5,
    project: "Online Store"
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "CTO",
    company: "FinTech Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    content: "Excellent technical expertise and project management. They delivered our complex fintech platform on time and within budget.",
    rating: 5,
    project: "Financial Platform"
  },
  {
    id: 6,
    name: "Anjali Reddy",
    position: "Director",
    company: "Healthcare Plus",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    content: "Tidelix created a comprehensive healthcare portal that serves thousands of patients daily. Their attention to detail is remarkable.",
    rating: 5,
    project: "Healthcare Portal"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0613] to-[#150d27] py-12 sm:py-16 md:py-24 lg:py-32 text-white">
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
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
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass-effect p-6 sm:p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#9b87f5]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute top-4 right-4 text-[#9b87f5]/30">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#9b87f5]/30"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.position}</p>
                  <p className="text-[#9b87f5] text-xs">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-white/80 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="text-xs text-[#9b87f5] font-medium">
                Project: {testimonial.project}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/5 to-[#7c3aed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 glass-effect px-6 py-3 rounded-full border border-white/10">
            <span className="text-white/60 text-sm">Trusted by 500+ businesses</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5 Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
