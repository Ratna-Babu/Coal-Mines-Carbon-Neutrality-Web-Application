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
          {/* Updated Description */}
          <h3>
            Dipka Coal Mine, Korba, Chhattisgarh
          </h3>
          <p>
            Dipka Coal Mine is a major open-cast coal mining operation situated in the Korba district of Chhattisgarh, India. It is part of the Korba Coalfield, a significant coal-producing region known for its substantial reserves. The mine uses open-cast mining techniques, which involve removing overburden to access coal seams near the surface. Equipped with modern machinery such as draglines, shovels, and haul trucks, the Dipka Coal Mine enables efficient and large-scale coal extraction to meet high energy demands.
          </p>
          <p>
            Environmental management is a critical focus at the Dipka Coal Mine. The operation implements various measures to minimize its environmental impact, including dust suppression systems to control air pollution, water management practices to prevent contamination of local water sources, and proper waste disposal. The mine also engages in land reclamation and rehabilitation efforts to restore mined-out areas and mitigate ecological disruption, ensuring that the land can be repurposed or returned to a usable condition.
          </p>
          <p>
            The Dipka Coal Mine has a significant socio-economic impact on the local community. It provides numerous employment opportunities for residents and supports regional development through various corporate social responsibility initiatives.
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
        <td>DIPKA</td>
      </tr>
      <tr>
        <td><strong>State:</strong></td>
        <td>Chhattisgarh</td>
      </tr>
      <tr>
        <td><strong>District:</strong></td>
        <td>Korba</td>
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
