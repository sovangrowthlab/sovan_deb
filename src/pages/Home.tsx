import { motion } from 'motion/react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { MessageCircle, ArrowUpRight, Award, LineChart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* Social Proof Bar */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2 font-black text-2xl"><Award /> FIVERR</div>
             <div className="flex items-center gap-2 font-black text-2xl font-serif tracking-tighter">Upwork</div>
             <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-blue-600 italic">FREELANCER</div>
             <div className="flex items-center gap-2 font-black text-2xl">PEOPLEPERHOUR</div>
          </div>
        </div>
      </section>

      <About />
      
      {/* Quick Stats Section */}
      <section className="py-20 premium-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { val: 'Channel', label: 'Optimization', icon: Youtube },
              { val: 'Views', label: 'Generated', icon: LineChart },
              { val: 'Subs Gained', label: 'Strategy', icon: Users },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="flex justify-center mb-4 text-accent"><stat.icon size={32} /></div>
                <h3 className="text-4xl font-black mb-2">{stat.val}</h3>
                <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* Case Study Preview */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#1e40af,transparent_50%)] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <p className="text-accent font-black uppercase tracking-widest text-sm mb-4">Success Stories</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold max-w-xl">Proven Results for Global Creators</h2>
            </div>
            <Link to="/portfolio" className="bg-white text-dark px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-accent hover:text-dark transition-all">
              View All Case Studies <ArrowUpRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Global Channel Scaling',
                results: 'Organic Growth & SEO Mastery',
                category: 'SEO + Strategy',
                icon: TrendingUp,
              },
              {
                title: 'Data-Driven Optimization',
                results: 'Strategic Content Revitalization',
                category: 'Full Audit',
                icon: LineChart,
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative rounded-[3rem] bg-slate-800/50 border border-slate-700/50 p-12 overflow-hidden"
              >
                {/* Animated Background Element */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1] 
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-primary rounded-full blur-[100px]"
                />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                    <study.icon size={32} />
                  </div>
                  <span className="text-accent font-bold text-sm mb-2 block uppercase tracking-widest">{study.category}</span>
                  <h3 className="text-3xl font-black mb-4">{study.title}</h3>
                  <p className="text-slate-300 font-medium mb-8 text-xl italic">{study.results}</p>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 font-bold text-white group-hover:text-accent transition-all">
                    Explore Strategy <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
           <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             className="p-12 md:p-20 rounded-[3rem] bg-white shadow-2xl relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-4xl md:text-5xl font-black text-dark mb-8 leading-tight">
                Ready to Grow Your <span className="text-primary italic">YouTube</span> Channel?
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto">
                Stop guessing and start growing. Let me audit your channel for free today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 italic">
                  Contact Me Now
                </Link>
                <a href="https://wa.me/8801517852934" className="bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-green-100">
                  <MessageCircle /> WhatsApp
                </a>
              </div>
           </motion.div>
        </div>
      </section>
      
      <Footer />
      
      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/8801517852934"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl cta-glow"
        >
          <MessageCircle />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://m.me/sovangrowthlab"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl cta-glow"
        >
           <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.903 1.46 5.498 3.748 7.18v3.562c0 .248.165.466.406.533.05.014.102.021.153.021.189 0 .367-.091.478-.25l1.986-2.846c1.036.223 2.13.344 3.229.344 5.523 0 10-4.145 10-9.258S17.523 2 12 2zm1.25 12.5l-2.5-2.67-4.875 2.67 5.375-5.67 2.5 2.67 4.875-2.67-5.375 5.67z"/></svg>
        </motion.a>
      </div>
    </div>
  );
}

import { Youtube, TrendingUp, Users } from 'lucide-react';
