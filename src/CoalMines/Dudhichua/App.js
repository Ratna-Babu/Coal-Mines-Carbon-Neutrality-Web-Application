import React from 'react';
import './App.css';  // Import the CSS file for styles
import image from './image.png'; // Update the image path if necessary

// Define the main App component
const App = () => {
  return (
    <div className="container">
      {/* Header section with Coal Mine Name */}
      <header className="header">
        <div className="coal-mine-info">
          <h2>Coal Mine Information</h2>
          {/* Updated Description with line breaks */}
          <h3>
            Dudhichua Coal Mine, Singrauli, Madhya Pradesh
          </h3>
          <p>
            Dudhichua Coal Mine is a significant open-cast coal mining operation located in the Singrauli district of Madhya Pradesh, India. The mine extracts coal from surface deposits by removing the overburden, which involves stripping away earth and rock layers to access the coal seams beneath. The operation uses advanced machinery such as draglines, shovels, and haul trucks, allowing for efficient and large-scale coal extraction. This method is effective for managing large volumes of coal and supports India’s energy needs.
          </p>
          <p>
            <strong>Environmental Management:</strong> Environmental management is a key priority at Dudhichua Coal Mine. The operation implements various measures to minimize its environmental footprint, including dust suppression systems to reduce air pollution, water management practices to prevent contamination of local water sources, and proper waste disposal procedures. The mine also focuses on land reclamation and rehabilitation efforts to restore mined-out areas, aiming to mitigate ecological impact and repurpose the land for future use.
          </p>
          <p>
            <strong>Socio-Economic Impact:</strong> The Dudhichua Coal Mine has a notable socio-economic impact on the local community. It provides significant employment opportunities for residents, which supports local economic growth. Additionally, the mine contributes to regional development through various corporate social responsibility initiatives. These initiatives often include infrastructure development, healthcare services, and educational programs, which help improve the quality of life for local residents.
          </p>
        </div>
        
        <div className="coal-mine-image">
          {/* Use the image in the section */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={image} alt="Coal Mine" className="image-placeholder" />
        </div>
      </header>
      <h2>Mine Details</h2>
<section className="table-section">
  <table>
    <tbody>
      <tr>
        <td><strong>Coal Mine Name:</strong></td>
        <td>DUDHICHUA</td>
      </tr>
      <tr>
        <td><strong>State:</strong></td>
        <td>Uttar Pradesh</td>
      </tr>
      <tr>
        <td><strong>District:</strong></td>
        <td>Sonebhadra</td>
      </tr>
      <tr>
        <td><strong>Mine Type:</strong></td>
        <td>OC</td>
      </tr>
      <tr>
        <td><strong>Owner:</strong></td>
        <td>NCL</td>
      </tr>
      <tr>
        <td><strong>Govt/Private:</strong></td>
        <td>G</td>
      </tr>
    </tbody>
  </table>
</section>


      {/* Section for Coal Production over the Years */}
      <section className="coal-production">
        <h2>Coal Production over the Years</h2>
        {/* Placeholder for Chart */}
        <div className="chart-placeholder">Chart</div>
      </section>

      {/* Section for additional information and charts */}
      <section className="charts">
        {/* Placeholder for Pie Chart */}
        <div className="pie-chart-placeholder">Pie Chart</div>
        {/* Placeholder for another Chart */}
        <div className="another-chart-placeholder">Another Chart</div>
      </section>
    </div>
  );
};

export default App;
