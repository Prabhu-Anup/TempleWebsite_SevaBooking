import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Add this if you have framer-motion installed

// Example images (replace with your own images in /assets)
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.JPG';

const images = [img1, img2, img3];

// Example events data
const events = [
  {
    name: "Kumta Annual Rathotsava",
    date: "January 26,2026",
    tithi: "10 AM",
    details: ""
  },
  {
    name: "Festivals Celebration",
    date: "Check Calendar",
    tithi: "As per Hindu Calendar",
    details: "Celebrate major festivals with us. See the calendar for upcoming dates."
  },
  {
    name: "Community Service",
    date: "First Saturday of the month",
    tithi: "9 AM",
    details: "Participate in our monthly community service and make a difference."
  }
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [showSlider, setShowSlider] = useState(false);
  const sliderRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!showSlider) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showSlider, images.length]);

  // Show slider when scrolled into view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setShowSlider(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sliderRef.current) observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#FFF9E5] flex flex-col items-center">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold text-center mt-12 mb-4 text-red-800"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-yellow-500 drop-shadow">Shri Venkatraman Dev</span>, Kumta
      </motion.h1>
      {/* Animated Subheading */}
      <motion.p
        className="text-lg text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Join us in our spiritual journey and community events.<br />
        <span className="font-semibold text-yellow-700">Discover the peace and tranquility that our temple offers.</span>
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        className="w-full flex justify-center mb-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        style={{ transformOrigin: 'left' }}
      >
        <div className="h-1 w-48 rounded-full shadow bg-gradient-to-r from-red-200 via-red-800 to-red-200 animate-gradient-move" />
      </motion.div>

      {/* Upcoming Events as Cards */}
      <motion.h2
        className="text-3xl font-bold text-center mb-6 text-red-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        Upcoming Events
      </motion.h2>
      <motion.div
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + idx * 0.2, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-red-700">{event.name}</h3>
            <div className="mb-1 text-gray-600">
              <span className="font-medium">Date:</span> {event.date}
            </div>
            <div className="mb-1 text-gray-600">
              <span className="font-medium">Tithi:</span> {event.tithi}
            </div>
            {event.details && (
              <div className="text-gray-500 text-sm mt-2">{event.details}</div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Spacer to force scroll */}
      <div className="mb-4" />

      {/* Photo Slider appears only when scrolled into view */}
      <div ref={sliderRef} className="w-full flex justify-center">
        {showSlider && (
          <motion.div
            className="w-full max-w-2xl h-96 aspect-video relative mb-10 overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={images[current]}
              alt={`slide-${current}`}
              className="w-full h-full object-cover"
            />
            {/* Dots for navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-3 w-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'} border-2 border-white`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            {/* Optional: Arrows */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
              onClick={() => setCurrent((current - 1 + images.length) % images.length)}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
              onClick={() => setCurrent((current + 1) % images.length)}
              aria-label="Next"
            >
              &#8594;
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;