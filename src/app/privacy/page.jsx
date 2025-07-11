"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Eye, Lock, Database, Users, Mail, AlertCircle } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'data-collection',
      title: 'Data Collection',
      icon: Database,
      content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This includes personal information like your name, email address, phone number, and payment information. We also automatically collect certain information about your device and usage patterns through cookies and similar technologies.`
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: Eye,
      content: `Your information helps us provide, maintain, and improve our services. We use it to process transactions, send you important updates, personalize your experience, and ensure the security of our platform. We may also use aggregated, non-personally identifiable information for analytics and research purposes.`
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing',
      icon: Users,
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who help us operate our business, but only under strict confidentiality agreements. We may also disclose information when required by law or to protect our rights and safety.`
    },
    {
      id: 'security',
      title: 'Security Measures',
      icon: Lock,
      content: `We implement industry-standard security measures to protect your personal information. This includes encryption, secure servers, regular security audits, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: Shield,
      content: `You have the right to access, update, or delete your personal information. You can also opt-out of certain communications and request a copy of your data. If you're in the EU, you have additional rights under GDPR. Contact us to exercise any of these rights.`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: Mail,
      content: `If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@company.com or write to us at our mailing address. We're committed to addressing your concerns promptly and transparently.`
    }
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black bg-opacity-10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100 py-20">
        <div className="absolute inset-0 bg-black bg-opacity-5" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your privacy is our priority. Learn how we collect, use, and protect your information with complete transparency.
            </p>
            <div className="mt-8 text-sm text-gray-600 bg-white bg-opacity-70 rounded-lg p-4 inline-block">
              <AlertCircle className="w-4 h-4 inline mr-2" />
              Last updated: July 12, 2025
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-black rounded-full opacity-5 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <div 
                key={section.id}
                className={`transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white border-2 border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'bg-yellow-400 shadow-lg' : 'bg-gray-100'
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-black' : 'text-gray-600'}`} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                        isActive ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 pt-0 bg-gradient-to-r from-yellow-50 to-white">
                      <div className="bg-white rounded-lg p-6 shadow-inner">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Highlights Section */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-black bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Protected Data</h3>
              <p className="text-sm opacity-80">Your information is encrypted and secured</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Full Transparency</h3>
              <p className="text-sm opacity-80">Clear information about data usage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Your Control</h3>
              <p className="text-sm opacity-80">Manage your privacy preferences</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl">
          <p className="text-gray-600 mb-4">
            Questions about our privacy practices? We're here to help.
          </p>
          <a href="/contact">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Privacy Team
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;