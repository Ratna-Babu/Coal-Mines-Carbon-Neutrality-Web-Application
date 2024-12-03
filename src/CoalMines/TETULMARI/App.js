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
            Tetulmari Coal Mines, West Bengal
          </h3>
          <p>
            Tetulmari Coal Mines, located in West Bengal, India, are an important part of the region's coal mining industry. These mines contribute significantly to the local and national coal supply, supporting various industrial applications and energy needs.
          </p>
          <p>
            Tetulmari Coal Mines primarily use open-cast mining methods, which are well-suited to the coal deposits in this area. Open-cast mining involves removing surface layers to access coal seams near the surface. This method allows for efficient extraction and is often more cost-effective compared to underground mining. The operations at Tetulmari are supported by modern mining equipment and technology, which helps to enhance productivity and maintain safety standards.
          </p>
          <p>
            Environmental management is a key focus at Tetulmari Coal Mines. The mine implements several measures to minimize its ecological footprint, including dust suppression systems, water management practices, and proper waste disposal. Additionally, there are efforts to rehabilitate mined-out areas and restore them to their natural state or repurpose them for other uses, in line with sustainable mining practices.
          </p>
          <p>
            The Tetulmari Coal Mines also have a significant socio-economic impact on the local community. The mines provide employment opportunities for residents and contribute to regional economic development.
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
        <td>TETULMARI</td>
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
        <td>UG</td>
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
      <br></br><br></br>
    </div>
  );
};

export default App;
