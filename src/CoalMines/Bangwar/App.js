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
            Bangwar Coal Mine, Shahdol, Madhya Pradesh
          </h3>
          <p>
            The Bangwar Coal Mine, located in the Shahdol district of Madhya Pradesh, is a notable coal mining operation in the region. Known for its substantial reserves, the Bangwar mine plays a critical role in supplying coal to various thermal power plants and industries across Madhya Pradesh, contributing significantly to the state's energy infrastructure.
            This mine employs efficient and safe mining techniques to ensure optimal coal extraction, prioritizing both productivity and the safety of its workers.
          </p>
          <p>
            The operation of the Bangwar Coal Mine is also a significant economic driver in the Shahdol district, providing numerous employment opportunities and supporting local economic growth.
          </p>
          <p>
            In addition to its economic impact, the Bangwar Coal Mine is committed to sustainable mining practices. It focuses on minimizing environmental damage through responsible practices such as land reclamation and waste management.
          </p>
          <p>
            These efforts help to reduce the ecological footprint of the mine, ensuring that its operations contribute positively to both the local community and the environment.
          </p>
          <p>
            Overall, the Bangwar Coal Mine is an essential asset to Madhya Pradesh's energy sector, supporting both the region's energy needs and its economic development.
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
              <td>BANGWAR</td>
            </tr>
            <tr>
              <td><strong>State:</strong></td>
              <td>Madhya Pradesh</td>
            </tr>
            <tr>
              <td><strong>District:</strong></td>
              <td>Shahdol</td>
            </tr>
            <tr>
              <td><strong>Mine Type:</strong></td>
              <td>UG</td>
            </tr>
            <tr>
              <td><strong>Owner:</strong></td>
              <td>SECL</td>
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
