import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/wedding-navbar.css'; // Import your custom CSS for styling
import heart from '../assets/images/heart.png';

const WeddingNavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Navbar expand="lg" fixed="top" className={scrolled ? 'navbar-scrolled' : ''} custom-navbar>
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col md={4} className="navbar-logo resolution-change">
            {/* Logo */}
            <Navbar.Brand href="#home" className="navbar-logo">
              <div className="logo-template">J & A</div>
            </Navbar.Brand>
          </Col>
          <Col md={2} className='resolution-change'>
            <div className = "mobile-rsvp-nav position-relative">
              <a href="#rsvp" className='mobile-rsvp-direct'>
                
                <img src ={heart} className="img-fluid heart-wrapper "/>
                <span className='primary-font-color'>RSVP</span>
              </a>
            </div>
          </Col>
          <Col md={6} className="text-right resolution-change web-view-nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
  
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#story">Our Story</Nav.Link>
                <Nav.Link href="#events">Events</Nav.Link>
                <Nav.Link href="#information">Details</Nav.Link>
                <Nav.Link href="#prenup">Prenup</Nav.Link>
                <Nav.Link href="#rsvp" className="nav-rsvp">RSVP</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col md={6} className="text-right resolution-change mobile-view-nav">
            <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="navbar-toggle"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
          </Col>
        </Row>
      </Container>
    </Navbar>

    {/* Overlay and Side Panel for NavLinks */}
    <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
    <div className={`side-panel ${menuOpen ? 'open' : ''}`}>
      <Nav className="flex-column">
        <Nav.Link href="#gehometting-there" onClick={() => setMenuOpen(false)}>Home</Nav.Link>
        <Nav.Link href="#story" onClick={() => setMenuOpen(false)}>Our Story</Nav.Link>
        <Nav.Link href="#events" onClick={() => setMenuOpen(false)}>Events</Nav.Link>
        <Nav.Link href="#information" onClick={() => setMenuOpen(false)}>Details</Nav.Link>
        <Nav.Link href="#prenup" onClick={() => setMenuOpen(false)}>Prenup</Nav.Link>
        <Nav.Link href="#rsvp" onClick={() => setMenuOpen(false)}>RSVP</Nav.Link>
      </Nav>
    </div>
  </>
  );
};

export default WeddingNavBar;