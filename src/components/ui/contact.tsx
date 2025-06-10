"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import CustomerPopup from "./customer-popup";
import { appendToGoogleSheets } from "../../services/googleSheetsService";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Contact form submission started');
    console.log('Form data:', formData);
    
    let emailSuccess = false;
    let sheetsSuccess = false;
    
    // Try EmailJS first
    try {
      emailjs.init('Vu9j_J0X5qk6pCciT');
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        mobile: formData.mobile,
        company: formData.company,
        requirement: formData.requirement,
        to_email: 'sriramsudhir3@gmail.com'
      };

      console.log('Sending email with service ID: service_rkna3g1');
      console.log('Template params:', templateParams);

      const result = await emailjs.send(
        'service_rkna3g1', 
        'template_contact', 
        templateParams,
        'Vu9j_J0X5qk6pCciT'
      );
      
      console.log('EmailJS response:', result);
      console.log('Email sent successfully via EmailJS');
      emailSuccess = true;
    } catch (error) {
      console.error('EmailJS error:', error);
      console.log('EmailJS failed, using fallback mailto method');
      
      // Fallback to mailto
      const subject = `New Project Requirement from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Company: ${formData.company}

Requirement:
${formData.requirement}
      `;
      
      const mailtoLink = `mailto:sriramsudhir3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }

    // Try Google Sheets
    try {
      await appendToGoogleSheets(formData, 'contact');
      sheetsSuccess = true;
      console.log('Data successfully sent to Google Sheets');
    } catch (error) {
      console.error('Google Sheets error:', error);
      console.log('Google Sheets submission failed - please check API key and permissions');
    }

    // Reset form
    setFormData({
      name: '',
      email: '',
      mobile: '',
      company: '',
      requirement: ''
    });

    // Show success message
    if (emailSuccess || sheetsSuccess) {
      let message = 'Thank you! ';
      if (emailSuccess) message += 'Your message has been sent successfully. ';
      if (sheetsSuccess) message += 'Your details have been recorded. ';
      message += 'We will contact you soon!';
      alert(message);
    } else {
      alert('Thank you for your submission! We will contact you soon.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <section id="contact" className="relative w-full overflow-hidden bg-[#0a0613] py-12 sm:py-16 md:py-24 lg:py-32 text-white scroll-smooth">
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
              PROFESSIONAL WEB DEVELOPMENT COMPANY IN CHENNAI
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto px-4 sm:px-0">
              Ready to transform your business with expert web development and digital marketing solutions? Contact Tidelix, Chennai's leading digital agency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8">Get in Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="glass-effect p-4 sm:p-6 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2 text-[#9b87f5]">Email</h4>
                  <p className="text-white/70 text-sm sm:text-base">sriramsudhir3@gmail.com</p>
                </div>
                <div className="glass-effect p-4 sm:p-6 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2 text-[#9b87f5]">Phone</h4>
                  <p className="text-white/70 text-sm sm:text-base">+91 8220690118</p>
                </div>
                <div className="glass-effect p-4 sm:p-6 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2 text-[#9b87f5]">Business Hours</h4>
                  <p className="text-white/70 text-sm sm:text-base">
                    Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                    Weekend: By appointment
                  </p>
                </div>
                <motion.button
                  onClick={openPopup}
                  className="w-full glass-effect p-4 sm:p-6 rounded-lg border border-white/10 hover:border-[#9b87f5]/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold mb-2 text-[#9b87f5] group-hover:text-white transition-colors">Quick Contact</h4>
                  <p className="text-white/70 group-hover:text-white/80 transition-colors text-sm sm:text-base">Click here for instant inquiry form</p>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect p-6 sm:p-8 rounded-xl border border-white/10">
                <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Contact Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50 text-sm sm:text-base"
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
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50 text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50 text-sm sm:text-base"
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
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50 text-sm sm:text-base"
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
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50 resize-none text-sm sm:text-base"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="neumorphic-button w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.5)] text-sm sm:text-base disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Requirement'}
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
