import React from 'react';
import './ProductTechnical.css';

import aguid from "../../../assets/Product images/product-blog-aguid.jpg"
import autofocus from "../../../assets/Product images/productblog-autofocus.png"
import threeimp from "../../../assets/Product images/productblog-threeimp.png"

// /////////
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
          <img src={threeimp} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">Three Important Parameters in Intra Oral Camera Technology</h2>
          <p className="ProductBlogs-card-text">Learn how three important parameters—Depth of Field, Field of View, and Image Quality...</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductBlogs-card">
          <img src={autofocus} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">Autofocus vs. Fixed focus: Which Lens to Choose for Intraoral Cameras</h2>
          <p className="ProductBlogs-card-text">Understand how autofocus and fixed focus differentiate the dental imaging quality, device usability, and overall patient care.</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductBlogs-card">
          <img src={aguid} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">A Guide to Choosing the Right Dental Intraoral Camera</h2>
          <p className="ProductBlogs-card-text">Read to learn about the key features that make a dental intraoral camera truly effective, such as macro imaging capabilities, high-resolution and wide-angle views.</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductBlogs-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">Capturing the Dentists’ POV with Dental Loupe Cameras</h2>
          <p className="ProductBlogs-card-text">This blog explores features that enable loupe cameras for precise diagnoses. Find out why size, color accuracy, and stability are the deciding factors of the loupe camera performance index.</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default ProductBlogs;
