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
            Gevra Open-Cast (OC) Mine, Chhattisgarh
          </h3>
          <p>
            Gevra Open-Cast (OC) Mine is a major coal mining operation located in Chhattisgarh, India. Although not in West Bengal, it is one of the largest open-cast coal mines in the country and plays a significant role in India's coal industry.
          </p>
          <p>
            Gevra OC Mine utilizes open-cast mining techniques to extract coal from large surface deposits. This method involves removing the overburden—earth and rock covering the coal seams—to access the coal underneath. The open-cast approach allows for the efficient extraction of vast quantities of coal, making it a key component in meeting India's energy needs. The mine is equipped with state-of-the-art mining machinery and technologies, which help optimize production while maintaining safety standards.
          </p>
          <p>
            Environmental management is a major focus at the Gevra OC Mine. The operation incorporates several measures to minimize its environmental impact, such as dust control systems, water management practices, and waste handling procedures. Additionally, efforts are made to rehabilitate and reclaim mined-out areas, ensuring that the land can be restored to a usable condition or repurposed after mining activities have ceased.
          </p>
          <p>
            The Gevra OC Mine also significantly impacts the local economy. It provides numerous employment opportunities and supports regional development through various corporate social responsibility initiatives.
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
        <td>GEVRA OC</td>
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
