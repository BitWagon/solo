"use client";
import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, CheckCircle, Wrench, Thermometer, Wind, Snowflake, Car, Calendar, Users, Award } from 'lucide-react';

const ACRepairService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "AC System Diagnosis",
      description: "Complete diagnostic testing to identify AC issues quickly and accurately.",
      price: "$89"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Compressor Repair",
      description: "Professional compressor repair and replacement services for all car models.",
      price: "$299"
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "Refrigerant Recharge",
      description: "Eco-friendly refrigerant recharge to restore your AC's cooling power.",
      price: "$149"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Full AC Service",
      description: "Complete AC system service including cleaning, testing, and maintenance.",
      price: "$199"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing service! My car AC was fixed in no time. The team was professional and the pricing was fair.",
      car: "Honda Civic 2020"
    },
    {
      name: "Mike Rodriguez",
      rating: 5,
      text: "Best AC repair service in town. They diagnosed the problem quickly and had me back on the road with cool air.",
      car: "Toyota Camry 2019"
    },
    {
      name: "Emily Chen",
      rating: 5,
      text: "Excellent work and great customer service. My AC is working better than ever. Highly recommend!",
      car: "BMW X3 2021"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "5000+", label: "Happy Customers" },
    { icon: <Wrench className="w-6 h-6" />, number: "15+", label: "Years Experience" },
    { icon: <Award className="w-6 h-6" />, number: "98%", label: "Success Rate" },
    { icon: <Clock className="w-6 h-6" />, number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-400 rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Beat the Heat with 
              <span className="text-yellow-400 block animate-pulse">Expert AC Repair</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Professional automotive AC repair and maintenance services. Get your car's cooling system running like new with our certified technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
                Schedule Service
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105">
                Get Quote
              </button>
            </div>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-6 rounded-2xl text-black">
                  <h3 className="text-2xl font-bold mb-4 text-center">Emergency Service</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>24/7 Available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Same Day Service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>All Car Models</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Certified Technicians</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-black text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-black font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete automotive AC solutions for all makes and models
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 ${
                  activeService === index ? 'border-yellow-400 bg-yellow-50' : 'border-transparent'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="text-yellow-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-black">{service.price}</span>
                  <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from satisfied customers
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-8">
                    <div className="bg-white text-black p-8 rounded-2xl shadow-2xl">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="font-bold text-black">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.car}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-400 to-yellow-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Cool Down?
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Don't let a broken AC ruin your drive. Contact us today for fast, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now: (555) 123-COOL
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all transform hover:scale-105">
              <Calendar className="w-5 h-5 inline mr-2" />
              Book Online
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Snowflake className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-xl font-bold">CoolCar AC</h3>
            </div>
            <p className="text-gray-400">Your trusted automotive AC repair specialists since 2008.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AC Diagnosis</li>
              <li>Compressor Repair</li>
              <li>Refrigerant Recharge</li>
              <li>Full AC Service</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-COOL</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Auto St, Car City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition-colors">
                <span className="text-black font-bold text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition-colors">
                <span className="text-black font-bold text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition-colors">
                <span className="text-black font-bold text-sm">i</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CoolCar AC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ACRepairService;