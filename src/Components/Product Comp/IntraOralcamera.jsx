import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CustomlightBox from './customlightbox/CustomlightBox';
import './Product.css';
import image1 from '../../assets/Product images/productcarousel1.png';
import image2 from '../../assets/Product images/productcarousel2.png';
import image3 from '../../assets/Product images/productcarousel3.png';
import AnimatedButton from "../Button comp/AnimatedButton";
import Modelbutton from "../Button comp/Modelbutton";

const images = [
    { src: image1, title: "Front View of our Intraoral Camera with enclosure" },
    // { src: image2, title: "Front View of our Intraoral Camera without enclosure" },
    { src: image3, title: "Back View of our Intraoral Camera with enclosure" }
];

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
        setSelectedImage(images[(currentIndex + 1) % images.length].src);
    };

    const showPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length].src);
    };

    return (
        <div className='col-12 productSection'>
            <div className='mainContainer'>
                <div className='row'>

                    <div className='col-lg-4 col-sm-12 productLeftSide'>
                        <Carousel className='carouselCustom'>
                            {images.map((image, index) => (
                                <Carousel.Item key={index} interval={5000}>
                                    <img
                                        className="d-block w-100"
                                        src={image.src}
                                        alt={`Slide ${index + 1}`}
                                        onClick={() => openLightbox(image.src, index)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>

                    <div className='col-lg-8 col-sm-12 productRightSide'>
                        <h2 className='productIntraTitle'>DensiCAM - Full HD Intraoral Camera for OEM</h2>
                        <p className='productIntraDescription'>
                            DensiCAM, an Intraoral camera is engineered to meet the highest standards of dental imaging, combining cutting-edge Full HD imaging with advanced optics to deliver exceptionally clear and detailed images, enabling precise diagnostics and treatment planning. Engineered for superior ergonomics, this intraoral camera ensures a comfortable, user-friendly experience during image capture. As a complete OEM intraoral camera, perfectly suited for dental device manufacturers seeking to integrate or white-label it for their specific application or brand requirements. Full customization options are available to help you achieve a seamless fit into your product line.
                        </p>
                        <br />
                        <div className='productIntraFlexEndRow'>

                            <Modelbutton
                                className="productIntraButtonEnd"
                                text="Download Datasheet"
                                docName="e-con_DensiCAM-Datasheet"
                                title="DensiCAM"
                                productName="Datasheet"
                                backgroundColor="#344ea1"
                                animationColor="#69ba2f"
                                hoverColor="#344ea1"
                            />
                            <Modelbutton
                                className="productIntraButtonEnd"
                                text="Contact to Buy"
                                backgroundColor="#00aeef"
                                type="contact"
                                animationColor="#344ea1"
                                hoverColor="#344ea1"
                            />
                            <Modelbutton
                                className="productIntraButtonEnd"
                                text="Request IQ report"
                                type="contact"
                                backgroundColor="#69ba2f"
                                animationColor="#344ea1"
                                hoverColor="#344ea1"
                            />
                            <AnimatedButton
                                className="productIntraButtonEnd"
                                text="FAQ"
                                backgroundColor="#344ea1"
                                animationColor="#00aeef"
                                hoverColor="#69ba2f"
                                to="/faq"
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
                title={images[currentIndex]?.title}
            />
        </div>
    );
};

export default IntraOralcamera;
