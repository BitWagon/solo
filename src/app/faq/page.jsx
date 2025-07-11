"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Wrench, DollarSign, Shield, Car, Phone, Mail, MapPin } from 'lucide-react';

const AutoServiceFAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      category: "General Services",
      icon: <Wrench className="w-6 h-6" />,
      questions: [
        {
          question: "What types of vehicles do you service?",
          answer: "We service all makes and models of cars, trucks, SUVs, and vans. Our ASE-certified technicians are trained to work on both domestic and foreign vehicles, including hybrid and electric cars."
        },
        {
          question: "Do you provide warranty on your services?",
          answer: "Yes! We offer a comprehensive warranty on all our services. Most repairs come with a 12-month/12,000-mile warranty, giving you peace of mind and confidence in our work."
        },
        {
          question: "What services do you offer?",
          answer: "We offer a full range of automotive services including oil changes, brake repair, transmission service, engine diagnostics, AC repair, tire installation, battery replacement, and much more."
        }
      ]
    },
    {
      category: "Scheduling & Timing",
      icon: <Clock className="w-6 h-6" />,
      questions: [
        {
          question: "How do I schedule an appointment?",
          answer: "You can schedule an appointment online through our website, call us at (555) 123-4567, or visit our location. We also accept walk-ins based on availability."
        },
        {
          question: "What are your operating hours?",
          answer: "We're open Monday through Friday from 7:00 AM to 6:00 PM, and Saturday from 8:00 AM to 4:00 PM. We're closed on Sundays but offer 24/7 emergency towing services."
        },
        {
          question: "How long do typical services take?",
          answer: "Service times vary depending on the work needed. Oil changes typically take 30-45 minutes, while major repairs may take several hours or days. We'll provide you with an accurate time estimate when you schedule."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      icon: <DollarSign className="w-6 h-6" />,
      questions: [
        {
          question: "Do you provide free estimates?",
          answer: "Yes, we provide free estimates for all major repairs. For diagnostic services, there may be a small fee that will be applied toward the cost of repairs if you choose to proceed with our services."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, all major credit cards, debit cards, and personal checks. We also offer financing options for major repairs through our partner lending institutions."
        },
        {
          question: "Are your prices competitive?",
          answer: "We strive to offer competitive pricing while maintaining the highest quality standards. We provide transparent pricing with no hidden fees, and we'll always explain what work is needed and why."
        }
      ]
    },
    {
      category: "Quality & Trust",
      icon: <Shield className="w-6 h-6" />,
      questions: [
        {
          question: "Are your technicians certified?",
          answer: "Yes, all our technicians are ASE (Automotive Service Excellence) certified and undergo continuous training to stay current with the latest automotive technologies and repair techniques."
        },
        {
          question: "Do you use genuine parts?",
          answer: "We use high-quality OEM (Original Equipment Manufacturer) parts whenever possible. We also offer aftermarket alternatives when appropriate, and we'll always discuss your options with you."
        },
        {
          question: "What if I'm not satisfied with the service?",
          answer: "Customer satisfaction is our top priority. If you're not completely satisfied with our service, please contact us immediately. We'll work with you to make it right, including redoing the work if necessary."
        }
      ]
    }
  ];

  const quickStats = [
    { number: "15+", label: "Years Experience", delay: "0s" },
    { number: "5000+", label: "Happy Customers", delay: "0.2s" },
    { number: "24/7", label: "Support Available", delay: "0.4s" },
    { number: "100%", label: "Satisfaction Rate", delay: "0.6s" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-400 rounded-full opacity-20 animate-pulse"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Floating geometric shapes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute border border-yellow-400/30 animate-pulse"
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="animate-bounce mb-8 relative">
              <HelpCircle className="w-20 h-20 text-yellow-400 mx-auto" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent animate-pulse">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Get answers to common questions about our automotive services
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${hoveredStat === index ? 'scale-110' : 'scale-100'}`}
                style={{ transitionDelay: stat.delay }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="relative">
                  <div className={`text-3xl md:text-4xl font-bold text-yellow-400 mb-2 transition-all duration-300 ${
                    hoveredStat === index ? 'animate-pulse' : ''
                  }`}>
                    {stat.number}
                  </div>
                  {hoveredStat === index && (
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping"></div>
                  )}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`mb-12 transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8 group">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <div className="text-black">
                    {category.icon}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 group-hover:text-white transition-colors duration-300">
                  {category.category}
                </h2>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const itemIndex = `${categoryIndex}-${index}`;
                  const isOpen = openItems.has(itemIndex);
                  
                  return (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 group"
                    >
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 group-hover:bg-gray-750 transition-colors duration-300"
                      >
                        <span className="text-lg font-semibold text-white pr-4 group-hover:text-yellow-400 transition-colors duration-300">
                          {faq.question}
                        </span>
                        <div className={`transform transition-all duration-500 ${isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'} group-hover:text-yellow-400`}>
                          {isOpen ? (
                            <ChevronUp className="w-6 h-6 text-yellow-400" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-yellow-400" />
                          )}
                        </div>
                      </button>
                      
                      <div
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-700 pt-4">
                            <p className={`text-gray-300 leading-relaxed transition-all duration-500 ${
                              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                            }`}>
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't hesitate to reach out! Our team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className={`text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                hoveredContact === 0 ? 'bg-gray-700 shadow-2xl shadow-yellow-400/20' : ''
              }`}
              onMouseEnter={() => setHoveredContact(0)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <div className="relative">
                <Phone className="w-12 h-12 text-yellow-400 mx-auto mb-4 transition-all duration-300" />
                {hoveredContact === 0 && (
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">(555) 123-4567</p>
              <a href="/contact">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110">
                Call Now
              </button>
              </a>
            </div>
            
            <div 
              className={`text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                hoveredContact === 1 ? 'bg-gray-700 shadow-2xl shadow-yellow-400/20' : ''
              }`}
              onMouseEnter={() => setHoveredContact(1)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <div className="relative">
                <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4 transition-all duration-300" />
                {hoveredContact === 1 && (
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">info@autopro.com</p>
              <a href="/contact">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110">
                Send Email
              </button>
              </a>
            </div>
            
            <div 
              className={`text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                hoveredContact === 2 ? 'bg-gray-700 shadow-2xl shadow-yellow-400/20' : ''
              }`}
              onMouseEnter={() => setHoveredContact(2)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <div className="relative">
                <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4 transition-all duration-300" />
                {hoveredContact === 2 && (
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">123 Auto Street, City, State 12345</p>
              <a href="/contact">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110">
                Get Directions
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated background elements for CTA */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animation: `twinkle ${2 + Math.random() * 2}s infinite`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-500 group">
            <div className="relative">
              <Car className="w-16 h-16 text-yellow-400 mx-auto mb-6 group-hover:animate-bounce transition-all duration-300" />
              <div className="absolute inset-0 bg-yellow-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400 group-hover:text-white transition-colors duration-300">
              Ready to Service Your Vehicle?
            </h2>
            <p className="text-xl text-gray-300 mb-8 group-hover:text-gray-100 transition-colors duration-300">
              Experience premium automotive care with our expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/30">
                Schedule Service
              </button>
              <a href="/get-quote">
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110">
                Get Free Quote
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AutoServiceFAQ;