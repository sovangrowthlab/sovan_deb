import { motion } from 'motion/react';
import { Target, Heart, Shield, Sparkles, MessageCircle } from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
             >
                <div className="relative">
                   <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                      <img src="/artifact_image_2.png" alt="Sovan Debnath" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
             >
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The Strategist Behind the Screen</p>
                <h1 className="text-5xl lg:text-7xl font-black text-dark mb-8 tracking-tight">
                  Driving the <span className="text-primary underline decoration-accent underline-offset-8">Future</span> of Content.
                </h1>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                   <p>
                    I’m **Sovan Debnath**, a YouTube Growth Specialist who helps creators and businesses scale their channels with proven SEO and digital marketing strategies.
                   </p>
                   <p>
                    If your videos are not getting views or ranking on YouTube, I can help fix that. From keyword research to full channel optimization, I provide data-driven solutions that deliver real results.
                   </p>
                   <p>
                    I don’t just optimize videos — I build growth systems that bring long-term success.
                   </p>
                   <p className="text-2xl font-black text-dark italic">
                     “Let’s work together to grow your YouTube channel"
                   </p>
                </div>
             </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
             {[
               { title: 'My Mission', desc: 'To provide transparent, data-driven growth strategies that empower the next generation of global creators.', icon: Target },
               { title: 'My Values', desc: 'Integrity, Result-Focus, and Constant Learning. I treat every channel as if it were my own.', icon: Heart },
               { title: 'My Vision', desc: 'To become the leading SEO agency for high-performing video content in South Asia and beyond.', icon: Shield }
             ].map((item, i) => (
               <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                     <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>

          <div className="bg-dark rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
             <div className="relative z-10 max-w-2xl">
                <Sparkles className="text-accent mb-6" size={40} />
                <h2 className="text-4xl md:text-5xl font-black mb-8">Let's write your growth story together.</h2>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                   Whether you are a solo creator or a big brand, I have the tools to make you visible.
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 italic">
                   Email Sovan Directly <Target size={24} />
                </a>
             </div>
             {/* Abstract Lines */}
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M0 50 Q 25 0 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" /></svg>
             </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
