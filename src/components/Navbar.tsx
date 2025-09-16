import React, { useState, useEffect } from 'react';
import { Menu, X, User, LogIn } from 'lucide-react';

interface NavbarProps {
  onLogin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-xl font-bold text-gray-900">WorkMate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
            >
              Keunggulan
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
            >
              Harga
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
            >
              Kontak
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onLogin}
              className="flex items-center space-x-2 px-4 py-2 text-red-600 border border-red-600 rounded-xl hover:bg-red-50 transition-colors font-medium"
            >
              <LogIn className="w-4 h-4" />
              <span>Masuk</span>
            </button>
            <button
              onClick={onLogin}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-medium"
            >
              <User className="w-4 h-4" />
              <span>Mulai Gratis</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left px-4 py-2 text-gray-600 hover:text-red-600 transition-colors font-medium"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-left px-4 py-2 text-gray-600 hover:text-red-600 transition-colors font-medium"
              >
                Keunggulan
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left px-4 py-2 text-gray-600 hover:text-red-600 transition-colors font-medium"
              >
                Harga
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-gray-600 hover:text-red-600 transition-colors font-medium"
              >
                Kontak
              </button>
              <div className="px-4 pt-4 border-t border-gray-200 flex flex-col space-y-3">
                <button
                  onClick={onLogin}
                  className="flex items-center space-x-2 px-4 py-2 text-red-600 border border-red-600 rounded-xl hover:bg-red-50 transition-colors font-medium justify-center"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Masuk</span>
                </button>
                <button
                  onClick={onLogin}
                  className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all font-medium justify-center"
                >
                  <User className="w-4 h-4" />
                  <span>Mulai Gratis</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
