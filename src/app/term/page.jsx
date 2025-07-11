"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Scale, Shield, Users, FileText, AlertTriangle, Eye, Clock } from 'lucide-react';

const AnimatedTOSPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <Scale className="w-6 h-6" />,
      content: 'By accessing and using our service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Protection',
      icon: <Shield className="w-6 h-6" />,
      content: 'We are committed to protecting your privacy. Your personal information is collected, used, and shared in accordance with our Privacy Policy. We implement appropriate security measures to protect your data.'
    },
    {
      id: 'user-conduct',
      title: 'User Conduct',
      icon: <Users className="w-6 h-6" />,
      content: 'Users must not engage in any activity that disrupts or interferes with our services. This includes but is not limited to: harassment, spam, malicious code distribution, or any illegal activities.'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <FileText className="w-6 h-6" />,
      content: 'All content, features, and functionality of our service are owned by us and are protected by international copyright, trademark, and other intellectual property laws.'
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers & Limitations',
      icon: <AlertTriangle className="w-6 h-6" />,
      content: 'Our service is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of our service, including but not limited to direct, indirect, or consequential damages.'
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Enforcement',
      icon: <Eye className="w-6 h-6" />,
      content: 'We reserve the right to monitor user activity and enforce these terms. Violation of these terms may result in suspension or termination of your account without prior notice.'
    },
    {
      id: 'updates',
      title: 'Terms Updates',
      icon: <Clock className="w-6 h-6" />,
      content: 'We may update these terms from time to time. Users will be notified of significant changes. Continued use of the service after updates constitutes acceptance of the new terms.'
    }
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-bounce"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />
        <div 
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-yellow-500 rounded-full opacity-5"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent animate-pulse">
              Terms of Service
            </h1>
            <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8 animate-pulse" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Clear, transparent terms that govern our relationship with you
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        {/* Last Updated */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 bg-opacity-20 rounded-full px-6 py-3 border border-yellow-400 border-opacity-30">
            <p className="text-yellow-400 font-medium">
              Last Updated: January 15, 2025
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`transform transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-10 overflow-hidden hover:bg-opacity-10 transition-all duration-300">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-yellow-400 hover:bg-opacity-5 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-yellow-400 bg-opacity-20 rounded-xl group-hover:bg-opacity-30 transition-all duration-300">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
                      {section.title}
                    </h2>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activeSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-8 pt-0">
                    <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6" />
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-3xl p-8 text-black">
            <h3 className="text-3xl font-bold mb-4">Questions About These Terms?</h3>
            <p className="text-lg mb-6 opacity-80">
              We're here to help clarify anything that might be unclear.
            </p>
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors duration-300 transform hover:scale-105">
              Contact Legal Team
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-500">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />
          <p className="text-sm">
            These terms are effective as of the date listed above and supersede all prior agreements.
          </p>
        </footer>
      </main>

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 z-20">
        <div className="bg-yellow-400 bg-opacity-20 backdrop-blur-sm rounded-full p-4 border border-yellow-400 border-opacity-30 animate-pulse">
          <Scale className="w-6 h-6 text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedTOSPage;