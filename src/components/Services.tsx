import { motion } from 'motion/react';
import { Target, BarChart3, Search, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'YouTube Channel Setup & Optimization',
    description: 'Launch your YouTube channel the right way with professional structure, branding, and niche research.',
    icon: Settings,
    color: 'bg-blue-600',
    link: '/services'
  },
  {
    title: 'YouTube SEO Optimization',
    description: 'Rank your videos and get consistent organic views using data-backed keyword research and optimization.',
    icon: Search,
    color: 'bg-primary',
    link: '/services'
  },
  {
    title: 'Video Ranking & Growth Strategy',
    description: 'Strategic growth plans based on algorithm insights to improve your CTR, retention, and performance.',
    icon: BarChart3,
    color: 'bg-accent',
    link: '/services'
  },
  {
    title: 'Channel Audit & Analysis',
    description: 'Identify what is holding you back and uncover hidden growth opportunities with a detailed audit.',
    icon: BarChart3,
    color: 'bg-slate-900',
    link: '/services'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-widest text-sm mb-4"
          >
            My Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-extrabold text-dark"
          >
            Organic Growth <span className="text-primary underline decoration-accent underline-offset-8">Solutions</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 relative overflow-hidden"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </Link>
              
              {/* Decoration */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
