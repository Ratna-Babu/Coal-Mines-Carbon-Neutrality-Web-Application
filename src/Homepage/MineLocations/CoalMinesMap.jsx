import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import './CoalMinesMap.css';
import minesData from './minesData.js';

const CoalMinesMap = () => {
  const [leftPanelOpen, setLeftPanelOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMines, setFilteredMines] = useState(minesData);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMine, setSelectedMine] = useState(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // Declare map layers outside useEffect
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

  useEffect(() => {
    // Initialize map only once when the component mounts
    if (!mapRef.current) {
      const map = L.map('map').setView([20.5937, 78.9629], 5);
      mapRef.current = map;

      // Add the default map layer
      defaultLayer.addTo(map);

      // Create a layer control
      const baseMaps = {
        "Default": defaultLayer,
        "Satellite": satelliteLayer,
        "Terrain": terrainLayer
      };
      L.control.layers(baseMaps).addTo(map);

      // Create markers and store them in the ref
      markersRef.current = minesData.map((mine) => {
        const marker = L.marker([mine.latitude, mine.longitude])
          .bindPopup(`<strong>${mine.name}</strong><br>${mine.state}`)
          .addTo(map);

        marker.on('click', () => {
          setSelectedMine(mine);
          setModalOpen(true);
        });

        return marker;
      });
    }
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = minesData.filter(mine =>
      mine.name.toLowerCase().includes(searchTerm) ||
      mine.state.toLowerCase().includes(searchTerm)
    );
    setFilteredMines(filtered);
  };

  const handleLocationClick = (mine) => {
    const marker = markersRef.current.find(m => m.getLatLng().lat === mine.latitude && m.getLatLng().lng === mine.longitude);
    if (marker) {
      mapRef.current.flyTo(marker.getLatLng(), 12, {
        animate: true,
        duration: 1.5
      });
      marker.openPopup();
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="coal-mines-map-container">
      <div id="hamburger-menu" onClick={() => setLeftPanelOpen(!leftPanelOpen)}>&#9776;</div>

      <div id="left-panel" className={leftPanelOpen ? 'open' : ''}>
        <h2>Coal Mines List</h2>
        <div className="search-container">
          <input 
            type="text" 
            id="search-bar" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleSearch} 
          />
          <span className="magnifying-glass">&#128269;</span>
        </div>
        <ul id="mines-list">
          {filteredMines.map((mine) => (
            <li key={mine.name} onClick={() => handleLocationClick(mine)}>
              {mine.name} - {mine.state}
            </li>
          ))} 
        </ul>
      </div>

      <div id="map"></div>

      {modalOpen && (
        <div id="infoModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Location Information</h2>
            <p id="modal-text">
              Information about {selectedMine?.name} in {selectedMine?.state}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoalMinesMap;