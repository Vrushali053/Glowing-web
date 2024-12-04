import React from "react";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import payImage from '../../assets/Images/pay 1.png';
import Glowing from '../../assets/Images/logo.png'
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <p className="footer-text">
            Find our location nearest you. See in the {" "}
            <a href="#" className="footer-linkk">
                     Our Stores
            </a>
          </p>
          <p className="footer-text footer-bold" >+391 (0)35 2568 4593</p>
          <p className="footer-text">hello@domain.com</p>
        </div>

        {/* Useful Links Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">New Products</a></li>
            <li><a href="#" className="footer-link">Best Sellers</a></li>
            <li><a href="#" className="footer-link">Bundle & Save</a></li>
            <li><a href="#" className="footer-link">Online Gift Card</a></li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Information</h3>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Start a Return</a></li>
            <li><a href="#" className="footer-link">Contact Us</a></li>
            <li><a href="#" className="footer-link">Shipping FAQ</a></li>
            <li><a href="#" className="footer-link">Terms & Conditions</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-column">
          <h3 className="footer-headingg">Good emails.</h3>
          <p className="footer-text">
            Enter your email below to be the first to know about new collections and product launches.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="email-field"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Icon Section */}
      <div className="b-icon">
        {/* Left Section: Copyright & Social Media Icons */}
        <div className="left-section">
          <p>&copy; 2022 CodeWithSadee</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <IoLogoFacebook />
            </a>
            <a href="#" className="social-icon">
              <IoLogoInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle Section: Glowing */}
        <div className="middle-section">
          {/* <a href="#top" className="footer-glowing">GLOWING</a>  */}
          <img src={Glowing} alt="Glowing" className="glowing-image" />
        </div>

        {/* Right Section: Payment Methods Image */}
        <div className="right-section">
          <img src={payImage} alt="Payment Methods" className="payment-image" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
