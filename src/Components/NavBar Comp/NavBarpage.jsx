import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { Navbar, Nav, Container, Offcanvas, Form, Button } from 'react-bootstrap';
import './Navbar.css';
import dentallogo from '../../assets/home images/NewDentallogo.png'; 

const NavBarpage = () => {
  const offcanvasRef = useRef(null);

  const handleNavLinkClick = () => {
    if (offcanvasRef.current) {
      offcanvasRef.current.hide(); 
    }
  };

  const resourceMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="/blogs" onClick={handleNavLinkClick}>Blogs</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="/case-studies" onClick={handleNavLinkClick}>Case Studies</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="/pressrelease" onClick={handleNavLinkClick}>Press Release</Link>
      </Menu.Item>
       <Menu.Item key="3">
        <Link style={{ textDecoration: "none", color: "#344ea1", fontSize: "medium" }} to="/faq" onClick={handleNavLinkClick}>FAQ</Link>
      </Menu.Item> 
      
    </Menu>
  );

  // const productMenu = (
  //   <Menu>
  //     <Menu.Item key="1">
  //       <Link style={{textDecoration:"none",color:"#344ea1",fontSize:"medium"}} to="/product/intraoral-cameras" onClick={handleNavLinkClick}>Intraoral camera</Link>
  //     </Menu.Item>
  //     <Menu.Item key="2">
  //       <Link style={{textDecoration:"none",color:"#344ea1",fontSize:"medium"}} to="/Extraoral" onClick={handleNavLinkClick}>Extraoral camera</Link>
  //     </Menu.Item>
  //     <Menu.Item key="3">
  //       <Link style={{textDecoration:"none",color:"#344ea1",fontSize:"medium"}} to="/product" onClick={handleNavLinkClick}>Loupe camera</Link>
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <>
      {/* Desktop View */}
      <nav className="navbarpage-navbar desktop-view">
        <div className='mainContainer'>
          <div className="navbarpage-header">
            <div className="navbarpage-logoContainer">
              <Link  to="/">
              <img src={dentallogo} alt="Dental Logo" className="navbarpage-logo" onClick={() => navigate('/blogs/choosing-best-dental-intraoral-camera')} style={{cursor:"pointer"}}/>
              </Link>
            </div>
            <div className="navbarpage-navItems">
              <Link to="/" className="navbarpage-navLink">Home</Link>
              <div className="navbarpage-divider"></div>
              {/* <Dropdown overlay={productMenu} placement="bottomLeft" trigger={['hover']}>
                <Link className="navbarpage-navLink">Products</Link>
              </Dropdown> */}
              <Link to="/product/intraoral-cameras" className="navbarpage-navLink">Intraoral Camera</Link>
              <div className="navbarpage-divider"></div>
              <Dropdown overlay={resourceMenu} placement="bottomLeft" trigger={['hover']}>
                <Link className="navbarpage-navLink">Resources</Link>
              </Dropdown>
              <div className="navbarpage-divider"></div>
              <Link to="/company/contact-us" className="navbarpage-navLink">Contact Us</Link>
              <div className="navbarpage-divider"></div>
              <Link to="/company/about-us" className="navbarpage-navLink">About Us</Link>
            </div>
            <div className="navbarpage-rightColumn">
              {/* <input type="text" placeholder="Search.." className="navbarpage-searchInput" /> */}
              <div className="navbarpage-contact">
                <i className="ri-phone-fill navbarpage-phoneIcon"></i>
                <div className="navbarpage-contactDetails">
                <a style={{textDecoration:"none",color:"#003873"}} href="tel:+14087667503">
                  <p className="navbarpage-tellUs">Call us</p>
                  <p className="navbarpage-phoneNumber">+1 408 766 7503</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile View */}
      <Navbar expand="lg" className="mobile-view">
        <Container fluid>
          <Navbar.Brand href="#">
          <Link  to="/">
            <img src={dentallogo} alt="Dental Logo" className="navbarpage-logo-mobile" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas className='Toggle-background'
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            ref={offcanvasRef}
          >
            <Offcanvas.Header closeButton style={{borderBottom:"1px solid #fff"}}> 
              <Offcanvas.Title id="offcanvasNavbarLabel" >
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column navbarpage-offcanvas-nav">
                <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
                {/* <Dropdown overlay={productMenu} placement="bottomLeft" className="nav-link">
                  <a className="nav-link">Products</a>
                </Dropdown> */}
                <Link className="nav-link" to="/product/intraoral-cameras" onClick={handleNavLinkClick}>Intraoral camera</Link>
                <Dropdown overlay={resourceMenu} placement="bottomLeft" className="nav-link">
                  <a className="nav-link">Resources</a>
                </Dropdown>
                <Link className="nav-link" to="/company/contact-us" onClick={handleNavLinkClick}>Contact Us</Link>
                <Link className="nav-link" to="/company/about-us" onClick={handleNavLinkClick}>About Us</Link>
                


              </Nav>
              {/* <Form className="d-flex mt-3">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" style={{ color: "white", borderColor: "#69ba2f", backgroundColor: "#69ba2f" }}>Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarpage;
