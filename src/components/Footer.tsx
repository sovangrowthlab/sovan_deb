import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone, Globe, Youtube, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-blue-400" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <Youtube className="text-primary w-10 h-10" />
              <span className="text-2xl font-black tracking-tighter">
                SOVAN<span className="text-primary">GROWTH</span>LAB
              </span>
            </Link>
            <p className="text-slate-400 text-lg max-w-md mb-8 leading-relaxed">
              Empowering creators and businesses to conquer the digital space through strategic SEO and organic growth systems. Dhaka based, globally focused.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: 'https://m.me/sovangrowthlab' },
                { icon: MessageCircle, href: 'https://m.me/sovangrowthlab' },
                { icon: Linkedin, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {['Home', 'About Me', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-primary transition-colors flex items-center gap-2">
                    <Globe size={14} /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-400">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500 mb-1">Email Me</p>
                  <a href="mailto:sovangrowthlab@gmail.com" className="text-white hover:text-primary transition-colors">sovangrowthlab@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-slate-400 text-sm">
                <div className="w-10 h-10 rounded-lg bg-green-900/30 flex items-center justify-center text-green-500 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500 mb-1">WhatsApp</p>
                  <a href="https://wa.me/8801517852934" className="text-white hover:text-primary transition-colors">+880 1517-852934</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Sovan Growth Lab. All Rights Reserved. Crafted for high performance.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
    </footer>
  );
}
