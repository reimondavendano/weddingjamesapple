import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/wedding-rsvp.css'; // Import your custom CSS for styling
import BackToTop from './BackToTop';




const WeddingRSVP = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const section = document.querySelector('.rsvp-section');
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (sectionTop < viewportHeight * 0.75) {
            setIsVisible(true);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id = "rsvp" className={`rsvp-section ${isVisible ? 'visible' : ''}`}>
      <Container fluid  className="rsvp-container">
        <Row className="justify-content-center">
            <Col md={12} className="text-center">
            <h1 className="global-title-template"> RSVP </h1>
            </Col>
        </Row>
        <Row className="justify-content-center margin-top-55 margin-bottom-140 ">
            <Col md={12} className="text-center justify-content-center">
                <div className="form-container">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScnYfvdYuqF2xRt4V3g1HkJeJZgj3buR3gckQzFZ_oARNijPg/viewform"
                        width="100%"
                        height="800"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Google Form"
                    >
                    </iframe>
                </div>
            </Col>
            
        </Row>
        <Row className="justify-content-center margin-top-55 margin-bottom-140 ">
            <Col md={12} className="text-center justify-content-center">
                <div className ="img-footer"></div>
            </Col>
        </Row>
        <BackToTop/>
      </Container>
    </section>
  );
};

export default WeddingRSVP;
