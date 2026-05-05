import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Users, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-100 border-x-4 border-primary">
              <img
                src="/artifact_image_2.png"
                alt="Sovan Debnath - About Me"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-primary font-black uppercase tracking-widest text-sm mb-4">The Strategist Behind the Screen</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-dark mb-8 leading-tight">
              I’m Sovan Debnath, Your <span className="text-primary italic">Organic Growth</span> Partner
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Based in Dhaka, Bangladesh, I started **Sovan Growth Lab** with one mission: to turn the YouTube algorithm into a predictable growth engine for creators worldwide.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { title: 'Video Ranking Mastery', desc: 'I don’t just upload; I optimize for SEO dominance.', icon: Video },
                { title: 'Data-Driven Insights', desc: 'Decisions based on real-time YouTube Analytics.', icon: BarChart3 },
                { title: 'Monetization Strategy', desc: 'Scaling channels to sustainable revenue streams.', icon: CheckCircle2 },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-bold text-lg text-dark hover:text-primary transition-colors border-b-2 border-slate-200 hover:border-primary pb-1"
            >
              Read Full Story <TrendingUp size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { BarChart3 } from 'lucide-react';
