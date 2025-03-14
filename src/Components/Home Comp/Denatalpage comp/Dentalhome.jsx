// import React from 'react';
// import './Dentalhome.css';
// import { Carousel } from 'antd';
// import dentalimg2 from "../../../assets/home images/Homebanner.jpg";
// import AnimatedButton from '../../Button comp/AnimatedButton';
// import Modelbutton from '../../Button comp/Modelbutton';

// const Dentalhome = () => {
//     return (
//         <div className='carouselContainer'>
//                 <div className="mainContainer">
//             {/* <Carousel autoplay>
//                 <div className="carousel-slide"> */}
//                 <div className='homeBanner'>
//                 <img src={dentalimg2} alt="Slide 1" className="carousel-image" />
//                     <div className='homeButton'>
//                     <Modelbutton className="productIntraButtonEnd" text="Contact Us" backgroundColor="#69ba2f" animationColor="#344ea1" hoverColor="#344ea1"/>

//                             {/* <AnimatedButton className="productIntraButtonEnd" text="Download Tech Document" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" /> */}

//                         </div>
//                 </div>
                    
//                 {/* </div> */}
//                 {/* <div className="carousel-slide">
//                     <img src={dentalimg2} alt="Slide 2" className="carousel-image" />
//                 </div> */}
//             {/* </Carousel> */}
//             </div>
//         </div>
//     );
// };

// export default Dentalhome;
import React, { useRef, useState } from 'react';
import './Dentalhome.css';
import { Carousel } from 'antd';
import dentalimg2 from "../../../assets/home images/Homebanner.jpg";
import banner1 from "../../../assets/home images/bannerone.jpg";

import Modelbutton from '../../Button comp/Modelbutton';

const Dentalhome = () => {
    const carouselRef = useRef(); 
    const [activeIndex, setActiveIndex] = useState(0); 

    return (
        <div className='carouselContainer'>
            <div className="mainContainer">
                <Carousel 
                    ref={carouselRef} 
                    autoplay 
                    dots={false} 
                    beforeChange={(from, to) => setActiveIndex(to)} // Update active dot
                >
                    <div className="carousel-slide">
                        <a href="https://www.e-consystems.com/events/gtc-2025.asp" target="_blank" rel="noopener noreferrer">
                            <div className='homeBanner'>
                                <img src={banner1} alt="Slide 1" className="carousel-image" />
                            </div>
                        </a>
                    </div>

                    <div className="carousel-slide">
                        <div className='homeBanner'>
                            <img src={dentalimg2} alt="Slide 2" className="carousel-image" />
                            <div className='homeButton'>
                                <Modelbutton 
                                    className="productIntraButtonEnd" 
                                    text="Contact Us" 
                                    backgroundColor="#69ba2f" 
                                    animationColor="#344ea1" 
                                    hoverColor="#344ea1"
                                />
                            </div>
                        </div>
                    </div>
                </Carousel>

                <div className="custom-dots">
                    <div 
                        className={`dot ${activeIndex === 0 ? 'active' : ''}`} 
                        onClick={() => carouselRef.current.goTo(0)}
                    ></div>
                    <div 
                        className={`dot ${activeIndex === 1 ? 'active' : ''}`} 
                        onClick={() => carouselRef.current.goTo(1)}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Dentalhome;
