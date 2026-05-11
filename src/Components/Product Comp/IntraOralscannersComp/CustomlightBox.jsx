import React from 'react';
import './Customlight.css';
import { GrPrevious, GrNext } from "react-icons/gr";
import { RiCloseLine } from "react-icons/ri";

const CustomlightBox = ({ image, isOpen, onClose, onNext, onPrev, title }) => {
    if (!isOpen) return null;

    return (
        <div className="custom-lightbox-overlay">
            <div className="custom-lightbox-content">
                <button className="custom-close-button" onClick={onClose}>
                    <RiCloseLine />
                </button>
                <button className="custom-nav-button custom-prev-button" onClick={onPrev}>
                    <GrPrevious />
                </button>
                <button className="custom-nav-button custom-next-button" onClick={onNext}>
                    <GrNext />
                </button>
                <div className="custom-lightbox-inner">
                    {title && <div className="custom-lightbox-title">{title}</div>}
                    <img src={image} alt="Large preview" className="custom-lightbox-image" />
                </div>
            </div>
        </div>
    );
};

export default CustomlightBox;
