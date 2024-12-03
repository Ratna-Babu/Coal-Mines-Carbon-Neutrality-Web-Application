import React from 'react';
import { Button, Container, Box, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Mainneutrality.css'; // Import the CSS file

const MainPage = () => {

  const handleGoBack = () => {
    navigate('/');
  };
  const navigate = useNavigate();


  return (
    <Container>
      <div className="back-button-container">
        <button className="back-button" onClick={handleGoBack}>
          <div className="circle">
            <span className="arrow left"></span>
          </div>
        </button>
      </div>
      <Box className="main-page-container">
        {/* Header Section */}
        <Typography variant="h4" gutterBottom className="main-header">
          Achieving Carbon Neutrality: A Path to a Sustainable Future
        </Typography>

        {/* Introductory Text */}
        <Typography variant="body1" gutterBottom className="main-intro">
          In today's rapidly evolving world, reducing carbon emissions is critical for the future of our planet. Coal mines, 
          as significant sources of emissions, have a unique opportunity to lead the way toward sustainability. Our platform 
          helps coal mines estimate their carbon footprint, implement strategies for emission reduction, and explore pathways 
          to carbon neutrality. By leveraging clean technologies, renewable energy, afforestation, and carbon credits, we provide 
          an integrated approach to achieving a carbon-neutral future.
        </Typography>

        {/* Key Stats Section */}
        <Grid container spacing={3} justifyContent="center" className="key-stats-grid">
          <Grid item xs={12} md={4}>
            <Paper className="key-stats-paper">
              <Typography variant="h6" className="key-stats-title">Did You Know?</Typography>
              <Typography variant="body2" className="key-stats-text">
                Coal mines contribute to over 25% of total industrial CO2 emissions.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="key-stats-paper">
              <Typography variant="body2" className="key-stats-text">
                Adopting cleaner technologies can reduce emissions by up to 40%.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="key-stats-paper">
              <Typography variant="body2" className="key-stats-text">
                Afforestation initiatives can offset up to 25 tons of CO2 per hectare.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Typography variant="h5" className="call-to-action">
          Explore our simulation tools and take the first step towards a greener, carbon-neutral operation.
        </Typography>

        {/* Four Options (Buttons) */}
        <Box mt={3} display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/CleanTechnologies"
            className="simulation-button"
          >
            Clean Technologies Simulation
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/RenewableEnergy"
            className="simulation-button"
          >
            Renewable Energy Alternatives
          </Button>
          <Button
            variant="contained"
            color="success"
            component={Link}
            to="/CarbonCredits"
            className="simulation-button"
          >
            Carbon Credits Simulation
          </Button>
          <Button
            variant="contained"
            color="warning"
            component={Link}
            to="/Afforestation"
            className="simulation-button"
          >
            Afforestation Plans
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MainPage;
