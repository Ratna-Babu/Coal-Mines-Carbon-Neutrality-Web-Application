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
            Kuya/Kocp Coal Mines, Jharkhand
          </h3>
          <p>
            Kuya/Kocp Coal Mines, located in Jharkhand, India, are a significant part of the region's coal mining landscape. These mines, also referred to collectively as Kuya/Kocp (Kuya Open Cast Project), are known for their substantial reserves of high-quality coal, which are vital for meeting the energy demands of various industrial sectors across India.
          </p>
          <p>
            The Kuya/Kocp mines primarily operate through open-cast mining methods, which are well-suited to the geological conditions of the area. This approach allows for the efficient extraction of coal from near-surface deposits, minimizing the need for extensive underground operations.
          </p>
          <p>
            The use of modern mining equipment and techniques ensures that the coal is extracted efficiently and safely, with a focus on maximizing productivity while minimizing environmental impact.
          </p>
          <p>
            Environmental management is a key aspect of operations at Kuya/Kocp. The mines implement a range of measures to mitigate the environmental impact of mining activities. This includes dust suppression systems, water management practices, and measures for land reclamation.
          </p>
          <p>
            The goal is to balance the need for coal production with the imperative of protecting the surrounding ecosystem. Reclamation efforts aim to restore mined areas to their natural state or repurpose them for alternative uses, contributing to sustainable mining practices.
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
        <td>KUYA / KOCP</td>
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
        <td>OC</td>
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
