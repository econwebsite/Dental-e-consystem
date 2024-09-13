import React from 'react';
import './ProductTechnical.css';

import threeimp from "../../../assets/Product images/product-blog-aguid.jpg"
import autofocus from "../../../assets/Product images/productblog-autofocus.png"
import aguid from "../../../assets/Product images/a-guide-to-choose-the-right-dental-camera.jpg"
import Capturing from "../../../assets/Product images/product-Capturing.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";
import { useNavigate } from 'react-router-dom';

const ProductBlogs = () => {
  const navigate = useNavigate();
  return (
    <div className="ProductBlogs-Total mt-2">
      <h1 className="ProductBlogs-title">Technical Blogs</h1>
      <div className='mainContainer'>
      <div className="ProductBlogs-cards" data-aos="zoom-in-right" data-aos-duration="1800">
      <div className="ProductBlogs-card" onClick={() => navigate('/AGuidTochoose')} style={{cursor:"pointer"}}>
          <img src={aguid} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">A Guide to Choosing the Right Dental Intraoral Camera</h2>
          <p className="ProductBlogs-card-text">Read to learn about the key features that make a dental intraoral camera truly effective, such as macro imaging capabilities, high-resolution and wide-angle views.</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/AGuidTochoose"/>
        </div>
        <div className="ProductBlogs-card" onClick={() => navigate('/Threeimportant')} style={{cursor:"pointer"}}>
          <img src={threeimp} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">Three Important Parameters in Intra Oral Camera Technology</h2>
          <p className="ProductBlogs-card-text">Learn how three important parameters—Depth of Field, Field of View, and Image Quality—impact intra-oral camera device performance.</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/Threeimportant" />
        </div>
        
        <div className="ProductBlogs-card" onClick={() => navigate('/AutofocusBlog')} style={{cursor:"pointer"}}>
          <img src={autofocus} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
          <h2 className="ProductBlogs-card-title">Autofocus vs. Fixed focus: Which Lens to Choose for Intraoral Cameras</h2>
          <p className="ProductBlogs-card-text">Understand how autofocus and fixed focus differentiate the dental imaging quality, device usability, and overall patient care.</p>
          <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/AutofocusBlog" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductBlogs;
