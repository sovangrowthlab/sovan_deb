import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';

// Placeholder Pages (If needed)
const ComingSoon = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-32 px-4 flex flex-col items-center justify-center bg-slate-50 text-center">
    <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center text-primary mb-8 animate-float">
       <div className="text-4xl font-black">S</div>
    </div>
    <h1 className="text-5xl font-black text-dark mb-4">{title}</h1>
    <p className="text-slate-500 max-w-md">I am currently updating this section with new success stories and content. Stay tuned!</p>
    <a href="/" className="mt-8 text-primary font-bold hover:underline">Return Home</a>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/case-studies" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}



