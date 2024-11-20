import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import '../assets/styles/wedding-prenup.css'; // Import your custom CSS for styling
import ja1 from '../assets/images/prenup/prenup00.jpg';
import ja2 from '../assets/images/prenup/prenup01.jpg';
import ja3 from '../assets/images/prenup/prenup02.jpg';
import ja4 from '../assets/images/prenup/prenup03.jpg';
import ja5 from '../assets/images/prenup/prenup04.jpg';
import ja6 from '../assets/images/prenup/prenup04a.jpg';
import ja7 from '../assets/images/prenup/prenup05.jpg';
import ja9 from '../assets/images/prenup/prenup07.jpg';
import ja10 from '../assets/images/prenup/prenup08.jpg';
import ja11 from '../assets/images/prenup/prenup09.jpg';
import ja12 from '../assets/images/prenup/prenup10.jpg';
import ja13 from '../assets/images/prenup/prenup11.jpg';
import ja14 from '../assets/images/prenup/prenup12.jpg';
import ja15 from '../assets/images/prenup/prenup13.jpg';
import ja16 from '../assets/images/prenup/prenup14.jpg';
import ja17 from '../assets/images/prenup/prenup15.jpg';
import ja18 from '../assets/images/prenup/prenup16.jpg';
import ja19 from '../assets/images/prenup/prenup17.jpg';
import ja20 from '../assets/images/prenup/prenup18.jpg';
import ja21 from '../assets/images/prenup/prenup19.jpg';

import Slider from 'react-slick';
import styled from 'styled-components';


const GalleryWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;

`;

const FullScreenModal = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 70%;
  max-height: 70%;
  animation: scaleUp 0.5s ease-in-out;
  
  @keyframes scaleUp {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
`;

const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  z-index: -1;
`;

// Navigation Buttons
const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 10;
  color: #000;
  &:hover {
    background-color: transparent;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 10px;
`;

const NextButton = styled(NavigationButton)`
  right: 10px;
`;




const WeddingPrenup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const images = [ja1, ja2, ja3, ja4, ja5, ja6, ja7, ja9, ja10, ja11, ja12, ja13, ja14, ja15, ja16, ja17, ja18, ja19, ja20, ja21];
 
  // Scroll effect for visibility
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.prenup-section');
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

  const nextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the interval for autoplay (3 seconds)
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <section id="prenup" className={`prenup-section ${isVisible ? 'visible' : ''}`}>
      <Container fluid >
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h1 className="global-title-template">Our Prenup</h1>
          </Col>
        </Row>
        <Row className="justify-content-center margin-top-55 margin-bottom-140">
          {/* Carousel for Gallery */}
          <Col md={12}>
            <GalleryWrapper>
                <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} style={{ padding: '0 20px' }}>
                    <img 
                        src={image} 
                        alt={`Gallery Image ${index + 1}`} 
                        onClick={() => openModal(index)} 
                        style={{ cursor: 'pointer', width: '100%' }} 
                    />
                    </div>
                ))}
                </Slider>
            </GalleryWrapper>

            <FullScreenModal isOpen={isModalOpen} onClick={closeModal}>
              <BackgroundBlur />
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <PrevButton onClick={previousImage}>&#10094;</PrevButton>
                <ModalImage src={images[modalImageIndex]} alt="Full Screen" />
                <NextButton onClick={nextImage}>&#10095;</NextButton>
              </ModalContent>
            </FullScreenModal>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeddingPrenup;
