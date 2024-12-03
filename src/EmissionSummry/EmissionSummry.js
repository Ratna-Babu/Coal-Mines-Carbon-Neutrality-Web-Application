import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import emissionData from './emission_data.json';
import './EmissionSummary.css';
import Dashboard from './dashboard';
import Dashboard1 from './dashboard1';


const EmissionSummary = () => {
  const [coalProduction, setCoalProduction] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState('');
  const [electricityConsumption, setElectricityConsumption] = useState('');
  const [selectedCoalMine, setSelectedCoalMine] = useState('');
  const [totalEmission, setTotalEmission] = useState('');
  const [perCapitaEmission, setPerCapitaEmission] = useState('');
  const [numEmployees, setNumEmployees] = useState(''); // For per capita calculation
  const [carbonCredits, setCarbonCredits] = useState('');
  const [afforestationArea, setAfforestationArea] = useState('');
  const [coalMines, setCoalMines] = useState(
    emissionData.map((mine) => ({
      ...mine,
      emissionData: '',
      isOpen: false,
    }))
  );
  const handleGoBack = () => {
    navigate('/');
  };

  const navigate = useNavigate();

  const calculateEmission = () => {
    const coalEmission = parseFloat(coalProduction) * 2.86;
    const fuelEmission = parseFloat(fuelConsumption) * 2.31;
    const electricityEmission = parseFloat(electricityConsumption) * 0.92;

    const total = coalEmission + fuelEmission + electricityEmission;
    setTotalEmission(total.toFixed(2));

    if (numEmployees) {
      const perCapita = total / parseInt(numEmployees);
      setPerCapitaEmission(perCapita.toFixed(2));
    }

    // Estimating Carbon Credits
    const estimatedCredits = total * 10; // Example rate (10 credits per ton of CO2)
    setCarbonCredits(estimatedCredits.toFixed(2));

    if (selectedCoalMine) {
      const updatedMines = coalMines.map((mine) =>
        mine.mine_name === selectedCoalMine ? { ...mine, emissionData: total.toFixed(2) } : mine
      );
      setCoalMines(updatedMines);
    }
  };

  const toggleDetails = (sno) => {
    setCoalMines(
      coalMines.map((mine) => (mine.sno === sno ? { ...mine, isOpen: !mine.isOpen } : mine))
    );
  };

  const handleNavigate = (sno) => {
    navigate(`/mine/${sno}`);
  };

  // Data for Pie chart
  const pieData = {
    labels: ['Coal Emission', 'Fuel Emission', 'Electricity Emission'],
    datasets: [
      {
        data: [
          parseFloat(coalProduction) * 2.86 || 0,
          parseFloat(fuelConsumption) * 2.31 || 0,
          parseFloat(electricityConsumption) * 0.92 || 0,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    
    <div className="container">
      <Dashboard />
      <Dashboard1 />

      <h2 className="header1">List of Mines</h2>
      <div className="coal-mines-list">
        {coalMines.map((mine) => (
          <div className="coal-mine-item" key={mine.sno}>
            <div className="coal-mine-header" onClick={() => toggleDetails(mine.sno)}>
              <strong>{mine.mine_name}</strong>
              <span className={`arrow ${mine.isOpen ? 'up' : 'down'}`}></span>
            </div>
            {mine.isOpen && (
              <div className="details-section">
                <div className="mine-description">
                  <p>Mine Name: {mine.mine_name}</p>
                  <p>State: {mine.state}</p>
                  <p>Type: {mine.mine_type}</p>
                  <p>Sink Area: {mine.sink_area} sq.m</p>
                  <button onClick={() => handleNavigate(mine.sno)}>View Details</button>
                </div>
                <div className="emission-details">
                  <h3>Emission Details (2023)</h3>
                  <p>Fuel Emission: {mine.fuel_emission.toFixed(2)} tons of CO2</p>
                  <p>Electricity Emission: {mine.electricity_emission.toFixed(2)} tons of CO2</p>
                  <p>Methane Emission: {mine.methane_emission.toFixed(2)} tons of CO2</p>
                  <p>Total Emission: {mine.total_emission.toFixed(2)} tons of CO2</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmissionSummary;
