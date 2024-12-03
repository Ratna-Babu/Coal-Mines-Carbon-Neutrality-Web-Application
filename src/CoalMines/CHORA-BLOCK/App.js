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
            Chora Block Incline, Shankarpur OC, and Bonbahal OC, West Bengal
          </h3>
          <p>
            Chora Block Incline, Shankarpur OC, and Bonbahal OC are coal mining projects located in West Bengal, India, each contributing to the region’s coal production.
          </p>
          <p>
            Chora Block Incline is an underground mining project situated in West Bengal. This project involves mining coal from deeper deposits using inclined tunnels. The incline mining method helps in accessing steep and deep coal seams efficiently. Advanced technologies and equipment are utilized to ensure safe and effective coal extraction, addressing the challenges posed by the depth and geological conditions of the area.
          </p>
          <p>
            Shankarpur Open Cast (OC) is an open-cast mining operation also located in West Bengal. This project involves removing surface layers to expose coal deposits, making it possible to extract coal efficiently from near-surface seams. The use of modern mining equipment and techniques at Shankarpur OC allows for high productivity and safety. Environmental management practices, including dust control and water management, are implemented to minimize the impact on the surrounding environment.
          </p>
          <p>
            Bonbahal OC is another significant open-cast coal mining project in West Bengal. Similar to Shankarpur OC, Bonbahal OC focuses on extracting coal from surface deposits. The project employs advanced technology and efficient mining practices to optimize production while addressing environmental concerns. Rehabilitation and reclamation efforts are part of the project’s approach to sustainable mining, aiming to restore mined-out areas and mitigate ecological impact.
          </p>
        </div>
        
        <div className="coal-mine-image">
          {/* Use the image in the empty section */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={image} alt="Coal Mine" className="image-placeholder" />
        </div>
      </header>

      {/* Section for the Table */}
      <h2>Mine Details</h2>
      <section className="table-section">
        <table>
          <tbody>
            <tr>
              <td><strong>Coal Mine Name:</strong></td>
              <td>CHORA BLOCK INCLINE, SHANKARPUR OC & BONBAHAL OC</td>
            </tr>
            <tr>
              <td>State:</td>
              <td>West Bengal</td>
            </tr>
            <tr>
              <td>District:</td>
              <td>Paschim Bardhaman</td>
            </tr>
            <tr>
              <td>Mine Type:</td>
              <td>Mixed</td>
            </tr>
            <tr>
              <td>Owner:</td>
              <td>ECL</td>
            </tr>
            <tr>
              <td>Govt/Private:</td>
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
