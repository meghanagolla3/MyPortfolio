import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MG
              </span>
              <span className="text-xl font-semibold">Meghana Golla</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer passionate about creating innovative solutions and building 
              scalable web applications. Always learning, always growing.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/meghanagolla3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/meghana-golla-a560182a7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:gollameghana33@gmail.com"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:gollameghana33@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  gollameghana33@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Phone:</span>{' '}
                <a
                  href="tel:+918978009953"
                  className="hover:text-white transition-colors duration-200"
                >
                  +91 8978009953
                </a>
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Location:</span> Hyderabad, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Meghana Golla. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and ☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;