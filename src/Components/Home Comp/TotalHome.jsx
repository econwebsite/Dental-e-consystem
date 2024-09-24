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
<title>e-con Systems: ODM Solutions for Dental Cameras</title>
<meta name='description' content='e-con Systems Dental offers ODM solutions for Intraoral, Extraoral, and loupe cameras, ensuring high-quality imaging, faster time to market, & cost efficiency.' />
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
