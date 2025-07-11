"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Car, Users, Trophy, Star, MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';

const CareerAutoPage = () => {
  const [activeJob, setActiveJob] = useState(0);
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
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const jobPositions = [
    {
      title: "Senior Automotive Engineer",
      department: "Engineering",
      location: "Detroit, MI",
      type: "Full-time",
      salary: "$85,000 - $120,000",
      description: "Lead the design and development of next-generation automotive systems with cutting-edge technology."
    },
    {
      title: "Sales Representative",
      department: "Sales",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "$45,000 - $80,000 + Commission",
      description: "Drive sales growth by building relationships with customers and promoting our premium vehicle lineup."
    },
    {
      title: "Service Technician",
      department: "Service",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$40,000 - $65,000",
      description: "Provide expert maintenance and repair services for all vehicle models in our state-of-the-art facility."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$50,000 - $70,000",
      description: "Create compelling digital campaigns that showcase our vehicles and drive customer engagement."
    }
  ];

  const benefits = [
    { icon: <Trophy className="w-6 h-6" />, title: "Competitive Salary", desc: "Top-tier compensation packages" },
    { icon: <Star className="w-6 h-6" />, title: "Health Benefits", desc: "Comprehensive medical coverage" },
    { icon: <Users className="w-6 h-6" />, title: "Team Culture", desc: "Collaborative work environment" },
    { icon: <Car className="w-6 h-6" />, title: "Vehicle Discounts", desc: "Exclusive employee pricing" }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5 bg-cover bg-center"></div>
        
        <div className="relative z-20 container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="overflow-hidden">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-[slideUp_1s_ease-out]">
                Drive Your
                <span className="text-yellow-400 block">Career Forward</span>
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 animate-[slideUp_1s_ease-out_0.2s_both]">
                Join the automotive industry's most innovative team and accelerate your professional journey
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-[slideUp_1s_ease-out_0.4s_both]">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                View Open Positions
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Employees" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Open Positions" },
              { number: "98%", label: "Employee Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section id="jobs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.jobs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Current <span className="text-yellow-500">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover exciting career paths in the automotive industry
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job List */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {jobPositions.map((job, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveJob(index)}
                    className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeJob === index 
                        ? 'bg-yellow-400 text-black shadow-lg scale-105' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <h3 className="font-bold text-lg mb-2">{job.title}</h3>
                    <p className="text-sm opacity-80">{job.department}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2">
              <div className="bg-black text-white p-8 rounded-lg transform transition-all duration-500">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                    {jobPositions[activeJob].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {jobPositions[activeJob].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <span>{jobPositions[activeJob].location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span>{jobPositions[activeJob].type}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-yellow-400" />
                    <span>{jobPositions[activeJob].salary}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <span>{jobPositions[activeJob].department}</span>
                  </div>
                </div>

                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose <span className="text-yellow-400">Us?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive benefits that support your career and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 ${
                  isVisible.benefits ? 'animate-[fadeInUp_0.6s_ease-out]' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-yellow-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400 text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our team of automotive professionals and help shape the future of transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              Browse All Jobs
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
              Submit Resume
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
      `}</style>
    </div>
  );
};

export default CareerAutoPage;