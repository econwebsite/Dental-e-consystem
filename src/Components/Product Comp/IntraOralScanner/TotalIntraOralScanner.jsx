import React from 'react';
import IntraOralScanner from "./IntraOralScanner";
import ScannerCaseStudy from './ScannerCaseStudy/ScannerCaseStudy';
import ScannerTechnicalBlog from "./ScannerTechnicalBlog/ScannerTechnicalBlog";
import ScannerSpecification from './ScannerSpecification/ScannerSpecification';
import ScannerBorderBox from "./ScannerBorderBox/ScannerBorderBox";
import ScannerStandards from "./ScannerStandards/ScannerStandards";
import ScannerImageProduct from "./ScannerImageProduct/ScannerImageProduct";
import ScannerCompliance from "./ScannerCompliance/ScannerCompliance";
import { Helmet } from 'react-helmet-async';
import Testimonial from '../../Home Comp/testimonial/testimonial';
import ScannerImagingSoftware from './ScannerImagingSoftwares/ScannerImagingSoftware';
import Dentalvideopg from '../../Home Comp/video comp/Homevideo';
import Faq from '../../Faqcomp/Faq';

const TotalIntraOralScanner = () => {
    return (
        <div>
            <Helmet>
                <title>Intraoral Scanner - High Precision 3D Dental Scanning Solution</title>
                <meta name='description' content='Explore our high-precision intraoral scanner engineered for accurate 3D dental scanning, seamless digital workflows, and OEM customization options.' />
            </Helmet>
            <IntraOralScanner />
            <ScannerBorderBox />
            <ScannerSpecification />
            <ScannerCompliance />
            <ScannerStandards title="Enhanced Features" />
            <Dentalvideopg bgColor='#fff' />
            <ScannerCaseStudy />
            <ScannerTechnicalBlog />
            <Faq count={3} />
        </div>
    );
}

export default TotalIntraOralScanner;
