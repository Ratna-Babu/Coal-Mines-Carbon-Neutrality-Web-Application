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
            New Akash Kinaree Colliery (NAKC), Eastern India
          </h3>
          <p>
            New Akash Kinaree Colliery (NAKC) is a prominent coal mining operation located in the eastern part of India. The colliery is known for its contributions to the country’s energy sector, leveraging both open-cast and underground mining techniques to extract valuable coal resources.
          </p>
          <p>
            NAKC primarily utilizes open-cast mining methods, involving the removal of overburden to access coal deposits near the surface. This approach allows for efficient and large-scale coal extraction using advanced mining machinery, including draglines, shovels, and haul trucks. The operation is designed to meet high production demands while ensuring cost-effectiveness and operational efficiency.
          </p>
          <p>
            Environmental management is a key focus at NAKC. The colliery implements various measures to mitigate environmental impacts, such as dust control systems, water management practices, and proper waste disposal. Additionally, the colliery engages in land reclamation efforts to restore mined-out areas and minimize ecological disruption, aligning with sustainable mining practices.
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
        <td>NEW AKASH KINAREE COLLY (NAKC)</td>
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
        <td>Mixed</td>
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
