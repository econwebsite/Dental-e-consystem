import React from 'react';
import './Productboderbox.css';
import Boderimg1 from "../../../assets/Product images/Boderimg1.png";
import Boderimg2 from "../../../assets/Product images/Boderimg2.png";
import Boderimg3 from "../../../assets/Product images/Boderimg3.png";

const Productboderbox = () => {
  return (
    <div className='Productboderbox-Total'>
                    <div className='mainContainer'>

      <div className="Productboderbox-container">
        <h1>Why choose our intraoral camera?</h1>
        <p className="Productboderbox-description">
          Many brands have shared the manufacturing of intraoral cameras, which often lead to market delays and increased costs.
        </p>
        <div className="Productboderbox-content">
          <div className="Productboderbox-left-column">
            <div className="Productboderbox-border-box">
              <div className="Productboderbox-box-content">
                <img src={Boderimg1} alt="Icon" className="Productboderbox-icon-image"/>
                <p>Selecting the perfect image sensor/camera module.</p>
              </div>
            </div>
            <div className="Productboderbox-border-box">
              <div className="Productboderbox-box-content">
                <img src={Boderimg2} alt="Icon" className="Productboderbox-icon-image"/>
                <p>Identifying the right optics off-the-shelf for the sensor.</p>
              </div>
            </div>
            <div className="Productboderbox-border-box">
              <div className="Productboderbox-box-content">
                <img src={Boderimg3} alt="Icon" className="Productboderbox-icon-image"/>
                <p>Selecting the perfect image sensor/camera module.</p>
              </div>
            </div>
            <div className="Productboderbox-border-box">
              <div className="Productboderbox-box-content">
                <img src={Boderimg1} alt="Icon" className="Productboderbox-icon-image"/>
                <p>Identifying the right optics off-the-shelf for the sensor.</p>
              </div>
            </div>
          </div>
          <div className="Productboderbox-right-column">
            <iframe
              src="https://www.youtube.com/embed/P6ky60BBwCk?si=PoqfPNqgWKdEZwPg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <br></br>
        <br></br>
        <p className="Productboderbox-description">
          Many brands have shared the manufacturing of intraoral cameras, which often lead to market delays and increased costs.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Productboderbox;
