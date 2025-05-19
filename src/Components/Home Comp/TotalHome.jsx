import React from 'react';
import Dentalhome from "./Denatalpage comp/Dentalhome";
import Blogspage from "./Blogs comp/Blogspage";
import Casestudy from "./Casestudies comp/Casestudy"
import Paragraph from './Paragraph comp/Paragraph';
import Homevideo from "./video comp/Homevideo"
import ContactUs from "./Homecontactus/ContactUs"
import Homecard from './Card comp/Homecard';
import { Helmet } from 'react-helmet-async';
const TotalHome = () => {
    return (
        <div>
            <Helmet>
<title>Intraoral Camera Dental Solutions | e-con Systems</title>
<meta name='description' content="Explore e-con Systems' intraoral camera dental solutions designed for superior image quality, compact form factor, and faster integration into dental devices." />
</Helmet>
            <Dentalhome />
            <Paragraph />
            <Homecard />
            <Homevideo />
            <Casestudy />
            <Blogspage />
            <ContactUs />
        </div>
    );
}

export default TotalHome;
