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
            Shyamsunorpur Coal Mine, Paschim Bardhaman, West Bengal
          </h3>
          <p>
            The Shyamsunorpur Coal Mine, located in Paschim Bardhaman, West Bengal, is a key player in the region's coal production, situated in a coal-rich belt known for its high-quality reserves. The mine utilizes advanced mining techniques to ensure efficient and safe coal extraction, playing a vital role in supplying coal to local thermal power plants and supporting West Bengal’s energy infrastructure.
          </p>
          <p>
            Economically, the mine provides significant employment opportunities, boosting the local economy and supporting ancillary industries.
          </p>
          <p>
            The Shyamsunorpur Coal Mine also emphasizes environmental responsibility, incorporating sustainable practices like land reclamation and waste management to minimize its ecological impact.
          </p>
          <p>
            Overall, this mine is essential for meeting the region’s energy needs and contributing to economic growth while maintaining a commitment to environmental stewardship.
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
        <td>SHYAMSUNOERPUR</td>
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
        <td>UG</td>
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
