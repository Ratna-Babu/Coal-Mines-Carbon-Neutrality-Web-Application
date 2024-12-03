import React from 'react';
import './ImageSection.css'; // Import the CSS file

const ImageSection = ({ image, title, subtitle }) => {
  return (
    <div className="image-section">
      <div className="image-overlay">
        <h1 class="title">{title}</h1>
        <h2 class="sub-title">{subtitle}</h2>
        <button class="explore-btn">explore now</button>
      </div>
    </div>
  );
};

export default ImageSection;
