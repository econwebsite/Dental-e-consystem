import React from 'react'
import "./AboutUs.css"
import w3hImage from "../../assets/home images/aboutuspage.png";
import ProductStandards from "../Product Comp/Standards comp/ProductStandards";
import {FaAnglesRight} from 'react-icons/fa6'; // Import necessary icons
export default function AboutUs() {
  return (
    <>
    {/* <h1 className='text-center mt-4 resource-heading'>About Us</h1> */}
    <div className='mainContainer'>
      <div className='col-12 mt-4'>
        <img src={w3hImage} className='img-fluid'/>
      </div>
    <div className='col-12 d-flex flex-row flex-wrap justify-content-around'>
        
        <div className='col-lg-7 col-md-8 col-sm-12 p-4 mx-2'>
            <p style={{"text-align":"justify",color:"#003873","font-weight":"bold"}} className='h2 mb-4'>About e-con Systems Dental:</p>
            <p style={{"text-align":"justify",color:"#003873"}}>e-con Systems Dental is a specialized division focused on providing Original Design Manufacturing (ODM) solutions for dental imaging. At e-con Systems – Dental, we leverage our extensive expertise to meet the unique needs of the dental industry. Having collaborated with leading dental device manufacturers for more than 20 years, from ideation to market launch, we understand the challenges and intricacies of dental imaging. To address these challenges, we offer comprehensive ODM designs for dental imaging solutions, including intraoral cameras, extraoral cameras, and dental loupe cameras. Our solutions allow manufacturers to seamlessly integrate and rebrand these products into their portfolios, ensuring high-quality imaging with reduced time to market and cost efficiency.</p>
            
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 p-3 d-flex justify-content-center align-items-center '>
            <ul style={{"listStyle": "none","lineHeight":"3em"}}>
              <li><FaAnglesRight style={{"color":"#4fcce0"}}/> High resolution and
              frame rates</li>
              <li><FaAnglesRight style={{"color":"#4fcce0"}}/> Small
              form factor</li>
              <li><FaAnglesRight style={{"color":"#4fcce0"}} /> Wide range of optics
              integration</li>
              <li><FaAnglesRight style={{"color":"#4fcce0"}}/> Stereo
              vision</li>
              </ul>
        </div>
    </div>
    <div className='col-12 d-flex flex-row flex-wrap justify-content-around'>
    <div className='col-lg-4 col-md-4 col-sm-12 p-3 d-flex justify-content-center align-items-center '>
            <ul style={{"listStyle": "none","lineHeight":"3em"}}>
              <li><FaAnglesRight style={{"color":"#4fcce0"}}/> High resolution and
              frame rates</li>
              <li><FaAnglesRight style={{"color":"#4fcce0"}}/> Small
              form factor</li>
              <li><FaAnglesRight style={{"color":"#4fcce0"}} /> Wide range of optics
              integration</li>
              <li><FaAnglesRight style={{"color":"#4fcce0"}}/> Stereo
              vision</li>
              </ul>
        </div>
    <div className='col-lg-7 col-md-8 col-sm-12 p-4 mx-2'>
    <p style={{"text-align":"justify",color:"#003873","font-weight":"bold"}} className='h2 mb-4'>About e-con Systems</p>
            <p style={{"text-align":"justify",color:"#003873"}}>Established in 2003, e-con Systems has grown into a leading OEM camera solution provider with a wide global footprint. We provide end-to-end camera solutions like MIPI camera modules, GMSL cameras, USB 3.1 Gen 1 cameras, stereo cameras, Time of Flight cameras and more. Over the years, we have reimagined how they are used in applications such as retail, medical, industrial, agriculture, smart city, etc.</p>
            <p style={{"text-align":"justify",color:"#003873"}}>We are also powered by a strong partner ecosystem, providing end-to-end vision solutions with sensor partners, ISP partners, carrier board partners, and more.</p>
            <p style={{"text-align":"justify",color:"#003873"}}>So far, we have built 350+ product solutions - shipping over 2 million cameras to the United States, Europe, Japan, South Korea and many more countries.</p>
            <p style={{"text-align":"justify",color:"#003873"}}>To know more about e-con Systems <a href='https://www.e-consystems.com'>click here</a></p>
            
            </div>
    </div>
    <div className='col-12 d-flex flex-row flex-wrap justify-content-around'>
      <ProductStandards title="Quality Policy"/>
    </div>
    </div>
    </>
  )
}
