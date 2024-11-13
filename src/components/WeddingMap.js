import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card  } from 'react-bootstrap';
import '../assets/styles/wedding-map.css'; // Import your custom CSS for styling

import chapel from '../assets/images/maps-images/chapel.jpg';
import reception from '../assets/images/maps-images/reception.jpg';
import MapTemplate from './MapTemplate';


const mapsUrlLeanel = "https://www.google.com/maps/place/Leanel's+Garden+Events+Place,+Rd,+Daang+Luma,+Tagaytay,+4120+Cavite/@14.1204223,120.9355974,19z/data=!4m6!3m5!1s0x33bd77cba8875809:0xaaea4a7b375462cb!8m2!3d14.121117!4d120.9351446!16s%2Fg%2F11h6qdxr5l"; // Replace with your actual Maps link
const mapsUrlChapel = 'https://www.google.com/maps/place/Don+Bosco+Chapel+on+the+Hill/@14.0575893,120.8368453,19z/data=!4m6!3m5!1s0x33bd9c26637ae0a1:0x469e957a8a28f790!8m2!3d14.0574537!4d120.8360742!16s%2Fg%2F1hc3jvf30?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D'; // Replace with your actual Maps link

const title1 = 'Don Bosco, Chapel On The Hill';
const subtext1 = 'Batulao Rd., Brgy. Cahil, Calaca, Batangas';
const title2 = "Leanel's Garden";
const subtext2 = 'Daang Luma Rd., Brgy. Kaybagal North, Tagaytay City';


const WeddingMap = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.map-section');
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
    <section className={`map-section ${isVisible ? 'visible' : ''}`}>
      <Container fluid id = "getting-there" className="background-gray height-section">
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h1 className="global-title-template"> Map Guide </h1>
          </Col>
        </Row>
        <Row className="justify-content-center margin-top-55 margin-bottom-140 ">
            <Col md={6} className="text-center justify-content-center">
                <MapTemplate mapsUrl={mapsUrlChapel} imageSRC={chapel} title={title1} subtext={subtext1} />
            </Col>
            <Col md={6} className="text-center justify-content-center">
                <MapTemplate mapsUrl={mapsUrlLeanel} imageSRC={reception} title={title2} subtext={subtext2} />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeddingMap;
