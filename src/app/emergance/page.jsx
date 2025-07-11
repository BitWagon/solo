"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Wrench, Car, Shield, Zap, CheckCircle, Star, ArrowRight, Menu, X } from 'lucide-react';

const EmergencyCarServices = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "24/7 Roadside Assistance",
      description: "Emergency towing and roadside support whenever you need it"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Mobile Mechanics",
      description: "Professional mechanics come to your location for repairs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Jump Start Service",
      description: "Dead battery? We'll get you back on the road quickly"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Lockout Service",
      description: "Locked out of your car? We provide safe key retrieval"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Incredible service! They arrived within 20 minutes and fixed my car on the spot."
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Professional, fast, and affordable. Highly recommend their emergency services."
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "Saved my day when I was stranded. The technician was skilled and friendly."
    }
  ];

  // Generate stars for background
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
  };

  const stars = generateStars(100);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">
      {/* Animated Star Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-yellow-400 rounded-full animate-star-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Emergency
              <span className="text-yellow-400 block animate-pulse">Auto Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stranded? Don't panic! Our expert technicians are ready to rescue you 24/7 with fast, reliable emergency auto services.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <a href="/contact">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group">
              <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Call Now: (555) 123-HELP
            </button>
            </a>
            <a href="/get-quote">
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Get Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '24/7', label: 'Available' },
              { number: '15min', label: 'Avg Response' },
              { number: '1000+', label: 'Cars Rescued' },
              { number: '5★', label: 'Rating' }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center">
            <Clock className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <div className="absolute bottom-40 right-10 animate-float-delayed">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-400">Emergency Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional automotive emergency services available around the clock to get you back on the road
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-white/10 ${
                  activeService === index ? 'border-yellow-400 bg-yellow-400/10' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="text-yellow-400 mb-4 transform transition-transform hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-yellow-400">Works</span>
            </h2>
            <p className="text-xl text-gray-300">Simple steps to get emergency help</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Call Us', description: 'Contact our 24/7 hotline and describe your emergency' },
              { step: '02', title: 'We Dispatch', description: 'Our nearest technician is immediately dispatched to your location' },
              { step: '03', title: 'Problem Solved', description: 'Expert service gets you back on the road quickly and safely' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-yellow-400">Customers Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-yellow-400">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400 text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Emergency Auto Service?
          </h2>
          <p className="text-xl mb-8 opacity-80">
            Don't wait - our expert technicians are standing by 24/7 to help you
          </p>
          <a href="/contact">
          <button className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 text-xl">
            <Phone className="w-6 h-6 mr-2 inline" />
            Call (555) 123-HELP Now
          </button>
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes star-twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-star-twinkle {
          animation: star-twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EmergencyCarServices;