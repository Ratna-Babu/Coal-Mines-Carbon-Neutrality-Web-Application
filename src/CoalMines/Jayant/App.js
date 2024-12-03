import React from 'react';
import './App.css';  // Import the CSS file for styles
import image from './image.png'; 

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
            Jayant Coal Mine, Singrauli, Madhya Pradesh
          </h3>
          <p>
            Jayant Coal Mine is a significant open-cast coal mining operation located in the Singrauli district of Madhya Pradesh, India. It is part of the Singrauli Coalfield, which is renowned for its substantial coal reserves and critical role in India's energy sector.
          </p>
          <p>
            Jayant Coal Mine primarily employs open-cast mining techniques to extract coal from surface deposits. This method involves removing the overburden to access coal seams close to the surface. The mine uses modern mining machinery, such as draglines, shovels, and haul trucks, to ensure efficient and large-scale coal extraction. Open-cast mining at Jayant allows for high productivity and cost-effective operations.
          </p>
          <p>
            Environmental management is an important aspect of operations at Jayant Coal Mine. The mine implements various measures to mitigate its environmental impact, including dust suppression systems, water management practices, and proper waste disposal. Additionally, efforts are made to rehabilitate and reclaim mined-out areas, aiming to restore the land to a usable condition or repurpose it for other purposes, in line with sustainable mining practices.
          </p>
          <p>
            The Jayant Coal Mine also has a significant socio-economic impact on the local community. It provides numerous employment opportunities and supports regional development through various corporate social responsibility initiatives. These initiatives often include infrastructure development, healthcare services, and educational programs, which contribute to the overall improvement of the quality of life for local residents.
          </p>
        </div>
        
        <div className="coal-mine-image">
          {/* Use the image in the empty section */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={image} alt="Coal Mine" className="image-placeholder" />
        </div>
      </header>
      <h2>Mine Details</h2>
<section className="table-section">
  <table>
    <tbody>
      <tr>
        <td><strong>Coal Mine Name:</strong></td>
        <td>JAYANT</td>
      </tr>
      <tr>
        <td><strong>State:</strong></td>
        <td>Madhya Pradesh</td>
      </tr>
      <tr>
        <td><strong>District:</strong></td>
        <td>Singrauli</td>
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
