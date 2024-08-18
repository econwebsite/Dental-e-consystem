import React from 'react';
import IntraOralcamera from "./IntraOralcamera"
import ProductCaseStudy from './RelatedCaseStudiesComp/ProductCaseStudy';
import ProductTechnicalBlog from "./ProductTechnicalArtical/ProductTechnicalBlog"
import Specification from './Specification comp/Specification';
import Productboderbox from "./productBoderbox/Productboderbox"
import ProductCard from "./ProductCard comp/ProductCard"
import KeyHighlights from "./KeyHighlights comp/KeyHighlights"
import ProductStandards from "./Standards comp/ProductStandards"
import ImageProduct from "./ImageProduct comp/ImageProduct"
const Totalproducts1 = () => {
    return (
<div>
            <IntraOralcamera/>
            <Productboderbox/>
            <ProductCard/>
            <Specification/>
            <KeyHighlights/>
          <ProductStandards/>
          <ImageProduct/>
            <ProductCaseStudy/>
            <ProductTechnicalBlog/>
            </div> 
    );
}

export default Totalproducts1;
