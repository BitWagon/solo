"use client"
import React, { useState, useEffect } from 'react';
import { RefreshCw, Quote, Share2, Heart, Star, Bookmark, Download, Search, Filter, Moon, Sun, Sparkles, Trophy, Calendar, TrendingUp } from 'lucide-react';

const QuotePage = () => {
  const [quote, setQuote] = useState({
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "motivation",
    likes: 127,
    shares: 45
  });
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('daily');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [quotesViewed, setQuotesViewed] = useState(1);
  const [dailyStreak, setDailyStreak] = useState(7);

  const categories = ['all', 'motivation', 'life', 'success', 'wisdom', 'love', 'happiness', 'leadership'];

  const sampleQuotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "motivation", likes: 127, shares: 45 },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", category: "leadership", likes: 89, shares: 32 },
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon", category: "life", likes: 156, shares: 78 },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "motivation", likes: 203, shares: 91 },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle", category: "wisdom", likes: 174, shares: 65 },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "success", likes: 298, shares: 112 },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", category: "motivation", likes: 143, shares: 56 },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "wisdom", likes: 187, shares: 73 },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "motivation", likes: 221, shares: 87 },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "success", likes: 165, shares: 69 },
    { text: "Love is not just looking at each other, it's looking in the same direction.", author: "Antoine de Saint-Exupéry", category: "love", likes: 134, shares: 52 },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama", category: "happiness", likes: 189, shares: 74 }
  ];

  const fetchNewQuote = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const filteredQuotes = selectedCategory === 'all' 
      ? sampleQuotes 
      : sampleQuotes.filter(q => q.category === selectedCategory);
    
    const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    setQuote(randomQuote);
    setQuotesViewed(prev => prev + 1);
    setIsLoading(false);
  };

  const addToFavorites = () => {
    if (!favorites.some(fav => fav.text === quote.text)) {
      setFavorites([...favorites, { ...quote, savedAt: new Date().toISOString() }]);
    }
  };

  const shareQuote = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Inspirational Quote',
        text: `"${quote.text}" - ${quote.author}`
      });
    } else {
      navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
      alert('Quote copied to clipboard!');
    }
  };

  const downloadQuote = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    
    // Background
    ctx.fillStyle = isDarkMode ? '#000000' : '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Quote text
    ctx.fillStyle = isDarkMode ? '#ffffff' : '#000000';
    ctx.font = '32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`"${quote.text}"`, canvas.width / 2, canvas.height / 2 - 50);
    
    // Author
    ctx.font = '24px Arial';
    ctx.fillText(`— ${quote.author}`, canvas.width / 2, canvas.height / 2 + 50);
    
    // Download
    const link = document.createElement('a');
    link.download = 'quote.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const removeFromFavorites = (quoteToRemove) => {
    setFavorites(favorites.filter(fav => fav.text !== quoteToRemove.text));
  };

  const filteredFavorites = favorites.filter(fav => 
    fav.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fav.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const themeClasses = isDarkMode 
    ? 'bg-black text-white' 
    : 'bg-gray-50 text-black';

  const cardClasses = isDarkMode 
    ? 'bg-gray-900 border-gray-800' 
    : 'bg-white border-gray-200';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${themeClasses}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-2xl relative z-10 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500 p-2 rounded-full">
                <Sparkles className="text-black" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  Quote <span className="text-yellow-500">Master</span>
                </h1>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Discover wisdom daily
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowStats(!showStats)}
                className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors flex items-center space-x-2"
              >
                <Trophy size={16} />
                <span>Stats</span>
              </button>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-yellow-500 text-black' : 'bg-gray-200 text-gray-800'} hover:scale-110 transition-transform`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Panel */}
      {showStats && (
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-500`}>
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">{quotesViewed}</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quotes Viewed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">{favorites.length}</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Favorites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">{dailyStreak}</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">#{Math.floor(Math.random() * 1000)}</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Global Rank</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-yellow-500 text-black py-4 px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex justify-center space-x-6">
          {['daily', 'favorites', 'trending', 'collections'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                activeTab === tab 
                  ? 'bg-black text-yellow-500 shadow-lg scale-105' 
                  : 'hover:bg-black hover:text-yellow-500 hover:scale-105'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {activeTab === 'daily' && (
          <div className="text-center">
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                      selectedCategory === category
                        ? 'bg-yellow-500 text-black shadow-lg scale-105'
                        : `${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Quote Display */}
            <div className={`${cardClasses} rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto relative border-2 transition-all duration-500 hover:shadow-3xl hover:scale-105`}>
              <div className="absolute top-6 left-6 text-yellow-500 opacity-20">
                <Quote size={48} />
              </div>
              <div className="absolute bottom-6 right-6 text-yellow-500 opacity-20 rotate-180">
                <Quote size={48} />
              </div>
              
              <div className="my-12 relative">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${isDarkMode ? 'bg-yellow-500 text-black' : 'bg-yellow-100 text-yellow-800'}`}>
                  {quote.category.toUpperCase()}
                </div>
                
                <p className={`text-2xl md:text-4xl font-light leading-relaxed mb-8 italic ${isLoading ? 'opacity-50' : 'opacity-100'} transition-opacity duration-500`}>
                  "{quote.text}"
                </p>
                
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <p className="text-xl font-semibold text-yellow-500">
                    — {quote.author}
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Heart size={16} className="text-red-500" />
                    <span>{quote.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Share2 size={16} className="text-blue-500" />
                    <span>{quote.shares}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} className="text-green-500" />
                    <span>Today</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button 
                onClick={fetchNewQuote}
                disabled={isLoading}
                className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 disabled:opacity-50 flex items-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <RefreshCw className={`${isLoading ? 'animate-spin' : ''}`} size={24} />
                <span>{isLoading ? 'Loading Magic...' : 'New Quote'}</span>
              </button>

              <button 
                onClick={addToFavorites}
                className={`${cardClasses} border-2 px-8 py-4 rounded-full font-bold hover:border-yellow-500 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105`}
              >
                <Heart size={24} className="text-red-500" />
                <span>Save</span>
              </button>

              <button 
                onClick={shareQuote}
                className={`${cardClasses} border-2 px-8 py-4 rounded-full font-bold hover:border-yellow-500 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105`}
              >
                <Share2 size={24} className="text-blue-500" />
                <span>Share</span>
              </button>

              <button 
                onClick={downloadQuote}
                className={`${cardClasses} border-2 px-8 py-4 rounded-full font-bold hover:border-yellow-500 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105`}
              >
                <Download size={24} className="text-green-500" />
                <span>Download</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold text-yellow-500">
                Your Collection
              </h2>
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search favorites..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`${cardClasses} border-2 pl-10 pr-4 py-3 rounded-full focus:border-yellow-500 focus:outline-none transition-colors duration-300`}
                />
              </div>
            </div>
            
            {filteredFavorites.length === 0 ? (
              <div className="text-center py-16">
                <Bookmark className="mx-auto text-gray-400 mb-6" size={80} />
                <p className="text-2xl text-gray-400 mb-2">
                  {searchTerm ? 'No matching favorites' : 'No favorites yet'}
                </p>
                <p className="text-gray-500">
                  {searchTerm ? 'Try a different search term' : 'Start building your collection of inspiring quotes'}
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredFavorites.map((fav, index) => (
                  <div key={index} className={`${cardClasses} border-2 rounded-2xl p-6 shadow-lg relative transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-yellow-500`}>
                    <button 
                      onClick={() => removeFromFavorites(fav)}
                      className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors text-2xl"
                    >
                      ×
                    </button>
                    
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${isDarkMode ? 'bg-yellow-500 text-black' : 'bg-yellow-100 text-yellow-800'}`}>
                      {fav.category?.toUpperCase()}
                    </div>
                    
                    <p className="text-lg font-light mb-4 italic leading-relaxed">
                      "{fav.text}"
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-yellow-500">
                        — {fav.author}
                      </p>
                      <Star className="text-yellow-500" size={16} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'trending' && (
          <div className="text-center py-16">
            <TrendingUp className="mx-auto text-yellow-500 mb-6" size={80} />
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">Trending Quotes</h2>
            <p className="text-gray-400 text-lg">
              Discover what's inspiring the world today
            </p>
            <div className="mt-8">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Coming Soon
              </button>
            </div>
          </div>
        )}

        {activeTab === 'collections' && (
          <div className="text-center py-16">
            <Bookmark className="mx-auto text-yellow-500 mb-6" size={80} />
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">Quote Collections</h2>
            <p className="text-gray-400 text-lg">
              Curated collections for every mood and moment
            </p>
            <div className="mt-8">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Coming Soon
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} py-8 px-4 mt-16 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Crafted with <span className="text-yellow-500">♥</span> to inspire your journey
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="/about" className="text-yellow-500 hover:text-yellow-400 transition-colors">About</a>
            <a href="/contact" className="text-yellow-500 hover:text-yellow-400 transition-colors">Contact</a>
            <a href="/privacy" className="text-yellow-500 hover:text-yellow-400 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuotePage;