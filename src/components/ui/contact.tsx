"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CustomerPopup from "./customer-popup";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    requirement: ''
  });

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `New Project Requirement from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Company: ${formData.company}

Requirement:
${formData.requirement}
    `;
    
    // Open default email client
    const mailtoLink = `mailto:sriramsudhir3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <section id="contact" className="relative w-full overflow-hidden bg-[#0a0613] py-16 md:py-24 lg:py-32 text-white">
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs text-[#9b87f5]">
              GET IN TOUCH WITH TIDELIX
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Ready to transform your digital presence? Contact Tidelix today and let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="glass-effect p-6 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2 text-[#9b87f5]">Email</h4>
                  <p className="text-white/70">sriramsudhir3@gmail.com</p>
                </div>
                <div className="glass-effect p-6 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2 text-[#9b87f5]">Phone</h4>
                  <p className="text-white/70">+91 82206 90118</p>
                </div>
                <div className="glass-effect p-6 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2 text-[#9b87f5]">Business Hours</h4>
                  <p className="text-white/70">
                    Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                    Weekend: By appointment
                  </p>
                </div>
                <motion.button
                  onClick={openPopup}
                  className="w-full glass-effect p-6 rounded-lg border border-white/10 hover:border-[#9b87f5]/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold mb-2 text-[#9b87f5] group-hover:text-white transition-colors">Quick Contact</h4>
                  <p className="text-white/70 group-hover:text-white/80 transition-colors">Click here for instant inquiry form</p>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-light mb-6">Start Your Project</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium mb-2 text-white/80">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        pattern="[6-9]{1}[0-9]{9}"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50"
                        placeholder="9876543210"
                      />
                      <p className="text-xs text-white/50 mt-1">Indian mobile number (10 digits)</p>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-white/80">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="requirement" className="block text-sm font-medium mb-2 text-white/80">
                      Project Requirements *
                    </label>
                    <textarea
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50 resize-none"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="neumorphic-button w-full py-4 px-8 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.5)]"
                  >
                    Submit Requirement
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CustomerPopup isOpen={showPopup} onClose={closePopup} />
    </>
  );
}
