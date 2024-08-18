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
import Casehubpage from "./Components/Hubpage Comp/Casestudyhubpage/Casehubpage"
import AboutUs from "./Components/AboutUs/AboutUs"
import ContactUs from './Components/Home Comp/Contact Us comp/ContactUs';
import Threeimportant from "./Components/Future Blog/Threeimportant-Blogs/Threeimportant"
import AutofocusBlog from "./Components/Future Blog/Autofocus-Blogs/AutofocusBlog"
import CapturingDentists from "./Components/Future Blog/Capturing the Dentists/CapturingDentists"
import RightforExtraoral from "./Components/Future Blog/Right for extraoral/RightforExtraoral"
import Aguidtochoose from './Components/Future Blog/A-guid to choose-Blog/Aguidtochoose';
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop /> 
    <div className='fixed-container'>
      <NavBarpage />
      <Routes>
        <Route path="/" element={<TotalHome />} />
        <Route path="/Intraoralcamera" element={<Totalproducts1 />} />
        <Route path="/blogsHubPage" element={<Hubpageblog />} />
        <Route path="/casestudyHubPage" element={<Casehubpage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />

        <Route path="/AGuidTochoose" element={< Aguidtochoose/>} />
        <Route path="/Threeimportant" element={<Threeimportant/>} />
        <Route path="/AutofocusBlog" element={<AutofocusBlog />} />
        <Route path="/CapturingDentists" element={<CapturingDentists />} />
        <Route path="/RightforExtraoral" element={<RightforExtraoral />} />


        </Routes>
        <Footerpage />
      </div>
    </BrowserRouter>

  );
}

export default App;
