import React from 'react';
import './ProductTechnical.css';

import threeimp from "../../../assets/Product images/product-blog-aguid.jpg"
import autofocus from "../../../assets/Product images/productblog-autofocus.png"
import aguid from "../../../assets/Product images/a-guide-to-choose-the-right-dental-camera.jpg"
import Capturing from "../../../assets/Product images/product-Capturing.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";
import { Link } from 'react-router-dom';

const ProductBlogs = () => {
  return (
    <div className="ProductBlogs-Total mt-2">
      <h1 className="ProductBlogs-title">Technical Blogs</h1>
      <div className='mainContainer'>
      <div className="ProductBlogs-cards" data-aos="zoom-in-right" data-aos-duration="1800">
      <div className="ProductBlogs-card" style={{cursor:"pointer"}}>
      <Link className="cardImgLink" to="/blogs/choosing-best-dental-intraoral-camera" style={{textDecoration:"none"}}>
      <img src={aguid} alt="AI-enabled point of care device" className="ProductBlogs-card-image" /></Link>
      <Link className="cardTitleLink" to="/blogs/choosing-best-dental-intraoral-camera" style={{textDecoration:"none"}}> 
      <h2 className="ProductBlogs-card-title">A Guide to Choosing the Right Dental Intraoral Camera</h2></Link>
          <p className="ProductBlogs-card-text">Read to learn about the key features that make a dental intraoral camera truly effective, such as macro imaging capabilities, high-resolution and wide-angle views.</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/choosing-best-dental-intraoral-camera"/>
        </div>
        <div className="ProductBlogs-card" style={{cursor:"pointer"}}>
        <Link className="cardImgLink" to="/blogs/three-important-parameters-in-intraoral-camera-technology" style={{textDecoration:"none"}}><img src={threeimp} alt="AI-enabled point of care device" className="ProductBlogs-card-image" /></Link>
        <Link className="cardTitleLink" to="/blogs/three-important-parameters-in-intraoral-camera-technology" style={{textDecoration:"none"}}><h2 className="ProductBlogs-card-title">Three Important Parameters in Intra Oral Camera Technology</h2></Link>
          <p className="ProductBlogs-card-text">Learn how three important parameters—Depth of Field, Field of View, and Image Quality—impact intra-oral camera device performance.</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/three-important-parameters-in-intraoral-camera-technology" />
        </div>
        
        <div className="ProductBlogs-card" style={{cursor:"pointer"}}>
        <Link className="cardImgLink" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" style={{textDecoration:"none"}}><img src={autofocus} alt="AI-enabled point of care device" className="ProductBlogs-card-image" /></Link>
        <Link className="cardTitleLink" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" style={{textDecoration:"none"}}><h2 className="ProductBlogs-card-title">Autofocus vs. Fixed focus: Which Lens to Choose for Intraoral Cameras</h2></Link>
          <p className="ProductBlogs-card-text">Understand how autofocus and fixed focus differentiate the dental imaging quality, device usability, and overall patient care.</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductBlogs;
