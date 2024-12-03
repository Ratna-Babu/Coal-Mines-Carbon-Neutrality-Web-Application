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
            Phularitand Coal Mines, Jharkhand
          </h3>
          <p>
            Phularitand Coal Mines, located in Jharkhand, India, are an important part of the region's coal mining industry. Jharkhand, with its rich coal reserves, is a key player in the country’s energy sector, and Phularitand contributes significantly to this legacy.
          </p>
          <p>
            The coal mines in Phularitand are known for their substantial deposits of high-quality coal, which plays a crucial role in meeting the energy demands of various industries, including power generation and steel production.
          </p>
          <p>
            The Phularitand coal mines have been developed with a focus on modern mining techniques and efficient resource management. The operations are characterized by a combination of open-cast and underground mining methods, which are employed based on the geological conditions of the area.
          </p>
          <p>
            This dual approach helps in optimizing coal extraction while ensuring safety and minimizing environmental impact. The mines are equipped with advanced machinery and technology to enhance productivity and reduce manual labor.
          </p>
          <p>
            Environmental management and sustainability are integral to the operations at Phularitand. The mining operations adhere to strict environmental regulations designed to minimize ecological disruption.
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
        <td>PHULARITAND</td>
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
    </div>
  );
};

export default App;
