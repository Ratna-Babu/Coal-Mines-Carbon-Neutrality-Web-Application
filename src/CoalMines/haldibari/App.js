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
            Haldibari Coal Mine, Korea, Chhattisgarh
          </h3>
          <p>
            The Haldibari Coal Mine, located in the Korea district of Chhattisgarh, is an important coal mining operation in the region. This mine is known for its substantial coal reserves, which play a vital role in supporting the energy needs of Chhattisgarh and neighboring states.
          </p>
          <p>
            The coal extracted from Haldibari is primarily used for fueling thermal power plants, making it a critical component of the region's energy infrastructure.
          </p>
          <p>
            The Haldibari Coal Mine employs modern mining techniques to ensure efficient and safe coal extraction. These methods are designed to optimize resource utilization while maintaining high safety standards for the workers involved.
          </p>
          <p>
            The mine also contributes significantly to the local economy, providing employment opportunities and supporting the socio-economic development of the Korea district.
          </p>
          <p>
            In addition to its economic and energy contributions, the Haldibari Coal Mine is committed to environmental responsibility. It implements sustainable mining practices, including land reclamation and effective waste management, to minimize its ecological impact.
          </p>
          <p>
            These efforts ensure that the mine operates in a manner that is both productive and environmentally sustainable, making it a valuable asset to the region.
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
        <td>HALDIBARI</td>
      </tr>
      <tr>
        <td><strong>State:</strong></td>
        <td>Chhattisgarh</td>
      </tr>
      <tr>
        <td><strong>District:</strong></td>
        <td>Korea</td>
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
