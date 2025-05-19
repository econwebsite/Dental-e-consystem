import React from 'react';
import "./Diagnostics.css";
import Modelbutton from "../../Button comp/Modelbutton"

const Diagnostics = () => {

    return (
        <div className="diagnostic-ad-container">
            <div className="diagnostic-ad-content">
                <span className="corner tl"></span>
                <span className="corner tr"></span>
                <span className="corner bl"></span>
                <span className="corner br"></span>
                <h1 className="diagnostic-title">AI Diagnostics Ready</h1>
                <p className="diagnostic-paragraph">
                    Our intraoral camera is bundled with AI diagnostic capabilities that
                    enable the detection of key dental conditions such as caries, plaque,
                    gingival inflammation, and tooth fractures.
                </p>
                <h3>(Contact us for more information)</h3>
                <br></br>

                <Modelbutton className="diagnostic-button" text="Contact Us" backgroundColor="#69ba2f" animationColor="#00aeef" hoverColor="#00aeef" />

            </div>
        </div>
    );
};

export default Diagnostics;
