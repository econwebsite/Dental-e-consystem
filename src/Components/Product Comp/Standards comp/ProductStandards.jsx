import React from 'react';
import "./ProductStandards.css";
// import Standards1 from "../../../assets/Product images/Standards1.png";
// import Standards2 from "../../../assets/Product images/Standards2.png";
// import Standards3 from "../../../assets/Product images/Standards3.png";
import Modelbutton from "../../Button comp/Modelbutton"
const ProductStandards = ({title}) => {
    return (
        <div className="product-standard-container">
        <div className="product-containerparagraph">
                          <div className='mainContainer'>
            {/* <h1 className="product-standard-title">{title}</h1> */}
            {/* <div className="product-standard-box-container"> */}
                {/* <div className="product-standard-box">
                    <img
                        src={Standards1}
                        alt="Box 1"
                        className="product-standard-box-image"
                    />
                </div> */}
                {/* <div className="product-standard-box">
                    <img
                        src={Standards2}
                        alt="Box 2"
                        className="product-standard-box-image"
                    />
                </div> */}
                {/* <div className="product-standard-box">
                    <img
                        src={Standards3}
                        alt="Box 3"
                        className="product-standard-box-image"
                    />
                </div> */}
                   
        <h1 className='Product-standards'>Fully Customizable</h1>
        <p className="product-standparagraphtext">
        We offer complete customization options, allowing you to tailor the lens, camera, and design to your specific needs. Whether you require unique lens specifications, bespoke camera features, or a fully custom design, we can accommodate your preferences to ensure it meets all your operational requirements.</p>      
       
        </div>
        <Modelbutton />
    </div>
             </div>
           
        
    );
}

export default ProductStandards;
