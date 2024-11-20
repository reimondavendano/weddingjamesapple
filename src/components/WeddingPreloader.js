// WeddingPreloader.jsx
import React from "react";
import '../assets/styles/wedding-preloader.css'; // Import your custom CSS for styling
import preload from '../assets/images/preloader-img.gif';

const WeddingPreloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preload-container">
          <img src={preload} className="img-fluid"/>
        </div>
        
      </div>
    </div>
  );
};

export default WeddingPreloader;
