import React from 'react';
import Aguidtochoose from "../Future Blog/A-guid to choose-Blog/Aguidtochoose"
import Threeimportant from "../Future Blog/Threeimportant-Blogs/Threeimportant"
import AutofocusBlog from "../Future Blog/Autofocus-Blogs/AutofocusBlog"
import CapturingDentists from "../Future Blog/Capturing the Dentists/CapturingDentists"
import RightCMOS from "../Future Blog/RightCMOS/RightCMOS"
import HowToOvercome from "../Future Blog/HowToOvercome/HowToOvercome"
import Extraoralbestimg from "../Future Blog/Extraoralbestimg/Extraoralbestimg"
import Understandingextra from "../Future Blog/understandingextra/Understandingextra"
import { Helmet } from 'react-helmet-async';

const Totalfuture = () => {
    return (
        <div>
            <Helmet>
<title>Full HD Intraoral Camera for Precise Dental Imaging</title>
<meta name='description' content='Explore our Full HD dental intraoral camera with advanced optics and customizable design. Achieve clear, detailed images for precise diagnostics and comfort.' />
</Helmet>
   < Aguidtochoose/>
   <Threeimportant/>
   <AutofocusBlog />
   <CapturingDentists />
   <RightCMOS />
   <HowToOvercome />
   <Extraoralbestimg />
   <Understandingextra />
        </div>
    );
}

export default Totalfuture;
