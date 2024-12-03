import React from 'react';
import './App.css';  // Import the CSS file for styles
import image from './image.png'; // Update the image path if necessary

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
            Jhanjhara Project Colliery, Bilaspur, Chhattisgarh
          </h3>
          <p>
            Jhanjhara Project Colliery is a notable coal mining operation located in the Bilaspur district of Chhattisgarh, India. The project is part of the larger coal-rich region in eastern India, which plays a crucial role in the country's energy sector.
          </p>
          <p>
            <strong>Mining Methods:</strong> The Jhanjhara Project Colliery primarily employs open-cast mining methods to extract coal from surface deposits. This technique involves removing the overburden to access the coal seams underneath. The operation utilizes modern mining equipment, including draglines, shovels, and haul trucks, to ensure efficient and effective coal extraction. The open-cast method allows for large-scale production, which is essential for meeting energy demands.
          </p>
          <p>
            <strong>Environmental Management:</strong> Environmental management is an important focus for the Jhanjhara Project Colliery. The operation implements several measures to mitigate its environmental impact, such as dust suppression systems to control air pollution, water management practices to prevent contamination, and proper waste disposal. Additionally, the colliery engages in land reclamation efforts to restore mined-out areas, aiming to minimize ecological disruption and repurpose the land for future use.
          </p>
          <p>
            <strong>Socio-Economic Impact:</strong> The Jhanjhara Project Colliery also has a significant impact on the local community. It provides employment opportunities for residents and contributes to regional development through various corporate social responsibility initiatives. These initiatives may include infrastructure development, healthcare services, and educational support, which enhance the quality of life for local inhabitants.
          </p>
        </div>
        
        <div className="coal-mine-image">
          {/* Use the image in the section */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={image} alt="Coal Mine" className="image-placeholder" />
        </div>
      </header>
      <h2>Mine Details</h2>
<section className="table-section">
  <table>
    <tbody>
      <tr>
        <td><strong>Coal Mine Name:</strong></td>
        <td>Jhanjhara Project Colly</td>
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
