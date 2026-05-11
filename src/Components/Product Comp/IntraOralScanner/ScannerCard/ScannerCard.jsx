import React from 'react';
import './ScannerCard.css';
import Productcard1 from "../../../assets/product-images/Productcard1.jpg";
import Productcard2 from "../../../assets/product-images/Productcard2.jpg";
import Productcard3 from "../../../assets/product-images/productcard3.jpg";

const ScannerCard = () => {
  return (
    <div className="productcards-design-container">
      <div className='mainContainer'>
        <h1 id="productcards-design-title">How We Designed It?</h1>
        <div className="productcards-content-container" data-aos="flip-up" data-aos-duration="1500">

          <div className="productcards-section">
            <h2>Sensor Performance</h2>
            <div className='productcards-Boder-color'>
              <p>An advanced 1/4.2" back-side illuminated (BSI) CMOS image sensor with a pixel size of 1.4 µm is used. Its good dynamic range, signal-to-noise ratio, and sensitivity bring out exceptional 3D scan quality.</p>
              <img src={Productcard1} alt="Sensor Performance" className="productcards-section-image" />
            </div>
          </div>

          <div className="productcards-section">
            <h2>Optics Quality</h2>
            <div className='productcards-Boder-color'>
              <p>A custom-designed fixed-focus lens is used to get the required depth of field (DoF) and field of view (FOV) with less distortion (approx. &lt;10%), tuned exactly with the image sensor for high-accuracy 3D scans.</p>
              <img src={Productcard2} alt="Optics Quality" className="productcards-section-image" />
            </div>
          </div>

          <div className="productcards-section">
            <h2>Scan Accuracy</h2>
            <div className='productcards-Boder-color'>
              <p>An advanced image signal processor (ISP) is used to maintain consistent dimensional fidelity and colour accuracy across various lighting conditions, delivering true-to-life 3D impressions.</p>
              <img src={Productcard3} alt="Scan Accuracy" className="productcards-section-image" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScannerCard;
