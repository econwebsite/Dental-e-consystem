import React from 'react';
import './ProductCard.css';
import Productcard1 from "../../../assets/Product images/Productcard1.jpg";
import Productcard2 from "../../../assets/Product images/Productcard2.jpg";
import Productcard3 from "../../../assets/Product images/productcard3.jpg";

const ProductCard = () => {
  return (
    <div className="productcards-design-container">
     <div className='mainContainer'>
      <h1 id="productcards-design-title">How We Designed It?</h1>
      <div className="productcards-content-container"data-aos="flip-up" data-aos-duration="1500">
        
        <div className="productcards-section">
          <h2>Sensor Performance</h2>
          <div className='productcards-Boder-color'>
            <p>An advanced 1/4.2" back-side illuminated (BSI) CMOS image sensor with a pixel size of 1.4 um is used. Its good dynamic range, signal-to-noise ratio, and sensitivity bring out external image quality.</p>
            <img src={Productcard1} alt="Sensor Performance" className="productcards-section-image" />
          </div>
        </div>

 
        <div className="productcards-section">
          <h2>Lens Quality</h2>
          <div className='productcards-Boder-color'>
            <p>A custom-designed fixed-focus lens is used to get the required depth of field (DoF) and field of view (FOV) with less distortion (approx. {'<'}10%), and it is tuned exactly with the image sensor for high-quality images.</p>
            <img src={Productcard2} alt="Lens Quality" className="productcards-section-image" />
          </div>
        </div>

        <div className="productcards-section">
          <h2>Color Accuracy</h2>
          <div className='productcards-Boder-color'>
            <p>An advanced image signal processor (ISP) is used to maintain consistent color fidelity across various lighting conditions, delivering true-to-life images.</p>
            <img src={Productcard3} alt="Color Accuracy" className="productcards-section-image" />
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default ProductCard;
