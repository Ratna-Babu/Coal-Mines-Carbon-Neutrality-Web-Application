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
            Bhanora Coal Mine (W/B), West Bengal
          </h3>
          <p>
            Bhanora Coal Mine (W/B), located in West Bengal, India, is a significant coal mining operation known for its comprehensive approach to resource extraction. This mine utilizes both underground (UG) and open-cast (OC) mining methods, reflecting its adaptability to the geological conditions of the area.
          </p>
          <p>
            Bhanora Underground Mining (UG) involves extracting coal from deeper deposits using underground tunnels and shafts. This method is suited for accessing coal seams that are not feasible for open-cast mining. The underground operations at Bhanora employ advanced mining techniques and equipment to ensure safety, efficiency, and productivity. This includes sophisticated ventilation systems, rock support mechanisms, and conveyor systems for transporting coal to the surface.
          </p>
          <p>
            Bhanora Open-Cast Mining (OC), on the other hand, focuses on extracting coal from near-surface deposits. Open-cast mining involves removing the overburden to access coal seams, making it a cost-effective method for extracting large quantities of coal. The OC operations at Bhanora are characterized by the use of modern mining equipment and technology to enhance operational efficiency and safety. The open-cast operations are managed to minimize environmental impact through measures such as dust suppression, water management, and proper waste handling.
          </p>
        </div>
        
        <div className="coal-mine-image">
          {/* Use the image in the empty section */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={image} alt="Coal Mine" className="image-placeholder" />
        </div>
      </header>
      <h2>Mine Details</h2>
      {/* Section for Coal Mine Details Table */}
      <section className="table-section">
        <table>
          <tbody>
            <tr>
              <td><strong>Coal Mine Name:</strong></td>
              <td>BHANORA W/B (UG & OC)</td>
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
