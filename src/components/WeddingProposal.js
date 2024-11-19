import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import '../assets/styles/wedding-proposal.css'; // Import your custom CSS for styling

import IFrameComponent from './IFrameComponent';


const PrenupURL = 'https://www.youtube.com/embed/eUNUY3pZ1NQ';
const title = 'PreNup Video';






const WeddingProposal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

 
  // Scroll effect for visibility
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.proposal-section');
      const sectionTop = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (sectionTop < viewportHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <section className={`proposal-section ${isVisible ? 'visible' : ''}`}>
      <Container fluid id="proposal">
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h1 className="global-title-template">The Proposal</h1>
          </Col>
        </Row>
        <Row className='margin-top-55 margin-bottom-140 justify-content-center embeded-video'>
            <Col md= {3} className='justify-content-center'></Col>
            <Col md= {6} className='justify-content-center video-container'>
                <IFrameComponent embedURL={PrenupURL} title={title} />
            </Col>
            <Col md= {3} className='justify-content-center'></Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeddingProposal;
