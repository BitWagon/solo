"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight, Calendar, User, Clock, ArrowUp } from "lucide-react";

const AutoHubBlog = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // ——————————————————————————
  // 1.  Scroll handler
  // ——————————————————————————
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ——————————————————————————
  // 2.  Content
  // ——————————————————————————
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Car Maintenance in 2025",
      excerpt:
        "Keep your vehicle running smoothly with our comprehensive maintenance checklist and expert tips.",
      author: "Mike Johnson",
      date: "July 8, 2025",
      readTime: "8 min read",
      category: "Maintenance",
      image: "🔧",
    },
    {
      id: 2,
      title: "Electric vs Hybrid: Which is Right for You?",
      excerpt:
        "Discover the pros and cons of electric and hybrid vehicles to make an informed decision.",
      author: "Sarah Chen",
      date: "July 5, 2025",
      readTime: "6 min read",
      category: "Technology",
      image: "⚡",
    },
    {
      id: 3,
      title: "Top 10 Signs Your Car Needs Immediate Attention",
      excerpt:
        "Don't ignore these warning signs that could prevent costly repairs down the road.",
      author: "David Rodriguez",
      date: "July 3, 2025",
      readTime: "5 min read",
      category: "Safety",
      image: "⚠️",
    },
    {
      id: 4,
      title: "How to Choose the Right Tires for Your Vehicle",
      excerpt:
        "A comprehensive guide to selecting the perfect tires for performance, safety, and longevity.",
      author: "Lisa Park",
      date: "June 30, 2025",
      readTime: "7 min read",
      category: "Parts",
      image: "🏎️",
    },
    {
      id: 5,
      title: "Winter Driving: Essential Safety Tips",
      excerpt:
        "Prepare your vehicle and yourself for safe winter driving with these expert recommendations.",
      author: "Tom Wilson",
      date: "June 28, 2025",
      readTime: "6 min read",
      category: "Safety",
      image: "❄️",
    },
    {
      id: 6,
      title: "Understanding Car Insurance: What You Need to Know",
      excerpt:
        "Navigate the complex world of auto insurance with confidence and find the best coverage.",
      author: "Emily Davis",
      date: "June 25, 2025",
      readTime: "9 min read",
      category: "Insurance",
      image: "🛡️",
    },
  ];

  const categories = [
    "All",
    "Maintenance",
    "Technology",
    "Safety",
    "Parts",
    "Insurance",
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  // ——————————————————————————
  // 3.  Render
  // ——————————————————————————
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent animate-pulse">
              AutoHub Blog
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fadeIn">
              Your trusted source for automotive insights, tips, and industry
              news
            </p>
            <div className="flex justify-center space-x-4 animate-slideUp">
              {["Expert Advice", "Latest Trends", "Industry News"].map(
                (label) => (
                  <div
                    key={label}
                    className="px-6 py-3 bg-yellow-400/10 rounded-full border border-yellow-400/30"
                  >
                    <span className="text-yellow-400 font-semibold">
                      {label}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Animated background dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/25"
                    : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Post “image” */}
                <div className="relative h-48 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center">
                  <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {post.image}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Post body */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock size={16} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User size={16} className="text-gray-400" />
                      <span className="text-gray-400 text-sm">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-gray-400" />
                      <span className="text-gray-400 text-sm">
                        {post.date}
                      </span>
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Read More</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll‑to‑top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Animations (Tailwind doesn’t ship these) */}
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
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default AutoHubBlog;
