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
          <h2 className="ProductCaseStudy-card-title">The Roadmap of Dual Ethernet Camera Integration in Dental Operatory Lights</h2>
          <p className="ProductCaseStudy-card-text">Explore how we successfully integrated dual 4K cameras into dental operatory lights for a leading European dental device manufacturer. In this case study, we discuss the challenges we faced during the prototyping phase.</p>
          <AnimatedButton className="ProductCaseStudy-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductCaseStudy-card">
          <img src={Technical2} alt="AI-enabled point of care device" className="ProductCaseStudy-card-image" />
          <h2 className="ProductCaseStudy-card-title">AI-driven and Portable Point-Of-Care Device for Pre-Cancer Screening for a US Medical Device Manufacturer</h2>
          <p className="ProductCaseStudy-card-text">Read to know how e-con Systems developed a custom camera solution for an AI-driven, portable point-of-care device for pre-cancer screening.</p>
          <AnimatedButton className="ProductCaseStudy-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
        <div className="ProductCaseStudy-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="ProductCaseStudy-card-image" />
          <h2 className="ProductCaseStudy-card-title">Improving Dental Documentation using 4k Dental Loupe Camera for a Leading Europe Based Dental Imaging Solutions Provider</h2>
          <p className="ProductCaseStudy-card-text">This case study explores how e-con Systems developed a custom 4K dental loupe camera for a leading European dental imaging solutions provider.</p>
          <AnimatedButton className="ProductCaseStudy-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductCaseStudy;
