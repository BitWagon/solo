"use client";
import React, { useState, useEffect } from 'react';
import { Camera, ZoomIn } from 'lucide-react';

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryImages = [
    { id: 1, src: '/images/car1.jpg', alt: 'Car Service 1', title: 'Engine Repair' },
    { id: 2, src: '/images/car2.jpg', alt: 'Car Service 2', title: 'Brake Maintenance' },
    { id: 3, src: '/images/car3.jpg', alt: 'Car Service 3', title: 'Oil Change' },
    { id: 4, src: '/images/car4.jpg', alt: 'Car Service 4', title: 'Tire Installation' },
    { id: 5, src: '/images/car5.jpg', alt: 'Car Service 5', title: 'Transmission Service' },
    { id: 6, src: '/images/car6.jpg', alt: 'Car Service 6', title: 'Car Detailing' },
  ];

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-400 rounded-full opacity-20 animate-pulse"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="animate-bounce mb-8 relative">
              <Camera className="w-20 h-20 text-yellow-400 mx-auto" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent animate-pulse">
              Our Work Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Explore our automotive service highlights
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative group rounded-xl overflow-hidden transform transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-lg font-semibold text-yellow-400">{image.title}</h3>
                    <div className={`flex items-center gap-2 mt-2 transition-all duration-300 ${hoveredImage === image.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      <ZoomIn className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Click to enlarge</span>
                    </div>
                  </div>
                </div>
                {hoveredImage === image.id && (
                  <div className="absolute inset-0 bg-yellow-400/10 rounded-xl animate-ping"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-xl max-h-[80vh] object-contain"
            />
            <h3 className="text-2xl font-semibold text-yellow-400 mt-4 text-center">{selectedImage.title}</h3>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animation: `twinkle ${2 + Math.random() * 2}s infinite`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-500 group">
            <div className="relative">
              <Camera className="w-16 h-16 text-yellow-400 mx-auto mb-6 group-hover:animate-bounce transition-all duration-300" />
              <div className="absolute inset-0 bg-yellow-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400 group-hover:text-white transition-colors duration-300">
              Want to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8 group-hover:text-gray-100 transition-colors duration-300">
              Contact us to learn more about our automotive services
            </p>
            <a href="/contact">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/30">
              Get in Touch
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
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
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;