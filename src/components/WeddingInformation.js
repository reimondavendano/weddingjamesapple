import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/wedding-information.css'; // Import your custom CSS for styling
import img3 from '../assets/images/info-image/3.png';
import img4 from '../assets/images/info-image/4.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'



const WeddingInformation = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.information-section');
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
    <section id = "information" className={`information-section ${isVisible ? 'visible' : ''}`}>
      <Container fluid  className="">
        <Row className="justify-content-center">
            <Col md={12} className="text-center">
                <h1 className="global-title-template"> Our Details </h1>
            </Col>
        </Row>
        <Row className="justify-content-center margin-top-55 ">
            <Col md={2}></Col>
            <Col md={4} className="text-center justify-content-center">
                <h1 className="text-align-left mobile-center-text margin-top-50 font-weight-bold font-agradir primary-font-color font-size-40" > Snap & Share </h1>
                    {/* <div className="snap-icons" >
                        <div className="content-icon">
                            <div className="icon-class1">
                                <FontAwesomeIcon  icon={faFacebook} size="lg" />
                            </div>
                        </div>
                        <div className="content-icon">
                            <div className="icon-class1">
                                <FontAwesomeIcon  icon={faInstagram} size="lg" />
                            </div>
                        </div>
                        <div className="content-icon">
                            <div className="icon-class1">
                                <FontAwesomeIcon  icon={faTiktok} size="lg"  />
                            </div>
                        </div>
                    </div> */}
                    <div className="">
                        <p className="text-align-left mobile-center-text snap-details font-agradir font-style-italic font-size-18 primary-font-color" style={{fontSize: '16px', marginTop: '25px'}}> Help us capture and share our precious moments using our official wedding hashtag below on Facebook, Instagram and/or Tiktok. </p>
                        <p className="text-align-left mobile-center-text margin-top-30 font-agradir font-size-bold font-size-18 secondary-font-color"> #abeautAPPLElovestorywithJAMES</p>
                        <p className="text-align-left mobile-center-text font-agradir margin-top-neg-20 font-size-bold font-size-18 secondary-font-color"> #JAMESfoundhAPPLEyeverafter</p>
                    </div>
            </Col>
            <Col md={6}></Col>
        </Row>
        <Row>

            <Col md={6}></Col>
            <Col md={4}>
                <h1 className="margin-top-50 text-align-center font-weight-bold font-agradir primary-font-color font-size-40"> Gift Guide </h1>
                <p className="text-align-center font-agradir font-style-italic font-size-18 secondary-font-color"> With all that we have, we've been truly blessed. Your presence and prayers are all requested</p>
                <p className="text-align-center font-agradir font-style-italic font-size-18 secondary-font-color"> But if you desire to give nonetheless, monetary gift is one we humbly suggest</p>
            </Col>
            <Col md={2}></Col>
                    
        </Row>
        <Row>
            <Col md={4}></Col>
            <Col md={5} style={{zIndex: 4}}>
                <h1 className="margin-top-50 text-align-center font-weight-bold font-agradir primary-font-color font-size-40"> Attire </h1>
                    <Row>
                        <Col md={6}>
                        <Row>
                            <Col md ={12}>
                                <div className = "margin-top-30">
                                    <p className="text-align-left mobile-center-text font-agradir font-style-bold font-size-25 secondary-font-color"> Polo or Long Sleeve </p>
                                    <p className="text-align-left mobile-center-text margin-top-neg-22 font-agradir font-style-italic font-size-18 secondary-font-color"> for the gentlemen</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md ={12}>
                                <div className = "margin-top-30">
                                    <p className="text-align-left mobile-center-text font-agradir font-style-italic font-style-bold font-size-25 secondary-font-color"> Cocktail or Long Dress </p>
                                    <p className="text-align-left mobile-center-text margin-top-neg-22 font-agradir font-style-italic font-size-18 secondary-font-color"> for the ladies</p>
                                </div>
                            </Col>
                        </Row>
                            
                        <Row>
                            <Col md ={12}>
                                <div className = "margin-top-50">
                                    <p className="text-align-left  mobile-center-text font-agradir font-style-italic font-size-18 secondary-font-color"> Dress fabulously in shade of rust champagne or earth tone color.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md ={12}>
                                <div class="color-palette">
                                    <div className="color-circle" style={{backgroundColor: '#9E4003'}}></div>
                                    <div className="color-circle" style={{backgroundColor: '#783B2B'}}></div>
                                    <div className="color-circle" style={{backgroundColor: '#BD4C02'}}></div>
                                    <div className="color-circle" style={{backgroundColor: '#ECCEAA'}}></div>
                                    <div className="color-circle" style={{backgroundColor: '#929292'}}></div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md ={12}>
                                <div className = "margin-top-50">
                                    <p className="text-align-left  mobile-center-text font-agradir font-style-italic font-size-18 secondary-font-color"> Please do not wear polo shirt, jeans or short. Strictly follow the dress code</p>
                                </div>
                            </Col>
                        </Row>
                            
                        </Col>
                        <Col md={6}></Col>
                    </Row>
            </Col>
            <Col md={2} className="position-relative">
                <img src={img3} alt="Responsive Image" className="img-fluid position-absolute custom-image img-3-template" />
                <img src={img4} alt="Responsive Image" className="img-fluid position-absolute custom-image img-4-template" />
            </Col>
            <Col md={1}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeddingInformation;
