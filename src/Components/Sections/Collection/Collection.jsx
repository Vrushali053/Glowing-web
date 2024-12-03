import React from 'react';
import './Collection.css';

// Importing images for the collection cards
import collection1 from '../../../assets/Images/collection-1.jpg';
import collection2 from '../../../assets/Images/collection-2.jpg';
import collection3 from '../../../assets/Images/collection-3.jpg';

function Collection() {
  return (
    <section className="collection-section" id="collection" aria-label="collection">
      <h2 className="collection-heading">Explore Our Collections</h2>
      <div className="collection-container">
        <ul className="collection-grid">
          {/* Card 1 */}
          <li className="collection-card">
            <div
              className="collection-image"
              style={{ backgroundImage: `url(${collection1})` }}
            >
              <div className="collection-text">
                <h3 className="collection-title">Summer Collection</h3>
                <p className="collection-description">Starting at $17.99</p>
                {/* <a href="#" className="collection-link">Shop Now →</a> */}
              </div>
              <a href="#" className="collection-link">Shop Now →</a>
            </div>
          </li>

          {/* Card 2 */}
          <li className="collection-card">
            <div
              className="collection-image"
              style={{ backgroundImage: `url(${collection2})` }}
            >
              <div className="collection-text">
                <h3 className="collection-title">What’s New?</h3>
                <p className="collection-description">Get the glow</p>
                {/* <a href="#" className="collection-link">Discover Now →</a> */}
              </div>
              <a href="#" className="collection-link">Discover Now →</a>
            </div>
          </li>

          {/* Card 3 */}
          <li className="collection-card">
            <div
              className="collection-image"
              style={{ backgroundImage: `url(${collection3})` }}
            >
              <div className="collection-text">
                <h3 className="collection-title">Buy 1 Get 1</h3>
                <p className="collection-description">Starting at $7.99</p>
                
              </div>
              <a href="#" className="collection-link">Discover Now →</a>
            </div>
             
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Collection;
