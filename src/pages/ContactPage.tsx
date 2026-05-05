import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, Send, MapPin, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real tracking would happen here
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-black uppercase tracking-widest text-sm mb-4"
            >
              Get In Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl font-black text-dark mb-6 tracking-tight"
            >
              Let’s Grow Your <span className="text-primary">YouTube</span> Channel
            </motion.h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have a question or ready to discuss your growth strategy? Send me a message and let's start scaling.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-100 border border-slate-100"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-dark uppercase tracking-wider">Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-dark uppercase tracking-wider">Email</label>
                       <input
                         required
                         type="email"
                         placeholder="john@example.com"
                         className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-wider">Channel URL / Business</label>
                    <input
                      type="text"
                      placeholder="youtube.com/@yourchannel"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your goals..."
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
                  >
                    Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-20">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={40} />
                   </div>
                   <h2 className="text-3xl font-black text-dark mb-4">Message Sent!</h2>
                   <p className="text-slate-500 mb-8 max-w-sm mx-auto">Thank you for reaching out. Sovan will get back to you within 24 hours.</p>
                   <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline">Send another message</button>
                </div>
              )}
            </motion.div>

            {/* Support Channels */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               className="space-y-8"
            >
              <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                 <h3 className="text-xl font-black text-dark mb-8">Direct Channels</h3>
                 <div className="space-y-6">
                    <a href="https://wa.me/8801517852934" className="flex items-center gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                          <MessageCircle size={28} />
                       </div>
                       <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
                          <p className="text-lg font-bold text-dark">+880 1517-852934</p>
                       </div>
                    </a>
                    <a href="mailto:sovangrowthlab@gmail.com" className="flex items-center gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-blue-100 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <Mail size={28} />
                       </div>
                       <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                          <p className="text-lg font-bold text-dark">sovangrowthlab@gmail.com</p>
                       </div>
                    </a>
                    <a href="https://m.me/sovangrowthlab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.903 1.46 5.498 3.748 7.18v3.562c0 .248.165.466.406.533.05.014.102.021.153.021.189 0 .367-.091.478-.25l1.986-2.846c1.036.223 2.13.344 3.229.344 5.523 0 10-4.145 10-9.258S17.523 2 12 2zm1.25 12.5l-2.5-2.67-4.875 2.67 5.375-5.67 2.5 2.67 4.875-2.67-5.375 5.67z"/></svg>
                       </div>
                       <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Messenger</p>
                          <p className="text-lg font-bold text-dark">Sovan Growth Lab</p>
                       </div>
                    </a>
                 </div>
              </div>

              <div className="p-8 rounded-3xl bg-dark text-white shadow-2xl relative overflow-hidden">
                 <div className="relative z-10">
                   <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin size={20} className="text-primary" /> Location</h3>
                   <p className="text-slate-400 mb-8">Dhaka, Bangladesh — Supporting creative souls globally with remote precision.</p>
                   <div className="h-40 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Map Placeholder</p>
                   </div>
                 </div>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
