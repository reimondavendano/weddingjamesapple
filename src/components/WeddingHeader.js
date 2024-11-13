import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/wedding-header.css'; // Import your custom CSS for styling
import WeddingNavBar from './WeddingNavBar';

const WeddingHeader = () => {
  return (
    <header className="header-section">
      <WeddingNavBar />
      <Container>
        <Row>
          <Col className="text-center head-template">
            <div className="header-title">JAMES & APPLE</div>
            <div className="header-subtitle">SATURDAY. FEBRUARY 8, 2025</div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default WeddingHeader;