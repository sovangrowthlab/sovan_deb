import { motion } from 'motion/react';
import { Settings, Search, TrendingUp, BarChart3, Share2, Target, CheckCircle2, ArrowRight, PlayCircle } from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    id: 1,
    title: 'YouTube Channel Setup & Optimization',
    subtitle: 'Launch your YouTube channel the right way.',
    desc: 'Starting a YouTube channel without proper setup can limit your growth from day one. I help you build a fully optimized, professional channel that is ready to rank and attract the right audience.',
    points: ['SEO-friendly channel setup', 'Niche & competitor research', 'Channel branding optimization', 'Optimized descriptions & tags'],
    target: 'Perfect for beginners and businesses starting from scratch.',
    icon: Settings,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 2,
    title: 'YouTube SEO Optimization',
    subtitle: 'Rank your videos and get consistent organic views.',
    desc: 'If your videos are not ranking or getting views, your SEO needs fixing. I use proven YouTube SEO strategies to optimize your content for higher visibility and better performance.',
    points: ['Advanced keyword research', 'Title, description & tag optimization', 'SEO score improvement', 'Ranking-focused strategy'],
    target: 'Turn your content into traffic-generating assets.',
    icon: Search,
    color: 'text-primary',
    bgColor: 'bg-indigo-50',
    isCore: true
  },
  {
    id: 3,
    title: 'Video Ranking & Growth Strategy',
    subtitle: 'Grow faster with a clear, data-driven strategy.',
    desc: 'Success on YouTube is not random — it’s strategic. I create a customized growth plan based on your niche, audience, and competition.',
    points: ['Custom video ranking strategy', 'CTR & audience retention optimization', 'Thumbnail & content guidance', 'Algorithm-based growth plan'],
    target: 'Ideal for creators who want real growth, not guesswork.',
    icon: TrendingUp,
    color: 'text-accent',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 4,
    title: 'Channel Audit & Performance Analysis',
    subtitle: 'Find out what’s holding your channel back.',
    desc: 'Not sure why your channel isn’t growing? I provide a detailed audit to identify issues and uncover hidden opportunities.',
    points: ['Full channel analysis', 'SEO & content review', 'Growth opportunities', 'Step-by-step improvement plan'],
    target: 'Start with clarity before scaling your channel.',
    icon: BarChart3,
    color: 'text-slate-900',
    bgColor: 'bg-slate-100'
  },
  {
    id: 5,
    title: 'Social Media Management',
    subtitle: 'Build and manage a strong online presence.',
    desc: 'Growing your brand requires consistency and strategy. I help manage your social media platforms to keep your audience engaged and your brand active.',
    points: ['Content planning & scheduling', 'Audience engagement', 'Profile/page optimization', 'Growth-focused strategy'],
    target: 'Stay consistent while focusing on your core business.',
    icon: Share2,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    id: 6,
    title: 'Facebook Ads Campaigns',
    subtitle: 'Reach the right audience and generate real results.',
    desc: 'Running ads without strategy wastes money. I create and manage Facebook ad campaigns designed to reach your target audience and deliver measurable results.',
    points: ['Campaign setup & targeting', 'Ad optimization & scaling', 'Lead generation strategy', 'ROI-focused execution'],
    target: 'Turn ad spend into real business growth.',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-black uppercase tracking-widest text-sm mb-4"
            >
              My Full Solutions
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black text-dark mb-6 tracking-tight"
            >
              Expert <span className="text-primary">Services</span> for Modern Growth.
            </motion.h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              I provide end-to-end digital marketing and YouTube optimization services designed to convert viewers into loyal subscribers and customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 relative group"
              >
                {service.isCore && (
                  <div className="absolute top-8 right-8 bg-primary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                    Core Service
                  </div>
                )}
                
                <div className={`w-16 h-16 ${service.bgColor} ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                   <service.icon size={32} />
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-lg font-bold text-primary italic mb-6">
                  {service.subtitle}
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>

                <div className="space-y-4 mb-8">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span className="text-slate-700 font-medium">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl mb-8 border border-slate-100">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Target Audience</p>
                  <p className="text-dark font-semibold">👉 {service.target}</p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-primary transition-all group-hover:gap-4"
                >
                  Book This Service <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Special Audit Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-20 p-12 md:p-20 rounded-[3rem] premium-gradient text-white text-center relative overflow-hidden"
          >
             <div className="relative z-10">
                <PlayCircle className="w-16 h-16 mx-auto mb-8 text-accent animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-black mb-6">Unsure where to start?</h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                   Get a comprehensive audit of your existing channel or a brand new strategy roadmap. Let's find your path to success.
                </p>
                <Link to="/contact" className="bg-accent text-dark px-12 py-5 rounded-2xl font-black text-xl hover:bg-white hover:scale-105 transition-all shadow-2xl">
                   Claim Your Free Audit
                </Link>
             </div>
             
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
