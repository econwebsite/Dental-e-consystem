import React from 'react';
import './ScannerTechnicalBlog.css';

import threeimp from "../../../../assets/product-images/product-blog-aguid.jpg";
import autofocus from "../../../../assets/product-images/productblog-autofocus.png";
import aguid from "../../../../assets/product-images/a-guide-to-choose-the-right-dental-camera.jpg";
import whoShouldConsider from "../../../../assets/product-images/who-should-consider-e-con-systems-intraoral-camera-and-why.jpg";
import Capturing from "../../../../assets/product-images/product-Capturing.jpg";
import AnimatedButton from "../../../Button comp/AnimatedButton";
import { Link } from 'react-router-dom';

const ScannerTechnicalBlog = () => {
  return (
    <div className="ProductBlogs-Total mt-2">
      <h1 className="ProductBlogs-title">Technical Blogs</h1>
      <div className='mainContainer'>
        <div className="ProductBlogs-cards" data-aos="zoom-in-right" data-aos-duration="1800">

          <div className="ProductBlogs-card" style={{ cursor: "pointer" }}>
            <Link className="cardImgLink" to="/blogs/choosing-best-dental-intraoral-scanner" style={{ textDecoration: "none" }}>
              <img src={aguid} alt="Right Dental Intraoral Scanner" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blogs/choosing-best-dental-intraoral-scanner" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">A Guide to Choosing the Right Dental Intraoral Scanner</h2>
            </Link>
            <p className="ProductBlogs-card-text">Read to learn about the key features that make a dental intraoral scanner truly effective, such as scan accuracy, resolution, and wide-arch coverage.</p>
            <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/choosing-best-dental-intraoral-scanner" />
          </div>

          <div className="ProductBlogs-card" style={{ cursor: "pointer" }}>
            <Link className="cardImgLink" to="/blogs/three-important-parameters-in-intraoral-scanner-technology" style={{ textDecoration: "none" }}>
              <img src={threeimp} alt="Important Parameters in Intraoral Scanner" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blogs/three-important-parameters-in-intraoral-scanner-technology" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">Three Important Parameters in Intraoral Scanner Technology</h2>
            </Link>
            <p className="ProductBlogs-card-text">Learn how three important parameters — Scan Accuracy, Field of View, and Point Cloud Density — impact intraoral scanner device performance.</p>
            <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/three-important-parameters-in-intraoral-scanner-technology" />
          </div>

          <div className="ProductBlogs-card" style={{ cursor: "pointer" }}>
            <Link className="cardImgLink" to="/blogs/structured-light-vs-laser-for-intraoral-scanners" style={{ textDecoration: "none" }}>
              <img src={autofocus} alt="Structured Light vs Laser" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blogs/structured-light-vs-laser-for-intraoral-scanners" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">Structured Light vs. Laser: Which Technology for Intraoral Scanners?</h2>
            </Link>
            <p className="ProductBlogs-card-text">Understand how structured light and laser scanning differentiate dental scan quality, device usability, and overall patient care.</p>
            <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/structured-light-vs-laser-for-intraoral-scanners" />
          </div>

          <div className="ProductBlogs-card" style={{ cursor: "pointer" }}>
            <Link className="cardImgLink" to="https://www.e-consystems.com/blog/camera/applications/who-should-consider-e-con-systems-intraoral-scanner-and-why/" style={{ textDecoration: "none" }}>
              <img src={whoShouldConsider} alt="Who Should Consider e-con Systems' Intraoral Scanner" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="https://www.e-consystems.com/blog/camera/applications/who-should-consider-e-con-systems-intraoral-scanner-and-why/" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">Who Should Consider e-con Systems' Intraoral Scanner – And Why</h2>
            </Link>
            <p className="ProductBlogs-card-text">If you're already in the intraoral scanner space, you understand the effort and resources required for R&D, scan validation, testing, and market readiness.</p>
            <AnimatedButton className="ProductBlogs-card-button" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="https://www.e-consystems.com/blog/camera/applications/who-should-consider-e-con-systems-intraoral-scanner-and-why/" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScannerTechnicalBlog;
