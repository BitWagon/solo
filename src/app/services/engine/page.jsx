"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Wrench, CheckCircle, Star, ArrowRight, Menu, X } from 'lucide-react';

export default function EngineRepairPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Complete Engine Overhaul",
      description: "Full engine rebuild with premium parts and 2-year warranty",
      price: "From $2,500",
      features: ["Complete disassembly", "Precision machining", "New gaskets & seals", "Performance testing"]
    },
    {
      title: "Diagnostic & Repair",
      description: "Advanced computer diagnostics and targeted repairs",
      price: "From $150",
      features: ["OBD-II scanning", "Visual inspection", "Road testing", "Detailed report"]
    },
    {
      title: "Preventive Maintenance",
      description: "Keep your engine running smoothly with regular service",
      price: "From $89",
      features: ["Oil change", "Filter replacement", "Belt inspection", "Fluid top-off"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Incredible service! My car runs like new after their engine repair.",
      location: "Downtown"
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Professional team, fair prices, and exceptional quality work.",
      location: "Westside"
    },
    {
      name: "Emma Davis",
      rating: 5,
      text: "They saved me thousands with their expert diagnosis and repair.",
      location: "Eastside"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-yellow-400 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-yellow-400 mr-3" />
              <span className="text-xl font-bold text-yellow-400">ProEngine</span>
            </div>
            
          
        

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-yellow-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-yellow-400">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-white hover:text-yellow-400">Services</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-yellow-400">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-white hover:text-yellow-400">Reviews</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-yellow-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Expert</span>{' '}
              <span className="text-yellow-400 animate-pulse">Engine</span>{' '}
              <span className="text-white">Repair</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional engine diagnostics, repair, and rebuilding services with 
              <span className="text-yellow-400 font-semibold"> 25+ years of experience</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services/transmission">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105">
                Schedule Service
              </button>
              </a>
              <a href="/emergance">
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all">
                Emergency Repair
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive engine repair solutions for all makes and models
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-black rounded-xl p-8 border-2 transition-all cursor-pointer transform hover:scale-105 ${
                  activeService === index ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' : 'border-gray-700 hover:border-yellow-400'
                }`}
                onClick={() => setActiveService(index)}
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-3xl font-bold text-white mb-6">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-yellow-400">ProEngine</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">25+ Years Experience</h3>
                    <p className="text-gray-300">Decades of expertise in engine repair and rebuilding</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Latest Technology</h3>
                    <p className="text-gray-300">State-of-the-art diagnostic equipment and tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Warranty Guaranteed</h3>
                    <p className="text-gray-300">All repairs backed by comprehensive warranty</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5000+</div>
                  <div className="text-gray-300">Engines Repaired</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-gray-300">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2 Year</div>
                  <div className="text-gray-300">Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-yellow-400">Customers</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black rounded-xl p-8 border border-gray-700 hover:border-yellow-400 transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      
    </div>
  );
}