import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Stats.css';

function Stats() {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/coal_production_data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const labels = data.map(item => item.year);
        const productionData = data.map(item => item.production);

        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels, 
            datasets: [{
              label: 'Coal Production (in tonnes)',
              data: productionData,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Production (Tonnes)' 
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Year' 
                }
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Yearly Coal Production'
              },
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    return `Production: ${tooltipItem.raw} tonnes`;
                  }
                }
              }
            }
          }
        });
      } catch (error) {
        console.error('Error fetching the coal production data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="stats-container">
      <header className="stats-header">
        <div className="zigzag"></div>
      </header>
      <main className="stats-main">
        <h1 className="stats-title">Total Coal Production</h1>
        <div className="bar-graph-box">
          <canvas ref={chartRef}></canvas>
        </div>
        <div className="subtitles">
          <p className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, provident! Et possimus est asperiores alias modi doloremque soluta totam. Ad culpa error aliquid veritatis soluta nisi quasi, odit eius voluptatum.</p>
        </div>
      </main>
      <footer className="stats-footer">
        <button className="action-button">Learn More</button>
      </footer>
    </div>
  );
}

export default Stats;