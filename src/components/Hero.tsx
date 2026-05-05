import { motion } from 'motion/react';
import { ArrowRight, Youtube, TrendingUp, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute top-1/4 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-primary text-sm font-bold rounded-full mb-6">
              <TrendingUp size={16} />
              <span>Dominate YouTube Search</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-dark leading-tight mb-6">
              I Help You Grow Your <span className="text-primary italic">YouTube</span> Channel Organically 🚀
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Mastering the art of YouTube SEO and Data-Driven Digital Marketing to skyrocket your views, subscribers, and revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200 group"
              >
                Hire Me Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-dark border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
              >
                Free YouTube Audit
                <Search size={20} />
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Client" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-dark">50+ Channels Audited</p>
                <div className="flex text-accent">
                   {[1, 2, 3, 4, 5].map((i) => (
                     <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                   ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-200 border-8 border-white">
              <img
                src="/artifact_image_2.png"
                alt="Sovan Debnath - YouTube SEO Expert"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Stats Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-blue-50"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                <Youtube size={28} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Expert Strategy</p>
                <p className="text-2xl font-black text-dark">Organic Growth</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
