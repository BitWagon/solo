"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, User, Calendar, MapPin, Award, Users, ThumbsUp } from "lucide-react"

const AutoServiceTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const featuredTestimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown",
      service: "Brake Repair",
      rating: 5,
      date: "2 weeks ago",
      text: "Exceptional service! They diagnosed my brake issue quickly and had me back on the road the same day. The team was professional, honest, and their prices were very reasonable.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Mike Rodriguez",
      location: "Westside",
      service: "Engine Diagnostics",
      rating: 5,
      date: "1 month ago",
      text: "I was worried about expensive engine problems, but they found the issue was just a faulty sensor. Saved me thousands! Their honesty and expertise are unmatched.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Chen",
      location: "Northside",
      service: "Oil Change & Inspection",
      rating: 5,
      date: "3 days ago",
      text: "Fast, efficient, and thorough. They completed my oil change in 20 minutes and caught a potential issue with my tires. Great preventive care!",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const allTestimonials = [
    {
      name: "David Thompson",
      service: "Transmission Repair",
      rating: 5,
      text: "Outstanding work on my transmission. They explained everything clearly and the repair has been perfect for 6 months now.",
      category: "major-repair",
    },
    {
      name: "Lisa Martinez",
      service: "AC Repair",
      rating: 5,
      text: "Fixed my AC right before summer! Cool and comfortable drives thanks to their quick and professional service.",
      category: "maintenance",
    },
    {
      name: "Robert Kim",
      service: "Battery Replacement",
      rating: 5,
      text: "Dead battery on a Monday morning - they had me running in 30 minutes. Lifesavers!",
      category: "emergency",
    },
    {
      name: "Amanda Foster",
      service: "Tire Installation",
      rating: 5,
      text: "Great selection of tires and expert installation. They helped me choose the perfect tires for my driving needs.",
      category: "maintenance",
    },
    {
      name: "James Wilson",
      service: "Engine Rebuild",
      rating: 5,
      text: "Thought my car was done for, but they rebuilt my engine like new. Incredible craftsmanship and fair pricing.",
      category: "major-repair",
    },
    {
      name: "Maria Gonzalez",
      service: "Brake Service",
      rating: 5,
      text: "Professional brake service with detailed explanation of the work needed. Feel much safer on the road now.",
      category: "maintenance",
    },
  ]

  const reviewStats = [
    { icon: <Star className="w-8 h-8" />, number: "4.9", label: "Average Rating", suffix: "/5" },
    { icon: <Users className="w-8 h-8" />, number: "2,847", label: "Happy Customers", suffix: "+" },
    { icon: <ThumbsUp className="w-8 h-8" />, number: "98", label: "Satisfaction Rate", suffix: "%" },
    { icon: <Award className="w-8 h-8" />, number: "15", label: "Years of Excellence", suffix: "+" },
  ]

  const filterCategories = [
    { key: "all", label: "All Reviews" },
    { key: "major-repair", label: "Major Repairs" },
    { key: "maintenance", label: "Maintenance" },
    { key: "emergency", label: "Emergency Service" },
  ]

  const filteredTestimonials =
    activeFilter === "all" ? allTestimonials : allTestimonials.filter((t) => t.category === activeFilter)

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>

        {/* Floating testimonial bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-400/10 rounded-full border border-yellow-400/20 flex items-center justify-center"
              style={{
                width: `${Math.random() * 60 + 40}px`,
                height: `${Math.random() * 60 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animation: `float ${4 + Math.random() * 4}s infinite ease-in-out`,
              }}
            >
              <Quote className="w-4 h-4 text-yellow-400/50" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative mb-8">
              <div className="flex justify-center items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 fill-yellow-400 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
              Customer Stories
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto opacity-0 animate-slideInUp"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              Real experiences from real customers who trust us with their vehicles
            </p>

            <div
              className="flex justify-center space-x-8 opacity-0 animate-slideInUp"
              style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4.9★</div>
                <div className="text-sm text-gray-400">Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">2,847</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {reviewStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="relative group cursor-pointer">
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-all duration-300 group-hover:scale-110">
                    <div className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse">
                    {stat.number}
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                  <div className="absolute inset-0 bg-yellow-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-20 bg-black relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Featured Reviews</h2>
            <p className="text-xl text-gray-300">Hear what our customers have to say about their experience</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {featuredTestimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Quote className="w-4 h-4 text-black" />
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-yellow-400">{testimonial.name}</h4>
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-gray-400 text-sm">
                            <div className="flex items-center justify-center md:justify-start space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{testimonial.location}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{testimonial.date}</span>
                            </div>
                          </div>
                          <div className="text-yellow-400 font-medium">{testimonial.service}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() =>
                setCurrentTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-yellow-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">All Customer Reviews</h2>
            <p className="text-xl text-gray-300 mb-8">Browse through hundreds of satisfied customer experiences</p>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filterCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveFilter(category.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.key
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 ${
                  hoveredCard === index ? "bg-gray-750" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isVisible ? "slideInUp 0.6s ease-out forwards" : "none",
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.text}"</p>

                <div className="text-yellow-400 font-medium text-sm">{testimonial.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animation: `twinkle ${3 + Math.random() * 2}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-500 group">
            <Quote className="w-16 h-16 text-yellow-400 mx-auto mb-6 group-hover:animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400 group-hover:text-white transition-colors duration-300">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-xl text-gray-300 mb-8 group-hover:text-gray-100 transition-colors duration-300">
              Experience the same exceptional service that earned us these amazing reviews
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/30">
                Book Your Service
              </button>
              </a>
              <a href="/review">
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110">
                Leave a Review
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}

export default AutoServiceTestimonials;
