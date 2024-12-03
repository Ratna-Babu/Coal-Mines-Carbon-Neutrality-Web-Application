import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Pie } from 'react-chartjs-2'; // Import Line and Pie charts from Chart.js

import 'leaflet/dist/leaflet.css';
import './mineLocation.css';
import Sidebar from './Sidebar';
import { minesData } from './minesdata';

import L from 'leaflet';
import { useNavigate } from 'react-router-dom';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LayerControl = () => {
  const map = useMap();

  useEffect(() => {
    const defaultLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    });

    const satelliteLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 19,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    const terrainLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
      maxZoom: 19,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    // Set the default map layer to satellite
    satelliteLayer.addTo(map);

    const layerControl = L.control.layers({
      "Default": defaultLayer,
      "Satellite": satelliteLayer,
      "Terrain": terrainLayer
    }).addTo(map);

    return () => {
      map.removeControl(layerControl);
    };
  }, [map]);

  return null;
};




const MineLocation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMine, setSelectedMine] = useState(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const navigate = useNavigate(); // Use navigate hook

  const handleLocationClick = (index) => {
    const mine = minesData[index];
    const map = mapRef.current;

    if (map) {
      map.flyTo([mine.latitude, mine.longitude], 17, {
        animate: true,
        duration: 1.5,
      });

      setSelectedMine(mine);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleMarkerClick = (index) => {
    setSelectedMine(minesData[index]);
    setModalOpen(true);
    setIsSidebarOpen(false); // Close the sidebar when a marker is clicked
  };

  const handleViewMoreClick = () => {
    if (selectedMine) {
      navigate(`${selectedMine?.summary}`); // Navigate to detailed view
    }
  };
  const handleViewEmissionClick = () => {
    if (selectedMine) {
      navigate(`/mine/${selectedMine.sno}`); // Navigate to detailed view
    }
  };
  const pie_Data = selectedMine ? {
    labels: ['Fuel Emission', 'Electricity Emission', 'Methane Emission'],
    datasets: [
      {
        data: [
          Math.round(selectedMine.fuel_emission || 0),
          Math.round(selectedMine.electricity_emission || 0),
          Math.round(selectedMine.methane_emission || 0),
        ],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  } : {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
    }],
  };
  
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div
        id="hamburger-menu"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          position: 'absolute',
          top: '70px', // Ensure this is below the navbar
          left: isSidebarOpen ? '28%' : '20px', // Moves to the right side when sidebar is open
          zIndex: 1002,
          cursor: 'pointer',
          fontSize: '24px',
          backgroundColor: '#333',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          transition: 'left 0.3s ease',
        }}
      >
        &#9776;
      </div>

      <Sidebar
        onLocationClick={handleLocationClick}
        isOpen={isSidebarOpen}
        mapRef={mapRef}
      />

      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: '100%', width: isSidebarOpen ? '75%' : '100%' }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <LayerControl />

        {minesData.map((mine, index) => (
          <Marker
            key={index}
            position={[mine.latitude, mine.longitude]}
            icon={L.icon({
              iconUrl: require('leaflet/dist/images/marker-icon.png'),
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
              shadowSize: [41, 41],
            })}
            eventHandlers={{
              click: () => handleMarkerClick(index),
            }}
            ref={(el) => (markersRef.current[index] = el)}
          />
        ))}
      </MapContainer>



      {modalOpen && (
        <div id="infoModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Location Information</h2>
            <div className="infos-box">
              <p>
                <span className="label">Coal Mine Name:</span>{selectedMine?.name} <br />
                <span className="label">State:</span>{selectedMine?.state} <br />
                <span className="label">District:</span>{selectedMine?.district} <br />
                <span className="label">Mine Type:</span>{selectedMine?.mine_type} <br />
                <span className="label">Owner:</span>{selectedMine?.owner} <br />
                <span className="label">Govt/Private:</span>{selectedMine?.govtprivate}
              </p>
              <div className="images-box">
                <img src={selectedMine?.image} alt={selectedMine?.name} style={{ maxWidth: '45%', height: 'auto' }} />
              </div>
              <br></br>
              
            </div>
            <div className="button-box">
                <button onClick={handleViewMoreClick} className="redirect-button">
                View More
                </button>
              </div>
            <br></br>
            <div className="info-box">
              <h3>Coal Mine Emission 2023</h3>
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
             
            </div>
            <div className="button-box">
                <button onClick={handleViewEmissionClick} className="redirect-button">
                View Emission
                </button>
              </div>
            
          </div>
          
        </div>
      )}
    </div>
  );
};

export default MineLocation;
