import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaUser, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API request send
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success banner after 5s
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary-400" />,
      label: 'Email',
      value: 'mustafa.zahoor222@gmail.com',
      href: 'mailto:mustafa.zahoor222@gmail.com',
    },
    {
      icon: <FaUser className="text-accent-cyan" />,
      label: 'Full Name',
      value: 'Mustafa Zahoor',
      href: null,
    },
    {
      icon: <FaMapMarkerAlt className="text-accent-purple" />,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: 'https://maps.google.com/?q=Lahore,Pakistan',
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-semibold tracking-widest text-primary-400 uppercase">Connect</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1">Get In Touch</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-blue mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base mt-6 max-w-xl mx-auto">
            Have an exciting freelance project, employment opportunity, or technical question? Shoot me a message directly or connect via social networks.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Columns - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Coordinates</h3>
                
                {/* Details list */}
                <div className="flex flex-col gap-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex gap-4 items-center group">
                      <div className="text-xl p-3 bg-white/5 border border-white/5 rounded-2xl group-hover:bg-white/10 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block">{info.label}</span>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-white hover:underline font-medium transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-slate-300 font-medium">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social button networks and download resume */}
              <div className="mt-12 pt-6 border-t border-white/5 flex flex-col gap-6">
                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Professional Channels</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/mustafazahoor/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#0a66c2]/10 border border-[#0a66c2]/20 hover:bg-[#0a66c2]/20 text-[#0a66c2] hover:text-white rounded-xl text-xs font-bold tracking-wide flex items-center gap-2 transition-all active:scale-95"
                    >
                      <FaLinkedin className="text-sm" />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Mustafazahoor975"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl text-xs font-bold tracking-wide flex items-center gap-2 transition-all active:scale-95"
                    >
                      <FaGithub className="text-sm" />
                      GitHub
                    </a>
                  </div>
                </div>

                <a
                  href="/resume.pdf"
                  download
                  className="w-full text-center py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-xl text-sm font-semibold tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <FaDownload className="text-xs text-slate-400" />
                  Download Complete CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Columns - Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md h-full relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me A Message</h3>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-20 text-center gap-4"
                  >
                    <FaCheckCircle className="text-5xl text-accent-cyan animate-bounce" />
                    <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                    <p className="text-slate-400 text-sm max-w-sm">
                      Thank you for reaching out. I have cached your enquiry locally and will connect with you via email shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    {/* Name field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="px-4 py-3 bg-slate-950/60 border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all duration-300"
                      />
                    </div>

                    {/* Email field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                        className="px-4 py-3 bg-slate-950/60 border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all duration-300"
                      />
                    </div>

                    {/* Message field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Detailed Inquiry</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Detail your project requirements, tech stacks, or just say hello..."
                        className="px-4 py-3 bg-slate-950/60 border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 w-full py-3.5 bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-xl text-sm font-semibold tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all border border-white/10 hover:border-white/20 active:scale-[0.98] disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-xs text-slate-300" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Contact;