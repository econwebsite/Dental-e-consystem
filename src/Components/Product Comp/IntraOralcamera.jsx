import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Product.css';
import image1 from '../../assets/Product images/productcarousel1.png';
import image2 from '../../assets/Product images/productcarousel2.png';
import image3 from '../../assets/Product images/productcarousel3.png';
// import hdimg from "../../assets/Product images/fullhd.png";
// import fov from "../../assets/Product images/fov90deg.png";
// import depth from "../../assets/Product images/depthoffields.png";
import AnimatedButton from "../Button comp/AnimatedButton";
import Modelbutton from "../Button comp/Modelbutton"

const IntraOralcamera = () => {
    return (
    
        <div className='col-12 productSection'>
            <div className='mainContainer'>
                <div className='row'>
                    {/* Carousel Section */}
                    <div className='col-lg-4 col-sm-12 productLeftSide'>
                        <Carousel className='carouselCustom'>
                            <Carousel.Item interval={5000}>
                                <img className="d-block w-100" src={image1} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img className="d-block w-100" src={image2} alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img className="d-block w-100" src={image3} alt="Third slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='col-lg-8 col-sm-12 productRightSide'>
                        <h2 className='productIntraTitle'>Full HD IntraOral Camera</h2>
                        <p className='productIntraDescription'>
                        Our intraOral camera is engineered to meet the highest standards of dental imaging, combines cutting-edge Full HD imaging with advanced optics to deliver exceptionally clear and detailed images, enabling precise diagnostics and treatment planning. Engineered for superior ergonomics, this intraoral camera ensures a comfortable, user-friendly experience during image acquisition.
                        </p>
                        {/* <div className='productIntraImageDescription'>
                            <div className='productIntraImageItemWrapper'>
                                <img src={hdimg} alt="Full HD Resolution" className='productIntraImageItem' />
                                <p className='productIntraButtonItem'>Full HD resolution</p>
                            </div>
                            <div className='productIntraImageItemWrapper'>
                                <img src={depth} alt="Depth of Field" className='productIntraImageItem' />
                                <p className='productIntraButtonItem'>5mm-70mm Depth of Field</p>
                            </div>
                            <div className='productIntraImageItemWrapper'>
                                <img src={fov} alt="Field of View" className='productIntraImageItem' />
                                <p className='productIntraButtonItem'>FOV -90 degree</p>
                            </div>
                        </div> */}
                        <br></br>
                        <div className='productIntraFlexEndRow'>
                            <Modelbutton className="productIntraButtonEnd" text="Contact Us" backgroundColor="#69ba2f" animationColor="#344ea1" hoverColor="#344ea1"/>

                            {/* <Modelbutton className="productIntraButtonEnd" text="Download Tech Document" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" productName='IntraOral' docName='IntraOral User Manual' /> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntraOralcamera;
