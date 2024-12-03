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
            Nigahi Coal Mine, Singrauli, Madhya Pradesh
          </h3>
          <p>
            Nigahi Coal Mine is a major open-cast coal mining operation located in the Singrauli district of Madhya Pradesh, India. It is part of the Singrauli Coalfield, which is one of the most significant coal-producing regions in India.
          </p>
          <p>
            Nigahi Coal Mine primarily uses open-cast mining techniques to extract coal from surface deposits. This method involves removing overburden to access and mine coal seams near the surface. The mine is equipped with advanced mining machinery, including draglines, shovels, and haul trucks, which facilitate efficient and large-scale coal extraction. The open-cast approach allows for high productivity and cost-effectiveness, making Nigahi a key contributor to India's energy sector.
          </p>
          <p>
            Environmental management is a key focus at Nigahi Coal Mine. The operation implements several measures to minimize its ecological impact, including dust control systems, water management practices, and waste handling protocols. Additionally, the mine is involved in land reclamation efforts, aiming to restore mined-out areas to a usable condition or repurpose them for other uses, which aligns with sustainable mining practices.
          </p>
          <p>
            The Nigahi Coal Mine also has a significant socio-economic impact on the local community. It provides employment opportunities for local residents and supports regional development through various corporate social responsibility initiatives. These initiatives often include infrastructure development, healthcare services, and educational support, which contribute to the overall well-being of the local population.
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
        <td>NIGAHI</td>
      </tr>
      <tr>
        <td><strong>State:</strong></td>
        <td>Madhya Pradesh</td>
      </tr>
      <tr>
        <td><strong>District:</strong></td>
        <td>Singrauli</td>
      </tr>
      <tr>
        <td><strong>Mine Type:</strong></td>
        <td>OC</td>
      </tr>
      <tr>
        <td><strong>Owner:</strong></td>
        <td>NCL</td>
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
