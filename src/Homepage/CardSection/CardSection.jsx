import React from 'react';
import './CardSection.css'; // Import the CSS file for CardSection
import image1 from './coal.jpg';
import image2 from './foorprint.png';
import image3 from './sink.png';

const CardSection = () => {
  return (
    <div className="card-section">
      <div className="card">
        <div className="card-image">
          {/* Placeholder for image */}
          <img src={image1} alt="Coal Mines Summary" />
        </div>
        <h2 className="card-title">Coal Mines Summary</h2>
        <p className="card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="card">
        <div className="card-image">
          {/* Placeholder for image */}
          <img src={image2} alt="Carbon Footprint" />
        </div>
        <h2 className="card-title">Carbon Footprint</h2>
        <p className="card-content">
          Nulla facilisi. Morbi nec lorem vel dolor luctus tincidunt.
        </p>
      </div>
      <div className="card">
        <div className="card-image">
          {/* Placeholder for image */}
          <img src={image3}alt="Coal Mine Locations" />
        </div>
        <h2 className="card-title">Sink Analysis</h2>
        <p className="card-content">
          Donec dapibus, magna nec interdum gravida, risus lacus fermentum urna.
        </p>
      </div>
    </div>
  );
};

export default CardSection;
