import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/wedding-header.css'; // Import your custom CSS for styling
import WeddingNavBar from './WeddingNavBar';

const WeddingHeader = () => {
  return (
    <>
    <section id="home" className="header-section-web home web-view">
      <WeddingNavBar />
      <Container fluid>
        <Row>
          <Col md={6}></Col>
          <Col md={5} className="text-center head-template">
            <div className="header-title">JAMES</div>
            <div className="header-title text-align-justify">&</div>
            <div className="header-title">APPLE</div>
            <div className="header-subtitle">02.08.2025</div>
          </Col>
          <Col md={1}></Col>
          
        </Row>
      </Container>
    </section>

    <section id="home" className="header-section-mobile home mobile-view">
    <WeddingNavBar />
    <Container fluid>
      <Row>
        <Col md={12} className="text-center justify-content-center head-template">
          <div className="header-title">JAMES & APPLE</div>
          <div className="header-subtitle">02.08.2025</div>
        </Col>
        
      </Row>
    </Container>
    </section>
    </>
    

  );
};

export default WeddingHeader;