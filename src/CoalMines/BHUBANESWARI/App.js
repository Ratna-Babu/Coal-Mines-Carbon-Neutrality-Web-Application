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
            Bhubaneswari Coal Mine, Talcher, Odisha
          </h3>
          <p>
            Bhubaneswari Coal Mine is a significant open-cast coal mining operation located in the Talcher coalfield of Odisha, India. The mine is part of the larger coal-producing region in eastern India, which is crucial for meeting the country’s energy demands.
          </p>
          <p>
            Bhubaneswari Coal Mine utilizes open-cast mining techniques, which involve removing surface layers to access coal seams. This method is efficient for extracting large quantities of coal from near-surface deposits. The mine is equipped with modern mining equipment and technology, including draglines, shovels, and haul trucks, to enhance productivity and ensure safe operations. The open-cast approach allows for a high rate of coal extraction while managing operational costs effectively.
          </p>
          <p>
            Environmental management is a key aspect of operations at Bhubaneswari Coal Mine. The mine implements several measures to mitigate its environmental impact, such as dust suppression systems, water management practices, and proper waste handling procedures. Efforts are also made to rehabilitate and reclaim mined-out areas, aiming to restore the land to a usable condition or repurpose it for other purposes.
          </p>
          <p>
            The Bhubaneswari Coal Mine has a significant impact on the local economy and community. It provides employment opportunities for local residents and supports regional development through various corporate social responsibility initiatives. These initiatives may include infrastructure development, healthcare services, and educational support, contributing to the overall well-being of the local population.
          </p>
        </div>
        
        <div className="coal-mine-image">
          {/* Use the image in the empty section */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={image} alt="Coal Mine" className="image-placeholder" />
        </div>
      </header>

      {/* Section for Coal Mine Details Table */}
      <h2>Mine Details</h2>
      <section className="table-section">
        <table>
          <tbody>
            <tr>
              <td><strong>Coal Mine Name:</strong></td>
              <td>BHUBANESWARI</td>
            </tr>
            <tr>
              <td><strong>State:</strong></td>
              <td>Orissa</td>
            </tr>
            <tr>
              <td><strong>District:</strong></td>
              <td>Angul</td>
            </tr>
            <tr>
              <td><strong>Mine Type:</strong></td>
              <td>OC</td>
            </tr>
            <tr>
              <td><strong>Owner:</strong></td>
              <td>MCL</td>
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
      <br></br><br></br>
    </div>
  );
};

export default App;
