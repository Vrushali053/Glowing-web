import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <section className="blog-section" id="blog" aria-label="blog">
      <h2 className="blog-title">More to Discover</h2>
      <div className="blog-container">
        <ul className="blog-list">
          {/* Blog Card 1 */}
          <li className="blog-item">
            <div className="blog-card">
              <figure className="blog-image-wrapper">
                <img
                  src="./src/assets/Images/blog-1.jpg"
                  alt="Find a Store"
                  className="blog-image"
                />
              </figure>
              <h3 className="blog-card-title">
                <a href="#" className="blog-link">Find a Store</a>
              </h3>
              <a href="#" className="blog-button">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>

          {/* Blog Card 2 */}
          <li className="blog-item">
            <div className="blog-card">
              <figure className="blog-image-wrapper">
                <img
                  src="./src/assets/Images/blog-2.jpg"
                  alt="From Our Blog"
                  className="blog-image"
                />
              </figure>
              <h3 className="blog-card-title">
                <a href="#" className="blog-link">From Our Blog</a>
              </h3>
              <a href="#" className="blog-button">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>

          {/* Blog Card 3 */}
          <li className="blog-item">
            <div className="blog-card">
              <figure className="blog-image-wrapper">
                <img
                  src="./src/assets/Images/blog-3.jpg"
                  alt="Our Story"
                  className="blog-image"
                />
              </figure>
              <h3 className="blog-card-title">
                <a href="#" className="blog-link">Our Story</a>
              </h3>
              <a href="#" className="blog-button">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Blog;
