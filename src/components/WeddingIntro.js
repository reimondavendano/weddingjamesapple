import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/wedding-intro.css'; // Import your custom CSS for styling
import reception from '../assets/images/wedding-assets/Reception.png';
import chapel from '../assets/images/wedding-assets/Church.png';

const WeddingIntro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.introduction-section');
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
    <section className={`introduction-section ${isVisible ? 'visible' : ''}`}>
      <Container fluid id = "introduction">
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h1 className="global-title-template"> A Decade of Love, A Lifetime to Go </h1>
          </Col>
        </Row>
        <Row className="justify-content-center margin-top-55">
          <Col md={5} className="text-center">
            <p className="global-text-template"> 
                Together with our families, we cordially invite you to a celebration of life and love in Sacrament of  Matrimony
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center margin-top-204 margin-bottom-140 ">
            <Col md={6} className="text-center">
                <Row className="margin-left-110">
                    <Col md={2}>
                        <div className="text-align-center">
                            <p className=" border-top-bottom text-align-center black-color font-size-16"> SATURDAY </p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="mdy-banner">
                            <p className="head-banner-month"> FEBRUARY </p>
                            <p className="head-banner-date"> 8 </p>
                            <p className="head-banner-year"> 2025 </p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="text-align-center">
                            <p className="border-top-bottom text-align-center black-color font-size-16"> AT 2PM </p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="vertical-line-container"> </div>
                        <div className='chapel-container'>
                                <p className="chapel-headtext font-size-16"> DON BASCO, CHAPEL ON THE HILL</p>
                                <p className="chapel-subtext font-size-16"> CALACA, BATANGAS </p>
                                <div className ="position-relative chapel-img-container">
                                    <img src={chapel} alt="Responsive Image" className="img-fluid custom-image chapel-img-pos" />
                                </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col md={6} className="text-center">
                <Row>
                    <Col md={4}>
                        <div className ="position-relative reception-container">
                            <img src={reception} alt="Responsive Image" className="img-fluid custom-image recept-img-pos"/>
                        </div>
                    </Col>
                    <Col md={5}>
                        <p className="text-align-left font-agradir secondary-font-color font-size-16"> Reception immediately follows at <span className="font-weight-bold primary-font-color font-agradir-bold"> LEANEL'S GARDEN,</span>Tagaytay City </p>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default WeddingIntro;
