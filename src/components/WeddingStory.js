import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/wedding-story.css'; // Import your custom CSS for styling
import story1 from '../assets/images/story-img/ourstory_2013.png';
import story2 from '../assets/images/story-img/ourstory_2023.png';

import { Chrono } from 'react-chrono';


const WeddingStory = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Data for the timeline
const timelineData = [
    {
        title: "2013",
        cardTitle: "Office Heartstrings",
        cardDetailedText: [
                            "It all started in 2013 when James and Apple first crossed paths during Apple’s job interview, with James working in the same room. Soon after, casual office chats turned into a real friendship. ", 
                           "Over time, their conversations grew deeper, and laughter became something they shared often. James courted Apple with genuine gestures and thoughtful surprises, making his intentions clear. With patience and care, he pursued her, showing the same dedication he brings to everything that matters. After spending months growing closer and building trust, Apple finally opened her heart to James and told him, 'I love you,' marking the start of their love story."
                          ],
        media: {
            type: "IMAGE",
            source: {
            url: story1, // replace with your image URL
            },
        },
    },
    {
        title: "2023",
        cardTitle: "A Decade of love, A Lifetime to go",
        cardDetailedText: [
          "What began as a simple office meeting in 2013 soon blossomed into something much deeper. Over time, James and Apple discovered countless things they loved doing together—whether trying new foods, going on road trips, or sharing hobbies, they always found ways to stay connected.", 
          "Despite life’s challenges, their love remained strong, rooted in deep faith and trust in God’s guidance. Each year brought them closer, turning everyday moments into cherished memories.",
          "James felt it was the right time to take the next step. With God's perfect timing, he proposed to Apple on August 28, 2023, in Laguna, with the help of their 'Roadtrip Friends.' Apple responded with 'Syempre!' marking the beginning of their journey toward a lifetime of happiness and love. "
        ],
        media: {
        type: "IMAGE",
        source: {
            url: story2, // replace with your image URL
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
                            items={timelineData.map(item => ({
                              ...item,
                              // Render cardDetailedText as separate lines in JSX
                              cardDetailedText: (
                                <div>
                                  {item.cardDetailedText.map((line, index) => (
                                    <p className = "font-agradir font-size-10" key={index} style={{ margin: 0, marginBottom: "1rem" }}>{line}</p>
                                  ))}
                                </div>
                              ),
                            }))}
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
