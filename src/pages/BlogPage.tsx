import { motion } from 'motion/react';
import { Youtube, TrendingUp, Search, Calendar, User, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const posts = [
  {
    title: 'YouTube Algorithm Secrets for 2024: Everything You Need to Know',
    desc: 'The algorithm has changed. Here is how you can adapt your content strategy to stay ahead of the curve and maximize organic reach.',
    category: 'SEO Strategy',
    date: 'Dec 12, 2023',
    icon: TrendingUp,
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'How to Conduct Effective YouTube Keyword Research in 2024',
    desc: 'Finding the right keywords is the foundation of video SEO. Learn the tools and techniques I use to find low-competition, high-volume topics.',
    category: 'SEO Tools',
    date: 'Nov 28, 2023',
    icon: Search,
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'The Ultimate Guide to Increasing Your Video Click-Through Rate (CTR)',
    desc: 'Thumbnails and titles are your first impression. Discover the psychological triggers that make people want to click on your videos.',
    category: 'Analytics',
    date: 'Nov 15, 2023',
    icon: Youtube,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-black uppercase tracking-widest text-sm mb-4"
            >
              Growth Lab Blog
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black text-dark mb-6 tracking-tight"
            >
              Insights from the <span className="text-primary italic">Lab</span>.
            </motion.h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Actionable tips, case studies, and industry news to help you stay ahead in the competitive world of YouTube and Digital Marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col group"
              >
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-blue-50">
                   <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black text-primary shadow-lg uppercase tracking-wider">
                      {post.category}
                   </div>
                </div>
                <div>
                   <div className="flex items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                      <span className="flex items-center gap-2"><User size={14} /> By Sovan</span>
                   </div>
                   <h3 className="text-2xl font-black text-dark mb-6 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                   </h3>
                   <p className="text-slate-500 mb-8 leading-relaxed">
                      {post.desc}
                   </p>
                   <button className="inline-flex items-center gap-2 font-bold text-dark group-hover:text-primary transition-all group-hover:gap-4 underline decoration-slate-200 underline-offset-8">
                      Read Full Post <ArrowRight size={18} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-32 p-12 md:p-24 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden">
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-4xl md:text-5xl font-black mb-6">Stay ahead of the algorithm.</h2>
                   <p className="text-xl text-slate-400 leading-relaxed">
                      Join 5,000+ creators and marketers who receive my weekly growth tips.
                   </p>
                </div>
                <form className="flex flex-col sm:flex-row gap-4">
                   <input
                      type="email"
                      placeholder="your.email@gmail.com"
                      className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 outline-none focus:border-primary transition-all text-lg"
                   />
                   <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
                      Join Lab
                   </button>
                </form>
             </div>
             {/* Blob */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
