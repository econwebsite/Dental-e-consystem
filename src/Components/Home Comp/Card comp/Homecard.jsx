import React from 'react';
import './Homecard.css';
import Cardimg1 from "../../../assets/home images/Intraoral.jpg";
import Cardimg2 from "../../../assets/home images/Extraoral.jpg";
import Cardimg3 from "../../../assets/home images/Loupecamera.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";
import { Link } from 'react-router-dom';

const Homecard = () => {
  return (
    <div className="mainContainer">
      <div className="second-home-card-container">
        <div className="second-home-card1" style={{cursor:"pointer"}}>
          <div className="second-home-card-inner">
          <Link className="cardImgLink" to="/product/intraoral-cameras" style={{textDecoration:"none"}}><img src={Cardimg1} alt="Intraoral Camera" className="second-home-card-img" /></Link>
          <Link className="cardImgLink" to="/product/intraoral-cameras" style={{textDecoration:"none"}}><h2 className="second-home-card-title">Intraoral Camera</h2></Link>
            <p className="second-home-card-paragraph">
              Ready to use Full HD Intraoral USB camera specially designed to fulfill the needs of your dental imaging device.
            </p>
            <AnimatedButton 
              className="second-home-button" 
              text="Know more" 
              backgroundColor="#00aeef" 
              animationColor="#344ea1" 
              hoverColor="#344ea1"
              to="/product/intraoral-cameras"
            />
          </div>
        </div>
        <div className="second-home-card2">
          <div className="second-home-card-inner">
            <img src={Cardimg2} alt="Extraoral Camera" className="second-home-card-img" />
            <h2 className="second-home-card-title">Extraoral Camera</h2>
            <p className="second-home-card-paragraph">
              Our 4K Extraoral cameras can be mounted to any dental lights or dental chairs to capture every treatment.
            </p>
            <button 
              className="second-home-button" 
             
              style={{backgroundColor:"#00aeef",border:"none",color:"white",borderRadius:"5px",cursor:"auto"}} 
              // animationColor="#344ea1" 
              // hoverColor="#344ea1"
            >Launching Soon</button>
          </div>
        </div>
        <div className="second-home-card3">
          <div className="second-home-card-inner">
            <img src={Cardimg3} alt="Loupe Camera" className="second-home-card-img" />
            <h2 className="second-home-card-title">Loupe Camera</h2>
            <p className="second-home-card-paragraph">
              Our compact and lightweight loupe camera helps to bring our best quality images.
            </p>
            <button 
              className="second-home-button" 
             
              style={{backgroundColor:"#00aeef",border:"none",color:"white",borderRadius:"5px",cursor:"auto"}} 
              // animationColor="#344ea1" 
              // hoverColor="#344ea1"
            >Launching Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
