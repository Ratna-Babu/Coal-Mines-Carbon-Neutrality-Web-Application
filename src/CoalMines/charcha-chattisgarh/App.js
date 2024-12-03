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
            Churcha RO Coal Mine, Korea, Chhattisgarh
          </h3>
          <p>
            The Churcha RO Mine, located in the Korea district of Chhattisgarh, India, is an important coal mining operation known for its substantial reserves. It is a key contributor to the region's energy supply, providing coal to several thermal power plants and industries.
          </p>
          <p>
            The mine is operated with a focus on efficiency, using advanced mining technologies to ensure optimal extraction while prioritizing safety and environmental sustainability.
          </p>
          <p>
            The Churcha RO Mine is also a significant economic driver in the area, offering employment opportunities to the local population and supporting the socio-economic growth of the region.
          </p>
          <p>
            Efforts are made to mitigate the environmental impact of mining activities through responsible practices, such as land rehabilitation and waste management. The mine is integral to Chhattisgarh's energy infrastructure and plays a crucial role in sustaining the energy needs of the state and beyond.
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
        <td>CHURCHA RO</td>
      </tr>
      <tr>
        <td><strong>State:</strong></td>
        <td>Chhattisgarh</td>
      </tr>
      <tr>
        <td><strong>District:</strong></td>
        <td>Koriya</td>
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
