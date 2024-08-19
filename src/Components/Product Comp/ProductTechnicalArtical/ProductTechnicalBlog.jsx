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
          <h2 className="ProductBlogs-card-title">Three Important Parameters in Intra Oral Camera Technology</h2>
          <p className="ProductBlogs-card-text">Learn how three important parameters—Depth of Field, Field of View, and Image Quality...</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductBlogs-card">
          <img src={Technical2} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">How ISPs Help Extraoral Cameras Significantly Improve Image Quality</h2>
          <p className="ProductBlogs-card-text">ISPs enhance extraoral camera images by fine-tuning white balance, exposure, and more...</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductBlogs-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">How to Choose the Right Camera for Extraoral Devices?</h2>
          <p className="ProductBlogs-card-text">"Read on to learn more about key features like 4K resolution, autofocus capabilities...</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductBlogs-card">
          <img src={Technical4} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">Illumination vs. Image Quality: What Extraoral Cameras Really Need</h2>
          <p className="ProductBlogs-card-text">Read about features like High Dynamic Range (HDR) and Dynamic Tone Mapping (DTM)...</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductBlogs;
