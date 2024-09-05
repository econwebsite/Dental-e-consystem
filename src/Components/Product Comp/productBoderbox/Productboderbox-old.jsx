import React, { useState } from 'react';
import './Productboderbox.css';
import Boderimg1 from "../../../assets/Product images/Boderimg1.png";
import Boderimg2 from "../../../assets/Product images/Boderimg2.png";
import Boderimg3 from "../../../assets/Product images/Boderimg3.png";
import Boderimg4 from "../../../assets/Product images/Boderimg4.png";
import Vediothumbnail from "../../../assets/home images/Tumbnail.jpg"; 
import Vediothumbnail2 from "../../../assets/Product images/boderthumb2.jpg"; 

import FsLightbox from "fslightbox-react";

const Productboderbox = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className='Productboderbox-Total'>
      <div className='mainContainer'>
        <div className='Productboderbox-container'>
          <h1>Why choose our intraOral camera?</h1>
          <p className="Productboderbox-description">
            Many brands have shared the manufacturing of intraOral cameras, which often lead to market delays and increased costs.
          </p>

          {/* Video thumbnails */}
          <div className="video-title-container">
            <div className="product-thumbnail">
              <img
                src={Vediothumbnail}
                alt="Left Thumbnail"
                className="productside-img"
                onClick={() => setToggler(!toggler)}
              />
            </div>

            <div className="product-thumbnail">
              <img
                src={Vediothumbnail2}
                alt="Right Thumbnail"
                className="productside-img"
                onClick={() => setToggler(!toggler)}
              />
            </div>

            <FsLightbox
              toggler={toggler}
              sources={[
                "https://www.youtube.com/embed/wPdvM_xv-tg?autoplay=1"
              ]}
            />
          </div>

          <br />

          {/* Border boxes */}
          <div className="Productboderbox-content">
            <div className="Productboderbox-border-box">
              <img src={Boderimg1} alt="Icon 1" className="Productboderbox-icon-image" />
              <p>Selecting the perfect image sensor/camera module.</p>
            </div>
            <div className="Productboderbox-border-box">
              <img src={Boderimg2} alt="Icon 2" className="Productboderbox-icon-image" />
              <p>Identifying the right optics off-the-shelf for the sensor.</p>
            </div>
            <div className="Productboderbox-border-box">
              <img src={Boderimg3} alt="Icon 3" className="Productboderbox-icon-image" />
              <p>Integrating these components into a flawless design.</p>
            </div>
            <div className="Productboderbox-border-box">
              <img src={Boderimg4} alt="Icon 4" className="Productboderbox-icon-image" />
              <p>Fine-tuning the image quality to meet high standards.</p>
            </div>
          </div>

          <br />
          <br />

          {/* Final paragraph */}
          <p className="Productboderbox-description">
            Our cameras are designed with the latest technology to ensure superior image quality, reliability, and ease of use for dental professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Productboderbox;
