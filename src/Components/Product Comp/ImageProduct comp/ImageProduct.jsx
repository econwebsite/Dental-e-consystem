import React from 'react';
import './ImageProduct.css';
import img1 from '../../../assets/Product images/Imageproduct.jpg';
import img2 from '../../../assets/Product images/Imageproduct.jpg';
import img3 from '../../../assets/Product images/Imageproduct.jpg';
import img4 from '../../../assets/Product images/Imageproduct.jpg';

const ImageProduct = () => {
  return (
    <div className="imageproduct-container">
                    <div className='mainContainer'>
      <h2 className="imageproduct-title">Images Taken from the Camera</h2>
      <div className="imageproduct-row">
        <div className="imageproduct-box">
          <img src={img1} alt="Image 1" className="imageproduct-img" />
          {/* <div className="imageproduct-text">One Molar</div> */}
        </div>
        <div className="imageproduct-box">
          <img src={img2} alt="Image 2" className="imageproduct-img" />
          {/* <div className="imageproduct-text">Two Molar</div> */}
        </div>
        <div className="imageproduct-box">
          <img src={img3} alt="Image 3" className="imageproduct-img" />
          {/* <div className="imageproduct-text">Full Face</div> */}
        </div>
        <div className="imageproduct-box">
          <img src={img4} alt="Image 4" className="imageproduct-img" />
          {/* <div className="imageproduct-text">Jaw View</div> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ImageProduct;
