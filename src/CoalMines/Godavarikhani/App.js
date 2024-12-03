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
            Godavarikhani-11A Incline Coal Mine, Peddapalli, Telangana
          </h3>
          <p>
            The Godavarikhani-11A Incline Coal Mine, located in the Peddapalli district of Telangana, is a significant underground coal mining operation within the Singareni Collieries Company Limited (SCCL) complex. This mine is notable for its rich coal deposits, which are crucial for powering various thermal power plants and industrial units in the region.
          </p>
          <p>
            The Godavarikhani-11A Incline uses advanced underground mining techniques to ensure efficient and safe coal extraction. These methods help maximize resource utilization while adhering to stringent safety standards for the workforce.
          </p>
          <p>
            The mine is an essential component of Telangana's energy infrastructure, providing a reliable supply of coal that supports the state's energy needs.
          </p>
          <p>
            Economically, the Godavarikhani-11A Incline Coal Mine is a major source of employment in the Peddapalli district, contributing significantly to the local economy.
          </p>
          <p>
            The mine also emphasizes sustainable mining practices, including land reclamation and environmental conservation efforts, to mitigate its environmental impact and ensure long-term ecological balance.
          </p>
          <p>
            This commitment to sustainability makes it a key asset not only for energy production but also for environmental stewardship in the region.
          </p>
        </div>
        
        <div className="coal-mine-image">
          {/* Use the image in the empty section */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={image} alt="Coal Mine" className="image-placeholder" />
        </div>
      </header>

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
