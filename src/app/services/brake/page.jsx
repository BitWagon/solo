'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Wrench,
  Car,
  Zap,
  Award,
  Phone,
  Calendar,
  ArrowRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const BrakeServicePage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [brakeWearLevel, setBrakeWearLevel] = useState(30);
  const [showAnimation, setShowAnimation] = useState(false);

  // Auto-cycle brake wear animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (showAnimation) {
        setBrakeWearLevel(prev => {
          const newLevel = prev + 10;
          return newLevel > 90 ? 10 : newLevel;
        });
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [showAnimation]);

  const services = [
    {
      id: 1,
      title: "Complete Brake Inspection",
      description: "Comprehensive 47-point brake system analysis",
      price: "$89",
      duration: "30 min",
      features: ["Brake pad thickness measurement", "Rotor surface inspection", "Brake fluid analysis", "Caliper function test"],
      color: "from-yellow-400 to-yellow-500"
    },
    {
      id: 2,
      title: "Brake Pad Replacement",
      description: "Premium brake pads with lifetime warranty",
      price: "$299",
      duration: "90 min",
      features: ["High-performance brake pads", "Rotor resurfacing", "Brake fluid top-off", "Road test included"],
      color: "from-black to-gray-800"
    },
    {
      id: 3,
      title: "Complete Brake Service",
      description: "Full brake system overhaul and optimization",
      price: "$599",
      duration: "3 hours",
      features: ["New brake pads & rotors", "Brake fluid flush", "Caliper service", "Performance optimization"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 4,
      title: "Emergency Brake Repair",
      description: "Same-day brake repairs for safety issues",
      price: "$199",
      duration: "60 min",
      features: ["Immediate safety assessment", "Quick repair solutions", "Temporary fixes available", "Priority service"],
      color: "from-gray-800 to-black"
    }
  ];

  const warningSignals = [
    { icon: <AlertTriangle className="w-6 h-6" />, text: "Squealing or grinding noises", severity: "high" },
    { icon: <AlertTriangle className="w-6 h-6" />, text: "Vibrations when braking", severity: "medium" },
    { icon: <AlertTriangle className="w-6 h-6" />, text: "Soft or spongy brake pedal", severity: "high" },
    { icon: <AlertTriangle className="w-6 h-6" />, text: "Brake warning light", severity: "high" },
    { icon: <AlertTriangle className="w-6 h-6" />, text: "Burning smell after braking", severity: "medium" },
    { icon: <AlertTriangle className="w-6 h-6" />, text: "Car pulls to one side", severity: "medium" }
  ];

  const BrakeSystemVisualization = () => (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 overflow-hidden border border-gray-300 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 animate-pulse"></div>
      
      {/* Brake Disc */}
      <motion.div
        className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: showAnimation ? 360 : 0 }}
        transition={{ duration: 3, repeat: showAnimation ? Infinity : 0, ease: "linear" }}
      >
        <div className="w-32 h-32 border-8 border-gray-600 rounded-full relative shadow-lg">
          <div className="absolute inset-2 border-4 border-gray-700 rounded-full">
            <div className="absolute inset-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
          </div>
          {/* Brake disc holes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full shadow-inner"
              style={{
                top: `${50 + 30 * Math.sin(i * Math.PI / 4)}%`,
                left: `${50 + 30 * Math.cos(i * Math.PI / 4)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Brake Pads */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-6 rounded shadow-lg"
          style={{
            background: `linear-gradient(to right, 
              ${brakeWearLevel > 70 ? '#dc2626' : brakeWearLevel > 40 ? '#eab308' : '#16a34a'} 0%, 
              ${brakeWearLevel > 70 ? '#dc2626' : brakeWearLevel > 40 ? '#eab308' : '#16a34a'} ${100 - brakeWearLevel}%, 
              #4b5563 ${100 - brakeWearLevel}%, 
              #4b5563 100%)`
          }}
          animate={{ scale: showAnimation ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 1.5, repeat: showAnimation ? Infinity : 0 }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-6 rounded shadow-lg"
          style={{
            background: `linear-gradient(to right, 
              ${brakeWearLevel > 70 ? '#dc2626' : brakeWearLevel > 40 ? '#eab308' : '#16a34a'} 0%, 
              ${brakeWearLevel > 70 ? '#dc2626' : brakeWearLevel > 40 ? '#eab308' : '#16a34a'} ${100 - brakeWearLevel}%, 
              #4b5563 ${100 - brakeWearLevel}%, 
              #4b5563 100%)`
          }}
          animate={{ scale: showAnimation ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 1.5, repeat: showAnimation ? Infinity : 0 }}
        />
      </div>

      {/* Brake Caliper */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -left-8 -top-6 w-16 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg shadow-lg border border-yellow-600">
          <div className="absolute inset-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded"></div>
        </div>
      </div>

      {/* Brake Fluid Lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.path
          d="M200 200 Q300 150 400 200"
          stroke="url(#fluidGradient)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="8,4"
          animate={{ strokeDashoffset: showAnimation ? [0, -24] : 0 }}
          transition={{ duration: 1, repeat: showAnimation ? Infinity : 0, ease: "linear" }}
        />
        <defs>
          <linearGradient id="fluidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>

      {/* Control Panel */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowAnimation(!showAnimation)}
          className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-black hover:bg-white/90 transition-all shadow-lg border border-gray-300"
        >
          {showAnimation ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setBrakeWearLevel(10)}
          className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-black hover:bg-white/90 transition-all shadow-lg border border-gray-300"
        >
          <RotateCcw className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Wear Level Indicator */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 text-black border border-gray-300 shadow-lg">
        <div className="text-sm font-medium mb-2">Brake Pad Wear</div>
        <div className="flex items-center gap-2">
          <div className="w-20 h-2 bg-gray-300 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${
                brakeWearLevel > 70 ? 'bg-red-500' : brakeWearLevel > 40 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${brakeWearLevel}%` }}
              animate={{ width: `${brakeWearLevel}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="text-sm font-bold">{brakeWearLevel}%</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl border-2 border-yellow-600">
                <Settings className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
              Premium Brake
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">
              Service & Repair
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Your safety is our priority. Experience our cutting-edge brake service with real-time diagnostics, 
              premium components, and lifetime warranties.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all border border-yellow-600"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Book Service Now
              </motion.button>
              </a>
              <a href="/emergance">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white border border-gray-300 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Emergency Service
              </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Brake System Visualization */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Interactive Brake System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand your brake system with our interactive visualization. See how brake wear affects performance in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <BrakeSystemVisualization />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Our Brake Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional brake services with cutting-edge technology and premium components
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-yellow-400 transition-all shadow-lg hover:shadow-xl">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-bold text-black">{service.price}</span>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {selectedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-200 pt-6"
                      >
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mt-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all`}
                  >
                    Select Service
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signals */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
              Warning Signals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't ignore these brake warning signs. Your safety depends on immediate attention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl border-2 transition-all bg-white shadow-lg ${
                  signal.severity === 'high' 
                    ? 'border-red-400 hover:border-red-500' 
                    : 'border-yellow-400 hover:border-yellow-500'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    signal.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}>
                    {signal.icon}
                  </div>
                  <div>
                    <p className="text-black font-semibold">{signal.text}</p>
                    <p className={`text-sm ${
                      signal.severity === 'high' ? 'text-red-600' : 'text-yellow-600'
                    }`}>
                      {signal.severity === 'high' ? 'Critical - Immediate Attention' : 'Important - Schedule Service'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Why Choose Our Brake Service?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Safety First",
                description: "Advanced diagnostic tools and certified technicians ensure your safety on every drive."
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Premium Quality",
                description: "We use only the highest quality brake components with lifetime warranties."
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Fast Service",
                description: "Most brake services completed same day with our efficient workflow system."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-yellow-400 transition-all shadow-lg hover:shadow-xl">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 to-yellow-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Don't Compromise on Safety
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Schedule your brake service today and experience the difference of premium brake care.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all border border-yellow-600"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Book Brake Service
              </motion.button>
              </a>
              <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white border border-gray-300 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call (555) 123-BRAKE
              </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrakeServicePage;