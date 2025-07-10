// 
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`bg-white shadow-lg relative z-50 transition-all duration-300 ${
        isScrolled ? "shadow-xl" : ""
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 animate-slideDown">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 group-hover:scale-110 transition" />
              <span className="group-hover:text-yellow-400 transition">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <MapPin className="w-4 h-4 group-hover:scale-110 transition" />
              <span className="group-hover:text-yellow-400 transition">123 Auto Service St</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Clock className="w-4 h-4 group-hover:scale-110 transition" />
              <span className="group-hover:text-yellow-400 transition">Mon - Fri: 8AM - 6PM</span>
            </div>
          </div>
          <div className="hidden md:block animate-fadeIn animation-delay-300">
            Professional Auto Services Since 1995
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center animate-slideLeft">
            <div className="bg-yellow-500 text-white p-2 rounded-lg mr-3 hover:scale-110 transition">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">H</div>
            </div>
            <div>
              <h1 className="text-2xl font-serif text-gray-900 hover:text-yellow-500 transition">HackMob</h1>
              <p className="text-sm text-gray-800">Auto Services</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/"><span className="nav-link text-yellow-500">Home</span></Link>
            <Link href="/about"><span className="nav-link">About</span></Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center">
                Services
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition" fill="none" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/services/oil-change"><span className="dropdown-link">Oil Change</span></Link>
                  <Link href="/services/brake"><span className="dropdown-link">Brake Service</span></Link>
                  <Link href="/services/engine"><span className="dropdown-link">Engine Repair</span></Link>
                  <Link href="/services/transmission"><span className="dropdown-link">Transmission</span></Link>
                </div>
              </div>
            </div>

            <Link href="/pricing"><span className="nav-link">Pricing</span></Link>
            <Link href="/blog"><span className="nav-link">Blog</span></Link>

            {/* Pages Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center">
                Pages
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition" fill="none" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/gallery"><span className="dropdown-link">Gallery</span></Link>
                  <Link href="/team"><span className="dropdown-link">Team</span></Link>
                  <Link href="/testimonials"><span className="dropdown-link">Testimonials</span></Link>
                  <Link href="/faq"><span className="dropdown-link">FAQ</span></Link>
                </div>
              </div>
            </div>

            <Link href="/contact"><span className="nav-link">Contact</span></Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block animate-slideRight">
            <Link href="/get-quote">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition shadow-lg hover:scale-105 animate-pulse-slow">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-gray-700 hover:text-yellow-500 transition">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 py-2 space-y-1">
          <Link href="/"><span className="mobile-link">Home</span></Link>
          <Link href="/about"><span className="mobile-link">About</span></Link>
          <details className="group">
            <summary className="mobile-link cursor-pointer">Services</summary>
            <div className="pl-6">
              <Link href="/services/oil-change"><span className="dropdown-link">Oil Change</span></Link>
              <Link href="/services/brake"><span className="dropdown-link">Brake Service</span></Link>
              <Link href="/services/engine"><span className="dropdown-link">Engine Repair</span></Link>
              <Link href="/services/transmission"><span className="dropdown-link">Transmission</span></Link>
            </div>
          </details>
          <Link href="/pricing"><span className="mobile-link">Pricing</span></Link>
          <Link href="/blog"><span className="mobile-link">Blog</span></Link>
          <details className="group">
            <summary className="mobile-link cursor-pointer">Pages</summary>
            <div className="pl-6">
              <Link href="/gallery"><span className="dropdown-link">Gallery</span></Link>
              <Link href="/team"><span className="dropdown-link">Team</span></Link>
              <Link href="/testimonials"><span className="dropdown-link">Testimonials</span></Link>
              <Link href="/faq"><span className="dropdown-link">FAQ</span></Link>
            </div>
          </details>
          <Link href="/contact"><span className="mobile-link">Contact</span></Link>
          <Link href="/get-quote">
            <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Get Quote
            </button>
          </Link>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .nav-link {
          position: relative;
          transition: all 0.3s;
          color: #4b5563;
        }
        .nav-link:hover {
          color: #facc15;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #facc15;
          transition: width 0.3s;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .dropdown-link {
          display: block;
          padding: 0.5rem 1rem;
          color: #374151;
          transition: all 0.3s;
        }
        .dropdown-link:hover {
          color: #facc15;
          transform: translateX(4px);
          background: #fefce8;
        }
        .mobile-link {
          display: block;
          padding: 0.75rem 1rem;
          color: #374151;
          transition: all 0.3s;
        }
        .mobile-link:hover {
          color: #facc15;
          transform: translateX(4px);
        }
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
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
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
        .animate-slideLeft {
          animation: slideLeft 0.8s ease-out forwards;
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
        .animate-slideRight {
          animation: slideRight 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
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
