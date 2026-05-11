import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CustomlightBox from './CustomlightBox';
import '../Product.css';
import image1 from '../../../assets/product-images/productcarousel-image-1.png';
import image2 from '../../../assets/product-images/productcarousel2.png';
import image3 from '../../../assets/product-images/productcarousel-image-2.png';
import AnimatedButton from "../../Button comp/AnimatedButton";
import Modelbutton from "../../Button comp/Modelbutton";

const images = [
    { src: image1, title: "Front View of our Intraoral Scanner with enclosure" },
    // { src: image2, title: "Front View of our Intraoral Scanner without enclosure" },
    { src: image3, title: "Back View of our Intraoral Scanner with enclosure" }
];

const IntraOralscannders = () => {
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
                        <h2 className='productIntraTitle'>DensiSCAN - Advanced Intraoral Scanner for OEMs</h2>
                        <p className='productIntraDescription'>
                            DensiSCAN, an advanced intraoral scanner, is engineered to meet the highest standards of dental imaging, combining cutting-edge 3D scanning technology with optimal frame rates to deliver exceptionally detailed and accurate scans, enabling precise digital impressions and treatment planning. Engineered for superior ergonomics, this intraoral scanner ensures a comfortable, user-friendly experience during scanning procedures. As a complete OEM intraoral scanner, perfectly suited for dental device manufacturers seeking to integrate or white-label it for their specific application or brand requirements. Full customization options are available to help you achieve a seamless fit into your product line.
                        </p>
                        <br />
                        <div className='productIntraFlexEndRow d-flex flex-wrap gap-8 justify-content-evenly w-100'>
                            <div className='productButtonWrap d-flex flex-column align-items-center'>
                                <p style={{color:'#344ea1',fontWeight:'bold'}}>Tech Document</p>
                                <Modelbutton
                                className="productIntraButtonEnd"
                                text="Download"
                                docName="e-con-Densiscan-technical-documents.zip"
                                title="DensiSCAN"
                                productName="ProductDocument"
                                backgroundColor="#00aeef"
                                animationColor="#69ba2f"
                                hoverColor="#344ea1"
                            />
                                </div>
                             <div className='productButtonWrap d-flex flex-column align-items-center'>
                                 <p style={{color:'#344ea1',fontWeight:'bold'}}>Request Free Evaluation Sample</p>
                            <Modelbutton
                                className="productIntraButtonEnd"
                                text="Contact Us"
                                backgroundColor="#344ea1"
                                type="contact"
                                animationColor="#00aeef"
                                hoverColor="#344ea1"
                            />
                            </div>
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

export default IntraOralscannders;
