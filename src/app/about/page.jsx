"use client"
import React, { useState, useEffect } from 'react';
import { Car, Users, Award, Clock, Shield, Star, CheckCircle, Target, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "15+", label: "Years Experience", icon: <Clock className="w-8 h-8" /> },
    { number: "10K+", label: "Cars Serviced", icon: <Car className="w-8 h-8" /> },
    { number: "50+", label: "Expert Technicians", icon: <Users className="w-8 h-8" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trust & Reliability",
      description: "We build lasting relationships through honest service and transparent pricing"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Excellence in Service",
      description: "Committed to delivering the highest quality automotive care in every job"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Customer First",
      description: "Your satisfaction and safety are our top priorities in everything we do"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation",
      description: "Embracing cutting-edge technology and modern techniques for better results"
    }
  ];

  const timeline = [
    { year: "2009", title: "Founded", description: "Started as a small family-owned garage with 3 technicians" },
    { year: "2012", title: "Expansion", description: "Opened second location and expanded our service offerings" },
    { year: "2015", title: "Certification", description: "Achieved ASE certification and became an authorized dealer" },
    { year: "2018", title: "Technology", description: "Invested in state-of-the-art diagnostic equipment" },
    { year: "2021", title: "Growth", description: "Reached 10,000+ satisfied customers milestone" },
    { year: "2024", title: "Excellence", description: "Recognized as the city's top-rated auto service center" }
  ];

  const team = [
    {
      name: "John Martinez",
      role: "Master Technician",
      experience: "15 years",
      speciality: "Engine & Transmission",
      image: "👨‍🔧"
    },
    {
      name: "Sarah Wilson",
      role: "Service Manager",
      experience: "12 years",
      speciality: "Customer Relations",
      image: "👩‍💼"
    },
    {
      name: "Mike Johnson",
      role: "Diagnostic Specialist",
      experience: "10 years",
      speciality: "Electrical Systems",
      image: "👨‍🔬"
    },
    {
      name: "Lisa Chen",
      role: "Quality Control",
      experience: "8 years",
      speciality: "Final Inspection",
      image: "👩‍🔧"
    }
  ];

  const certifications = [
    "ASE Certified Master Technicians",
    "EPA 609 Certified for A/C Service",
    "NATEF Accredited Training Programs",
    "State Licensed Automotive Facility",
    "Better Business Bureau A+ Rating",
    "Automotive Service Excellence Recognition"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
    

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-bounce mb-8">
              <Target className="w-16 h-16 text-yellow-400 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
              About AutoPro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Your trusted automotive partner since 2009, delivering excellence through expertise, innovation, and unwavering commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
                  <div className="text-yellow-400 mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className={`py-20 bg-black transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Founded in 2009 by automotive enthusiast Robert Martinez, AutoPro began as a small neighborhood garage with a simple mission: to provide honest, reliable automotive service that customers could trust.
                </p>
                <p>
                  What started with just three technicians and a passion for cars has grown into the city's premier automotive service center, serving over 10,000 satisfied customers and counting.
                </p>
                <p>
                  Our commitment to excellence, continuous learning, and customer satisfaction has made us the go-to destination for automotive care in the community.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-transparent p-8 rounded-xl">
                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Mission</h3>
                  <p className="text-gray-300 mb-6">
                    To provide exceptional automotive service through skilled craftsmanship, honest communication, and genuine care for our customers' safety and satisfaction.
                  </p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-gray-300">Trusted by 10,000+ customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
                <div className="text-yellow-400 mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className={`py-20 bg-black transition-all duration-1000 ${isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Our Journey</h2>
            <p className="text-xl text-gray-300">Milestones in our automotive excellence</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Meet Our Team</h2>
            <p className="text-xl text-gray-300">Expert professionals dedicated to your automotive needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{member.name}</h3>
                <p className="text-gray-300 mb-1">{member.role}</p>
                <p className="text-sm text-gray-400 mb-2">{member.experience} experience</p>
                <p className="text-sm text-yellow-400">{member.speciality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 bg-black transition-all duration-1000 ${isVisible.certifications ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Certifications & Awards</h2>
            <p className="text-xl text-gray-300">Recognized excellence in automotive service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 flex items-center">
                <Award className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">Ready to Experience the AutoPro Difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us with their automotive needs. Schedule your service today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services/engine">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105">
              Schedule Service
            </button>
            </a>
            <a href="/get-quote">
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all">
              Get Free Quote
            </button>
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutPage;