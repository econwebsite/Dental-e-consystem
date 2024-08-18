import React from 'react';
import './Homecard.css';
import Cardimg1 from "../../../assets/home images/Intraoral.jpg";
import Cardimg2 from "../../../assets/home images/Extraoral.jpg";
import Cardimg3 from "../../../assets/home images/Loupecamera.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";

const Homecard = () => {
  return (
    <div className="mainContainer">
      <div className="second-home-card-container">
        <div className="second-home-card">
          <div className="second-home-card-inner">
            <img src={Cardimg1} alt="IntraOral Camera" className="second-home-card-img" />
            <h2 className="second-home-card-title">IntraOral Camera</h2>
            <p className="second-home-card-paragraph">
              Ready to use Full HD intraoral USB camera specially designed to fulfill the needs of your dental imaging device.
            </p>
            <AnimatedButton 
              className="second-home-button" 
              text="Know more" 
              backgroundColor="#00aeef" 
              animationColor="#344ea1" 
              hoverColor="#344ea1"
              to="/Intraoralcamera"
            />
          </div>
        </div>
        <div className="second-home-card">
          <div className="second-home-card-inner">
            <img src={Cardimg2} alt="ExtraOral Camera" className="second-home-card-img" />
            <h2 className="second-home-card-title">ExtraOral Camera</h2>
            <p className="second-home-card-paragraph">
              Our 4K extraoral cameras can be mounted to any dental lights or dental chairs to capture every treatment.
            </p>
            <AnimatedButton 
              className="second-home-button" 
              text="Know more" 
              backgroundColor="#00aeef" 
              animationColor="#344ea1" 
              hoverColor="#344ea1"
            />
          </div>
        </div>
        <div className="second-home-card">
          <div className="second-home-card-inner">
            <img src={Cardimg3} alt="Loupe Camera" className="second-home-card-img" />
            <h2 className="second-home-card-title">Loupe Camera</h2>
            <p className="second-home-card-paragraph">
              Our compact and lightweight loupe camera helps to bring our best quality images.
            </p>
            <AnimatedButton 
              className="second-home-button" 
              text="Know more" 
              backgroundColor="#00aeef" 
              animationColor="#344ea1" 
              hoverColor="#344ea1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
