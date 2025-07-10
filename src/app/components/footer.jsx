"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Clock, Mail, Facebook, Twitter, Instagram, Youtube, Star, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white overflow-hidden">
      {/* Newsletter Section */}
      <div className="bg-yellow-500 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`flex flex-col lg:flex-row items-center justify-between transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h3 className="text-2xl font-bold mb-2">Stay Updated with Our Latest Services</h3>
              <p className="text-lg opacity-90">Get exclusive deals and maintenance tips delivered to your inbox</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-gray-900 rounded-l-lg sm:rounded-r-none rounded-r-lg border-none focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 transform focus:scale-105"
                required
              />
              <button 
                type="submit"
                className={`bg-gray-900 text-white px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg hover:bg-gray-800 transition-all duration-300 font-semibold flex items-center justify-center transform hover:scale-105 ${
                  isSubscribed ? 'bg-green-600 hover:bg-green-700' : ''
                }`}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                  isSubscribed ? 'rotate-90' : ''
                }`} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-100 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="flex items-center">
              <div className="bg-yellow-500 text-white p-2 rounded-lg mr-3 transition-all duration-300 hover:bg-yellow-600 hover:scale-110 hover:rotate-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                  H
                </div>
              </div>
              <div>
                <h2 className="text-xl font-serif hover:text-yellow-500 transition-colors duration-300">HackMob</h2>
                <p className="text-sm text-gray-300">Auto Services</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted automotive service provider for over 25 years. We deliver quality repairs, maintenance, and customer satisfaction you can count on.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h3 className="text-lg font-semibold mb-6 text-yellow-500 relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-500 group-hover:w-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                'Oil Change Service',
                'Brake Repair & Service',
                'Engine Diagnostics',
                'Transmission Repair',
                'Tire Installation',
                'AC Repair Service'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-all duration-300 flex items-center group transform hover:translate-x-2">
                    <ArrowRight className="w-4 h-4 mr-2 text-yellow-500 transition-transform duration-300 group-hover:translate-x-1" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h3 className="text-lg font-semibold mb-6 text-yellow-500">Quick Links</h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Service Areas',
                'Pricing & Packages',
                'Customer Reviews',
                'Career Opportunities',
                'Contact Us'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 transition-all duration-300 flex items-center group transform hover:translate-x-2">
                    <ArrowRight className="w-4 h-4 mr-2 text-yellow-500 transition-transform duration-300 group-hover:translate-x-1" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <h3 className="text-lg font-semibold mb-6 text-yellow-500">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">123 Auto Service Street</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-400">24/7 Emergency Service</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">info@audeck.com</p>
                  <p className="text-sm text-gray-400">Get a free quote</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Clock className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className={`mt-12 pt-8 border-t border-gray-800 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-yellow-500 mb-2">What Our Customers Say</h3>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className="w-5 h-5 text-yellow-500 fill-current" 
                />
              ))}
              <span className="text-gray-300 ml-2">4.9/5 Based on 500+ Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'John Smith',
                initial: 'J',
                review: 'Excellent service! They fixed my brake issue quickly and professionally. Highly recommend AUDECK for all your auto needs.'
              },
              {
                name: 'Sarah Johnson',
                initial: 'S',
                review: 'Great pricing and honest mechanics. They explained everything clearly and didn\'t try to upsell unnecessary services.'
              },
              {
                name: 'Mike Davis',
                initial: 'M',
                review: 'Fast, reliable service with fair prices. The team at AUDECK knows their stuff. Will definitely be back!'
              }
            ].map((review, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 p-6 rounded-lg transition-all duration-1000 transform hover:scale-105 hover:shadow-xl hover:bg-gray-750 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic hover:text-white transition-colors duration-300">"{review.review}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 hover:bg-yellow-600 hover:scale-110">
                    {review.initial}
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-semibold">{review.name}</p>
                    <p className="text-gray-400 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2024 AUDECK Auto Services. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gray-750 {
          background-color: #374151;
        }
      `}</style>
    </footer>
  );
};

export default Footer;