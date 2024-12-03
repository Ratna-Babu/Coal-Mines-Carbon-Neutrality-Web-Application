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
            Lakhanpur Coal Mine, Jharsuguda, Odisha
          </h3>
          <p>
            Lakhanpur Coal Mine is a significant open-cast coal mining operation located in the Jharsuguda district of Odisha, India. It is part of the larger coal-producing region in eastern India, known for its rich coal deposits.
          </p>
          <p>
            Lakhanpur Coal Mine primarily employs open-cast mining techniques to extract coal from surface deposits. This method involves removing overburden to access and mine the coal seams beneath. The operation is equipped with modern mining machinery, including draglines, shovels, and haul trucks, which help in efficient and large-scale coal extraction. Open-cast mining at Lakhanpur allows for high productivity and is economically viable due to the proximity of coal deposits to the surface.
          </p>
          <p>
            Environmental management is a key component of operations at the Lakhanpur Coal Mine. The mine implements various measures to minimize its environmental impact, such as dust suppression systems, water management practices, and waste handling protocols. Additionally, the mine is involved in land reclamation efforts to restore mined-out areas, aiming to mitigate the ecological impact and repurpose the land for future use.
          </p>
          <p>
            The Lakhanpur Coal Mine also has a significant socio-economic impact on the local community. It provides employment opportunities for local residents and supports regional development through various corporate social responsibility initiatives. These initiatives often include infrastructure development, healthcare services, and educational support, contributing to the overall improvement of the local quality of life.
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
        <td>LAKHANPUR</td>
      </tr>
      <tr>
        <td><strong>State:</strong></td>
        <td>Orissa</td>
      </tr>
      <tr>
        <td><strong>District:</strong></td>
        <td>Jharsuguda</td>
      </tr>
      <tr>
        <td><strong>Mine Type:</strong></td>
        <td>OC</td>
      </tr>
      <tr>
        <td><strong>Owner:</strong></td>
        <td>MCL</td>
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
