import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/wedding-story.css'; // Import your custom CSS for styling
import ja1 from '../assets/images/gallery-img/1.jpeg';
import ja2 from '../assets/images/gallery-img/2.jpeg';
import ja3 from '../assets/images/gallery-img/3.jpeg';
import ja4 from '../assets/images/gallery-img/4.jpeg';
import ja5 from '../assets/images/gallery-img/5.jpeg';
import { Chrono } from 'react-chrono';


const WeddingStory = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Data for the timeline
const timelineData = [
    {
        title: "First Met",
        cardTitle: "Start of the Journey",
        cardSubtitle: "An old-school adventure",
        cardDetailedText: "This marks the start of an adventure filled with charm and heritage.",
        media: {
            type: "IMAGE",
            source: {
            url: ja1, // replace with your image URL
            },
        },
    },
    {
        title: "First Travel",
        cardTitle: "Memories Preserved",
        cardSubtitle: "Reliving the past",
        cardDetailedText: "Exploring the beauty and simplicity of the golden days.",
        media: {
        type: "IMAGE",
        source: {
            url: ja2, // replace with your image URL
        },
        },
    },
    {
        title: "First Date",
        cardTitle: "Memories Preserved",
        cardSubtitle: "Reliving the past",
        cardDetailedText: "Exploring the beauty and simplicity of the golden days.",
        media: {
            type: "IMAGE",
            source: {
            url: ja3, // replace with your image URL
            },
        },
    },
    {
        title: "Office Days",
        cardTitle: "Memories Preserved",
        cardSubtitle: "Reliving the past",
        cardDetailedText: "Exploring the beauty and simplicity of the golden days.",
        media: {
            type: "IMAGE",
            source: {
            url: ja4, // replace with your image URL
            },
        },
    },
    {
      title: "Marriage",
      cardTitle: "Embracing the Tradition",
      cardSubtitle: "Old-world charm",
      cardDetailedText: "Keeping rustic traditions alive while moving forward.",
      media: {
        type: "IMAGE",
        source: {
          url: ja5, // replace with your image URL
        },
      },
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.story-section');
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
    <section className={`story-section ${isVisible ? 'visible' : ''}`}>
      <Container fluid id = "story" className="">
        <Row className="justify-content-center">
            <Col md={12} className="text-center">
            <h1 className="global-title-template"> Our Story </h1>
            </Col>
        </Row>
        <Row className="justify-content-center margin-top-55 margin-bottom-140 ">
            <Col md={12} className="text-center justify-content-center">
                <div className="story-container">
                    <Chrono
                            items={timelineData}
                            mode="VERTICAL_ALTERNATING"
                            cardHeight={250}
                            cardWidth={300}
                            theme={{
                            primary: "#A47C48", // rustic brown
                            secondary: "#D1BCA3", // beige accent
                            cardBgColor: "#F5EAD6", // paper-like background
                            cardForeColor: "#4B3E2A", // dark brown text color
                            titleColor: "#4B3E2A", // title color
                            }}
                        hideControls={true}
                    />
                </div>            
            </Col>
            
        </Row>
      </Container>
    </section>
  );
};

export default WeddingStory;
