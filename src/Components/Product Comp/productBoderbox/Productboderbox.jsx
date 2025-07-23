import React, { useState } from 'react';
import './Productboderbox.css';
import Boderimg1 from "../../../assets/Product images/produc-hd.png";
import Boderimg2 from "../../../assets/Product images/product-photo.png";
import Boderimg3 from "../../../assets/Product images/product-gallary.png";
import Vediothumbnail1 from "../../../assets/Product images/thumbnail.jpg"; 
import Vediothumbnail2 from "../../../assets/Product images/thumbnail2.jpg"; 

import FsLightbox from "fslightbox-react";

const Productboderbox = () => {
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleVideoClick = (index) => {
    setSlideIndex(index);
    setToggler(!toggler);
  };

  return (
    <div className='Productboderbox-Total'>
      <div className='mainContainer'>
        <div className="Productboderbox-container">
          <h1>Why choose our Intraoral camera?</h1>
          <p className="Productboderbox-description">
            With over 20 years of camera engineering experience, we’ve perfected a solution that meets and exceeds the industry's highest standards:
          </p>

          <div className="Productboderbox-content">
            <div className="Productboderbox-left-column">
              <div className='Productboder-imges'>
                <h4><img src={Boderimg1} className='pro-Boderimg' />Full HD resolution</h4>
              </div>
              <p>The high pixel density ensures that images remain crisp and detailed even when zoomed in. This clarity allows identification of even the smallest imperfections, such as micro-fractures and early-stage lesions.</p>

              <div className='Productboder-imges'>
                <h4><img src={Boderimg2} className='pro-Boderimg' />5mm – 80mm Depth of Field</h4>
              </div>
              <p>The camera integrates a custom-designed fixed focus lens, engineered with high-quality materials to minimize distortion and aberrations. Optimum aperture ensures image clarity throughout the focal range.</p>

              <div className='Productboder-imges'>
                <h4><img src={Boderimg3} className='pro-Boderimg' />Image Quality</h4>
              </div>
              <p>The on-board signal processor chip provides accurate color reproduction. Image quality is enhanced by reducing noise and increasing contrast. Multiple imaging modes provides efficient clinical diagnosis.</p>
            </div>

            <div className="Productboderbox-right-column">
              <div className="product-video-row">
                <div className="product-thumbnail" onClick={() => handleVideoClick(0)}>
                  <img src={Vediothumbnail1} alt="Video 1" className="productside-img" />
                </div>
                <div className="product-thumbnail" onClick={() => handleVideoClick(1)}>
                  <img src={Vediothumbnail2} alt="Video 2" className="productside-img" />
                </div>
              </div>

              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://www.youtube.com/embed/qfmwMkSypo4?autoplay=1",
                  "https://www.youtube.com/embed/O35WqKAkJZo?autoplay=1"
                ]}
                slide={slideIndex + 1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productboderbox;
