import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/wedding-timeline.css'; // Import your custom CSS for styling
import weddingring from '../assets/images/icons/wedding-ring.png';
import champaigne from '../assets/images/icons/champagne.png';
import dance from '../assets/images/icons/dance.png';
import eat from '../assets/images/icons/eat.png';
import cheers from '../assets/images/icons/cheers.png';
import sched from '../assets/images/wedding-assets/sched.png';



const WeddingTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.timeline-section');
      const sectionTop = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      
      if (sectionTop < viewportHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const events = [
    { id: 1, icon: weddingring, alt: 'Reception Icon', time: '2 PM' },
    { id: 2, icon: champaigne, alt: 'Champaigne Time', time: '4 PM' },
    { id: 3, icon: dance, alt: 'Dance Icon', time: '6 PM' },
    { id: 4, icon: eat, alt: 'Eat Icon', time: '7 PM' },
    { id: 5, icon: cheers, alt: 'Cheers Icon', time: '8 PM' }
  ];

  return (
    <section className={`timeline-section global-standard-height background-gray ${isVisible ? 'visible' : ''}`}>
      <Container fluid id = "schedule">
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h1 className="global-title-template"> Timeline </h1>
          </Col>
        </Row>
        <Row className="justify-content-center margin-top-55 margin-bottom-140 position-relative">
            <Col md={2}></Col>
            <Col md={8} >
                <div className="timeline-img-place">
                    <Row>
                        <Col md={12}>
                        <div className ="position-relative map-container">
                            <img src={sched} alt="Responsive Image" className="img-fluid sched-image" />
                        </div>
                        </Col>
                    </Row>
                </div>
                <div className="timeline-hard-coded">
                    <div className="timeline-line"></div>
                    <Row className="justify-content-center timeline-height ">
                    {events.map((event, index) => (
                        <Col key={event.id} md={2} className="timeline-icon">
                        {/* Image positioned at the top of the vertical line */}
                        <img src={event.icon} alt={event.alt}  className={`timeline-img ${index % 2 === 0 ? 'left' : 'right'}`} />
                        <p className={`text-template ${index % 2 === 0 ? 'left' : 'right'}`}>{event.time}</p>
                        <div className={`vertical-line ${index % 2 === 0 ? 'left' : 'right'}`}></div>
                        </Col>
                    ))}
                    </Row>
                </div>
            </Col>
            <Col md={2}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeddingTimeline;
