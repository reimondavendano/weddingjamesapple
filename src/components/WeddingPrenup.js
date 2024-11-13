import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import '../assets/styles/wedding-prenup.css'; // Import your custom CSS for styling
import ja1 from '../assets/images/gallery-img/1.jpeg';
import ja2 from '../assets/images/gallery-img/2.jpeg';
import ja3 from '../assets/images/gallery-img/3.jpeg';
import ja4 from '../assets/images/gallery-img/4.jpeg';
import ja5 from '../assets/images/gallery-img/5.jpeg';
import ja6 from '../assets/images/gallery-img/6.jpeg';
import ja7 from '../assets/images/gallery-img/7.jpeg';
import ja8 from '../assets/images/gallery-img/8.jpeg';
import ja9 from '../assets/images/gallery-img/9.jpeg';
import ja10 from '../assets/images/gallery-img/10.jpeg';
import Slider from 'react-slick';
import styled from 'styled-components';
import IFrameComponent from './IFrameComponent';
import videosoon from '../assets/images/video-soon.png';

const PrenupURL = 'https://www.youtube.com/embed/tN8ggkmGQDE?si=LK3-0MTdCrmDmWHj';
const title = 'PreNup Video';

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
  max-width: 90%;
  max-height: 90%;
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


const WeddingPrenup = () => {
  const [isVisible, setIsVisible] = useState(false);
 
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    dots: true,
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

  const images = [ja1, ja2, ja3, ja4, ja5, ja6, ja7, ja8, ja9, ja10];

  
  return (
    <section className={`prenup-section ${isVisible ? 'visible' : ''}`}>
      <Container fluid id="prenup">
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
                        onClick={() => openModal(image)} 
                        style={{ cursor: 'pointer', width: '100%' }} 
                    />
                    </div>
                ))}
                </Slider>
            </GalleryWrapper>

            <FullScreenModal isOpen={isModalOpen} onClick={closeModal}>
                <BackgroundBlur />
                <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalImage src={modalImage} alt="Full Screen" />
                </ModalContent>
            </FullScreenModal>
          </Col>
        </Row>
        <Row className='margin-top-55 margin-bottom-140 justify-content-center embeded-video'>
            <Col md= {6} className='justify-content-center'>
                <IFrameComponent embedURL={PrenupURL} title={title} />
            </Col>
        </Row>
        <Row className='margin-top-55 margin-bottom-140 justify-content-center embeded-video-soon'>
            <Col md={4}></Col>
            <Col md= {4} className='justify-content-center'>
                <div className="justify-content-center position-relative">
                    <img className="img-fluid video-soon" src ={videosoon}/>
                </div>
            </Col>
            <Col md={4}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeddingPrenup;
