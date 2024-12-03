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
            Kusmunda Coal Mine, Korba, Chhattisgarh
          </h3>
          <p>
            Kusmunda Coal Mine is a major open-cast coal mining operation located in the Korba district of Chhattisgarh, India. It is part of the larger Korba Coalfield, which is one of the significant coal-producing regions in India.
          </p>
          <p>
            Kusmunda Coal Mine employs open-cast mining techniques to extract coal from surface deposits. This method involves removing overburden to access and extract coal seams close to the surface. The mine utilizes advanced machinery and technology, such as draglines, shovels, and haul trucks, to ensure efficient and safe operations. The open-cast method allows for the extraction of large quantities of coal, supporting the high demand for energy in India.
          </p>
          <p>
            Environmental management is a key focus at Kusmunda Coal Mine. The operation implements various measures to minimize its ecological impact. This includes dust suppression systems, effective water management practices, and proper waste handling. Additionally, there are ongoing efforts to rehabilitate and reclaim mined-out areas, with the goal of restoring the land to a usable condition or repurposing it for other uses.
          </p>
          <p>
            The Kusmunda Coal Mine has a significant socio-economic impact on the region. It provides employment opportunities for local residents and contributes to regional development through infrastructure projects and community support initiatives. Corporate social responsibility efforts at the mine may include health care services, educational programs, and other initiatives aimed at improving the quality of life for the local community.
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
        <td>KUSMUNDA</td>
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
      <br></br><br></br>
    </div>
  );
};

export default App;
