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
            GDK 11 Incline, Godavari Valley Coalfield, Telangana
          </h3>
          <p>
            GDK 11 Incline is a coal mining operation located in the Godavari Valley Coalfield in Telangana, India. It is part of the Singareni Collieries Company Limited (SCCL), a major public sector coal mining company in India.
          </p>
          <p>
            GDK 11 Incline primarily uses underground mining techniques to extract coal. This method involves creating tunnels or shafts to access coal seams that are too deep for open-cast mining. The incline mining technique involves sloping tunnels that provide access to the coal deposits. Modern equipment and technology, such as continuous miners and shuttle cars, are employed to ensure efficient and safe extraction of coal.
          </p>
          <p>
            Environmental management is a key aspect of operations at GDK 11 Incline. The mine implements measures to control dust, manage water resources, and handle waste appropriately. Efforts are also made to minimize the ecological impact of mining activities and to rehabilitate mined-out areas, aiming for sustainability and minimal disruption to the environment.
          </p>
          <p>
            The GDK 11 Incline also has an important socio-economic impact on the local community. It provides employment opportunities and contributes to regional development through various corporate social responsibility initiatives.
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
        <td>GDK 11 INC</td>
      </tr>
      <tr>
        <td><strong>State:</strong></td>
        <td>Telangana</td>
      </tr>
      <tr>
        <td><strong>District:</strong></td>
        <td>Peddapalli</td>
      </tr>
      <tr>
        <td><strong>Mine Type:</strong></td>
        <td>UG</td>
      </tr>
      <tr>
        <td><strong>Owner:</strong></td>
        <td>SCCL</td>
      </tr>
      <tr>
        <td><strong>Govt/Private:</strong></td>
        <td>SG</td>
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
