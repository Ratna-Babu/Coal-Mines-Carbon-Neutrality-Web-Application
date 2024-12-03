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
            New Godhur Kusunda Colliery, Jharkhand
          </h3>
          <p>
            New Godhur Kusunda Colliery is an important coal mining operation situated in Jharkhand, India. The colliery is known for its substantial coal reserves and plays a significant role in the region’s mining industry, contributing to the country's energy supply.
          </p>
          <p>
            The New Godhur Kusunda Colliery operates using both open-cast and underground mining techniques, depending on the geological characteristics of the coal deposits. This flexibility allows the colliery to efficiently extract coal while adapting to varying conditions within the mining site.
          </p>
          <p>
            Modern equipment and technologies are employed to enhance productivity and ensure the safety of mining operations, which are crucial for maintaining operational efficiency and worker safety.
          </p>
          <p>
            Environmental management is a central concern at New Godhur Kusunda Colliery. The operation adheres to strict environmental regulations to minimize its ecological footprint. Measures include dust suppression systems, effective water management practices, and waste management strategies designed to mitigate the environmental impact of mining activities.
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
        <td>NEW GODHUR. KUSUNDA COLLIERY</td>
      </tr>
      <tr>
        <td><strong>State:</strong></td>
        <td>Jharkhand</td>
      </tr>
      <tr>
        <td><strong>District:</strong></td>
        <td>Dhanbad</td>
      </tr>
      <tr>
        <td><strong>Mine Type:</strong></td>
        <td>UG</td>
      </tr>
      <tr>
        <td><strong>Owner:</strong></td>
        <td>BCCL</td>
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
