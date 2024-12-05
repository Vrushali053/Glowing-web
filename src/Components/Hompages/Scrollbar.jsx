import React, { useState, useEffect } from 'react';
import './Scrollbar.css';  // Import custom CSS styles

const Scrollbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if the page is scrolled down
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true); // Show the button after scrolling down 200px
    } else {
      setIsVisible(false); // Hide the button when at the top
    }
  };

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Listen for scroll events

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ↑ {/* Arrow character */}
    </button>
  );
};

export default Scrollbar;
