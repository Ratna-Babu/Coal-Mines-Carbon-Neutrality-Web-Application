// src/CoalMines/CoalMine1.js

import React from 'react';
import './MineEmissionTemplate.css';

const CoalMine1 = () => {
  return (
    <div className="coalmine-template">
      <h1 className="coalmine-title">Emission of Coal Mine: Coal Mine 1</h1>
      
      <div className="summary-container">
        <div className="emission-values">
          <h2>Emission Details</h2>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fuel Emission</td>
                <td>Value</td>
              </tr>
              <tr>
                <td>Electricity</td>
                <td>Value</td>
              </tr>
              <tr>
                <td>Methane</td>
                <td>Value</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="chart-placeholder">
          <h2>Pie Chart of 2023</h2>
          {/* Placeholder for Pie Chart */}
        </div>
      </div>
      
      <div className="emission-prediction">
        <h2>Emission Prediction</h2>
        <div className="prediction-values">
          <div className="year">
            <p>2024</p>
            <p>Value</p>
          </div>
          <div className="year">
            <p>2025</p>
            <p>Value</p>
          </div>
          <div className="year">
            <p>2026</p>
            <p>Value</p>
          </div>
          <div className="year">
            <p>2027</p>
            <p>Value</p>
          </div>
        </div>
        <div className="bar-graph-placeholder">
          <h2>Bar Graph (2024 - 2030)</h2>
          {/* Placeholder for Bar Graph */}
        </div>
      </div>
      
      <div className="sink-analysis">
        <h2>Sink Analysis</h2>
        {/* Placeholder for Sink Analysis */}
      </div>
      
      <div className="reduction-strategies">
        <h2>Emission Reduction Strategies & Carbon Credit Estimation</h2>
        {/* Placeholder for Emission Reduction Strategies & Carbon Credit Estimation */}
      </div>
    </div>
  );
};

export default CoalMine1;
