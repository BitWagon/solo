"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Home, User, Briefcase, Mail, FileText, Settings, Star, Search, Calendar, Image } from 'lucide-react';

const AnimatedSitemap = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sitemapData = [
    {
      id: 'home',
      title: 'Home',
      icon: Home,
      path: '/',
      children: [
        { title: 'Hero Section', path: '/#hero' },
        { title: 'Features', path: '/#features' },
        { title: 'Testimonials', path: '/#testimonials' }
      ]
    },
    {
      id: 'about',
      title: 'About',
      icon: User,
      path: '/about',
      children: [
        { title: 'Our Story', path: '/about/story' },
        { title: 'Team', path: '/about/team' },
        { title: 'Mission', path: '/about/mission' }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      icon: Briefcase,
      path: '/services',
      children: [
        { title: 'Web Development', path: '/services/web' },
        { title: 'Mobile Apps', path: '/services/mobile' },
        { title: 'Consulting', path: '/services/consulting' },
        { title: 'Support', path: '/services/support' }
      ]
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      icon: Image,
      path: '/portfolio',
      children: [
        { title: 'Recent Work', path: '/portfolio/recent' },
        { title: 'Case Studies', path: '/portfolio/cases' },
        { title: 'Client Gallery', path: '/portfolio/gallery' }
      ]
    },
    {
      id: 'blog',
      title: 'Blog',
      icon: FileText,
      path: '/blog',
      children: [
        { title: 'Latest Posts', path: '/blog/latest' },
        { title: 'Categories', path: '/blog/categories' },
        { title: 'Archive', path: '/blog/archive' }
      ]
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: Mail,
      path: '/contact',
      children: [
        { title: 'Get in Touch', path: '/contact/form' },
        { title: 'Location', path: '/contact/location' },
        { title: 'Support', path: '/contact/support' }
      ]
    }
  ];

  const utilityPages = [
    { title: 'Search', icon: Search, path: '/search' },
    { title: 'Privacy Policy', icon: Settings, path: '/privacy' },
    { title: 'Terms of Service', icon: FileText, path: '/terms' },
    { title: 'Sitemap', icon: Star, path: '/sitemap' },
    { title: 'Events', icon: Calendar, path: '/events' }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-black rounded-full opacity-5 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300 rounded-full opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className={`relative z-10 py-12 px-6 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-black via-yellow-500 to-black bg-clip-text text-transparent">
            Site Map
          </h1>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate through our website structure and discover all the amazing content we have to offer.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        {/* Primary Navigation */}
        <section className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-black text-white px-4 py-2 rounded-lg">Primary Pages</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapData.map((section, index) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <div
                  key={section.id}
                  className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{transitionDelay: `${index * 100 + 500}ms`}}
                  onClick={() => setActiveSection(isActive ? null : section.id)}
                >
                  <div className={`bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-400 ${isActive ? 'border-yellow-400 bg-yellow-50' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-lg transition-all duration-300 ${isActive ? 'bg-yellow-400 text-black' : 'bg-black text-white group-hover:bg-yellow-400 group-hover:text-black'}`}>
                          <Icon size={24} />
                        </div>
                        <h3 className="text-xl font-semibold">{section.title}</h3>
                      </div>
                      <ChevronRight 
                        className={`transition-all duration-300 ${isActive ? 'rotate-90 text-yellow-600' : 'group-hover:text-yellow-600'}`}
                        size={20}
                      />
                    </div>
                    
                    <p className="text-gray-600 mb-4">{section.path}</p>
                    
                    {/* Children */}
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-2 pt-4 border-t border-gray-200">
                        {section.children.map((child, childIndex) => (
                          <div 
                            key={childIndex}
                            className={`flex items-center space-x-2 text-sm text-gray-600 hover:text-yellow-600 transition-all duration-300 transform hover:translate-x-2 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                            style={{transitionDelay: `${childIndex * 50}ms`}}
                          >
                            <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                            <span>{child.title}</span>
                            <span className="text-gray-400">→</span>
                            <span className="text-gray-400 font-mono text-xs">{child.path}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Utility Pages */}
        <section className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-lg">Utility Pages</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {utilityPages.map((page, index) => {
              const Icon = page.icon;
              
              return (
                <div
                  key={index}
                  className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{transitionDelay: `${index * 100 + 900}ms`}}
                >
                  <div className="bg-black text-white rounded-lg p-4 hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center">
                    <Icon className="mx-auto mb-2" size={24} />
                    <h3 className="font-semibold text-sm mb-1">{page.title}</h3>
                    <p className="text-xs opacity-75 font-mono">{page.path}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer CTA */}
        <section className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-black via-yellow-400 to-black p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
            <p className="text-lg mb-6 opacity-90">
              Start your journey through our website and discover everything we have to offer.
            </p>
            <a href="/home">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105">
              Back to Home
            </button>
            </a>
          </div>
        </section>
      </main>

      {/* Floating Animation Elements */}
      <div className="fixed bottom-10 right-10 pointer-events-none">
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
      </div>
      <div className="fixed bottom-20 right-20 pointer-events-none">
        <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>
      <div className="fixed bottom-16 right-32 pointer-events-none">
        <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default AnimatedSitemap;