import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CustomlightBox from './customlightbox/CustomlightBox'; // Import the lightbox component
import './Product.css';
import image1 from '../../assets/Product images/productcarousel1.png';
import image2 from '../../assets/Product images/productcarousel2.png';
import image3 from '../../assets/Product images/productcarousel3.png';
import AnimatedButton from "../Button comp/AnimatedButton";
import Modelbutton from "../Button comp/Modelbutton";

const images = [image1, image2, image3]; 

const IntraOralcamera = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false); 
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setSelectedImage(null);
    };

    const showNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSelectedImage(images[(currentIndex + 1) % images.length]);
    };

    const showPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
    };

    return (
        <div className='col-12 productSection'>
            <div className='mainContainer'>
                <div className='row'>
        
                    <div className='col-lg-4 col-sm-12 productLeftSide'>
                        <Carousel className='carouselCustom'>
                            <Carousel.Item interval={5000}>
                                <img
                                    className="d-block w-100"
                                    src={image1}
                                    alt="First slide"
                                    onClick={() => openLightbox(image1, 0)} 
                                    style={{ cursor: 'pointer' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                    className="d-block w-100"
                                    src={image2}
                                    alt="Second slide"
                                    onClick={() => openLightbox(image2, 1)} 
                                    style={{ cursor: 'pointer' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                    className="d-block w-100"
                                    src={image3}
                                    alt="Third slide"
                                    onClick={() => openLightbox(image3, 2)} 
                                    style={{ cursor: 'pointer' }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className='col-lg-8 col-sm-12 productRightSide'>
                        <h2 className='productIntraTitle'>Full HD IntraOral Camera</h2>
                        <p className='productIntraDescription'>
                            Our intraOral camera is engineered to meet the highest standards of dental imaging, combines cutting-edge Full HD imaging with advanced optics to deliver exceptionally clear and detailed images, enabling precise diagnostics and treatment planning. Engineered for superior ergonomics, this intraoral camera ensures a comfortable, user-friendly experience during image acquisition.
                        </p>
                        <br />
                        <div className='productIntraFlexEndRow'>
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
            </div>

            <CustomlightBox
                image={selectedImage} 
                isOpen={isLightboxOpen} 
                onClose={closeLightbox} 
                onNext={showNext} 
                onPrev={showPrev} 
            />
        </div>
    );
};

export default IntraOralcamera;
