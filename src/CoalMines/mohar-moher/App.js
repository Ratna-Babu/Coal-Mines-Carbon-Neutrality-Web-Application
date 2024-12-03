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
            Mohar & Moher-Amlori Extension Coal Mine, Singrauli, Madhya Pradesh
          </h3>
          <p>
            Mohar & Moher-Amlori Extension Coal Mine is an important coal mining operation located in the Singrauli district of Madhya Pradesh, India. This combined mining project involves the extraction of coal from two adjacent areas, Mohar and Moher-Amlori Extension, which are part of the Singrauli Coalfield.
          </p>
          <p>
            <strong>Mohar Coal Mine:</strong> Mohar Coal Mine primarily utilizes open-cast mining methods to extract coal from surface deposits. This technique involves removing overburden to access the coal seams beneath. The operation is equipped with modern mining machinery, such as draglines, shovels, and haul trucks, which facilitate efficient and large-scale coal extraction. The open-cast method at Mohar allows for high productivity and is economically viable due to the proximity of coal deposits to the surface.
          </p>
          <p>
            <strong>Moher-Amlori Extension Coal Mine:</strong> Moher-Amlori Extension Coal Mine operates as an extension of the Moher and Amlori mines. This extension involves both open-cast and underground mining techniques, depending on the depth and geological conditions of the coal deposits. The extension project aims to tap into additional reserves and increase the overall production capacity. Like the Mohar mine, Moher-Amlori Extension employs advanced mining equipment and technologies to optimize coal extraction.
          </p>
          <p>
            <strong>Environmental Management:</strong> Environmental management is a significant focus for both the Mohar and Moher-Amlori Extension mines. The operations implement various measures to minimize their ecological impact, such as dust control systems, water management practices, and proper waste disposal. Additionally, both mines are involved in land reclamation and rehabilitation efforts, aiming to restore mined-out areas to a usable condition or repurpose them for other uses, in line with sustainable mining practices.
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
        <td>Mohar & Moher-Amlori Extension Coal Mine</td>
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
