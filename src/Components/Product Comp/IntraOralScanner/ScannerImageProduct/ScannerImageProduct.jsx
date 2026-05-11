import React from 'react';
import './ScannerImageProduct.css';
import defaultmode from '../../../../assets/product-images/default-mode.jpg';
import color from '../../../../assets/product-images/color-mode-enhancement.jpg';
import sharpness from '../../../../assets/product-images/sharpness-enhanement.jpg';
import fullface from '../../../../assets/product-images/full-face.jpg';
import Modelbutton from "../../../Button comp/Modelbutton";

const imagingData = [
  {
    title: 'Default Mode',
    description: 'Provides true-to-life 3D surface reproduction for general dental examination and scanning.',
    image: defaultmode,
  },
  {
    title: 'Color Enhancement Mode',
    description: 'Amplifies red purplish tones to highlight inflamed or infected gum tissue during scanning.',
    image: color,
  },
  {
    title: 'Sharpness Enhancement Mode',
    description: 'Enhances dark lines or subtle fractures within the tooth structure for precise detection.',
    image: sharpness,
  },
  {
    title: 'Full Arch',
    description: 'Provides the scanning range to capture even a full arch impression for documentation.',
    image: fullface,
  }
];

const ScannerImageProduct = () => {
  return (
    <div className='Advance-total'>
      <div className='mainContainer'>
        <div className="launching-soon-tag">Coming Soon</div>
        <div className="Advancing-Img-container">
          <div className="Advancing-Img-left">
            <h2 className="Advancing-Img-heading">Advanced Scanning Modes</h2>
            <p className="Advancing-Img-description">
              We offer intelligent scanning modes that enhance diagnostic accuracy and documentation across a wide range of dental procedures. Whether you're examining tooth structures, assessing gum health, or capturing full-arch scans, our scanner adapts with optimized image processing.
            </p>
            <div className="Advancing-Img-cards">
              {imagingData.map((item, index) => (
                <div key={index} className="Advancing-Img-card">
                  <div className="Advancing-Img-front">
                    <img src={item.image} alt={item.title} className="Advancing-Img-image" />
                    <h3 className="Advancing-Img-title">{item.title}</h3>
                  </div>
                  <div
                    className="Advancing-Img-back"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="Advancing-Img-back-overlay">
                      <p className="Advancing-Img-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="Advancing-Img-right">
            <div className='Advancing-Img-diagnostic-total'>
              <div className="Advancing-Img-diagnostic">
                <span className="Advancing-Img-corner tl"></span>
                <span className="Advancing-Img-corner tr"></span>
                <span className="Advancing-Img-corner bl"></span>
                <span className="Advancing-Img-corner br"></span>
                <h1 className="Advancing-Img-diagnostic-title">AI Diagnostics Ready</h1>
                <p className="Advancing-Img-diagnostic-text">
                  Our intraoral scanner is bundled with AI diagnostic capabilities that enable detection of key dental conditions such as caries, plaque, gingival inflammation, and tooth fractures from 3D scan data.
                </p>
                <Modelbutton
                  className="Advancing-Img-diagnostic-button"
                  text="Contact Us"
                  backgroundColor="#69ba2f"
                  animationColor="#00aeef"
                  hoverColor="#00aeef"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScannerImageProduct;
