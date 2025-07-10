import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBarpage from './Components/NavBar Comp/NavBarpage';
import TotalHome from "./Components/Home Comp/TotalHome"
import ScrollToTop from "./Components/ScrollToTop"
import Footerpage from "./Components/Footer comp/Footerpage"
import Totalproducts1 from "./Components/Product Comp/Totalproducts1"
import Hubpageblog from "./Components/Hubpage Comp/Bloghubpages/Hubpageblog"
import Casehubpage from "./Components/Hubpage Comp/Casestudyhubpage/Casehubpage";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from './Components/Home Comp/Homecontactus/ContactUs';
import Threeimportant from "./Components/Future Blog/Threeimportant-Blogs/Threeimportant";
import AutofocusBlog from "./Components/Future Blog/Autofocus-Blogs/AutofocusBlog";
import CapturingDentists from "./Components/Future Blog/Capturing the Dentists/CapturingDentists";
import RightCMOS from "./Components/Future Blog/RightCMOS/RightCMOS";
import Aguidtochoose from './Components/Future Blog/A-guid to choose-Blog/Aguidtochoose';
import HowToOvercome from "./Components/Future Blog/HowToOvercome/HowToOvercome";
import Extraoralbestimg from "./Components/Future Blog/Extraoralbestimg/Extraoralbestimg";
import Understandingextra from "./Components/Future Blog/understandingextra/Understandingextra";
import Notfoundpage from "./Components/Notfoundpage"
import { HelmetProvider } from 'react-helmet-async';
import FAQ from './Components/Faqcomp/Faq';

const App = () => {
  return (
    <BrowserRouter>
          <HelmetProvider>

    <ScrollToTop /> 
    <div className='fixed-container'>
      <NavBarpage />
      <Routes>
        <Route path="/" element={<TotalHome />} />
        <Route path="/product/intraoral-cameras" element={<Totalproducts1 />} />
        <Route path="/blogs" element={<Hubpageblog />} />
        <Route path="/case-studies" element={<Casehubpage />} />
        <Route path="/company/contact-us" element={<ContactUs />} />
        <Route path="/company/about-us" element={<AboutUs />} />

        <Route path="/blogs/choosing-best-dental-intraoral-camera" element={< Aguidtochoose/>} />
        <Route path="/blogs/three-important-parameters-in-intraoral-camera-technology" element={<Threeimportant/>} />
        <Route path="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" element={<AutofocusBlog />} />
        <Route path="/blogs/capturing-dentists-pov-with-dental-loupe-cameras" element={<CapturingDentists />} />
        <Route path="/blogs/choosing-the-right-cmos-cameras-for-extraoral-imaging" element={<RightCMOS />} />
        <Route path="/blogs/imaging-challenges-dental-loupes-manufacturing" element={<HowToOvercome />} />
        <Route path="/blogs/extraoral-cameras-image-quality-tuning" element={<Extraoralbestimg />} />
        <Route path="/blogs/understanding-extraoral-cameras-dentistry" element={<Understandingextra />} />
       <Route path="/faq" element={<FAQ />} />


        <Route path="*" element={<Notfoundpage />} />

        </Routes>
        <Footerpage />
      </div>
      </HelmetProvider>
    </BrowserRouter>

  );
}

export default App;
