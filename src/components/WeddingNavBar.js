import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/wedding-navbar.css'; // Import your custom CSS for styling

const WeddingNavBar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <Navbar expand="lg" fixed="top" className={scrolled ? 'navbar-scrolled' : ''}>
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col sm={2} md={4} className="navbar-logo resolution-change">
            {/* Logo */}
            <Navbar.Brand href="#home">
              <div className="logo-template">J & A</div>
            </Navbar.Brand>
          </Col>
          <Col sm={1} md={2} className='resolution-change'></Col>
          <Col sm={9} md={6} className="text-right resolution-change">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
              <Nav.Link href="#introduction">Introduction</Nav.Link>
                <Nav.Link href="#getting-there">Getting There</Nav.Link>
                <Nav.Link href="#schedule">Schedule</Nav.Link>
                <Nav.Link href="#story">Our Story</Nav.Link>
                <Nav.Link href="#prenup">Prenup</Nav.Link>
                <Nav.Link href="#information">Information</Nav.Link>
                <Nav.Link href="#rsvp">RSVP</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default WeddingNavBar;