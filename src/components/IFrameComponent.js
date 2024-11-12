import React from 'react';
import '../assets/styles/iframevideo.css'; // Import your custom CSS for styling

const IFrameComponent = ({ embedURL, title }) => {
  return (
    <div className="video-responsive">
      <iframe
        src={embedURL}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
};

export default IFrameComponent;
