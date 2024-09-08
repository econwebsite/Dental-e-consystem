import React from 'react';
import './ImageProduct.css';
import Imagetaken1 from '../../../assets/Product images/Image-taken1.jpg';
import Imagetaken2 from '../../../assets/Product images/Image-taken2.jpg';
import img3 from '../../../assets/Product images/Imageproduct.jpg';

const ImageProduct = () => {
  return (
    <div className="imageproduct-container">
                    <div className='mainContainer'>
      <h2 className="imageproduct-title">Images Taken from the Camera</h2>
      <div className="imageproduct-row" data-aos="flip-up" data-aos-duration="1100">
        <div className="imageproduct-box">
          <img src={Imagetaken1} alt="Image 1" className="imageproduct-img" />
          {/* <div className="imageproduct-text">One Molar</div> */}
        </div>
        <div className="imageproduct-box">
          <img src={Imagetaken2} alt="Image 2" className="imageproduct-img" />
          {/* <div className="imageproduct-text">Two Molar</div> */}
        </div>
        <div className="imageproduct-box">
          <img src={img3} alt="Image 3" className="imageproduct-img" />
          {/* <div className="imageproduct-text">Full Face</div> */}
        </div>
        {/* <div className="imageproduct-box">
          <img src={img4} alt="Image 4" className="imageproduct-img" />
          <div className="imageproduct-text">Jaw View</div>
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default ImageProduct;
