import React, { useState } from 'react';
import { Bar, Scatter } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin
import CountUp from 'react-countup'; // Import the CountUp component
import './GapAnalysis.css';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, ChartDataLabels);

// Full data for the mines
const minesData = [
   { mine_name: 'All', sinkarea: 21420, sinkoffset: 299880, gap: 5748027912 },
   { mine_name: 'A SHYAMSUNOERPURA', mine_type: 'UG', sinkarea: 600, sinkoffset: 8400, gap: 33658392, total_emission:33666792 },
   { mine_name: 'ALP', mine_type: 'UG', sinkarea: 750, sinkoffset: 10500, gap: 78034365, total_emission:78044865.8912 },
   { mine_name: 'AMALGAMATED KESHALPUR\nWEST MUDIDIH COLLIERY\n(AKWMC)', mine_type: 'Mixed', sinkarea: 700, sinkoffset: 9800, gap: 114424362, total_emission:114434162 },
   { mine_name: 'BANGWARA', mine_type: 'UG', sinkarea: 850, sinkoffset: 11900, gap: 28154550, total_emission:28166450 },
   { mine_name: 'BANSRA', mine_type: 'Mixed', sinkarea: 850, sinkoffset: 11900, gap: 11924914, total_emission:11936814 },
   { mine_name: 'BHANORA W/B (UG & OC)', mine_type: 'Mixed', sinkarea: 800, sinkoffset: 11200, gap: 7881152, total_emission:7892352 },
   { mine_name: 'BHUBANESWARI', mine_type: 'OC', sinkarea: 700, sinkoffset: 9800, gap: 530343800, total_emission:530353600 },
   { mine_name: 'CHORA BLOCK INCLINE,\nSHANKARPUR OC &\nBONBAHAL OC', mine_type: 'Mixed', sinkarea: 450, sinkoffset: 6300, gap: 12127554, total_emission:12133854 },
   { mine_name: 'CHURCHA RO', mine_type: 'UG', sinkarea: 850, sinkoffset: 11900, gap: 60293143, total_emission:60305043 },
   { mine_name: 'DIPKA', mine_type: 'OC', sinkarea: 950, sinkoffset: 13300, gap: 474644808, total_emission:474658108 },
   { mine_name: 'DUDHICHUA', mine_type: 'OC', sinkarea: 900, sinkoffset: 12600, gap: 430433520, total_emission:430446120 },
   { mine_name: 'GDK 11 INC', mine_type: 'UG', sinkarea: 300, sinkoffset: 4200, gap: 30490770, total_emission: 30494970.7033},
   { mine_name: 'GEVRA OC', mine_type: 'OC', sinkarea: 1900, sinkoffset: 26600, gap: 970888900, total_emission: 970915500},
   { mine_name: 'HALDIBARI', mine_type: 'UG', sinkarea: 320, sinkoffset: 4480, gap: 30364100, total_emission:30368580 },
   { mine_name: 'JAYANT', mine_type: 'OC', sinkarea: 700, sinkoffset: 9800, gap: 423136945, total_emission:423146745 },
   { mine_name: 'Jhanjhara Project Colly', mine_type: 'UG', sinkarea: 700, sinkoffset: 9800, gap: 123357150, total_emission:123366950 },
   { mine_name: 'KHAIRAHA', mine_type: 'UG', sinkarea: 650, sinkoffset: 9100, gap: 35486814, total_emission: 35495914},
   { mine_name: 'KUSMUNDA', mine_type: 'OC', sinkarea: 1100, sinkoffset: 15400, gap: 911374898, total_emission:911390298 },
   { mine_name: 'KUYA /KOCP', mine_type: 'Mixed', sinkarea: 1300, sinkoffset: 18200, gap: 23045800, total_emission:23064000 },
   { mine_name: 'LAKHANPUR', mine_type: 'OC', sinkarea: 650, sinkoffset: 9100, gap: 396804800, total_emission:396813900 },
   { mine_name: 'Mohar & Moher-Amlori Extension Coal Mine', mine_type: 'OC', sinkarea: 850, sinkoffset: 11900, gap: 404282918, total_emission:404294818.8 },
   { mine_name: 'NEW AKASH KINAREE COLLY\n(NAKC)', mine_type: 'Mixed', sinkarea: 900, sinkoffset: 12600, gap: 19555200, total_emission:19567800 },
   { mine_name: 'NEW GODHUR. KUSUNDA\nCOLLIERY', mine_type: 'Mixed', sinkarea: 750, sinkoffset: 10500, gap: 15566745, total_emission:15577245 },
   { mine_name: 'NIGAHI', mine_type: 'OC', sinkarea: 700, sinkoffset: 9800, gap: 476050708, total_emission:476060508 },
   { mine_name: 'PHULARITAND', mine_type: 'Mixed', sinkarea: 800, sinkoffset: 11200, gap: 58419232, total_emission:58430432 },
   { mine_name: 'SHARDA HIGHWALL', mine_type: 'UG', sinkarea: 800, sinkoffset: 11200, gap: 36274364, total_emission:36285564 },
   { mine_name: 'TETULMARI', mine_type: 'Mixed', sinkarea: 600, sinkoffset: 8400, gap: 11008008, total_emission:11016408 },
  ];

