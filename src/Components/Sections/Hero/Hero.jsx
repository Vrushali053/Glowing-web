import React from 'react';
import './Hero.css';  // Import the CSS file for styling

// Import images from the src folder
import image1 from '../../../assets/Images/hero-banner-1.jpg';
import image2 from '../../../assets/Images/hero-banner-2.jpg';
import image3 from '../../../assets/Images/hero-banner-3.jpg';

function Hero() {
  return (
    <div className="hero-container">
      <div className="image-scroll-container">
        {/* First Image */}
        <div className="image-wrapper" style={{ backgroundImage: `url(${image1})` }}>
          <div className="overlay-text">
            <h1 className="hero-title">Reveal The <br /> Beauty of Skin</h1>
            <p className="heroo-text">
              Made using clean, non-toxic ingredients, our products <p>
              are designed for everyone.</p>
            </p>
            <p className="price">Starting at $7.99</p>
            <a href="#" className="btn btn-primary">Shop Now</a>
          </div>
        </div>
        
        {/* Second Image */}
        <div className="image-wrapper" style={{ backgroundImage: `url(${image2})` }}>
          <div className="overlay-text">
            <h1 className="hero-title">Reveal The <br /> Beauty of Skin</h1>
            <p className="heroo-text">
              Made using clean, non-toxic ingredients, our products <p>
              are designed for everyone.</p>
            </p>
            <p className="price">Starting at $7.99</p>
            <a href="#" className="btn btn-primary">Shop Now</a>
          </div>
        </div>

        {/* Third Image */}
        <div className="image-wrapper" style={{ backgroundImage: `url(${image3})` }}>
          <div className="overlay-text">
            <h1 className="hero-title">Reveal The <br /> Beauty of Skin</h1>
            <p className="heroo-text">
              Made using clean, non-toxic ingredients, our products <p>
              are designed for everyone.</p>
            </p>
            <p className="price">Starting at $7.99</p>
            <a href="#" className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
