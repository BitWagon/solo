"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag, Search, Filter, ChevronLeft, ChevronRight, Heart, Share2, BookOpen, TrendingUp, Star } from 'lucide-react';

const AutoServiceBlog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Posts', icon: '🔧' },
    { id: 'maintenance', name: 'Maintenance', icon: '⚙️' },
    { id: 'tips', name: 'Tips & Tricks', icon: '💡' },
    { id: 'technology', name: 'Technology', icon: '🚗' },
    { id: 'seasonal', name: 'Seasonal Care', icon: '🌟' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Car Maintenance Tips Every Driver Should Know",
      excerpt: "Keep your vehicle running smoothly with these professional maintenance tips that can save you thousands in repairs.",
      content: "Regular maintenance is the key to a long-lasting vehicle. Here are the most important things every car owner should know...",
      author: "Mike Johnson",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "maintenance",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
      tags: ["maintenance", "tips", "preventive care"],
      likes: 42,
      featured: true
    },
    {
      id: 2,
      title: "Electric vs. Hybrid: Which is Right for Your Lifestyle?",
      excerpt: "Explore the differences between electric and hybrid vehicles to make the best choice for your driving needs.",
      content: "The automotive industry is rapidly evolving with electric and hybrid technologies...",
      author: "Sarah Davis",
      date: "2025-01-12",
      readTime: "7 min read",
      category: "technology",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop",
      tags: ["electric", "hybrid", "technology"],
      likes: 38,
      featured: false
    },
    {
      id: 3,
      title: "Winter Car Care: Protecting Your Vehicle in Cold Weather",
      excerpt: "Essential winter preparation tips to keep your car running smoothly during the coldest months of the year.",
      content: "Winter can be harsh on your vehicle. Here's how to prepare your car for the cold season...",
      author: "Tom Wilson",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "seasonal",
      image: "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?w=600&h=400&fit=crop",
      tags: ["winter", "seasonal", "preparation"],
      likes: 29,
      featured: true
    },
    {
      id: 4,
      title: "Signs Your Brakes Need Immediate Attention",
      excerpt: "Learn to recognize the warning signs that indicate your brakes need professional service before it's too late.",
      content: "Your brakes are your vehicle's most important safety feature. Here are the warning signs to watch for...",
      author: "Lisa Chen",
      date: "2025-01-08",
      readTime: "4 min read",
      category: "maintenance",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      tags: ["brakes", "safety", "maintenance"],
      likes: 56,
      featured: false
    },
    {
      id: 5,
      title: "How to Improve Your Car's Fuel Efficiency",
      excerpt: "Simple techniques and habits that can significantly improve your vehicle's fuel economy and save money.",
      content: "With rising fuel costs, improving your car's efficiency is more important than ever...",
      author: "David Martinez",
      date: "2025-01-05",
      readTime: "5 min read",
      category: "tips",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
      tags: ["fuel efficiency", "tips", "economy"],
      likes: 34,
      featured: false
    },
    {
      id: 6,
      title: "The Future of Automotive Technology",
      excerpt: "Discover the cutting-edge technologies that are revolutionizing the automotive industry.",
      content: "From autonomous driving to advanced safety features, the future of cars is here...",
      author: "Rachel Green",
      date: "2025-01-03",
      readTime: "8 min read",
      category: "technology",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
      tags: ["future", "technology", "innovation"],
      likes: 47,
      featured: true
    }
  ];

  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  useEffect(() => {
    setIsLoaded(true);
    
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const BlogCard = ({ post, index }) => {
    const cardRef = useRef(null);
    
    useEffect(() => {
      if (cardRef.current && observerRef.current) {
        observerRef.current.observe(cardRef.current);
      }
    }, []);

    const isAnimated = animatedElements.has(`post-${post.id}`);

    return (
      <article
        ref={cardRef}
        data-id={`post-${post.id}`}
        className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-700 transform ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${post.featured ? 'ring-2 ring-yellow-400/30' : ''}`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}

        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => handleLike(post.id)}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
                likedPosts.has(post.id) ? 'bg-red-500 text-white' : 'bg-black/50 text-white hover:bg-red-500'
              }`}
            >
              <Heart className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full bg-black/50 text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 backdrop-blur-sm">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Category & Meta */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-semibold">
                {categories.find(cat => cat.id === post.category)?.name}
              </span>
              <span className="text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <Heart className="w-3 h-3" />
              <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-300 text-sm line-clamp-3 group-hover:text-gray-100 transition-colors duration-300">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs hover:bg-yellow-400 hover:text-black transition-colors duration-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author & Date */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-black" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{post.author}</p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 transform hover:scale-110">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animation: `float ${3 + Math.random() * 2}s infinite linear`
              }}
            />
          ))}
          
          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(144)].map((_, i) => (
                <div
                  key={i}
                  className="border border-yellow-400/20 transform rotate-45"
                  style={{
                    animationDelay: `${Math.random() * 4}s`,
                    animation: `pulse ${2 + Math.random() * 2}s infinite`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center animate-pulse">
                <TrendingUp className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
              Auto Care Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert insights, maintenance tips, and the latest automotive trends
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <div className="flex items-center gap-2 bg-gray-900 rounded-full p-2 border border-gray-700">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-yellow-400 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 ${
                      currentPage === i + 1
                        ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/30'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-yellow-400 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-500 group">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400 group-hover:text-white transition-colors duration-300">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 group-hover:text-gray-100 transition-colors duration-300">
              Subscribe to our newsletter for the latest automotive tips and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
              />
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AutoServiceBlog;