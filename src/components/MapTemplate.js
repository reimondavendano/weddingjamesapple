import React from 'react';
import { Button } from 'react-bootstrap';

function MapTemplate({ mapsUrl, imageSRC, title, subtext }) {
  return (
        <div style={styles.templatedMapcontainer} className='templatedMapcontainer'>
            <div style={styles.label}>
                <h1 className="font-cormorant font-weight-bold primary-font-color">{title}</h1>
                <p style={styles.subtext}>{subtext}</p>
            </div>
            <div style={styles.mapsWrapper}>
                <img src ={imageSRC} className="img-fluid"/>
            </div>
            <div className="text-center mt-2">
                <Button
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='wedding-button'
                >
                Get Directions
               
                </Button>
            </div>
        </div>
  );
}

// maps Style
const styles = {
templatedMapcontainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    border: '2px solid #6D3724',
    maxWidth: '600px',
    margin: '0 auto',
  },
  label: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  label: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  heading: {
    fontFamily: 'serif',
    fontSize: '24px',
    color: '#6b4e3d',
    margin: 0,
  },
  subtext: {
    fontFamily: 'Agradir',
    color: '#8c725a',
    fontSize: '16px',
    margin: 0,
  },
  mapsWrapper: {
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    border: '1px solid #6D3724',
    boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  footerText: {
    marginTop: '15px',
    fontFamily: 'Agradir',
    fontSize: '14px',
    color: '#6b4e3d',
    textAlign: 'center',
  },
};

export default MapTemplate;
