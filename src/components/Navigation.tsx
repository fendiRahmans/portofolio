import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className={`p-2 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg transition-transform duration-300 hover:scale-110 ${isScrolled ? 'scale-90' : ''}`}>
              <Code2 className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-white">Portfolio</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Kontak
            </button>
          </div>

          <button
            className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 bg-slate-800/50 backdrop-blur-md rounded-lg px-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium text-left"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-left"
            >
              Kontak
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
