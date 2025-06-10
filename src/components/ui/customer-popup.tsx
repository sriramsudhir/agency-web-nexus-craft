"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import emailjs from '@emailjs/browser';

interface CustomerPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const requirementOptions = [
  "Website Development",
  "E-commerce Solutions", 
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Services",
  "Maintenance & Support",
  "Custom Software Development"
];

const stateOptions = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export default function CustomerPopup({ isOpen, onClose }: CustomerPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    state: '',
    requirement: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Customer popup submission started');
    console.log('Form data:', formData);
    
    try {
      // Initialize EmailJS
      emailjs.init('Vu9j_J0X5qk6pCciT');

      const templateParams = {
        from_name: formData.name,
        mobile: formData.mobile,
        state: formData.state,
        requirement: formData.requirement,
        to_email: 'sriramsudhir3@gmail.com'
      };

      console.log('Sending popup email with service ID: service_rkna3g1');
      console.log('Template params:', templateParams);

      const result = await emailjs.send(
        'service_rkna3g1',
        'template_popup',
        templateParams,
        'Vu9j_J0X5qk6pCciT'
      );
      
      console.log('EmailJS popup response:', result);
      console.log('Popup form submitted successfully via EmailJS');
      alert('Thank you! Your inquiry has been sent successfully. We will contact you soon!');
    } catch (error) {
      console.error('EmailJS error, using fallback:', error);
      console.log('EmailJS failed, using fallback mailto method');
      
      // Fallback mailto method
      const subject = `New Customer Inquiry from ${formData.name}`;
      const body = `
Name: ${formData.name}
Mobile: ${formData.mobile}
State: ${formData.state}
Requirement: ${formData.requirement}
      `;
      
      const mailtoLink = `mailto:sriramsudhir3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
    
    onClose();
    setFormData({ name: '', mobile: '', state: '', requirement: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md bg-[#0a0613] border border-[#9b87f5]/30 rounded-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 h-1/2 w-1/2"
              style={{
                background: "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
              }}
            />
            
            <div className="relative z-10 p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-6">
                <h2 className="text-2xl font-light text-white mb-2">
                  Get <span className="gradient-text">Started</span>
                </h2>
                <p className="text-white/60 text-sm">Tell us about your project requirements</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    pattern="[6-9]{1}[0-9]{9}"
                    placeholder="Mobile Number (10 digits)"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white placeholder-white/50"
                  />
                </div>
                
                <div>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white"
                  >
                    <option value="" className="bg-[#0a0613] text-white">Select Your State</option>
                    {stateOptions.map((state) => (
                      <option key={state} value={state} className="bg-[#0a0613] text-white">{state}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#9b87f5] transition-colors text-white"
                  >
                    <option value="" className="bg-[#0a0613] text-white">Select Your Requirement</option>
                    {requirementOptions.map((req) => (
                      <option key={req} value={req} className="bg-[#0a0613] text-white">{req}</option>
                    ))}
                  </select>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.5)] transform hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Requirement'}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
