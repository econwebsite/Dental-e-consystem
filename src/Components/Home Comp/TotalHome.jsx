import React from 'react';
import Dentalhome from "./Denatalpage comp/Dentalhome";
import Blogspage from "./Blogs comp/Blogspage";
import Casestudy from "./Casestudies comp/Casestudy"
import Paragraph from './Paragraph comp/Paragraph';
import Homevideo from "./video comp/Homevideo"
import ContactUs from "./Contact Us comp/ContactUs"
import Homecard from './Card comp/Homecard';
const TotalHome = () => {
    return (
        <div>
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
