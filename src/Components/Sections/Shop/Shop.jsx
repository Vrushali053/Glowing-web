import React from 'react';
import './Shop.css'; // Ensure the styles for the shop section are correctly imported

import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { IoRepeat } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";

import { FaArrowRight } from "react-icons/fa6";

// Import product images for the shop cards
// import product1 from '../../../assets/images/product-01.jpg';
import product2 from '../../../assets/images/product-02.jpg';
import product3 from '../../../assets/images/product-03.jpg';
// import product4 from '../../../assets/images/product-04.jpg';
import product5 from '../../../assets/images/product-05.jpg';
import product6 from '../../../assets/images/product-06.jpg';
// import product7 from '../../../assets/images/product-07.jpg';
import product8 from '../../../assets/images/product-08.jpg';
import product9 from '../../../assets/images/product-09.jpg';
import product10 from '../../../assets/images/product-10.jpg';
import product11 from '../../../assets/images/product-11.jpg';
import product15 from '../../../assets/images/product-15.jpg';

function Shop() {
  return (
    <section className="section shop" id="shop" aria-label="shop" data-section>
       <div className="title-wrapper">
  <h2 className="h2 section-title">Our Bestsellers</h2>
  <p className="box">
    Shop All Products <FaArrowRight />
  </p>
</div>

      <div className="container">
       

        <ul className="has-scrollbar">
          {/* Product 1 */}
          {/* <li className="scrollbar-item">
            <div className="shop-">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product1} width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                <span className="badgee" aria-label="20% off">-20%</span>
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <del className="del">$39.00</del>
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Facial cleanser</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                  </div>
                  <p className="rating-text">5170 reviews</p>
                </div>
              </div>
            </div>
          </li> */}

          {/* Product 2 */}
          <li className="scrollbar-item">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product2} width="540" height="720" loading="lazy" alt="Bio-shroom Rejuvenating Serum" className="img-cover" />
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Bio-shroom Rejuvenating Serum</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <p className="rating-text">5170 reviews</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </li>

          {/* Product 3 */}
          <li className="scrollbar-item">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product3} width="540" height="720" loading="lazy" alt="Coffee Bean Caffeine Eye Cream" className="img-cover" />
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Coffee Bean Caffeine Eye Cream</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <p className="rating-text">5170 reviews</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </li>

          {/* Product 4 */}
          {/* <li className="scrollbar-item">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product4} width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Facial cleanser</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                  </div>
                  <p className="rating-text">5170 reviews</p>
                </div>
              </div>
            </div>
          </li> */}

          {/* Product 5 */}
          <li className="scrollbar-item">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product5} width="540" height="720" loading="lazy" alt="Coffee Bean Caffeine Eye Cream" className="img-cover" />
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Coffee Bean Caffeine Eye Cream</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                
                  <p className="rating-text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Product 6 */}
          <li className="scrollbar-item">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product6} width="540" height="720" loading="lazy" alt="Bio-shroom Rejuvenating Serum" className="img-cover" />
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Bio-shroom Rejuvenating Serum</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                 
                  <p className="rating-text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>





       <div className="title-wrapper">
          <h2 className="h2 section-title">Under$25</h2>
          {/* <p className='text'>
      Shop All Products <i className='fa fa-arrow-right'></i>
    </p> */}
       <div className='containe'>
      <p className='box'>
        Shop All Products <FaArrowRight />
      </p>
    </div>
          <a href="#" className="btn-link">
            {/* <span className="span">Shop All Products</span> */}
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </div>
      <div className="container">
       

        <ul className="has-scrollbarr">
          {/* Product 7 */}
          {/* <li className="scrollbar-itemr">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product7} width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                <span className="badgee" aria-label="20% off"></span>
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <del className="del">$39.00</del>
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Facial cleanser</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                  </div>
                  <p className="rating-text">5170 reviews</p>
                </div>
              </div>
            </div>
          </li> */}

          {/* Product 8 */}
          <li className="scrollbar-item">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product8} width="540" height="720" loading="lazy" alt="Bio-shroom Rejuvenating Serum" className="img-cover" />
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Bio-shroom Rejuvenating Serum</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                  
                  <p className="rating-text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Product 9 */}
          <li className="scrollbar-item">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product9} width="540" height="720" loading="lazy" alt="Coffee Bean Caffeine Eye Cream" className="img-cover" />
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Coffee Bean Caffeine Eye Cream</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                
                  <p className="rating-text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Product 10 */}
          <li className="scrollbar-item">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product10} width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Bio-shroom Rejuvenating Serum</a>
                  {/* Facial cleanser */}
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                 
                  <p className="rating-text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Product 11 */}
          <li className="scrollbar-item">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product11} width="540" height="720" loading="lazy" alt="Coffee Bean Caffeine Eye Cream" className="img-cover" />
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Coffee Bean Caffeine Eye Cream</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
               
                  <p className="rating-text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Product 15 */}
          <li className="scrollbar-item">
            <div className="shop-card">
              <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                <img src={product15} width="540" height="720" loading="lazy" alt="Bio-shroom Rejuvenating Serum" className="img-cover" />
                <div className="card-actions">
                  <button className="action-btn" aria-label="add to cart">
                    <ion-icon name="bag-handle-outline" aria-hidden="true"> <IoBagHandleOutline /></ion-icon>
                  </button>
                  <button className="action-btn" aria-label="add to wishlist">
                    <ion-icon name="star-outline" aria-hidden="true"> <IoIosStarOutline /></ion-icon>
                  </button>
                   <button className="action-btn" aria-label="compare">
                    <ion-icon name="repeat-outline" aria-hidden="true"><IoRepeat /></ion-icon>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="price">
                  <span className="span">$29.00</span>
                </div>
                <h3>
                  <a href="#" className="card-title">Bio-shroom Rejuvenating Serum</a>
                </h3>
                <div className="card-rating">
                  <div className="rating-wrapper" aria-label="5 star rating">
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                    <ion-icon name="star" aria-hidden="true"><MdOutlineStar /></ion-icon>
                
                  <p className="rating-text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* <div className="a">
      <div className="image-containerr">
        <img
          src="./src/assets/Images/feature-1.jpg"
          alt="Image 1"
          className="image1"
        />
        <img
          src="./src/assets/Images/feature-1.jpg"
          alt="Image 2"
          className="image2"
        />
        <div className="overlay-text">Your Overlapping Text</div>
      </div>
    </div> */}

       {/* Feature Section */}
       <section className="section feature" aria-label="feature" data-section>
  <h2 className="h2-large section-title">Why Shop with Glowing?</h2>
  <div className="containere">
    <ul className="flex-list">
      {/* Feature Card 1 */}
      <li className="flex-item">
        <div className="feature-card">
          <img
            src='.\src\assets\Images\feature-1.jpg'
            alt="Guaranteed PURE"
            className="card-icon"
          />
          <h3 className="h3 card-title">Guaranteed PURE</h3>
          <p className="card-text">
            All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.
          </p>
        </div>
      </li>

      {/* Feature Card 2 */}
      <li className="flex-item">
        <div className="feature-card">
          <img
            src='.\src\assets\Images\feature-2.jpg'
            alt="Completely Cruelty-Free"
            className="card-icon"
          />
          <h3 className="h3 card-title">Completely Cruelty-Free</h3>
          <p className="card-text">
            All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.
          </p>
        </div>
      </li>

      {/* Feature Card 3 */}
      <li className="flex-item">
        <div className="feature-card">
          <img
            src='.\src\assets\Images\feature-3.jpg'
            alt="Ingredient Sourcing"
            className="card-icon"
          />
          <h3 className="h3 card-title">Ingredient Sourcing</h3>
          <p className="card-text">
            All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.
          </p>
        </div>
      </li>
    </ul>
  </div>
</section>

    </section>
    
  );
}

export default Shop;
