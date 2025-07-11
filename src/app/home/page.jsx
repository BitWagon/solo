"use client"
import React, { useState, useEffect } from 'react';
import { Car, Star, Phone, Mail, MapPin } from 'lucide-react';

const AutoServiceHomepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    { name: "John Smith", rating: 5, text: "Excellent service! My car runs like new." },
    { name: "Sarah Johnson", rating: 5, text: "Professional team and fair prices." },
    { name: "Mike Wilson", rating: 5, text: "Quick turnaround and quality work." }
  ];

  return (
    <div className="min-h-screen bg-black text-white">


      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-bounce mb-8">
            <Car className="w-20 h-20 text-yellow-400 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
            Premium Auto Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Expert automotive care with cutting-edge technology and unmatched customer service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a href="/services/transmission">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105">
              Schedule Service
            </button>
            </a>

            <a href="/get-quote">
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all">
              Get Quote
            </button>
            </a>
     
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Why Choose AutoPro?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                    <p className="text-gray-300">ASE-certified professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
                    <p className="text-gray-300">State-of-the-art diagnostic and repair tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                    <p className="text-gray-300">100% satisfaction guarantee on all services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">5000+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-gray-300">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-yellow-400">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to service your vehicle? Contact us today!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all">
              <Phone className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">(555) 123-4567</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all">
              <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">info@autopro.com</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all">
              <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">123 Auto Street, City, State 12345</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default AutoServiceHomepage;