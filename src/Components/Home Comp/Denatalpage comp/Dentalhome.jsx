import React from 'react';
import './Dentalhome.css';
import { Carousel } from 'antd';
// import dentalimg1 from "../../../assets/home images/Home_Page_Banner-01.jpg";
import dentalimg2 from "../../../assets/home images/Homebanner.jpg";
import AnimatedButton from '../../Button comp/AnimatedButton';
import Modelbutton from '../../Button comp/Modelbutton';
const Dentalhome = () => {
    return (
        <div className='carouselContainer'>
                <div className="mainContainer">

            {/* <Carousel autoplay>
                <div className="carousel-slide"> */}
                <div className='homeBanner'>
                <img src={dentalimg2} alt="Slide 1" className="carousel-image" />
                    <div className='homeButton'>
                            <Modelbutton className="productIntraButtonEnd" />

                            <AnimatedButton className="productIntraButtonEnd" text="Download Tech Document" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" />

                        </div>
                </div>
                    
                {/* </div> */}
                {/* <div className="carousel-slide">
                    <img src={dentalimg2} alt="Slide 2" className="carousel-image" />
                </div> */}
            {/* </Carousel> */}
            </div>
        </div>
    );
};

export default Dentalhome;
