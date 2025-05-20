import React from 'react';
import './ProductStandards.css';
import Imagetaken1 from '../../../assets/Product images/Image-taken1.jpg';
import Imagetaken2 from '../../../assets/Product images/Image-taken2.jpg';
import img3 from '../../../assets/Product images/Imageproduct.jpg';
import enclosure from "../../../assets/Product images/enclosure.jpg"
import userbutton from "../../../assets/Product images/user-button.jpg"
import usercontrol from "../../../assets/Product images/user-control.jpg"
import formfactor from "../../../assets/Product images/form-factor.jpg"
import cableinterface from "../../../assets/Product images/cable-interface.jpg"

const ProductStandards = () => {
const items = [
  { title: "Enclosure", image: enclosure },
  { title: "User Button", image: userbutton },
  { title: "User Control", image: usercontrol },
  { title: "Form Factor", image: formfactor},
  { title: "Cable Interface", image: cableinterface },
];
  
  return (
    <div className="ProductStandards-container">
     
      <h2 className="ProductStandards-title">Sample Images Taken from the Camera</h2>

      <div className="ProductStandards-imageRow">
        <img src={Imagetaken1} alt="Sample 1" className="ProductStandards-image" />
        <img src={Imagetaken2} alt="Sample 2" className="ProductStandards-image" />
        <img src={img3} alt="Sample 3" className="ProductStandards-image" />
      </div>

      <h2 className="ProductStandards-subtitle">Fully Customizable for OEMs</h2>
      <p className="ProductStandards-paragraph">
We offer a wide range of customization options, enabling OEM partners to tailor the camera to their unique needs — whether it's enclosure design, camera settings, or user controls. With our extensive experience in camera customization, we ensure smooth adaptation to your product roadmap.      </p>

     <div className="ProductStandards-grid">
  {items.map((item, index) => (
    <div key={index} className="ProductStandards-item">
      <img
        src={item.image}
        alt={item.title}
        className="ProductStandards-gridImage"
      />
      <p className="ProductStandards-imageTitle">{item.title}</p>
    </div>
  ))}
</div>
</div>
  );
};

export default ProductStandards;
