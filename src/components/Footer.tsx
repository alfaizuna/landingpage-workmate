import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Fitur', href: '#features' },
      { name: 'Harga', href: '#pricing' },
      { name: 'Demo', href: '#' },
      { name: 'API Documentation', href: '#' },
      { name: 'Integrations', href: '#' }
    ],
    company: [
      { name: 'Tentang Kami', href: '#' },
      { name: 'Karir', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Partner Program', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Support', href: '#contact' },
      { name: 'System Status', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Training', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'SLA', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/workmatelogo.png" 
                alt="WorkMate Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold">WorkMate</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform employee engagement dan produktivitas terdepan yang membantu 
              lebih dari 5000+ perusahaan di seluruh dunia menciptakan workplace yang lebih baik.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@workmate.id</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Jl. Sudirman No. 123<br />Jakarta Pusat 10220</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-left w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-left w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-left w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-left w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6">
                Dapatkan update terbaru tentang fitur baru, tips produktivitas, 
                dan insight menarik langsung ke inbox Anda.
              </p>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
                  <span>Subscribe</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="lg:w-auto">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-500 transition-all transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © {currentYear} WorkMate. All rights reserved.
              </p>
            </div>
            
            <div className="mt-4 lg:mt-0 flex justify-center lg:justify-end space-x-6">
              <span className="inline-flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </span>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>🇮🇩 Indonesia</span>
                <span>•</span>
                <span>IDR Currency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
