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
            SHARDA HIGHWALL Coal Mine, Shahdol, Madhya Pradesh
          </h3>
          <p>
            The Sharda Highwall Coal Mine in Shahdol, Madhya Pradesh, is a pivotal mining operation that plays a crucial role in the region's energy supply. Utilizing highwall mining techniques, the mine efficiently extracts coal from deep and economically challenging seams, ensuring optimal resource use.
          </p>
          <p>
            This method allows for safe and productive mining operations that contribute significantly to the coal supply for various thermal power plants and industries across Madhya Pradesh, strengthening the state's energy infrastructure.
          </p>
          <p>
            The mine is noted for its strong commitment to safety and environmental sustainability. It employs modern technologies to maintain high standards in coal extraction while prioritizing worker safety.
          </p>
          <p>
            The Sharda Highwall Mine also focuses on minimizing its environmental impact through responsible mining practices, such as land reclamation and waste management, which help preserve the local ecosystem.
          </p>
          <p>
            Economically, the mine is a cornerstone of the Shahdol district, providing substantial employment opportunities and fostering socio-economic development in the area. It not only supports the local community but also plays a vital role in ensuring the stability and growth of the region's energy sector.
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
        <td>SHARDA HIGHWALL</td>
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
        <td>OC</td>
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
