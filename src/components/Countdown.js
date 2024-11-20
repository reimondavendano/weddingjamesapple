import React, { useEffect, useState } from 'react';
import '../assets/styles/countdown.css'; // Import your custom CSS for styling
import { Container, Row, Col } from 'react-bootstrap';

const Countdown = ({ targetDate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        const section = document.querySelector('.countdown-section');
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (sectionTop < viewportHeight * 0.75) {
          setIsVisible(true);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <section className={`countdown-section ${isVisible ? 'visible' : ''}`}>
        <Container fluid>
          <Row className="justify-content-center">
              
              <Col md={12}>
              <div className="countdown-container">
                  <Row>
                      
                      <Col md={6}>
                      <p className='font-agradir text-align-center countdown-p  font-size-20 white-color '>We are waiting for....</p>
                      <p className='font-madelyn text-align-center countdown-p  font-size-50 white-color '>The Adventure</p>
                      </Col>
                      <Col md={6} className='justify-content-center'>
                        
                          {Object.keys(timeLeft).length ? (
                          <div className="countdown">
                              {Object.entries(timeLeft).map(([unit, value]) => (
                              <div key={unit} className="time-box">
                                  <div className="time-value">
                                  {String(value).padStart(2, "0")}
                                  </div>
                                  <div className="time-unit">{unit}</div>
                              </div>
                              ))}
                          </div>
                          ) : (
                          <div className="celebration">It's the big day!</div>
                          )}
                  
                      </Col>
                  </Row>
                  </div>
              </Col>
              
          </Row>
        </Container>
      </section>
      
    );
  };
  
  export default Countdown;
  