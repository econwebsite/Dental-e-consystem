import React from 'react';
import './ImageProduct.css';
import defaultmode from '../../../assets/Product images/default-mode.jpg';
import color from '../../../assets/Product images/color-mode-enhancement.jpg';
import sharpness from '../../../assets/Product images/sharpness-enhanement.jpg';
import fullface from '../../../assets/Product images/full-face.jpg';


const imagingData = [
  {
    title: 'Default Mode',
    description: 'Provides True-to-life colors reproduction for general dental examination and imaging',
    image: defaultmode,
  },
  {
    title: 'Color Enhancement Mode',
    description: 'Amplifies red purplish tones to highlight inflamed or infected gum tissue.',
    image: color,
  },
  {
    title: 'Sharpness Enhancement Mode',
    description: 'Enhances dark lines or subtle fractures within the tooth structure',
    image: sharpness,
  },
  {
    title: 'Full Face',
    description: 'Provides the focus range to capture even the full face for documentation',
    image: fullface,
  }
];

const ImageProduct = () => {
  return (
    <div className="image-product-container">
      <h2 className="image-product-heading">Advanced Imaging Modes</h2>
      <p className='image-product-description'>We offer intelligent imaging modes that enhance diagnostic accuracy and documentation across a wide range of dental procedures. Whether you're examining tooth structures, assessing gum health, or capturing full-face images, our camera adapts with optimized image processing.</p>
      <div className="image-product-row">
        {imagingData.map((item, index) => (
          <div key={index} className="image-product-item">
            <img src={item.image} alt={item.title} className="image-product-image" />
            <h3 className="image-product-title">{item.title}</h3>
            <p className="image-product-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageProduct;
