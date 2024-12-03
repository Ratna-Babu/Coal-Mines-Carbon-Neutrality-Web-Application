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
            Khairaha Coal Mine, Shahdol, Madhya Pradesh
          </h3>
          <p>
            The Khairaha Coal Mine, located in Shahdol, Madhya Pradesh, is an important coal mining operation contributing to the region's energy supply. Situated in a coal-rich area, the mine is known for its significant reserves of high-quality coal, which is essential for fueling thermal power plants and supporting industrial activities in Madhya Pradesh.
          </p>
          <p>
            The mine employs modern mining techniques to ensure the efficient extraction of coal, prioritizing both productivity and safety.
          </p>
          <p>
            The Khairaha Coal Mine plays a critical role in the local economy, providing substantial employment opportunities and aiding in the socio-economic development of the Shahdol district.
          </p>
          <p>
            Additionally, the mine is committed to environmental sustainability, implementing practices such as land reclamation and waste management to reduce its environmental impact.
          </p>
          <p>
            Overall, the Khairaha Coal Mine is a vital asset to the region, ensuring a steady supply of coal while supporting the local economy and prioritizing environmental responsibility.
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
        <td>KHAIRAHA</td>
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
