import React from 'react';
import './ProductCaseStudy.css';
import productcase from "../../../assets/Product images/product-casestudy.jpg"
import Modelbutton from "../../Button comp/Modelbutton";
import { Link } from 'react-router-dom';

const ProductCaseStudy = () => {
  return (
    <div className="productcase-container">
      <h1 className="productcase-title">Case Study</h1>
      <div className="productcase-card" data-aos="zoom-in-right" data-aos-duration="1600">
        <div className="productcase-card-left">
        

          <img
            src={productcase}
            alt="Sample Image"
            className="productcase-card-image"
          />
        </div>
        <div className="productcase-card-right">
        
          <h3 className="productcase-card-title">AI-driven and Portable Point-Of-Care Device for Pre-Cancer Screening for a US Medical Device Manufacturer</h3>
          
          <br></br>
          <p className="productcase-card-paragraph">
          Read to know how e-con Systems developed a custom camera solution for an AI-driven, portable point-of-care device for pre-cancer screening.</p>
          <Modelbutton className="casestudy-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" productName="CaseStudy" docName="e-con_ai-driven-and-portable-point-of-care" title="Case Study"/>

        </div>
      </div>
      <br></br>
    </div>
  );
};

export default ProductCaseStudy;
