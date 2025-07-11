"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Settings, CheckCircle, Star, ArrowRight, Menu, X, AlertTriangle, Zap, Shield } from 'lucide-react';

export default function TransmissionRepairPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Complete Transmission Rebuild",
      description: "Full transmission overhaul with OEM parts and lifetime warranty",
      price: "From $3,200",
      features: ["Complete teardown", "All new clutches & bands", "Torque converter service", "Road test included"]
    },
    {
      title: "Transmission Fluid Service",
      description: "Professional fluid change and filter replacement",
      price: "From $180",
      features: ["Fluid drain & refill", "Filter replacement", "Pan gasket service", "System inspection"]
    },
    {
      title: "Diagnostic & Repair",
      description: "Advanced computer diagnostics and targeted repairs",
      price: "From $120",
      features: ["Electronic diagnosis", "Pressure testing", "Leak detection", "Performance analysis"]
    }
  ];

  const warningSignsData = [
    { icon: AlertTriangle, title: "Slipping Gears", desc: "Transmission slips out of gear while driving" },
    { icon: Zap, title: "Rough Shifting", desc: "Hard or delayed gear changes" },
    { icon: Settings, title: "Strange Noises", desc: "Whining, grinding, or humming sounds" },
    { icon: Shield, title: "Fluid Leaks", desc: "Red fluid puddles under your vehicle" }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      rating: 5,
      text: "My transmission was slipping badly. They rebuilt it perfectly and it's been smooth for 2 years now!",
      location: "North Side"
    },
    {
      name: "Jennifer Lee",
      rating: 5,
      text: "Honest pricing and excellent work. They diagnosed the problem quickly and fixed it right.",
      location: "South Hills"
    },
    {
      name: "Robert Taylor",
      rating: 5,
      text: "Best transmission shop in town. Professional service and the warranty gives me peace of mind.",
      location: "Downtown"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-yellow-400 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-yellow-400 mr-3" />
              <span className="text-xl font-bold text-yellow-400">TransPro</span>
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
              <a href="#warning-signs" className="block px-3 py-2 text-white hover:text-yellow-400">Warning Signs</a>
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
              <span className="text-yellow-400 animate-pulse">Transmission</span>{' '}
              <span className="text-white">Repair</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional transmission services for automatic and manual transmissions with 
              <span className="text-yellow-400 font-semibold"> lifetime warranty guarantee</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/diagnostic">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105">
                Free Diagnostic
              </button>
              </a>
              <a href="/contact">
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all">
                Call Now: (555) 123-TRANS
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
              Complete transmission solutions for all vehicle types
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
                <Settings className="h-12 w-12 text-yellow-400 mb-4" />
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
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section id="warning-signs" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-yellow-400">Warning Signs</span> Your Transmission Needs Help
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't ignore these symptoms - early detection saves money
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {warningSignsData.map((sign, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8 border border-yellow-400 hover:bg-gray-800 transition-all">
                <sign.icon className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{sign.title}</h3>
                <p className="text-gray-300">{sign.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-400 text-black rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Experiencing Any of These Issues?</h3>
              <p className="text-lg mb-6">Don't wait until it's too late. Get a FREE diagnostic today!</p>
              <a href="/diagnostic">
              <button className="bg-black text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
                Schedule Free Diagnostic
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-yellow-400">TransPro</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Lifetime Warranty</h3>
                    <p className="text-gray-300">All rebuilds come with nationwide lifetime warranty</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">30+ Years Experience</h3>
                    <p className="text-gray-300">Certified transmission specialists with decades of expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Free Diagnostics</h3>
                    <p className="text-gray-300">Complete diagnostic testing at no charge</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">All Makes & Models</h3>
                    <p className="text-gray-300">Domestic, import, automatic, and manual transmissions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-xl p-8 border border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Our Promise</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-300">Satisfaction Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">15,000+</div>
                  <div className="text-gray-300">Transmissions Rebuilt</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-300">Emergency Towing</div>
                </div>
              </div>
              <a href="/contact">
              <button className="w-full mt-6 bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Get Free Quote
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-yellow-400">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-300">Real reviews from satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-yellow-400 transition-all">
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