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
            Bansra Coal Mine, West Bengal
          </h3>
          <p>
            Bansra Coal Mine, located in West Bengal, India, is an important coal mining operation in the region. The mine is known for its substantial coal reserves and plays a key role in the local and national energy sectors.
          </p>
          <p>
            The Bansra Coal Mine primarily operates using open-cast mining techniques. This method involves removing overburden to access coal deposits near the surface. Open-cast mining at Bansra allows for the efficient extraction of coal, utilizing modern equipment and technology to enhance productivity and safety. The mine’s operations are designed to maximize coal output while managing operational costs effectively.
          </p>
          <p>
            Environmental management is a critical aspect of the Bansra Coal Mine’s operations. The mine implements various measures to mitigate environmental impact, including dust control systems, water management practices, and waste disposal protocols. Efforts are also made to rehabilitate mined-out areas and restore them for future use, aligning with sustainable mining practices.
          </p>
        </div>
        
        <div className="coal-mine-image">
          {/* Use the image in the empty section */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={image} alt="Coal Mine" className="image-placeholder" />
        </div>
      </header>
      <h2>Mine Details</h2>

      {/* Section for Coal Mine Details Table */}
      <section className="table-section">
        <table>
          <tbody>
            <tr>
              <td><strong>Coal Mine Name:</strong></td>
              <td>BANSRA</td>
            </tr>
            <tr>
              <td><strong>State:</strong></td>
              <td>West Bengal</td>
            </tr>
            <tr>
              <td><strong>District:</strong></td>
              <td>Paschim Bardhaman</td>
            </tr>
            <tr>
              <td><strong>Mine Type:</strong></td>
              <td>Mixed</td>
            </tr>
            <tr>
              <td><strong>Owner:</strong></td>
              <td>ECL</td>
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
