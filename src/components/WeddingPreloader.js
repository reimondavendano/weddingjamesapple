// WeddingPreloader.jsx
import React from "react";
import '../assets/styles/wedding-preloader.css'; // Import your custom CSS for styling

const WeddingPreloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="initials">
          <span className="letter">James</span>
          <span className="and">and</span>
          <span className="letter">Apple</span>
        </div>
        <div className="ring"></div> {/* Optional wedding ring effect */}
      </div>
    </div>
  );
};

export default WeddingPreloader;
