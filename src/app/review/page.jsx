"use client";
import React, { useState } from 'react';
import { Star, Car, Send, CheckCircle, User, Calendar, MapPin } from 'lucide-react';

const CarReviewPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carModel: '',
    rating: 0,
    review: '',
    location: '',
    purchaseDate: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.carModel || !formData.rating || !formData.review) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsAnimating(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsAnimating(false);
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleStarClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const StarRating = () => (
    <div className="flex space-x-1 mb-6">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`transition-all duration-300 transform hover:scale-110 ${
            star <= (hoveredStar || formData.rating)
              ? 'text-yellow-400 drop-shadow-lg'
              : 'text-gray-300'
          }`}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
        >
          <Star className="w-8 h-8 fill-current" />
        </button>
      ))}
    </div>
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center animate-pulse">
          <div className="animate-bounce mb-6">
            <CheckCircle className="w-20 h-20 text-yellow-400 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your review has been submitted successfully. We appreciate your feedback!</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                carModel: '',
                rating: 0,
                review: '',
                location: '',
                purchaseDate: ''
              });
            }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Submit Another Review
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      {/* Header */}
      <div className="text-center mb-8 pt-8">
        <div className="flex items-center justify-center mb-4">
          <Car className="w-12 h-12 text-yellow-400 mr-3 animate-pulse" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
            AutoReview
          </h1>
        </div>
        <p className="text-gray-600 text-lg">Share your car experience with our community</p>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-black to-gray-800 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Drop Your Review</h2>
            <p className="text-gray-300">Help others make informed decisions</p>
          </div>

          {/* Form Body */}
          <div className="p-8 space-y-6">
            {/* Personal Info Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 transform focus:scale-105"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 transform focus:scale-105"
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Car Info Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  <Car className="w-4 h-4 inline mr-2" />
                  Car Model
                </label>
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 transform focus:scale-105"
                  required
                  placeholder="e.g., Toyota supra 2002"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Purchase Date
                </label>
                <input
                  type="date"
                  name="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 transform focus:scale-105"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 transform focus:scale-105"
                required
                placeholder="City, State/Country"
              />
            </div>

            {/* Rating Section */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Overall Rating
              </label>
              <StarRating />
              <p className="text-sm text-gray-500">
                {formData.rating === 0 && "Click stars to rate"}
                {formData.rating === 1 && "Poor - Would not recommend"}
                {formData.rating === 2 && "Fair - Below expectations"}
                {formData.rating === 3 && "Good - Meets expectations"}
                {formData.rating === 4 && "Very Good - Exceeds expectations"}
                {formData.rating === 5 && "Excellent - Outstanding experience"}
              </p>
            </div>

            {/* Review Text */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Your Review
              </label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 transform focus:scale-105 resize-none"
                required
                placeholder="Share your detailed experience with this car. What did you like most? Any issues you encountered? Would you recommend it to others?"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                onClick={handleSubmit}
                disabled={isAnimating}
                className={`bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  isAnimating ? 'animate-pulse' : ''
                }`}
              >
                {isAnimating ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Review
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pb-8">
        <p className="text-gray-600 text-sm">
          Your review helps other customers make informed decisions. Thank you for sharing your experience!
        </p>
      </div>
    </div>
  );
};

export default CarReviewPage;