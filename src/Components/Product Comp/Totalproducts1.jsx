import React from 'react';
import IntraOralcamera from "./IntraOralcamera"
import ProductCaseStudy from './RelatedCaseStudiesComp/ProductCaseStudy';
import ProductTechnicalBlog from "./ProductTechnicalArtical/ProductTechnicalBlog"
import Specification from './Specification comp/Specification';
import Productboderbox from "./productBoderbox/Productboderbox"
import ProductStandards from "./Standards comp/ProductStandards"
import ImageProduct from "./ImageProduct comp/ImageProduct";
import { Helmet } from 'react-helmet-async';

const Totalproducts1 = () => {
    return (
<div>
<Helmet>
<title>DensiCAM - Full HD Intraoral Camera for Precise Dental Imaging</title>
<meta name='description' content='Explore our Full HD dental intraoral camera with advanced optics and customizable design. Achieve clear, detailed images for precise diagnostics and comfort.' />
</Helmet>
            <IntraOralcamera/>
            <Productboderbox/>
            <Specification/>
            <ImageProduct/>
          <ProductStandards title="Enhanced Features"/>
            <ProductCaseStudy/>
            <ProductTechnicalBlog/>
            </div> 
    );
}

export default Totalproducts1;
