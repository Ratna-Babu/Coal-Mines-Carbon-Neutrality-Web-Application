import React, { useState } from 'react';
import { minesData } from './minesdata';

const Sidebar = ({ onLocationClick, isOpen, mapRef }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMines = minesData.filter(mine =>
    mine.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    mine.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      id="left-panel"
      className={isOpen ? 'open' : ''}
      style={{
        width: isOpen ? '25%' : '0',
        backgroundColor: '#f4f4f4',
        overflowX: 'hidden',
        overflowY: isOpen ? 'auto' : 'hidden',
        padding: isOpen ? '20px' : '0',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        transition: 'width 0.3s ease, padding 0.3s ease',
        position: 'absolute',
        top: 60, // Ensure this is below the navbar
        bottom: 0,
        zIndex: 1001,
        height: '100%',
      }}
    >
      <h2>Coal Mines List</h2>
      
      <input
        type="text"
        placeholder="Search Coal Mines..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          boxSizing: 'border-box',
        }}
      />

      <ul className='ulclass' id="mines-list">
        {filteredMines.map((mine, index) => (
          <li className='liclass' key={index} onClick={() => onLocationClick(index)}>
            {mine.name} - {mine.state}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
