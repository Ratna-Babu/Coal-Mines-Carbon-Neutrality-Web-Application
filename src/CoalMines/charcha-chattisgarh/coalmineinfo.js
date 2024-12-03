import React from 'react';
import image from './image.png'; // Import the image here
import './App.css';

// Define the CoalMineInfo component
const CoalMineInfo = () => {
  return (
    <div className="coal-mine-info">
      <h2>Coal Mine Information</h2>
      {/* Description with line breaks */}
      <h3>
        ALP Coal Mine, Mancherial, Telangana
      </h3>
      <p>
        The Telangana Manchurian ALP Coal Mine is a major coal mining operation located in the resource-rich state of Telangana, India. It is renowned for its vast reserves of high-quality coal, which are essential to meeting the region's growing energy demands.
      </p>
      <p>
        The mine employs state-of-the-art mining technologies, including advanced drilling and extraction techniques, ensuring both efficiency and safety in its operations. This site is a critical asset to Telangana's energy sector, supplying coal to various thermal power plants, which in turn power homes and industries across the state.
      </p>
      <p>
        The mine is strategically managed to balance productivity with environmental sustainability, incorporating practices that minimize the ecological footprint of mining activities. Beyond its economic contributions, the Telangana Manchurian ALP Coal Mine provides significant employment opportunities, supporting the livelihoods of thousands of workers and contributing to the socio-economic development of the surrounding communities.
      </p>
      <p>
        This mine is integral to the state's industrial and energy infrastructure.
      </p>

      <div className="coal-mine-image">
        {/* Display the image */}
        <img src={image} alt="Coal Mine" className="image-placeholder" />
      </div>
    </div>
  );
};

export default CoalMineInfo;
