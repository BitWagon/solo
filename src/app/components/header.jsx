"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-white shadow-lg relative z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-xl' : ''
    }`}>
      {/* Top Bar with slide-down animation */}
      <div className="bg-gray-900 text-white py-2 px-4 animate-slideDown">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-colors duration-300 group-hover:text-yellow-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <MapPin className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-colors duration-300 group-hover:text-yellow-400">123 Auto Service St, City, State</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Clock className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-colors duration-300 group-hover:text-yellow-400">Mon - Fri: 8AM - 6PM</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="animate-fadeIn animation-delay-300">Professional Auto Services Since 1995</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with bounce animation */}
          <div className="flex items-center animate-slideLeft">
            <div className="bg-yellow-500 text-white p-2 rounded-lg mr-3 transition-all duration-300 hover:bg-yellow-600 hover:scale-110 hover:rotate-3">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                H
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-serif text-gray-900 transition-colors duration-300 hover:text-yellow-500">HackMob</h1>
              <p className="text-sm text-gray-800">Auto Services</p>
            </div>
          </div>

          {/* Desktop Navigation with staggered animation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-yellow-500 font-semibold hover:text-yellow-600 transition-all duration-300 transform hover:scale-105 animate-slideDown animation-delay-100 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 animate-slideDown animation-delay-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <div className="relative group animate-slideDown animation-delay-300">
              <button className="text-gray-700 hover:text-yellow-500 transition-all duration-300 flex items-center transform hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                Services
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2">Oil Change</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2">Brake Service</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2">Engine Repair</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2">Transmission</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 animate-slideDown animation-delay-400 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 animate-slideDown animation-delay-500 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Blog
            </a>
            <div className="relative group animate-slideDown animation-delay-600">
              <button className="text-gray-700 hover:text-yellow-500 transition-all duration-300 flex items-center transform hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                Pages
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2">Gallery</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2">Team</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2">Testimonials</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2">FAQ</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 animate-slideDown animation-delay-700 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
          </nav>

          {/* CTA Button with pulse animation */}
          <div className="hidden lg:block animate-slideRight">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 animate-pulse-slow">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button with rotation animation */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-yellow-500 transition-all duration-300 transform hover:scale-110 animate-slideRight"
            onClick={toggleMenu}
          >
            <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-2 space-y-1">
          <a href="#" className="block px-3 py-2 text-yellow-500 font-semibold animate-slideLeft animation-delay-100">
            Home
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2 animate-slideLeft animation-delay-200">
            About
          </a>
          <details className="group animate-slideLeft animation-delay-300">
            <summary className="flex items-center justify-between px-3 py-2 text-gray-700 hover:text-yellow-500 transition-all duration-300 cursor-pointer hover:translate-x-2">
              Services
              <svg className="w-4 h-4 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pl-6 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2">Oil Change</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2">Brake Service</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2">Engine Repair</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2">Transmission</a>
            </div>
          </details>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2 animate-slideLeft animation-delay-400">
            Pricing
          </a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2 animate-slideLeft animation-delay-500">
            Blog
          </a>
          <details className="group animate-slideLeft animation-delay-600">
            <summary className="flex items-center justify-between px-3 py-2 text-gray-700 hover:text-yellow-500 transition-all duration-300 cursor-pointer hover:translate-x-2">
              Pages
              <svg className="w-4 h-4 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pl-6 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2">Gallery</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2">Team</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2">Testimonials</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2">FAQ</a>
            </div>
          </details>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-all duration-300 hover:translate-x-2 animate-slideLeft animation-delay-700">
            Contact
          </a>
          <div className="px-3 py-2 animate-slideLeft animation-delay-800">
            <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
              Get Quote
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
        
        .animate-slideLeft {
          animation: slideLeft 0.8s ease-out forwards;
        }
        
        .animate-slideRight {
          animation: slideRight 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.7);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 0 10px rgba(234, 179, 8, 0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;