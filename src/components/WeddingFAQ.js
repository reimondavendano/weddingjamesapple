import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import '../assets/styles/wedding-faq.css'; // Import your custom CSS for styling
import qrrsvp from '../assets/images/rsvp.png';




const WeddingFAQ = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  const faqData = [
    {
        question: 'What time should we arrive?',
        answer: 'The procession will start at 1:45 PM, followed by ceremony at 2:00 PM. The estimated travel time from Manila to Chapel on the hill is three to four hours. Please consider traffic and travel accordingly.',
    },
    {
        question: 'Is there a parking provided?',
        answer: 'Yes, there an ample parking available for both ceremony and reception. The space are reserved exclusively for our wedding.',
    },
    {
        question: 'What should we wear?',
        answer: 'Formal attire is required for all members of the entourage. For other guests, semi formal attire is request',
    },
    {
        question: 'Do you have a gift preferences?',
        answer: 'As love is what this day is all about, your presence is one we could not celebrate without, but if you desire to give nonetheless, monetary gift is one we suggest as we will begin in our new life together',
    },
    {
        question: 'Can i bring someone with me?',
        answer: "We're excited to celebrate with our closest friend and family. We kindly ask that you only bring a plus one if they were specifically invited or if you have discussed it with the couple beforehand. Thank you for understanding",
    },
    {
        question: 'Are kids are welcome?',
        answer: 'We loved children, but now we can accomodate the children of immediate family and those in entourage. We hope you understand and can make arrangement for your little ones.',
    },
    {
        question: 'What should we do once the ceremony done?',
        answer: 'From the church, the estimate travel to the venue is 30 - 45 minutes. There will be a cocktail hour after the ceremony, with snacks and drinks available. You may also use this time to register, enjoy the food and visit the various booth to collect a souvenir.',
    },
    {
        question: 'Can we seat anywhere during the reception?',
        answer: 'No. We planned as seating arrangement for our guest convenience and group familiarity. Our coordinators will gladly assist you on designated seat',
    },
    {
        question: 'If i am planning to book accomodation, where do you suggest?',
        answer: 'We recommend the following nearby accomodation',
    },
    {
        question: 'When do i RSVP?',
        answer: 'We request an unplugged ceremony, but feel free to take photos and videos at the reception!',
        image: qrrsvp
    },
    
    
  ];

  return (
    <section className={`faq-section  ${isVisible ? 'visible' : ''}`}>
      <Container fluid id = "faq" className="faq-container">
        <Row className="justify-content-center">
            <Col md={12} className="text-center">
            <h1 className="global-title-template"> Frequently Asked Question </h1>
            </Col>
        </Row>
        <Row className="justify-content-center margin-top-55 margin-bottom-140 ">
           
            <Col md={6} className="text-center">
                <Accordion defaultActiveKey="0" className="faq-accordion">
                    {faqData.map((faq, index) => (
                    <Accordion.Item eventKey={String(index)} key={index}>
                        <Accordion.Header>{faq.question}</Accordion.Header>
                        <Accordion.Body>
                        {/* Conditional list rendering for index 2 */}
                        {index === 2 ? (
                            <div>
                                <div className="text-align-left font-agradir">
                                    {faq.answer}
                                </div>
                                <p className ="secondary-font-color margin-top-20">For Gentleman :</p>
                                <p className ="secondary-font-color margin-top-neg-20">Polo or Long Sleeves following the color motif and slacks</p>
                                <p className ="secondary-font-color ">For Ladies: </p>
                                <p className ="secondary-font-color margin-top-neg-20">Blouse, Cocktail or Long Dress preferably on our color palette below</p>
                            </div>
                            ) : index === 8 ? (
                                <div>
                                    <div className="text-align-left font-agradir">
                                        {faq.answer}
                                    </div>
                                    <p className ="secondary-font-color margin-top-20"> 1. Hotel Kimberly (3 minute walk from the reception)</p>
                                    <p className ="secondary-font-color margin-top-neg-20"> 2. Hotel Monticello (10 minute drive from the reception)</p>
                                    <p className ="secondary-font-color margin-top-neg-20"> 3. Pine Suit Tagaytay (7 minute drive from the reception)</p>
                                    <p className ="secondary-font-color margin-top-neg-20"> 4. Any preferred Airbnb accomodations. </p>
                                    <p className ="secondary-font-color margin-top-20 font-style-italic"> Be sure to book early, as rooms may fill up quickly around the wedding date</p>
                                </div>
                            ) : index === 9 ? (
                                <div>
                                    <div className='font-agradir'>
                                            <Row>
                                                <Col md={3}>
                                                <img
                                                    src={faq.image}
                                                    style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
                                                    />
                                                </Col>
                                                <Col md={9}>
                                                    <p className='text-align-left secondary-font-color'>Scan the QR code or visit <a target="_blank" href ="https://docs.google.com/forms/d/e/1FAIpQLScnYfvdYuqF2xRt4V3g1HkJeJZgj3buR3gckQzFZ_oARNijPg/viewform" >https://docs.google.com/forms/d/e/1FAIpQLScnYfvdYuqF2xRt4V3g1HkJeJZgj3buR3gckQzFZ_oARNijPg/viewform</a> and kindly send your RSVP as soon as you can.</p>
                                                    <p className='text-align-left secondary-font-color margin-top-20'>The latest we can accept is on <span className= "font-weight-bold ">December 8, 2024 </span>. If we will not receive a response by this date, it will marked as "NO".</p>

                                                    <p className='text-align-left secondary-font-color margin-top-20'>We will miss you celebrating with us; however we must promptly provide the total guest count to the venue, and cannot accept late RSVP past in this point.</p>
                                                    <p className='text-align-left secondary-font-color margin-top-20'>We hope you understand. Thank you</p>.
                                                </Col>
                                            </Row>
                                    </div>
                                </div>
                            ) : (
                            <div className="text-align-left font-agradir">
                                {faq.answer}
                            </div>
                        )}

                        </Accordion.Body>
                    </Accordion.Item>
                    ))}
                </Accordion>
                </Col>
           
        </Row>
      </Container>
    </section>
  );
};

export default WeddingFAQ;
