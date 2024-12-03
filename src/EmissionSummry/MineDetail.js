import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import emissionData from './emission_data.json'; // Import the JSON file
import { Line, Pie } from 'react-chartjs-2'; // Import Line and Pie charts from Chart.js
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import CountUp from 'react-countup'; // Import the CountUp component
import './MineDetail.css';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const factorMapping = {
  total_emission: 'total_emission',
  fuel_emission: 'fuel_emission',
  electricity_emission: 'electricity_emission',
  methane_emission: 'methane_emission(m3)', // Map the frontend name to the API-expected name

};





const MineDetail = () => {
  const { sno } = useParams();
  const [mineData, setMineData] = useState(null);
  const [predictions, setPredictions] = useState({});
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedYearRaa, setSelectedYearRaa] = useState(2024);
  const [selectedFactor, setSelectedFactor] = useState('total_emission');
  const [predictionError, setPredictionError] = useState(null);

  useEffect(() => {
    const foundMine = emissionData.find((mine) => mine.sno === parseInt(sno));
    setMineData(foundMine || {});
  }, [sno]);

  const fetchPrediction = async (year, factor_name, mine_name) => {
    try {
      const apiFactorName = factorMapping[factor_name] || factor_name;
      const response = await fetch(
        `http://localhost:5000/predict?year=${year}&factor_name=${apiFactorName}&mine_name=${mine_name}`
      );
      const data = await response.json();

      if (response.ok) {
        // Ensure the prediction is structured correctly
        setPredictions((prev) => ({
          ...prev,
          [year]: {
            ...prev[year],
            [factor_name]: data.prediction,
          },
        }));
      } else {
        setPredictionError(data.error);
      }
    } catch (error) {
      setPredictionError('Failed to fetch prediction. Please try again later.');
    }
  };

  useEffect(() => {
    if (mineData?.mine_name) {
      for (let year = 2024; year <= 2033; year++) {
        // Fetch predictions for all factors for each year
        Object.keys(factorMapping).forEach((factor) => {
          fetchPrediction(year, factor, mineData.mine_name);
        });
      }
    }
  }, [mineData]);

  if (!mineData) {
    return <div>Loading...</div>;
  }

  // Prepare data for the line chart
  const years = Array.from({ length: 10 }, (_, i) => 2024 + i);
  const selectedFactorPredictions = years.map(
    (year) => predictions[year]?.[selectedFactor] || 0
  );

  // Calculate dynamic min and max based on the prediction values
  const minY = Math.min(...selectedFactorPredictions);
  const maxY = Math.max(...selectedFactorPredictions);

  const lineData = {
    labels: years,
    datasets: [
      {
        label: `Prediction for ${selectedFactor}`,
        data: selectedFactorPredictions, // Fill data or 0 if no prediction
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for the pie chart
  const pieData = {
    labels: ['Fuel Emission', 'Electricity Emission', 'Methane Emission'],
    datasets: [
      {
        data: [
          Math.round(predictions[selectedYearRaa]?.fuel_emission || 0),
          Math.round(predictions[selectedYearRaa]?.electricity_emission || 0),
          Math.round(predictions[selectedYearRaa]?.methane_emission || 0),  
        ],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };
  const pie_Data = {
    labels: ['Fuel Emission', 'Electricity Emission', 'Methane Emission'],
    datasets: [
      {
        data: [
          Math.round(mineData.fuel_emission || 0),
          Math.round(mineData.electricity_emission || 0),
          Math.round(mineData.methane_emission || 0),  
        ],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };
 

  return (
    <div className="mine-detail-container">
        <h2>
          Emission of Coal Mine: <span className="mine-name">{mineData.mines_name || 'Unknown Mine'}</span>
        </h2>
       <h3>Emission Details of 2023</h3>
      <section className="emission-overview">
        <div className="emission-values">
          <div className="emission-value">
            <label><strong>Fuel Emission:</strong></label>
            <span>{mineData.fuel_emission ? `${mineData.fuel_emission} tons` : 'N/A'}</span>
          </div>
          <div className="emission-value">
            <label><strong>Electricity:</strong></label>
            <span>{mineData.electricity_emission ? `${mineData.electricity_emission} tons` : 'N/A'}</span>
          </div>
          <div className="emission-value">
            <label><strong>Methane:</strong></label>
            <span>{mineData.methane_emission ? `${mineData.methane_emission} tons` : 'N/A'}</span>
          </div>
        </div>
        <div className="pie-chart-container2">
        <Pie data={pie_Data} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'left',
                  labels: {
                      usePointStyle: true, // Optional: Use point style for better alignment
                      padding: 20, // Add padding for spacing
                      boxWidth: 10, // Adjust the width of the legend box
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      const total = context.dataset.data.reduce((acc, value) => acc + value, 0);
                      const value = context.raw;
                      const percentage = total ? Math.round((value / total) * 100) : 0;
                      return `${context.label}: ${value.toLocaleString()} tons (${percentage}%)`;
                    },
                  },
                },
                
              },
            }} />
            </div>
      </section>

      <section className="emission-prediction">
        <h2>Emission Prediction</h2>
        <div className="prediction-controls">
        <label>Select Year:</label>
<select
  value={selectedYear}
  onChange={(e) => setSelectedYear(parseInt(e.target.value))}
>
  <option value="">--Select Year--</option>
  {Array.from({ length: 10 }, (_, i) => 2024 + i).map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ))}
</select>

          <label>Select Factor:</label>
          <select value={selectedFactor} onChange={(e) => setSelectedFactor(e.target.value)}>
            <option value="total_emission">Total Emission</option>
            <option value="fuel_emission">Fuel Emission</option>
            <option value="electricity_emission">Electricity Emission</option>
            <option value="methane_emission">Methane Emission</option>
          </select>
        </div>

        {predictionError ? (
          <p className="error-message">{predictionError}</p>
        ) : (
          <div className="prediction-values">
            <div className="prediction-item">
              <label>Prediction for {selectedFactor} in {selectedYear}:</label>
              <span>{predictions[selectedYear]?.[selectedFactor] ? `${predictions[selectedYear][selectedFactor]} tons` : 'N/A'}</span>
            </div>
          </div>
        )}
      </section>

      <section className="bar-graph-container">
        <div className="bar-graph">
          <Line
            data={lineData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
                tooltip: {
                  enabled: true,
                  mode: 'index',
                  intersect: false,
                  callbacks: {
                    label: function (context) {
                      return `${context.label}: ${context.raw.toLocaleString()} tons`;
                    },
                  },
                },
                datalabels: {
                  display: false,
                },
              },
              interaction: {
                mode: 'nearest',
                intersect: false,
              },
              elements: {
                line: {
                  borderColor: 'blue',
                  borderWidth: 2,
                  tension: 0.4,
                },
                point: {
                  radius: 5,
                  backgroundColor: '#ff5722',
                  borderColor: '#fff',
                  borderWidth: 2,
                  hoverRadius: 8,
                  hoverBorderWidth: 3,
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Year',
                    font: {
                      size: 18,
                      weight: 'bold',
                      family: 'Arial, sans-serif',
                    },
                    color: 'green',
                  },
                  offset: true,
                  ticks: {
                    padding: 10,
                    font: {
                      size: 12,
                      weight: 'bold',
                      family: 'Arial, sans-serif',
                    },
                    color: '#000',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: `Emission (tons)`,
                    font: {
                      size: 18,
                      weight: 'bold',
                      family: 'Arial, sans-serif',
                    },
                    color: 'green',
                  },
                  min: Math.floor(minY * 0.8), // Dynamically set min based on data
                  max: Math.ceil(maxY * 1.2), // Dynamically set max based on data
                  ticks: {
                    callback: function (value) {
                      return value.toLocaleString(); // Format the number with commas
                    },
                    font: {
                      size: 12,
                      weight: 'bold',
                      family: 'Arial, sans-serif',
                    },
                    color: '#000',
                  },
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </section>

      <section>
        <h2>Factor Details in Pie Chart</h2>

        <div className="fact-content">
        <label>Select Year:</label>
<select
  value={selectedYearRaa}
  onChange={(e) => setSelectedYearRaa(parseInt(e.target.value))}
>
  <option value="">--Select Year--</option>
  {Array.from({ length: 10 }, (_, i) => 2024 + i).map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ))}
