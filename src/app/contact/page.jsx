// "use client"
// import React, { useState, useEffect } from 'react';
// import { 
//   Phone, Mail, MapPin, Clock, Send, User, MessageCircle, 
//   CheckCircle, Star, Calendar, Zap, Shield, Award, 
//   Facebook, Twitter, Instagram, Youtube, ArrowRight 
// } from 'lucide-react';

// const AutoServiceContact = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [hoveredSocial, setHoveredSocial] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [activeTab, setActiveTab] = useState('contact');

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async () => {
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: ''
//       });
      
//       // Reset success message after 3 seconds
//       setTimeout(() => {
//         setSubmitted(false);
//       }, 3000);
//     }, 2000);
//   };
//   console.log("Submitted Form Data:", formData);

//   const contactMethods = [
//     {
//       icon: <Phone className="w-8 h-8" />,
//       title: "Call Us",
//       description: "Speak directly with our service experts",
//       info: "(555) 123-4567",
//       subInfo: "Available 24/7 for emergencies",
//       color: "bg-blue-500"
//     },
//     {
//       icon: <Mail className="w-8 h-8" />,
//       title: "Email Us",
//       description: "Send us a detailed message",
//       info: "info@autopro.com",
//       subInfo: "We respond within 2 hours",
//       color: "bg-green-500"
//     },
//     {
//       icon: <MapPin className="w-8 h-8" />,
//       title: "Visit Us",
//       description: "Come to our service center",
//       info: "123 Auto Street, City, State 12345",
//       subInfo: "Free parking available",
//       color: "bg-purple-500"
//     },
//     {
//       icon: <MessageCircle className="w-8 h-8" />,
//       title: "Live Chat",
//       description: "Chat with our support team",
//       info: "Available on our website",
//       subInfo: "Mon-Fri 8AM-8PM",
//       color: "bg-red-500"
//     }
//   ];

//   const businessHours = [
//     { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
//     { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
//     { day: "Sunday", hours: "Closed" },
//     { day: "Emergency Service", hours: "24/7 Available" }
//   ];

//   const serviceOptions = [
//     "Oil Change",
//     "Brake Repair",
//     "Transmission Service",
//     "Engine Diagnostics",
//     "AC Repair",
//     "Tire Service",
//     "Battery Replacement",
//     "General Maintenance",
//     "Emergency Repair",
//     "Other"
//   ];

//   const socialLinks = [
//     { icon: <Facebook className="w-6 h-6" />, name: "Facebook", color: "hover:text-blue-500" },
//     { icon: <Twitter className="w-6 h-6" />, name: "Twitter", color: "hover:text-blue-400" },
//     { icon: <Instagram className="w-6 h-6" />, name: "Instagram", color: "hover:text-pink-500" },
//     { icon: <Youtube className="w-6 h-6" />, name: "YouTube", color: "hover:text-red-500" }
//   ];

//   const features = [
//     { icon: <Shield className="w-6 h-6" />, text: "Licensed & Insured" },
//     { icon: <Award className="w-6 h-6" />, text: "ASE Certified" },
//     { icon: <Star className="w-6 h-6" />, text: "5-Star Rated" },
//     { icon: <Zap className="w-6 h-6" />, text: "Quick Service" }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
//         <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(30)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute bg-yellow-400 rounded-full opacity-20"
//               style={{
//                 width: `${Math.random() * 8 + 2}px`,
//                 height: `${Math.random() * 8 + 2}px`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`
//               }}
//             />
//           ))}
          
//           {/* Floating geometric shapes */}
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={`shape-${i}`}
//               className="absolute border border-yellow-400/20 animate-pulse"
//               style={{
//                 width: `${Math.random() * 60 + 30}px`,
//                 height: `${Math.random() * 60 + 30}px`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 borderRadius: Math.random() > 0.5 ? '50%' : '0%',
//                 animationDelay: `${Math.random() * 4}s`,
//                 animationDuration: `${4 + Math.random() * 4}s`,
//                 transform: `rotate(${Math.random() * 360}deg)`
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
//           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="relative mb-8">
//               <div className="animate-bounce">
//                 <Phone className="w-20 h-20 text-yellow-400 mx-auto" />
//               </div>
//               <div className="absolute -top-3 -right-8 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
//               <div className="absolute -bottom-3 -left-8 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
//             </div>
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
//               Get In Touch
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
//               Ready to experience premium automotive care? Let's connect and get your vehicle running perfectly.
//             </p>
            
//             {/* Feature badges */}
//             <div className="flex flex-wrap justify-center gap-4 mt-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 hover:border-yellow-400 transition-all duration-300"
//                 >
//                   <div className="text-yellow-400">{feature.icon}</div>
//                   <span className="text-sm font-medium">{feature.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods */}
//       <section className="py-20 bg-gradient-to-b from-black to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
//               Multiple Ways to Reach Us
//             </h2>
//             <p className="text-xl text-gray-300">
//               Choose the method that works best for you
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {contactMethods.map((method, index) => (
//               <div
//                 key={index}
//                 className={`relative group cursor-pointer transform transition-all duration-500 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//                 } ${hoveredCard === index ? 'scale-105' : 'scale-100'}`}
//                 style={{ transitionDelay: `${index * 0.1}s` }}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 h-full relative overflow-hidden">
//                   {/* Animated background for hover */}
//                   <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
//                   <div className="relative z-10">
//                     <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mb-4 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
//                       {method.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold mb-2 text-yellow-400 group-hover:text-white transition-colors duration-300">
//                       {method.title}
//                     </h3>
//                     <p className="text-gray-300 mb-3 text-sm group-hover:text-gray-100 transition-colors duration-300">
//                       {method.description}
//                     </p>
//                     <p className="text-white font-medium mb-2">
//                       {method.info}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       {method.subInfo}
//                     </p>
//                   </div>
                  
//                   {/* Hover effect indicator */}
//                   {hoveredCard === index && (
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Contact Section */}
//       <section className="py-20 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
//               <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
//                   Send Us a Message
//                 </h3>
                
//                 {submitted ? (
//                   <div className="text-center py-8 animate-fadeInUp">
//                     <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
//                     <h4 className="text-xl font-semibold mb-2 text-green-400">Message Sent!</h4>
//                     <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon!</p>
//                   </div>
//                 ) : (
//                   <div className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="relative group">
//                         <User className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           placeholder="Your Name"
//                           required
//                           className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
//                         />
//                       </div>
                      
//                       <div className="relative group">
//                         <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="Your Email"
//                           required
//                           className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
//                         />
//                       </div>
//                     </div>
                    
//                     <div className="relative group">
//                       <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         placeholder="Your Phone Number"
//                         className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
//                       />
//                     </div>
                    
//                     <div className="relative">
//                       <select
//                         name="service"
//                         value={formData.service}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white"
//                       >
//                         <option value="">Select Service Needed</option>
//                         {serviceOptions.map((service, index) => (
//                           <option key={index} value={service}>{service}</option>
//                         ))}
//                       </select>
//                     </div>
                    
//                     <div className="relative group">
//                       <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         placeholder="Tell us about your vehicle and service needs..."
//                         rows="4"
//                         className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
//                       ></textarea>
//                     </div>
                    
//                     <button
//                       onClick={handleSubmit}
//                       disabled={isSubmitting}
//                       className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="w-5 h-5" />
//                           Send Message
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
            
//             {/* Business Info */}
//             <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
//               <div className="space-y-8">
//                 {/* Business Hours */}
//                 <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
//                   <div className="flex items-center gap-3 mb-6">
//                     <Clock className="w-8 h-8 text-yellow-400" />
//                     <h3 className="text-xl font-semibold text-yellow-400">Business Hours</h3>
//                   </div>
//                   <div className="space-y-3">
//                     {businessHours.map((schedule, index) => (
//                       <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
//                         <span className="text-gray-300">{schedule.day}</span>
//                         <span className="text-white font-medium">{schedule.hours}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Quick Actions */}
//                 <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
//                   <h3 className="text-xl font-semibold mb-6 text-yellow-400">Quick Actions</h3>
//                   <div className="space-y-4">
//                     <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//                       <Calendar className="w-5 h-5" />
//                       Schedule Appointment
//                     </button>
//                     <button className="w-full border-2 border-yellow-400 text-yellow-400 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
//                       <ArrowRight className="w-5 h-5" />
//                       Request Quote
//                     </button>
//                   </div>
//                 </div>
                
//                 {/* Social Media */}
//                 <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
//                   <h3 className="text-xl font-semibold mb-6 text-yellow-400">Follow Us</h3>
//                   <div className="flex gap-4">
//                     {socialLinks.map((social, index) => (
//                       <div
//                         key={index}
//                         className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 ${social.color} ${
//                           hoveredSocial === index ? 'scale-110' : ''
//                         }`}
//                         onMouseEnter={() => setHoveredSocial(index)}
//                         onMouseLeave={() => setHoveredSocial(null)}
//                       >
//                         {social.icon}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-20 bg-gradient-to-b from-black to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
//               Find Our Location
//             </h2>
//             <p className="text-xl text-gray-300">
//               Conveniently located with easy access and free parking
//             </p>
//           </div>
          
//           <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300">
//             <div className="aspect-video bg-gray-700 flex items-center justify-center relative overflow-hidden">
//               {/* Placeholder for map */}
//               <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
//               <div className="relative z-10 text-center">
//                 <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
//                 <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
//                 <p className="text-gray-300 mb-4">123 Auto Street, City, State 12345</p>
//                 <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110">
//                   Get Directions
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AutoServiceContact;



"use client";
import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Clock, Send, User, MessageCircle,
  CheckCircle, Star, Calendar, Zap, Shield, Award,
  Facebook, Twitter, Instagram, Youtube, ArrowRight
} from 'lucide-react';

const AutoServiceContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        console.log("Form data saved to MongoDB");
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setIsSubmitting(false);
  };

  const serviceOptions = [
    "Oil Change", "Brake Repair", "Transmission Service", "Engine Diagnostics",
    "AC Repair", "Tire Service", "Battery Replacement", "General Maintenance",
    "Emergency Repair", "Other"
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, name: "Facebook", color: "hover:text-blue-500" },
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", color: "hover:text-blue-400" },
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", color: "hover:text-pink-500" },
    { icon: <Youtube className="w-6 h-6" />, name: "YouTube", color: "hover:text-red-500" }
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: "Licensed & Insured" },
    { icon: <Award className="w-6 h-6" />, text: "ASE Certified" },
    { icon: <Star className="w-6 h-6" />, text: "5-Star Rated" },
    { icon: <Zap className="w-6 h-6" />, text: "Quick Service" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send Us a Message</h3>

                {submitted ? (
                  <div className="text-center py-8 animate-fadeInUp">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                    <h4 className="text-xl font-semibold mb-2 text-green-400">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon!</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        />
                      </div>

                      <div className="relative group">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number"
                        className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                      />
                    </div>

                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                      >
                        <option value="">Select Service Needed</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="relative group">
                      <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your vehicle and service needs..."
                        rows="4"
                        className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none"
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
                    >
                      {isSubmitting ? "Sending..." : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Business Info (optional, already included in your previous code) */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-yellow-400">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-700 py-2 last:border-b-0">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoServiceContact;