// GapAnalysis Component
const GapAnalysis = () => {
  const [selectedMine, setSelectedMine] = useState('All');

  // Find the selected mine details
  const selectedMineData = minesData.find((mine) => mine.mine_name === selectedMine);
  const filteredMinesData = minesData.filter((mine) => mine.mine_name !== 'All');

  const handleGoBack = () => {
    navigate('/');
  };
  const navigate = useNavigate();

  // Bar chart data for Total Annual Emission (2023)
  const data = {
    labels: ['Fuel Emission', 'Electricity Emission', 'Methane Emission'],
    datasets: [
      {
        label: 'Emissions in Million Tons',
        data: [5717.48, 44.37, 3760.86],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  // Configuration for the bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Annual Emission (2023)',
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#000',
        font: {
          weight: 'bold',
          size: 12,
        },
        formatter: (value) => `${value} MT`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Emissions (Million Tons)',
        },
      },
    },
  };

  // Sink Data for Bar chart
  const sinkData = {
    labels: filteredMinesData.map((mine) => mine.mine_name),
    datasets: [
      {
        label: 'Mixed',
        data: filteredMinesData.map((mine) => (mine.mine_type === 'Mixed' ? mine.sinkarea : 0)),
        backgroundColor: filteredMinesData.map((mine) =>
          mine.mine_name === selectedMine ? '#FFD700' : '#4BC0C0'
        ),
        barThickness: 'flex',
      },
      {
        label: 'OC',
        data: filteredMinesData.map((mine) => (mine.mine_type === 'OC' ? mine.sinkarea : 0)),
        backgroundColor: filteredMinesData.map((mine) =>
          mine.mine_name === selectedMine ? '#FFD700' : '#36A2EB'
        ),
        barThickness: 'flex',
      },
      {
        label: 'UG',
        data: filteredMinesData.map((mine) => (mine.mine_type === 'UG' ? mine.sinkarea : 0)),
        backgroundColor: filteredMinesData.map((mine) =>
          mine.mine_name === selectedMine ? '#FFD700' : '#FF6384'
        ),
        barThickness: 'flex',
      },
    ],
  };

  const sinkOptions = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Breakdown of Sink Types for Each Coal Mine' },
      datalabels: { display: false },
    },
    scales: {
      x: { title: { display: true, text: 'Sink Area (in hectares)' } },
      y: { title: { display: true, text: 'Mine Name' } },
    },
  };

  // Scatter plot data for Net Emissions
  const scatterData = {
    datasets: [
      {
        label: 'Mine Emissions',
        data: filteredMinesData.map((mine) => ({
          x: mine.sinkarea,
          y: mine.total_emission,
          label: mine.mine_name,
        })),
        backgroundColor: filteredMinesData.map((mine) =>
          mine.mine_name === selectedMine ? '#f50000' : '#36A2EB'
        ),
        pointRadius: filteredMinesData.map((mine) =>
          mine.mine_name === selectedMine ? 8 : 6
        ),
        pointHoverRadius: filteredMinesData.map((mine) =>
          mine.mine_name === selectedMine ? 10 : 8
        ),
      },
    ],
  };

  const scatterOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Sink Area vs Total Emission' },
      datalabels: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.raw.label || '';
            return `${label}: (${context.raw.x}ha, ${context.raw.y} tons)`;
          },
        },
      },
    },
    scales: {
      x: { title: { display: true, text: 'Sink Area (in hectares)' }, beginAtZero: true },
      y: { title: { display: true, text: 'Total Emission (tons)' }, beginAtZero: true },
    },
  };


  return (
    <div className="gap-analysis-container">
      <div className="back-button-container">
        <button className="back-button" onClick={handleGoBack}>
          <div className="circle">
            <span className="arrow left"></span>
          </div>
        </button>
      </div>
      {/* Current Carbon Footprint */}
      <section className="section">
        <h2>Current Carbon Footprint</h2>
        <div className="carbon-footprint">
          <div className="emissions-container">
            <div className="total-emissions">
              <h3>Total Carbon Emissions (2023)</h3>
              <p className="large-number">
                <CountUp start={0} end={5761.84} duration={2.5} separator="," decimals={2} />
              </p>
              <p>Million tons of CO2e</p>
            </div>

            <div className="methane-emissions">
              <h3>Total Methane Emissions (2023)</h3>
              <p className="large-number">
                <CountUp start={0} end={3760.86} duration={2.5} separator="," decimals={2} />
              </p>
              <p>Million tons of CH<sub>4</sub></p>
            </div>
          </div>

          <div className="breakdown-chart">
            <h3>Breakdown by Activity</h3>
            <Bar data={data} options={options} />
          </div>
        </div>
      </section>

      {/* Sink Analysis and Pathways to Neutrality */}
      <section className="section">
        <h2>Sink Analysis and Pathways to Neutrality</h2>

        {/* Dropdown to select coal mine */}
        <div className="mine-selection">
          <label htmlFor="mineSelect">Select Mine: </label>
          <select
            id="mineSelect"
            value={selectedMine}
            onChange={(e) => setSelectedMine(e.target.value)}
          >
            {minesData.map((mine) => (
              <option key={mine.mine_name} value={mine.mine_name}>
                {mine.mine_name}
              </option>
            ))}
          </select>
        </div>

        {/* Existing Carbon Sinks */}
        <div className="merged-subsection">
          <h3>Existing Carbon Sinks</h3>
          <div className="carbon-sinks">
            <div className="sink-area box">
              <h4>Sink Area</h4>
              <p className="large-number">
                <CountUp start={0} end={selectedMineData.sinkarea} duration={2.5} separator="," />
              </p>
              <p>hectares</p>
            </div>

            <div className="current-offsets box">
              <h4>Current Offsets</h4>
              <p className="large-number">
                <CountUp start={0} end={selectedMineData.sinkoffset} duration={2.5} separator="," />
              </p>
              <p>tons CO2e</p>
            </div>
          </div>

          <div className="offset-breakdown-chart">
            <h4>Breakdown by Type</h4>
            <Bar data={sinkData} options={sinkOptions} />
          </div>
        </div>

        {/* The Gap */}
        <div className="merged-subsection">
          <h3>The Gap</h3>
          <div className="net-emissions">
            <div className="net-emissions-value">
              <h4>Net Emissions</h4>
              <p className="large-number-red">
                <CountUp start={0} end={selectedMineData.gap} duration={2.5} separator="," />
              </p>
              <p>tons CO2e</p>
            </div>

            <div className="timeline-to-neutrality">
              <h4>Timeline to Neutrality</h4>
              <Scatter data={scatterData} options={scatterOptions} />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default GapAnalysis;
