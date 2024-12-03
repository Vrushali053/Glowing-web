import React, { useState, useEffect } from 'react';
import './Offer.css';

function Offer() {
  // Set the target time (e.g., 15 days, 21 hours, 46 minutes, 8 seconds)
  const targetDate = new Date();
  targetDate.setSeconds(targetDate.getSeconds() + (15 * 24 * 60 * 60) + (21 * 60 * 60) + (46 * 60) + 8);  // 15 days, 21 hours, 46 minutes, 8 seconds

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate time remaining
  const updateCountdown = () => {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(interval); // Clear the interval when time is up
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    updateCountdown(); // Initial call to set the countdown

    const interval = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <section className="section offer" id="offer" aria-label="offer" data-section>
        <div className="container offer-container">
          <div className="offer-item">
            <div className="image-container">
              <div className="image-item image-left">
                <img
                  src=".\src\assets\Images\offer-banner-1(1).jpg"
                  alt="Offer Image 1"
                  className="offer-image"
                />
              </div>
              <div className="image-item image-right">
                <img
                  src=".\src\assets\Images\offer-banner-2.jpg"
                  alt="Offer Image 2"
                  className="offer-image"
                />
              </div>
            </div>
          </div>

          <div className="offer-item offer-content">
            <p className="offer-subtitle">
              <span className="span">Special Offer</span>
              <span className="badge" aria-label="20% off">-20%</span>
            </p>

            <h2 className="h2-large section-title">Mountain Pine Bath Oil</h2>

            <p className="section-text">
              Made using clean, non-toxic ingredients, our
              <p>products are designed for everyone.</p>
            </p>

            {/* Countdown Display */}
            <div className="countdown">
              <span className="time" aria-label="days">{timeLeft.days}</span>
              <span className="time" aria-label="hours">{timeLeft.hours}</span>
              <span className="time" aria-label="minutes">{timeLeft.minutes}</span>
              <span className="time" aria-label="seconds">{timeLeft.seconds}</span>
            </div>

            <a href="#" className="btn btn-primary">Get Only $39.00</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offer;
