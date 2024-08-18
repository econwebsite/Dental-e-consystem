import React from 'react';
import "./ProductStandards.css";
import Standards1 from "../../../assets/Product images/Standards1.png";
import Standards2 from "../../../assets/Product images/Standards2.png";
import Standards3 from "../../../assets/Product images/Standards3.png";

const ProductStandards = () => {
    return (
        <div className="product-standard-container">
                          <div className='mainContainer'>
            <h1 className="product-standard-title">Standards</h1>
            <div className="product-standard-box-container">
                <div className="product-standard-box">
                    <img
                        src={Standards1}
                        alt="Box 1"
                        className="product-standard-box-image"
                    />
                </div>
                <div className="product-standard-box">
                    <img
                        src={Standards2}
                        alt="Box 2"
                        className="product-standard-box-image"
                    />
                </div>
                <div className="product-standard-box">
                    <img
                        src={Standards3}
                        alt="Box 3"
                        className="product-standard-box-image"
                    />
                </div>
            </div>
            </div>
        </div>
    );
}

export default ProductStandards;
