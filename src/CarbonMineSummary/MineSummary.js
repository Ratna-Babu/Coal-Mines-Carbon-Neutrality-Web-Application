import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale,  PointElement, LineElement, Title, Tooltip, Legend,ArcElement } from 'chart.js';
import './MineSummary.css';
import coalData from './coal_production_data.json';
import emissionData from './emission_data.json';



// Register the necessary chart components
ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, 
  Title, Tooltip, Legend, ArcElement   
 
);

function MineSummary() {
  const navigate = useNavigate();
  const [expandedMine, setExpandedMine] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the back button navigation
  const handleGoBack = () => {
    navigate('/');
  };

  // Function to toggle mine details
  const toggleMineDetails = (mineIndex) => {
    setExpandedMine(expandedMine === mineIndex ? null : mineIndex);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle redirection when clicking the "Some Action" button
  const handleActionClick = (mineName) => {
    switch (mineName) {
      case 'ALP Coal Mine, Mancherial, Telangana':
        navigate('../CoalMines/ALP');
        break;
      case 'Amalgamated Keshalpur West Mudidih Colliery (AKWMC), Jharkhand':
        navigate('../CoalMines/AKWMC');
        break;

      case 'Bangwar Coal Mine, Shahdol, Madhya Pradesh':
        navigate('../CoalMines/Bangwar');
        break;

      case 'Bansra Coal Mine, West Bengal':
        navigate('../CoalMines/BANSRA');
        break;
      
      case 'Bhanora Coal Mine (W/B), West Bengal':
        navigate('../CoalMines/BHANORA-WB');
        break;

      case 'Bhubaneswari Coal Mine, Talcher, Odisha':
        navigate('../CoalMines/BHUBANESWARI');
        break;
      
      case 'CHURCHA RO Coal Mine, Korea, Chhattisgarh':
        navigate('../CoalMines/charcha-chattisgarh');
        break;
      
      case 'Chora Block Incline, Shankarpur OC, and Bonbahal OC, West Bengal':
        navigate('../CoalMines/CHORA-BLOCK');
        break;
      
      case 'Dipka Coal Mine, Korba, Chhattisgarh':
        navigate('../CoalMines/DIPKA');
        break;

      case 'Dudhichua Coal Mine, Singrauli, Madhya Pradesh':
        navigate('../CoalMines/Dudhichua');
        break;

      case 'Gevra Open-Cast (OC) Mine, Chhattisgarh':
        navigate('../CoalMines/Gevra-Open-Cast');
        break;

      case 'Godavarikhani-11A Incline Coal Mine, Peddapalli, Telangana':
        navigate('../CoalMines/Godavarikhani');
        break;

      case 'Haldibari Coal Mine, Korea, Chhattisgarh':
        navigate('../CoalMines/haldibari');
        break;

      case 'Jayant Coal Mine, Singrauli, Madhya Pradesh':
        navigate('../CoalMines/Jayant');
        break;

      case 'Jhanjhara Project Colliery, Bilaspur, Chhattisgarh':
        navigate('../CoalMines/Jhanjhara');
        break;

      case 'Khairaha Coal Mine, Shahdol, Madhya Pradesh':
        navigate('../CoalMines/Khairaha');
        break;

      case 'Kusmunda Coal Mine, Korba, Chhattisgarh':
        navigate('../CoalMines/KUSMUNDA');
        break;

      case 'Kuya/Kocp Coal Mines, Jharkhand':
        navigate('../CoalMines/KuyaKocp');
        break;

      case 'Lakhanpur Coal Mine, Jharsuguda, Odisha':
        navigate('../CoalMines/Lakhanpur');
        break;

      case 'Mohar & Moher-Amlori Extension Coal Mine, Singrauli, Madhya Pradesh':
        navigate('../CoalMines/mohar-moher');
        break;
    
      case 'New Godhur Kusunda Colliery, Jharkhand':
        navigate('../CoalMines/GODHUR-KUSUNDA');
        break;

      case 'Nigahi Coal Mine, Singrauli, Madhya Pradesh':
        navigate('../CoalMines/Nigahi');
        break;

      case 'Phularitand Coal Mines, Jharkhand':
        navigate('../CoalMines/PHULARITAND');
        break;

      case 'SHARDA HIGHWALL Coal Mine, Shahdol, Madhya Pradesh':
        navigate('../CoalMines/SHARDA-HIGHWALL');
        break;

      case 'Shyamsunorpur Coal Mine, Paschim Bardhaman, West Bengal':
        navigate('../CoalMines/Shyamsunorpur');
        break;

      case 'Tetulmari Coal Mines, West Bengal':
        navigate('../CoalMines/TETULMARI');
        break;

      case 'New Akash Kinaree Colliery (NAKC), Eastern India':
        navigate('../CoalMines/NEW-AKASH');
        break;

      case 'GDK 11 Incline, Godavari Valley Coalfield, Telangana':
        navigate('../CoalMines/GDK');
        break;

        // Add more cases here for different mine names and their corresponding routes
      
      default:
        console.log('No route defined for this mine');
    }
  };

  // Data for Line Chart
  const lineChartData = {
    labels: coalData.map(data => data.year),
    datasets: [
      {
        label: 'Coal Production (in tons)',
        data: coalData.map(data => data.production),
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  // Options for Line Chart
  const lineChartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Yearly Coal Production'
      },
      datalabels: {
        display: false, // Disable static labels
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Production: ${context.raw} tons`;
          }
        }
      },
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Production (in tons)'
        }
      }
    }
  };

  

  

  // List of mines with actual mine names
  const mines = [
    { id: 1, name: 'ALP Coal Mine, Mancherial, Telangana',state:"Telangana ",
        district:"Mancherial",
        owner:"SCCL",
        mine_type:"UG",
        sink_area:750 },
    { id: 2, name: 'Amalgamated Keshalpur West Mudidih Colliery (AKWMC), Jharkhand' ,state:"Jharkhand ",
        district:"Dhanbad ",
        owner:"BCCL",
        mine_type:"Mixed",
        sink_area:700},
    { id: 3, name: 'Bangwar Coal Mine, Shahdol, Madhya Pradesh',state:"Madhya Pradesh",
        district:"Shahdol",
        owner:"SECL",
        mine_type:"UG",
        sink_area:850 },
    { id: 4, name: 'Bansra Coal Mine, West Bengal',state:"West Bengal",
        district:"Paschim Bardhaman",
        owner:"ECL",
        mine_type:"Mixed",
        sink_area:850 },
    { id: 5, name: 'Bhanora Coal Mine (W/B), West Bengal',state:"West Bengal",
        district:"Paschim Bardhaman",
        owner:"ECL",
        mine_type:"Mixed",
        sink_area:800 },
    { id: 6, name: 'Bhubaneswari Coal Mine, Talcher, Odisha', state:"Orissa",
      district:"Angul ",
      owner:"MCL",
      mine_type:"OC",
      sink_area:700 },
    { id: 7, name: 'CHURCHA RO Coal Mine, Korea, Chhattisgarh',state:"Chhattisgarh",
        district:"Korea",
        owner:"SECL",
        mine_type:"UG",
        sink_area:850 },
    { id: 8, name: 'Chora Block Incline, Shankarpur OC, and Bonbahal OC, West Bengal', state:"West Bengal",
      district:"Paschim Bardhaman",
      owner:"ECL",
      mine_type:"Mixed",
      sink_area:450 },
    { id: 9, name: 'Dipka Coal Mine, Korba, Chhattisgarh', state:"Chhattisgarh",
      district:"Korba",
      owner:"SECL",
      mine_type:"OC",
      sink_area:950 },
    { id: 10, name: 'Dudhichua Coal Mine, Singrauli, Madhya Pradesh' , state:"Uttar Pradesh",
      district:" Sonbhadra",
      owner:"NCL",
      mine_type:"OC",
      sink_area:900},
    { id: 11, name: 'Gevra Open-Cast (OC) Mine, Chhattisgarh',state:"Chhattisgarh",
        district:"Korba",
        owner:"SECL",
        mine_type:"OC",
        sink_area:1900 },
    
    { id: 13, name: 'Haldibari Coal Mine, Korea, Chhattisgarh',state:"Chhattisgarh",
        district:"Korea",
        owner:"SECL",
        mine_type:"UG",
        sink_area:320 },
    { id: 14, name: 'Jayant Coal Mine, Singrauli, Madhya Pradesh',state:"Madhya Pradesh",
        district:"Singrauli",
        owner:"NCL",
        mine_type:"OC",
        sink_area:700 },
    { id: 15, name: 'Jhanjhara Project Colliery, Bilaspur, Chhattisgarh',state:"West Bengal",
        district:"Paschim Bardhaman",
        owner:"ECL",
        mine_type:"UG",
        sink_area:700 },
    { id: 16, name: 'Khairaha Coal Mine, Shahdol, Madhya Pradesh',state:"Madhya Pradesh",
        district:"Shahdol",
        owner:"SECL",
        mine_type:"UG",
        sink_area:650 },
    { id: 17, name: 'Kusmunda Coal Mine, Korba, Chhattisgarh', state:"Chhattisgarh",
      district:"Korba",
      owner:"SECL",
      mine_type:"OC",
      sink_area:1100 },
    { id: 18, name: 'Kuya/Kocp Coal Mines, Jharkhand',state:"Jharkhand ",
        district:"Dhanbad ",
        owner:"BCCL",
        mine_type:"Mixed",
        sink_area:1300 },
    { id: 19, name: 'Lakhanpur Coal Mine, Jharsuguda, Odisha',state:"Orissa",
        district:"Jharsuguda",
        owner:"MCL",
        mine_type:"OC",
        sink_area:650 },
    { id: 20, name: 'Mohar & Moher-Amlori Extension Coal Mine, Singrauli, Madhya Pradesh',state:"Madhya Pradesh",
        district:"Singrauli",
        owner:"Sasan Power (Reliance Power Limited)",
        mine_type:"OC",
        sink_area:850 },
    { id: 21, name: 'New Godhur Kusunda Colliery, Jharkhand', state:"Jharkhand ",
      district:"Dhanbad ",
      owner:"BCCL",
      mine_type:"Mixed",
      sink_area:750 },
    { id: 22, name: 'Nigahi Coal Mine, Singrauli, Madhya Pradesh' ,state:"Madhya Pradesh",
        district:"Singrauli",
        owner:"NCL",
        mine_type:"OC",
        sink_area:700},
    { id: 23, name: 'Phularitand Coal Mines, Jharkhand',state:"Jharkhand ",
        district:"Dhanbad ",
        owner:"BCCL",
        mine_type:"Mixed",
        sink_area:800 },
    { id: 24, name: 'SHARDA HIGHWALL Coal Mine, Shahdol, Madhya Pradesh' , state:"Madhya Pradesh",
      district:"Shahdol",
      owner:"SECL",
      mine_type:"UG",
      sink_area:800},
    { id: 25, name: 'Shyamsunorpur Coal Mine, Paschim Bardhaman, West Bengal',state:"West Bengal",
        district:"Paschim Bardhaman",
        owner:"ECL",
        mine_type:"UG",
        sink_area:600 },
    { id: 26, name: 'Tetulmari Coal Mines, West Bengal',"mine_name":"TETULMARI",
        state:"Jharkhand ",
        district:"Dhanbad ",
        owner:"BCCL",
        mine_type:"Mixed",
        sink_area:600 },
    { id: 27, name: 'New Akash Kinaree Colliery (NAKC), Eastern India',state:"Jharkhand ",
        district:"Dhanbad ",
        owner:"BCCL",
        mine_type:"Mixed",
        sink_area:900 }
    

    // Add more actual mine names here
  ];

  // Filtering mines based on search query
  const filteredMines = mines.filter((mine) =>
    mine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Preprocess data for pie charts (moved outside useEffect)
  const mineTypes = [...new Set(emissionData.map(item => item.mine_type))]; 

  const carbonEmissionData = mineTypes.map(type => {
    const totalEmission = emissionData
      .filter(item => item.mine_type === type)
      .reduce((sum, item) => sum + item.total_emission, 0);
    return { label: type, value: totalEmission };
  });

  const methaneEmissionData = mineTypes.map(type => {
    const totalEmission = emissionData
      .filter(item => item.mine_type === type)
      .reduce((sum, item) => sum + item.methane_emission, 0);
    return { label: type, value: totalEmission };
  });

  // State to hold pie chart data
  const [carbonEmissionPieData] = useState({
    labels: carbonEmissionData.map(item => item.label),
    datasets: [{
      data: carbonEmissionData.map(item => item.value),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Example colors
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  });

  const [methaneEmissionPieData] = useState({
    labels: methaneEmissionData.map(item => item.label),
    datasets: [{
      data: methaneEmissionData.map(item => item.value),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Example colors
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  });
  // Calculate total coal production
const totalCoalProduction = emissionData.reduce((sum, item) => sum + item.coal_extracted, 0);

// Preprocess data for coal production percentage pie chart

const coalProductionPercentageData = mineTypes.map(type => {
  const totalProductionForType = emissionData
    .filter(item => item.mine_type === type)
    .reduce((sum, item) => sum + item.coal_extracted, 0);
  const percentage = ((totalProductionForType / totalCoalProduction) * 100).toFixed(2); 
  return { label: type, value: percentage };
});

// State to hold the pie chart data
const [coalProductionPieData] = useState({
  labels: coalProductionPercentageData.map(item => item.label),
  datasets: [{
    data: coalProductionPercentageData.map(item => item.value),
    backgroundColor: [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
      '#FF9F40', '#C9CBCF', '#F7464A', '#46BFBD', '#FDB45C'
      // Add more colors as needed
    ],
    hoverBackgroundColor: [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
      '#FF9F40', '#C9CBCF', '#F7464A', '#46BFBD', '#FDB45C'
    ]
  }]
});
const totalCoalEmission = emissionData.reduce((sum, item) => sum + item.total_emission, 0);
// Extract unique states
const states = [...new Set(emissionData.map(item => item.state))];

// Preprocess data for coal emission by state pie chart
const coalEmissionByStateData = states.map(state => {
  const totalEmissionForState = emissionData
    .filter(item => item.state === state)
    .reduce((sum, item) => sum + item.total_emission, 0);
  const percentage = ((totalEmissionForState / totalCoalEmission) * 100).toFixed(2);
  return { label: state, value: percentage };
});

// State to hold the new pie chart data
const [coalEmissionByStatePieData] = useState({
  labels: coalEmissionByStateData.map(item => item.label),
  datasets: [{
    data: coalEmissionByStateData.map(item => item.value),
    backgroundColor: [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
      '#FF9F40', '#C9CBCF', '#F7464A', '#46BFBD', '#FDB45C'
      // Add more colors as needed
    ],
    hoverBackgroundColor: [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
      '#FF9F40', '#C9CBCF', '#F7464A', '#46BFBD', '#FDB45C'
    ]
  }]
});


const coalProductionByStateData = states.map(state => {
  const totalProductionForState = emissionData
    .filter(item => item.state === state)
    .reduce((sum, item) => sum + item.coal_extracted, 0);
  const percentage = ((totalProductionForState / totalCoalProduction) * 100).toFixed(2); 
  return { label: state, value: percentage };
});

// State to hold the new pie chart data
const [coalProductionByStatePieData] = useState({
  labels: coalProductionByStateData.map(item => item.label),
  datasets: [{
    data: coalProductionByStateData.map(item => item.value),
    backgroundColor: [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
      '#FF9F40', '#C9CBCF', '#F7464A', '#46BFBD', '#FDB45C'
      // Add more colors as needed
    ],
    hoverBackgroundColor: [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
      '#FF9F40', '#C9CBCF', '#F7464A', '#46BFBD', '#FDB45C'
    ]
  }]
});
  



  return (
    <div className="mine-summary-container">
      {/* Title */}
      <div className="header-container">
        <h1 className="title">Mines Summary</h1>
      </div>

      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={handleGoBack}>
          <div className="circle">
            <span className="arrow left"></span>
          </div>
        </button>
      </div>
       {/* Box 1 - Line Chart */}
      <div className="box box1">
          <Line data={lineChartData} options={lineChartOptions} />
      </div>

      {/* Three Boxes Layout */}
    
    <div className="boxes-container">
      <h3 className="heading1">Analysis by Mine Type</h3>
  
       <div className="boxes-row">
    {/* Box 2 - Total Carbon Emission Pie Chart */}
        <div className="box box2">
          <h5>Total Carbon Emission by Mine Type</h5>
          {carbonEmissionPieData && <Pie data={carbonEmissionPieData} />}
        </div>

        {/* Box 3 - Total Methane Emission Pie Chart */}
        <div className="box box3">
          <h5>Total Methane Emission by Mine Type</h5>
         {methaneEmissionPieData && <Pie data={methaneEmissionPieData} />}
        </div>
        {/* Box 4 - % of Coal Production by Mine Type */}
        <div className="box box4">
           <h5>% of Coal Production by Mine Type</h5>
          {coalProductionPieData && <Pie data={coalProductionPieData} />}
        </div>

    
      </div>
    </div>

    <div className="boxes2-container"> 
  <h3>Analysis by State</h3>

  <div className="box-wrapper">
    <div className="box box5">
      <h5>% of Coal Emission by State</h5>
      {coalEmissionByStatePieData && <Pie data={coalEmissionByStatePieData} />} 
    </div>
    <div className="box box6">
      <h5>% of Coal Production by State</h5>
      {coalProductionByStatePieData && <Pie data={coalProductionByStatePieData} />}
    </div>
  </div>
</div>

      

      

      

      {/* List Title and Search Bar */}
      <div className="list-header-container">
        <h2 className="list-title">List of Mines</h2>
        <input
          type="text"
          placeholder="Search mines..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-box"
        />
      </div>

      {/* List of Coal Mines */}
      <div className="mines-list">
        {filteredMines.map((mine) => (
          <div key={mine.id} className="mine-item">
            <div className="mine-header" onClick={() => toggleMineDetails(mine.id)}>
              {mine.name}
              <span className={`arrow ${expandedMine === mine.id ? 'up' : 'down'}`}></span>
            </div>
            {expandedMine === mine.id && (
              <div className="mine-details">
                <p>Mine Name: {mine.name}</p>
                <p>State: {mine.state}</p>
                <p>District: {mine.district}</p>
                <p>Owner: {mine.owner}</p>
                <p>Mine Type: {mine.mine_type}</p>
                <p>Sink Area: {mine.sink_area}</p>

                {/* Add more details here */}
                <button onClick={() => handleActionClick(mine.name)}>Information</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MineSummary;