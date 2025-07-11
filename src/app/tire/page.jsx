"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Clock, Shield, Wrench, Car, CheckCircle, Phone, MapPin, Calendar } from 'lucide-react';

const TireInstallationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Professional Installation",
      description: "Expert technicians install your tires with precision and care",
      price: "$25-45",
      features: ["Wheel balancing", "Valve stem replacement", "Pressure check"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tire Repair & Patching",
      description: "Quick and reliable tire repair services to get you back on the road",
      price: "$15-30",
      features: ["Puncture repair", "Sidewall inspection", "Safety assessment"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Wheel Alignment",
      description: "Precise wheel alignment for optimal tire performance and longevity",
      price: "$75-120",
      features: ["4-wheel alignment", "Suspension check", "Tire wear analysis"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Express Service",
      description: "Fast tire installation for customers on the go",
      price: "$35-55",
      features: ["Under 30 minutes", "While you wait", "Premium service"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Outstanding service! They had my tires installed in under 20 minutes with perfect precision.",
      location: "Downtown Customer"
    },
    {
      name: "Mike Rodriguez",
      rating: 5,
      text: "Best tire shop in town. Professional, fast, and reasonably priced. Highly recommend!",
      location: "Regular Customer"
    },
    {
      name: "Emily Chen",
      rating: 5,
      text: "Excellent customer service and quality work. My car drives like new with the new tires.",
      location: "First-time Customer"
    }
  ];

  const features = [
    "State-of-the-art equipment",
    "Certified technicians",
    "90-day warranty",
    "Free tire rotation",
    "Road hazard protection",
    "Mobile service available"
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-yellow-400 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-semibold mb-6 animate-pulse">
              <Star className="w-4 h-4 mr-2" />
              #1 Rated Tire Installation Service
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              PROFESSIONAL
              <span className="block text-yellow-400 text-6xl md:text-8xl animate-bounce">
                TIRE
              </span>
              INSTALLATION
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert tire installation services with cutting-edge technology and unmatched precision. 
              Get back on the road safely and quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Book Installation
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated tire graphics */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 border-8 border-yellow-400 rounded-full animate-spin opacity-20"></div>
        <div className="absolute -top-10 -right-10 w-24 h-24 border-8 border-yellow-400 rounded-full animate-spin opacity-30" style={{animationDirection: 'reverse'}}></div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              OUR <span className="text-yellow-400">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tire services designed to keep you safe and your vehicle performing at its best
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg border-2 border-transparent hover:border-yellow-400 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  activeService === index ? 'border-yellow-400 scale-105' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="text-yellow-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-yellow-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                WHY CHOOSE <span className="text-yellow-400">US?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We combine years of experience with state-of-the-art technology to deliver 
                exceptional tire installation services that exceed your expectations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 animate-pulse"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-yellow-400 rounded-full w-80 h-80 mx-auto flex items-center justify-center animate-pulse">
                <Car className="w-32 h-32 text-black" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center animate-bounce">
                <Wrench className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              CUSTOMER <span className="text-yellow-400">REVIEWS</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg border-l-4 border-yellow-400">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-800 mb-4 italic">
                "{testimonials[testimonialIndex].text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">
                    {testimonials[testimonialIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonials[testimonialIndex].name}</p>
                  <p className="text-gray-600">{testimonials[testimonialIndex].location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your tire installation appointment today and experience the difference 
            professional service makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-TIRE
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-yellow-400 transition-all duration-300 flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Online
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">ProTire Install</h3>
              <p className="text-gray-300">
                Your trusted partner for professional tire installation services. 
                Quality, speed, and reliability guaranteed.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-TIRE
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  123 Auto Street, City, State 12345
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="space-y-1 text-gray-300">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 5:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ProTire Install. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TireInstallationPage;