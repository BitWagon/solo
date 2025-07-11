"use client";
import React, { useState, useEffect } from 'react';
import { Users, Star, Award, Briefcase } from 'lucide-react';

const TeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "John Smith",
      role: "Master Technician",
      experience: "20+ Years",
      specialty: "Engine Diagnostics",
      image: "https://via.placeholder.com/300x300.png?text=John+Smith",
    },
    {
      name: "Sarah Johnson",
      role: "Service Manager",
      experience: "15+ Years",
      specialty: "Customer Relations",
      image: "https://via.placeholder.com/300x300.png?text=Sarah+Johnson",
    },
    {
      name: "Mike Brown",
      role: "ASE Certified Mechanic",
      experience: "12+ Years",
      specialty: "Transmission Repair",
      image: "https://via.placeholder.com/300x300.png?text=Mike+Brown",
    },
    {
      name: "Lisa Davis",
      role: "Tire Specialist",
      experience: "10+ Years",
      specialty: "Wheel Alignment",
      image: "https://via.placeholder.com/300x300.png?text=Lisa+Davis",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-t from-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent animate-pulse"></div>
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-400 rounded-full opacity-10"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
                animationName: 'float',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Users className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-spin-slow" />
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
              Meet Our Expert Team
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              Our dedicated professionals bring years of expertise to keep your vehicle running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 transform transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${hoveredMember === index ? 'scale-105 border-yellow-400 shadow-2xl shadow-yellow-400/20' : ''}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover transition-transform duration-500" />
                  {hoveredMember === index && (
                    <div className="absolute inset-0 bg-yellow-400/20 animate-ping"></div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-yellow-400">{member.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">{member.role}</p>
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <p className="text-gray-300 text-sm">{member.experience}</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <p className="text-gray-300 text-sm">{member.specialty}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Briefcase className="w-6 h-6 text-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-400/20 rounded-full"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                animationName: 'twinkle',
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`bg-gray-800 p-8 rounded-xl border border-gray-700 transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Trust Our Experts</h2>
            <p className="text-lg text-gray-300 mb-6">
              Our team is ready to provide top-notch service for your vehicle. Contact us today!
            </p>
            <a href="/contact">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
              Contact Our Team
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.3);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;