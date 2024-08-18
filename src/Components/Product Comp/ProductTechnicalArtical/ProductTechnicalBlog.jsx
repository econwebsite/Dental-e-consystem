import React from 'react';
import './ProductTechnical.css';
import Technical1 from "../../../assets/Product images/productimg3.jpg";
import Technical2 from "../../../assets/Product images/productimg4.jpg";
import Technical4 from "../../../assets/Product images/productimg5.jpg";

import Technical3 from "../../../assets/Product images/productimg6.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";

const ProductBlogs = () => {
  return (
    <div className="ProductBlogs-Total mt-2">
      <h1 className="ProductBlogs-title">Technical Blogs</h1>
      <div className='mainContainer'>
      <div className="ProductBlogs-cards">
        <div className="ProductBlogs-card">
          <img src={Technical1} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">Building an AI-enabled point of care device</h2>
          <p className="ProductBlogs-card-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductBlogs-card">
          <img src={Technical2} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">Building an AI-enabled point of care device</h2>
          <p className="ProductBlogs-card-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductBlogs-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">Building an AI-enabled point of care device</h2>
          <p className="ProductBlogs-card-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductBlogs-card">
          <img src={Technical4} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">Building an AI-enabled point of care device</h2>
          <p className="ProductBlogs-card-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductBlogs;