</select>
  
          <div className="pie-chart-container">
            <Pie data={pieData} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'left',
                  labels: {
                      usePointStyle: true, // Optional: Use point style for better alignment
                      padding: 20, // Add padding for spacing
                      boxWidth: 20, // Adjust the width of the legend box
                  }
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      const total = context.dataset.data.reduce((acc, value) => acc + value, 0);
                      const value = context.raw;
                      const percentage = total ? Math.round((value / total) * 100) : 0;
                      return `${context.label}: ${value.toLocaleString()} tons (${percentage}%)`;
                    },
                  },
                },
                
              },
            }} />
          </div>
        </div>
      </section>
      <br></br>
      <section className="sink-analysis">
        <h2>Sink Analysis</h2>
        <div className="sink-analysis-content">
            {/* Existing Carbon Sinks */}
        <div className="merged-subsection">
          <h3>Existing Carbon Sinks</h3>
          <div className="carbon-sinks">
            <div className="sink-area box">
              <h4>Sink Area</h4>
              <p className="large-number">
                <CountUp start={0} end={mineData.sink_area ? `${mineData.sink_area}` : 'N/A'} duration={2.5} separator="," />
              </p>
              <p>hectares</p>
            </div>

            <div className="current-offsets box">
              <h4>Current Offsets</h4>
              <p className="large-number">
                <CountUp start={0} end={mineData.sinkoffset ? `${mineData.sinkoffset}` : 'N/A'} duration={2.5} separator="," />
              </p>
              <p>tons CO2e</p>
            </div>
          </div>
        </div>


        </div>
      </section>

      <section className="emission-reduction">
      <h2>Emission Reduction Strategies</h2>

      
          <h3>Methane Capture System</h3>
            <p>
            <h4>For Underground Mines:</h4>
            <ul>
              <li>Ventilation Systems</li>
              <li>Degasification Systems</li>
              <li>Gob Gas Recovery</li>
              <li>Enhanced Coalbed Methane (ECBM)</li>
              <li>Directional Drilling</li>
            </ul>

            <h4>For Surface Mines:</h4>
            <ul>
              <li>Ventilation Systems</li>
              <li>Surface Sealing and Collection</li>
              <li>Enhanced Coalbed Methane (ECBM)</li>
              <li>Directional Drilling</li>
            </ul>

            <h4>For Mixed Mines:</h4>
            <ul>
              <li>Degasification Systems</li>
              <li>Enhanced Coalbed Methane (ECBM)</li>
              <br></br>
              For mixed mines, all the above techniques can be used separately for underground and opencast, but these two techniques can be effectively used for both types simultaneously.
              Carbon Credit Estimation and Reduction Strategies will be displayed here.
            </ul>
            </p>
    </section>
    </div>
  );
};

export default MineDetail;
