"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Wrench, Clock, Shield, Star, MapPin, Phone, Mail, Car, Zap, Award, CheckCircle, ArrowRight, Calendar, Users, Gauge } from 'lucide-react';

const OilChangeService = () => {
  const [selectedService, setSelectedService] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [animateCounter, setAnimateCounter] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      id: 'conventional',
      name: 'Conventional Oil Change',
      price: '$29.99',
      originalPrice: '$39.99',
      description: 'Standard oil change with conventional motor oil',
      duration: '30 minutes',
      includes: ['Oil change', 'Filter replacement', 'Fluid top-off', 'Basic inspection'],
      popular: false,
      gradient: 'from-gray-100 to-gray-200',
      icon: '🔧'
    },
    {
      id: 'synthetic-blend',
      name: 'Synthetic Blend Oil Change',
      price: '$39.99',
      originalPrice: '$49.99',
      description: 'Premium blend for better engine protection',
      duration: '30 minutes',
      includes: ['Premium blend oil', 'High-quality filter', 'Fluid top-off', 'Multi-point inspection'],
      popular: true,
      gradient: 'from-yellow-100 to-yellow-200',
      icon: '⚡'
    },
    {
      id: 'full-synthetic',
      name: 'Full Synthetic Oil Change',
      price: '$49.99',
      originalPrice: '$59.99',
      description: 'Maximum protection with full synthetic oil',
      duration: '45 minutes',
      includes: ['Full synthetic oil', 'Premium filter', 'Complete fluid check', 'Comprehensive inspection'],
      popular: false,
      gradient: 'from-yellow-200 to-yellow-300',
      icon: '🛡️'
    },
    {
      id: 'high-mileage',
      name: 'High Mileage Oil Change',
      price: '$44.99',
      originalPrice: '$54.99',
      description: 'Special formula for vehicles over 75,000 miles',
      duration: '35 minutes',
      includes: ['High-mileage formula', 'Seal conditioner', 'Leak prevention', 'Senior vehicle care'],
      popular: false,
      gradient: 'from-blue-100 to-blue-200',
      icon: '🚗'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Incredibly fast service! My car feels brand new after the synthetic oil change.",
      vehicle: "2019 Honda Civic"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Professional staff and transparent pricing. I trust them with my family's vehicles.",
      vehicle: "2021 Toyota Camry"
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      comment: "Been coming here for 3 years. Consistently excellent service every time!",
      vehicle: "2018 Ford Explorer"
    }
  ];

  const stats = [
    { number: '15000+', label: 'Happy Customers', icon: Users },
    { number: '99.9%', label: 'Satisfaction Rate', icon: Star },
    { number: '20min', label: 'Average Service Time', icon: Clock },
    { number: '5+', label: 'Years Experience', icon: Award }
  ];

  useEffect(() => {
    setAnimateCounter(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  const AnimatedCounter = ({ target, suffix = '' }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!animateCounter) return;
      
      const isPercentage = target.includes('%');
      const isTime = target.includes('min');
      const targetNumber = parseInt(target.replace(/[^0-9]/g, ''));
      
      let start = 0;
      const increment = targetNumber / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
      
      return () => clearInterval(timer);
    }, [target, animateCounter]);

    return (
      <span className="text-4xl font-bold text-yellow-400">
        {count.toLocaleString()}{target.includes('%') ? '%' : target.includes('min') ? 'min' : '+'}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
   
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-400/5 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-black text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-bounce">
            <Zap className="w-4 h-4" />
            <span>Premium Oil Change Services</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent leading-tight">
            NEXT-LEVEL
            <br />
            <span className="text-yellow-400">OIL CHANGE</span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of automotive care with our lightning-fast, 
            precision-engineered oil change services that keep your engine purring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
            <button className="group bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center">
                Book Instantly
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            </a>
            <a href="/services/brake">
            <button className="group bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </span>
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <AnimatedCounter target={stat.number} />
                <p className="text-white text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Service Selector */}
      <section className="py-20 bg-gradient-to-br from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-bold text-black mb-4">Choose Your Experience</h3>
              <p className="text-xl text-gray-600">Tailored services for every vehicle and budget</p>
            </div>
            
            {/* Custom Dropdown with Animation */}
            <div className="relative mb-12">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white border-3 border-yellow-400 rounded-3xl px-8 py-6 flex items-center justify-between text-left hover:border-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Car className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-black block">
                      {selectedService ? selectedService.name : 'Select Your Perfect Service'}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {selectedService ? `${selectedService.duration} • ${selectedService.includes.length} services included` : 'Choose from our premium service options'}
                    </span>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-black transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-3 border-yellow-400 rounded-3xl mt-4 shadow-2xl z-20 overflow-hidden">
                  {services.map((service, index) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className={`w-full px-8 py-6 text-left hover:bg-gradient-to-r ${service.gradient} transition-all duration-300 border-b border-gray-100 last:border-b-0 relative overflow-hidden group`}
                    >
                      {service.popular && (
                        <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                          MOST POPULAR
                        </div>
                      )}
                      
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl">{service.icon}</span>
                            <h4 className="font-bold text-black text-lg">{service.name}</h4>
                          </div>
                          <p className="text-gray-600 mb-3">{service.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.includes.map((item, idx) => (
                              <span key={idx} className="bg-white/80 text-black text-xs px-2 py-1 rounded-full border border-gray-200">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right ml-6">
                          <div className="mb-2">
                            <span className="text-2xl font-bold text-yellow-600">{service.price}</span>
                            <span className="text-sm text-gray-400 line-through ml-2">{service.originalPrice}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced Selected Service Display */}
            {selectedService && (
              <div className="bg-gradient-to-r from-white to-yellow-50 border-3 border-yellow-400 rounded-3xl p-8 shadow-2xl transform animate-in">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl">
                      {selectedService.icon}
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-black">{selectedService.name}</h4>
                      <p className="text-gray-600 text-lg">{selectedService.description}</p>
                    </div>
                  </div>
                  {selectedService.popular && (
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xl font-bold text-black mb-4">What's Included</h5>
                    <div className="space-y-3">
                      {selectedService.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-yellow-600">{selectedService.price}</span>
                      <span className="text-xl text-gray-400 line-through ml-3">{selectedService.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-end space-x-4 text-gray-500 mb-6">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedService.duration}
                      </span>
                      <span className="flex items-center">
                        <Shield className="w-4 h-4 mr-1" />
                        Guaranteed
                      </span>
                    </div>
                    <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      Book This Service →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">What Our Customers Say</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic">"{testimonials[currentTestimonial].comment}"</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-black">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-500">{testimonials[currentTestimonial].vehicle}</p>
                </div>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-yellow-400' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Modern Design */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-black mb-12">Ready to Experience Excellence?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: MapPin, title: "Visit Us", info: "123 Main Street\nCity, State 12345" },
                { icon: Phone, title: "Call Now", info: "(555) 123-4567\nOpen 7 Days a Week" },
                { icon: Mail, title: "Email", info: "info@quicklubepro.com\n24/7 Support" }
              ].map((contact, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 hover:bg-white/30 transition-all duration-300">
                  <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">{contact.title}</h4>
                  <p className="text-black/80 whitespace-pre-line">{contact.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: animate-in 0.6s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default OilChangeService;