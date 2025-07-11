"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Settings, CheckCircle, Star, ArrowRight, Menu, X, Wrench, DollarSign, Shield, Zap } from 'lucide-react';

export default function PricingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('engine');

  const pricingPlans = {
    engine: [
      {
        title: "Basic Engine Service",
        price: "$89",
        duration: "1-2 hours",
        description: "Essential maintenance to keep your engine running smoothly",
        features: [
          "Oil change (up to 5 quarts)",
          "Oil filter replacement",
          "Visual inspection",
          "Fluid level check",
          "Battery test",
          "Basic diagnostic scan"
        ],
        popular: false,
        buttonText: "Book Service"
      },
      {
        title: "Complete Engine Diagnostic",
        price: "$150",
        duration: "2-3 hours",
        description: "Comprehensive engine analysis and performance testing",
        features: [
          "Advanced computer diagnostics",
          "Compression test",
          "Leak detection",
          "Performance analysis",
          "Detailed written report",
          "Repair recommendations"
        ],
        popular: true,
        buttonText: "Schedule Now"
      },
      {
        title: "Full Engine Rebuild",
        price: "$2,500+",
        duration: "3-5 days",
        description: "Complete engine overhaul with premium parts",
        features: [
          "Complete disassembly",
          "Precision machining",
          "New gaskets & seals",
          "Performance upgrades available",
          "2-year warranty",
          "Road testing included"
        ],
        popular: false,
        buttonText: "Get Quote"
      }
    ],
    transmission: [
      {
        title: "Transmission Service",
        price: "$180",
        duration: "1-2 hours",
        description: "Professional fluid change and maintenance",
        features: [
          "Fluid drain & refill",
          "Filter replacement",
          "Pan gasket service",
          "System inspection",
          "Road test",
          "Service documentation"
        ],
        popular: false,
        buttonText: "Book Service"
      },
      {
        title: "Transmission Diagnostic",
        price: "$120",
        duration: "2-3 hours",
        description: "Advanced diagnostic testing and analysis",
        features: [
          "Electronic diagnosis",
          "Pressure testing",
          "Leak detection",
          "Performance analysis",
          "Detailed report",
          "Repair estimate"
        ],
        popular: true,
        buttonText: "Schedule Now"
      },
      {
        title: "Complete Transmission Rebuild",
        price: "$3,200+",
        duration: "3-7 days",
        description: "Full transmission overhaul with lifetime warranty",
        features: [
          "Complete teardown",
          "All new clutches & bands",
          "Torque converter service",
          "Updated programming",
          "Lifetime warranty",
          "Performance testing"
        ],
        popular: false,
        buttonText: "Get Quote"
      }
    ]
  };

  const additionalServices = [
    { service: "Emergency Diagnostic", price: "$75", note: "After hours service" },
    { service: "Towing Service", price: "$95", note: "Within 20 miles" },
    { service: "Mobile Service", price: "$50", note: "Service fee + parts" },
    { service: "Rush Service", price: "+50%", note: "Same day completion" },
    { service: "Warranty Extension", price: "$200", note: "Additional year coverage" },
    { service: "Performance Tune", price: "$150", note: "ECU optimization" }
  ];

  const warranties = [
    {
      icon: Shield,
      title: "Parts Warranty",
      duration: "2 Years",
      description: "All OEM and aftermarket parts covered"
    },
    {
      icon: Wrench,
      title: "Labor Warranty",
      duration: "1 Year",
      description: "100% labor warranty on all repairs"
    },
    {
      icon: Settings,
      title: "Rebuild Warranty",
      duration: "Lifetime",
      description: "Lifetime warranty on transmission rebuilds"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-yellow-400 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-yellow-400 mr-3" />
              <span className="text-xl font-bold text-yellow-400">AutoPro Pricing</span>
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
              <a href="#pricing" className="block px-3 py-2 text-white hover:text-yellow-400">Pricing</a>
              <a href="#additional" className="block px-3 py-2 text-white hover:text-yellow-400">Additional Services</a>
              <a href="#warranty" className="block px-3 py-2 text-white hover:text-yellow-400">Warranty</a>
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
              <span className="text-white">Transparent</span>{' '}
              <span className="text-yellow-400 animate-pulse">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              No hidden fees, no surprises. Just honest pricing for quality automotive repair services with 
              <span className="text-yellow-400 font-semibold"> upfront estimates</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105">
                Get Free Estimate
              </button>
              </a>
              <a href="/get-quote">
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all">
                Call for Quote
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Service <span className="text-yellow-400">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Choose from our comprehensive service packages
            </p>
            
            {/* Category Selector */}
            <div className="flex justify-center mb-12">
              <div className="bg-black rounded-lg p-1 border border-yellow-400">
                <button
                  onClick={() => setSelectedCategory('engine')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCategory === 'engine' 
                      ? 'bg-yellow-400 text-black' 
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  <Wrench className="h-5 w-5 inline mr-2" />
                  Engine Services
                </button>
                <button
                  onClick={() => setSelectedCategory('transmission')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCategory === 'transmission' 
                      ? 'bg-yellow-400 text-black' 
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  <Settings className="h-5 w-5 inline mr-2" />
                  Transmission Services
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans[selectedCategory].map((plan, index) => (
              <div
                key={index}
                className={`bg-black rounded-xl p-8 border-2 transition-all transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-yellow-400 shadow-lg shadow-yellow-400/20 relative' 
                    : 'border-gray-700 hover:border-yellow-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{plan.title}</h3>
                  <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                  <div className="text-gray-400">{plan.duration}</div>
                </div>
                
                <p className="text-gray-300 mb-6 text-center">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                    : 'bg-gray-700 text-white hover:bg-yellow-400 hover:text-black'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-400 text-black rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-2">Price Match Guarantee</h3>
              <p className="text-lg">We'll match any competitor's written estimate for the same service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="additional" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Additional <span className="text-yellow-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Extra services to meet all your automotive needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((item, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-yellow-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{item.service}</h3>
                  <span className="text-2xl font-bold text-yellow-400">{item.price}</span>
                </div>
                <p className="text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              * Prices subject to change based on vehicle make, model, and specific requirements
            </p>
            <a href="/contact">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">
              Request Custom Quote
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section id="warranty" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Warranty</span> Promise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We stand behind our work with comprehensive warranty coverage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {warranties.map((warranty, index) => (
              <div key={index} className="bg-black rounded-xl p-8 border border-yellow-400 text-center">
                <warranty.icon className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{warranty.title}</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-4">{warranty.duration}</div>
                <p className="text-gray-300">{warranty.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-400 text-black rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">100% Satisfaction Guarantee</h3>
            <p className="text-lg mb-6">
              If you're not completely satisfied with our service, we'll make it right - guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>No questions asked</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Money back guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Free re-service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      

     
    </div>
  );
}