import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { IoPersonOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineStar } from "react-icons/hi2"; 

function Navbar() {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search query:", query);
  };

  return (
    <header className="header">
      <div className="alert">
        <div className="container">
          <p className="alert-text">Free Shipping On All U.S. Orders $50+</p>
        </div>
      </div>

      <div className="header-top" data-header>
        <div className="container">
          {/* Hamburger Menu Button */}
          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          {/* Search Bar */}
          <div className="input-wrapper">
            <input
              type="search"
              name="search"
              placeholder="Search product"
              className="search-field"
              value={query}
              onChange={handleSearchChange}
            />
            <button className="search-submit" aria-label="search" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>

          {/* Logo */}
          <div className='Glowing'>GLOWING</div>

          {/* Header Actions */}
          <div className="header-actions">
            {/* User Icon */}
            <button className="header-action-btn" aria-label="user">
              <IoPersonOutline />
            </button>

            {/* Favorite Icon */}
            <button className="header-action-btn" aria-label="favourite item">
              <HiOutlineStar />
              <span className="btn-badge">0</span>  {/* Badge showing count */}
            </button>

            {/* Cart Icon */}
            <button className="header-action-btn" aria-label="cart item">
              <span className="btn-text" value="0">$0.00</span>
              <IoBagHandleOutline />
              <span className="btn-badge">0</span>  {/* Badge showing item count */}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="/Homepage" className="navbar-link has-after">Home</a></li>
          <li><a href="/collection" className="navbar-link has-after">Collection</a></li>
          <li><a href="/shop" className="navbar-link has-after">Shop</a></li>
          <li><a href="/offer" className="navbar-link has-after">Offer</a></li>
          <li><a href="/blog" className="navbar-link has-after">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
