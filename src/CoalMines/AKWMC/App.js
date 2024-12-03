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
            Amalgamated Keshalpur West Mudidih Colliery (AKWMC), Jharkhand
          </h3>
          <p>
            Amalgamated Keshalpur West Mudidih Colliery (AKWMC) is a notable coal mining operation located in the rich coalfields of India. This colliery is a combination of two distinct mining areas, Keshalpur and West Mudidih, which have been amalgamated to enhance operational efficiency and optimize resource extraction.
          </p>
          <p>
            The merging of these two mines has allowed for a more streamlined approach to coal mining, reducing overhead costs while increasing the overall yield of coal. The area is known for its high-quality coal deposits, which are essential for various industrial applications, including power generation and steel production.
          </p>
          <p>
            The history of the AKWMC is rooted in the development of India's coal industry, which has been a backbone of the country's energy sector for decades. The colliery has seen numerous upgrades and technological advancements over the years, which have helped improve safety standards and increase production rates.
          </p>
          <p>
            These advancements have been critical in maintaining the colliery's reputation as a reliable source of coal. Additionally, the colliery plays a significant role in the local economy, providing employment opportunities and contributing to the region's socio-economic development.
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
              <td>AMALGAMATED KESHALPUR WEST MUDIDIH COLLIERY (AKWMC)</td>
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
