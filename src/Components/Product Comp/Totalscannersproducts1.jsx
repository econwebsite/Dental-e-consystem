import React from 'react';
import IntraOralscannders from "./IntraOralscannersComp/IntraOralscannders"
import ProductCaseStudy from './RelatedCaseStudiesComp/ProductCaseStudy';
import ProductTechnicalBlog from "./ProductTechnicalArtical/ProductTechnicalBlog"
import Specification from './Specification comp/Specification';
import Productboderbox from "./productBoderbox/Productboderbox"
import ProductStandards from "./Standards comp/ProductStandards"
import ImageProduct from "./ImageProduct comp/ImageProduct";
import { Helmet } from 'react-helmet-async';
import Testimonial from '../Home Comp/testimonial/testimonial';
import ImagingSoftware from './ImagingSoftwares/ImagingSoftware';
import Dentalvideopg from '../Home Comp/video comp/Homevideo';
import Faq from '../Faqcomp/Faq';

const Totalscannersproducts1 = () => {
    return (
<div>
<Helmet>
<title>DensiSCAN - Advanced Intraoral Scanner for Precise Digital Impressions</title>
<meta name='description' content='Explore our advanced intraoral scanner with 3D scanning technology and precision image capture. Achieve accurate digital impressions for effective treatment planning.' />
</Helmet>
            <IntraOralscannders/>
            <Productboderbox/>
            <Testimonial/>
            <Specification/>
            <ImageProduct/>
             <ImagingSoftware/> 
          <ProductStandards title="Enhanced Features"/>
            <Dentalvideopg bgColor='#fff'/>
            <ProductCaseStudy/>
            <ProductTechnicalBlog/>
            <Faq count={3}/>
            </div> 
    );
}

export default Totalscannersproducts1;
