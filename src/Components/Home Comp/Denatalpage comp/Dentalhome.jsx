import React from 'react';
import "./Dentalhome.css";
import dentalimg from "../../../assets/home images/Homebanner2.png";
import animationbg from "../../../assets/home images/animationbg.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";
import Modelbutton from "../../Button comp/Modelbutton";

const Dentalhome = () => {
    return (
        <div className='mainContainer'>
        <div className="oralcamera-Dental-header">
               

            <div className="oralcamera-left-Bg" style={{ backgroundImage: `url(${animationbg})` }}>
                <div className="oralcamera-total-text">
                    <p className="oralcamera-static-text">
                    Reduce time to market and cut development costs with our <b>rebrandable,</b> high-quality <b> intraoral camera</b> built on <b>20 years of expertise </b>                   </p>
                    <div className="oralcamera-buttons-inform">
                        <Modelbutton className="oralcamera-contactus-Button" />
                        <AnimatedButton 
                            className="oralcamera-getQuote-Button"
                            text="Download Tech Document"
                            backgroundColor="#00aeef"
                            animationColor="#344ea1"
                            hoverColor="#344ea1"
                        />
                    </div>
                </div>
            </div>
            <div className="oralcamera-Right-Dental">
                <img src={dentalimg} alt="Dental Home" className="oralcamera-Dental-Img" />
            </div>
        </div>
        </div>
    );
};

export default Dentalhome;
