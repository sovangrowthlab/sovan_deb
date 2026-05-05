import { motion } from 'motion/react';
import { ArrowUpRight, Play, ExternalLink, Filter } from 'lucide-react';
import Footer from '../components/Footer';

const projects = [
  {
    title: 'Wellness Niche SEO Mastery',
    desc: 'Complete transformation of a wellness channel. Optimized video metadata to achieve peak visibility in suggested videos.',
    results: ['94.3/100 VidIQ Score', '5/5 Key Count & Volume', 'Maximized Actionable Score'],
    category: 'Channel Optimization',
    img: '/artifact_image_3.png'
  },
  {
    title: 'Before/After: Technical Rebuild',
    desc: 'Taking a channel from 0 visibility to professional performance levels by fixing structural metadata errors.',
    results: ['0 to 84.7 SEO Score', '4/8 Checklist Completion', 'Significant Performance Boost'],
    category: 'Audit & Scaling',
    img: '/artifact_image_4.png'
  },
  {
    title: 'High-Authority Ranking Lab',
    desc: 'Precision targeting for competitive keywords, achieving near-perfect scores for maximum organic reach.',
    results: ['95.6/100 Master Score', '50/50 Performance Index', 'Ranked Tags Dominance'],
    category: 'YouTube SEO',
    img: '/artifact_image_5.png'
  },
  {
    title: 'Monetization-Ready Optimization',
    desc: 'Strategic keyword research for "Make Money Online" niche, turning every upload into a long-term traffic asset.',
    results: ['98.1/100 SEO Score', '48.1/50 Actionable Score', 'Full Tag Volume Optimization'],
    category: 'Keyword Mastery',
    img: '/artifact_image_6.png'
  },
  {
    title: 'Viral Guide Growth Strategy',
    desc: 'Scaling a single help-based video to over 44,000 organic views and hundreds of new subscribers.',
    results: ['44.1K+ Organic Views', '+937 New Subscribers', '3.4K Watch Time Hours'],
    category: 'Video Strategy',
    img: '/artifact_image_7.png'
  },
  {
    title: 'Finance & Tech Metadata Polish',
    desc: 'Refining existing content to improve ranking, ensuring consistently high performance across the entire channel.',
    results: ['94.6/100 Global SEO Score', '46.2/50 Actionable Items', '5/5 Triple Keywords Rank'],
    category: 'Audit & Polish',
    img: '/artifact_image_8.png'
  },
  {
    title: 'Sustainable Monthly Growth',
    desc: 'Managing channel-wide analytics to maintain 6-figure monthly views and thousands of new monthly subscribers.',
    results: ['174.2K Monthly Views', '+4.1K Monthly Subs', '13.4K Watch Hours'],
    category: 'Growth Management',
    img: '/artifact_image_10.png'
  }
];

export default function PortfolioPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
             <div className="max-w-2xl">
                <motion.p
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="text-primary font-black uppercase tracking-widest text-sm mb-4"
                >
                   My Portfolio
                </motion.p>
                <motion.h1
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="text-5xl lg:text-7xl font-black text-dark mb-6 tracking-tight"
                >
                   Proven <span className="text-primary italic text-gradient">Success</span> Records.
                </motion.h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                   I don't just talk about growth; I deliver it. Here is a look at some of the channels I’ve helped scale to millions of views.
                </p>
             </div>
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl border border-slate-200 font-bold hover:border-primary transition-all">
                   <Filter size={18} /> All Projects
                </button>
             </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
             {projects.map((project, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row"
               >
                  <div className="md:w-2/5 relative overflow-hidden">
                     <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="md:w-3/5 p-8 md:p-10">
                     <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">{project.category}</span>
                     <h3 className="text-2xl font-black text-dark mb-4">{project.title}</h3>
                     <p className="text-slate-500 mb-8 text-sm leading-relaxed">{project.desc}</p>
                     
                     <div className="space-y-3 mb-8">
                        {project.results.map((res, j) => (
                          <div key={j} className="flex items-center gap-2 text-green-600 font-bold text-sm">
                             <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> {res}
                          </div>
                        ))}
                     </div>

                     <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-dark font-bold hover:text-primary transition-colors text-sm">
                           View Case Study <ArrowUpRight size={16} />
                        </button>
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
