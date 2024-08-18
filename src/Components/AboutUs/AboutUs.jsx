import React from 'react'
import dentallogo from '../../assets/home images/DENTAL LOGO.png'; // Import your logo image
import "./AboutUs.css"
export default function AboutUs() {
  return (
    <>
    <h1 className='text-center mt-4 resource-heading'>About Us</h1>
    <div className='mainContainer'>
    <div className='col-12 d-flex flex-row flex-wrap justify-content-around'>
        <div className='col-lg-3 col-md-4 col-sm-12 p-3'>
            <img src={dentallogo} className='w-100'/>
        </div>
        <div className='col-lg-8 col-md-8 col-sm-12 p-4 mx-2'>
            <p style={{"text-align":"justify",color:"#003873"}}>e-con Systems&trade; designs, develops, and manufactures OEM cameras with over 20 years of experience and expertise in embedded vision. Recently, we have expanded our offerings to include ODM cameras specifically tailored for dental imaging, bringing our cutting-edge technology to dental practices. Our extensive product portfolio includes Time of Flight cameras, MIPI camera modules, GMSL cameras, USB 3.1 Gen 1 cameras, stereo cameras, and low light cameras. Our products are embedded in over 350 customer applications across various industries, such as retail, medical, industrial, agriculture, and smart cities. So far, we have shipped over 2 million cameras worldwide, including to the United States, Europe, Japan, and South Korea.</p>
        </div>
    </div>
    </div>
    </>
  )
}
