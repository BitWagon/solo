"use client";
import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Eye, Settings, CheckCircle, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function CookiePolicy() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return; // Necessary cookies can't be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
    {
      id: 'necessary',
      name: 'Necessary Cookies',
      description: 'Essential for website functionality and security',
      icon: Shield,
      required: true,
      details: 'These cookies are required for the website to function properly. They enable core functionality such as security, network management, and accessibility.'
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      icon: Eye,
      required: false,
      details: 'These cookies collect information about how visitors use our website, which pages are visited most often, and if they encounter error messages.'
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to deliver personalized advertisements',
      icon: Settings,
      required: false,
      details: 'These cookies are used to make advertising messages more relevant to you and your interests.'
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'Remember your settings and preferences',
      icon: CheckCircle,
      required: false,
      details: 'These cookies allow our website to remember information that changes the way the site behaves or looks for you.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Animated Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full mb-6 animate-bounce">
              <Cookie className="w-10 h-10 text-yellow-400" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-black">Cookie Policy</h1>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              We believe in transparency. Learn how we use cookies to enhance your experience.
            </p>
          </div>
        </div>
        
        {/* Floating Cookie Animation */}
        <div className="absolute top-10 left-10 animate-ping">
          <div className="w-4 h-4 bg-black rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-10 right-10 animate-pulse">
          <div className="w-6 h-6 bg-black rounded-full opacity-10"></div>
        </div>
      </div>

      {/* Cookie Preferences Panel */}
      <div className="container mx-auto px-6 py-12">
        <div className={`bg-white border-2 border-yellow-400 rounded-2xl p-8 mb-12 shadow-2xl transform transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
              <Settings className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-3xl font-bold text-black">Cookie Preferences</h2>
          </div>
          
          <div className="grid gap-4">
            {cookieTypes.map((cookie, index) => {
              const Icon = cookie.icon;
              return (
                <div
                  key={cookie.id}
                  className={`border-2 border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-yellow-400 hover:shadow-lg transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black">{cookie.name}</h3>
                        <p className="text-gray-600">{cookie.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookiePreferences[cookie.id]}
                          onChange={() => handlePreferenceChange(cookie.id)}
                          disabled={cookie.required}
                          className="sr-only"
                        />
                        <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                          cookiePreferences[cookie.id] ? 'bg-yellow-400' : 'bg-gray-300'
                        } ${cookie.required ? 'opacity-50' : ''}`}>
                          <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                            cookiePreferences[cookie.id] ? 'translate-x-6' : 'translate-x-1'
                          } mt-0.5`}></div>
                        </div>
                      </label>
                      <button
                        onClick={() => toggleSection(cookie.id)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                      >
                        {activeSection === cookie.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {activeSection === cookie.id && (
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg animate-fadeIn">
                      <p className="text-gray-700">{cookie.details}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105">
              Save Preferences
            </button>
            <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
              Accept All
            </button>
          </div>
        </div>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto">
          <div className={`bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-6 text-black">What Are Cookies?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-black">How We Use Cookies</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <p className="text-gray-700">To ensure our website functions properly and securely</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <p className="text-gray-700">To remember your preferences and settings</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <p className="text-gray-700">To analyze how our website is used and improve our services</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-black">Managing Your Cookies</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <p className="text-gray-800 font-medium">
                Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">Last updated: July 2025</p>
          <p className="text-gray-400 mt-2">
            Questions about our cookie policy? Contact us at 
            <span className="text-yellow-400 ml-1">privacy@example.com</span>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}