import React from 'react';
import './ProductCaseStudy.css';
import Technical1 from "../../../assets/Product images/productimg1.jpg";
import Technical2 from "../../../assets/Product images/productimg2.jpg";
import Technical3 from "../../../assets/Product images/productimg6.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";

const ProductCaseStudy = () => {
  return (
    <div className="ProductCaseStudy-Total mt-2">
      <h1 className="ProductCaseStudy-title">Case Studies</h1>
      <div className='mainContainer'>
      <div className="ProductCaseStudy-cards">
        <div className="ProductCaseStudy-card">
          <img src={Technical1} alt="AI-enabled point of care device" className="ProductCaseStudy-card-image" />
          <h2 className="ProductCaseStudy-card-title">Building an AI-enabled point of care device</h2>
          <p className="ProductCaseStudy-card-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="ProductCaseStudy-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductCaseStudy-card">
          <img src={Technical2} alt="AI-enabled point of care device" className="ProductCaseStudy-card-image" />
          <h2 className="ProductCaseStudy-card-title">Building an AI-enabled point of care device</h2>
          <p className="ProductCaseStudy-card-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="ProductCaseStudy-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductCaseStudy-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="ProductCaseStudy-card-image" />
          <h2 className="ProductCaseStudy-card-title">Building an AI-enabled point of care device</h2>
          <p className="ProductCaseStudy-card-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="ProductCaseStudy-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductCaseStudy;
