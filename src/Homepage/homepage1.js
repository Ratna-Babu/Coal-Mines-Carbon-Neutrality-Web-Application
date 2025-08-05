import React, { useRef, useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardContent, Paper, createTheme, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { EnergySavingsLeaf, TrendingUp, Summarize, ContactMail, LocationOn, BarChart, Timeline } from '@mui/icons-material';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import bgImage from './bg.webp';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

// Register Chart.js components
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const theme = createTheme({
  palette: {
    primary: {
      main: '#388e3c',
    },
    secondary: {
      main: '#ff7043',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
  },
});

const useStyles = makeStyles(() => ({
  
  '@keyframes fadeInSlideUp': {
    from: {
      opacity: 0,
      transform: 'translateY(20px) scale(0.95)', // Starting with a smaller scale and lower position
    },
    to: {
      opacity: 1,
      transform: 'translateY(0) scale(1)', // Returning to normal position and scale
    },
  },
  hero: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Parallax effect
    height: '89vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  heroText: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '2rem',
    animation: '$fadeInSlideUp 1.5s ease-out', // Shorter duration for faster animation
    animationFillMode: 'both', // Ensures the animation stays at the end state
    borderRadius: '10px', // Slightly rounded corners for aesthetic appeal
  },
  ctaButton: {
    borderRadius: '4px !important',
    textTransform: 'none !important',
    transition: 'all 0.3s ease-in-out !important',
    cursor: 'pointer !important',
    marginTop: '2rem !important',
    animation: `$fadeInSlideUp 1s ease-in-out !important`,

  },
  
  section: {
    padding: '4rem 0',
    maxWidth: '100%',
    width: '100%',
    margin: '0 auto',
  },
  chartSection : {
    marginBottom: '50',
  },
  benefitsSection: {
    backgroundColor: '#e8f5e9',
    padding: '4rem 2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.15)',
    },
  },
  cardContent: {
    flexGrow: 1,
  },
  gridItem: {
    display: 'flex',
    height: 'auto',
  },
  featureIcon: {
    marginRight: '1rem',
    fontSize: '3rem',
    color: theme.palette.primary.main,
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '2rem 0',
  },
  clickableCard: {
    cursor: 'pointer',
  },
  expandedCard: {
    height: '160px',
  },
  // Styles for Carbon Footprint section
  carbonFootprintContainer: {
    padding: '2rem 0',
  },
  carbonFootprintTitle: {
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  carbonFootprintPaperCard: {
    padding: '1.5rem',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  pieChartBox: {
    width: '100%',   // Ensure it takes full width in the grid    
    height: '300px', // Keep the square size 
  },
  
  emptyBox: {
    width: '100%',  // Full width of the grid cell
    height: '300px',  // Same height as the pie chart for consistency
    backgroundColor: '#f5f5f5',  // You can change this color as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
  },
  carbonFootprintGraphBox: {
    marginTop: '2rem',
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const keyFeaturesRef = useRef(null);
  const carbonFootprintRef = useRef(null);

  const handleScrollToFeatures = () => {
    keyFeaturesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const navigate = useNavigate(); // Using the useNavigate hook
  
  const handleCardClick = (feature) => {
    if (feature === 'Emission Quantification') {
      navigate('/EmissionSummary');
    } else if (feature === 'Carbon Neutrality Pathways') {
      navigate('/Mainneutrality');
    } else if (feature === 'Coal Mine Summary') {
      navigate('/MineSummary');
    } else if (feature === 'Future Emission Prediction') {
      navigate('/EmissionSummary#activity-wise');
    } else if (feature === 'Activity-wise Emission Prediction') {
      navigate('/EmissionSummary#activity-wise'); // Adding the hash to the URL
    } else if (feature === 'Mines Locations') {
      navigate('/MineLocation');
    }
  };
  // Carbon Footprint data state and fetching logic
  const [emissionData, setEmissionData] = useState({
    totalCarbonEmissions: 0,
    totalMethaneEmissions: 0,
    breakdown: [],
  });
  const [isInView, setIsInView] = useState(false); // Track if the section is in view
  const [animatedValues, setAnimatedValues] = useState({
    totalCarbonEmissions: 0,
    totalMethaneEmissions: 0,
    totalFuelEmissions: 0,
    totalElectricityEmissions: 0,
  });
   // Use IntersectionObserver to detect when the Carbon Footprint section is in view
   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when in view
        }
      },
      {
        root: null,
        threshold: 0.5, // Adjust as needed (50% visibility triggers)
      }
    );

    if (carbonFootprintRef.current) {
      observer.observe(carbonFootprintRef.current);
    }

    return () => {
      if (carbonFootprintRef.current) {
        observer.unobserve(carbonFootprintRef.current);
      }
    };
  }, []);

  // Animate values when the section is in view
  useEffect(() => {
    if (isInView) {
      // Animate each value over 2 seconds
      const duration = 2000;
      const startTimestamp = performance.now();

      const animateValue = (start, end, callback) => {
        const step = (timestamp) => {
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const newValue = start + progress * (end - start);
          callback(newValue);

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      };

      animateValue(0, emissionData.totalCarbonEmissions / 1_000_000, (value) =>
        setAnimatedValues((prev) => ({ ...prev, totalCarbonEmissions: value }))
      );
      animateValue(0, emissionData.totalMethaneEmissions / 1_000_000, (value) =>
        setAnimatedValues((prev) => ({ ...prev, totalMethaneEmissions: value }))
      );
      animateValue(0, emissionData.breakdown.reduce((acc, item) => acc + item.fuel_emission, 0) / 1_000_000, (value) =>
        setAnimatedValues((prev) => ({ ...prev, totalFuelEmissions: value }))
      );
      animateValue(0, emissionData.breakdown.reduce((acc, item) => acc + item.electricity_emission, 0) / 1_000_000, (value) =>
        setAnimatedValues((prev) => ({ ...prev, totalElectricityEmissions: value }))
      );
    }
  }, [isInView, emissionData]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/emission_data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Calculate total emissions
        const totalCarbonEmissions = data.reduce((acc, item) => acc + item.fuel_emission + item.electricity_emission, 0);
        const totalMethaneEmissions = data.reduce((acc, item) => acc + item.methane_emission, 0);

        // Prepare breakdown for the chart
        const breakdown = data.map((item) => ({
          mine: item.mine_name,
          fuel_emission: item.fuel_emission,
          electricity_emission: item.electricity_emission,
          methane_emission: item.methane_emission,
        }));

        setEmissionData({
          totalCarbonEmissions,
          totalMethaneEmissions,
          breakdown,
        });
      } catch (error) {
        console.error('Error fetching emission data:', error);
        // Set default data to prevent infinite loading
        setEmissionData({
          totalCarbonEmissions: 0,
          totalMethaneEmissions: 0,
          breakdown: [],
        });
      }
    };
    fetchData();
  }, []);

  // Chart data and options for Carbon Footprint
  const chartData = {
    labels: ['Fuel Emission', 'Electricity Emission', 'Methane Emission'],
    datasets: [{
      label: 'Total Annual Emission (2023)',
      data: [
        emissionData.breakdown.reduce((acc, item) => acc + item.fuel_emission, 0) / 1_000_000, // Total Fuel Emission
        emissionData.breakdown.reduce((acc, item) => acc + item.electricity_emission, 0) / 1_000_000, // Total Electricity Emission
        emissionData.totalMethaneEmissions / 1_000_000, // Total Methane Emission
      ],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for each section of the pie
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 1,
    }],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)} MT`,
        },
      },
    },
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.hero}>
        <Box className={classes.heroText}>
          <Typography variant="h1">Empowering Indian Coal Mines Towards Carbon Neutrality</Typography>
          <Typography variant="h5" style={{ marginTop: '1rem' }}>
            A dedicated platform to quantify carbon footprints, explore pathways to sustainability, and support India's climate goals.
          </Typography>
          <Button  
            variant="contained"
            color="secondary"       
            className={classes.ctaButton}
            onClick={handleScrollToFeatures}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      <Container>
        {/* Key Features Section */}
        <Box className={classes.section} ref={keyFeaturesRef}>
          <Typography variant="h2" align="center">
            Key Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
              <Card
                className={`${classes.card} ${classes.clickableCard} ${classes.expandedCard}`}
                onClick={() => handleCardClick('Emission Quantification')}
              >
                <CardContent className={classes.cardContent}>
                  <Box display="flex" alignItems="center">
                    <EnergySavingsLeaf className={classes.featureIcon} />
                    <Typography variant="h6">Emission Quantification</Typography>
                  </Box>
                  <Typography>
                    Accurately measure your mine's carbon emissions with activity-wise data input.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
              <Card
                className={`${classes.card} ${classes.clickableCard} ${classes.expandedCard}`}
                onClick={() => handleCardClick('Carbon Neutrality Pathways')}
              >
                <CardContent className={classes.cardContent}>
                  <Box display="flex" alignItems="center">
                    <Timeline className={classes.featureIcon} />
                    <Typography variant="h6">Carbon Neutrality Pathways</Typography>
                  </Box>
                  <Typography>
                    Simulate various emission reduction strategies and find the best fit for your mine.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
              <Card
                className={`${classes.card} ${classes.clickableCard} ${classes.expandedCard}`}
                onClick={() => handleCardClick('Coal Mine Summary')}
              >
                <CardContent className={classes.cardContent}>
                  <Box display="flex" alignItems="center">
                    <Summarize className={classes.featureIcon} />
                    <Typography variant="h6">Coal Mine Summary</Typography>
                  </Box>
                  <Typography>
                    Get a detailed summary of your coal mine’s emissions, reduction pathways, and sustainability status.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Add new features here */}
            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
              <Card
                className={`${classes.card} ${classes.clickableCard} ${classes.expandedCard}`}
                onClick={() => handleCardClick('Future Emission Prediction')}
              >
                <CardContent className={classes.cardContent}>
                  <Box display="flex" alignItems="center">
                    <TrendingUp className={classes.featureIcon} />
                    <Typography variant="h6">Future Emission Prediction</Typography>
                  </Box>
                  <Typography>
                    Predict future carbon emissions based on historical data trends.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
              <Card
                className={`${classes.card} ${classes.clickableCard} ${classes.expandedCard}`}
                onClick={() => handleCardClick('Activity-wise Emission Prediction')}
              >
                <CardContent className={classes.cardContent}>
                  <Box display="flex" alignItems="center">
                    <BarChart className={classes.featureIcon} />
                    <Typography variant="h6">Activity-wise Emission Prediction</Typography>
                  </Box>
                  <Typography>
                    Estimate emissions per activity, such as transportation or machinery use.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
              <Card
                className={`${classes.card} ${classes.clickableCard} ${classes.expandedCard}`}
                onClick={() => handleCardClick('Mines Locations')}
              >
                <CardContent className={classes.cardContent}>
                  <Box display="flex" alignItems="center">
                    <LocationOn className={classes.featureIcon} />
                    <Typography variant="h6">Mines Locations</Typography>
                  </Box>
                  <Typography>
                    View all active mine locations and their carbon emission statistics.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        
        
        {/* Benefits Section with Cards (non-clickable) */}
        <Box className={classes.benefitsSection}>
          <Typography variant="h2" align="center">
            Benefits
          </Typography>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} sm={3} md={3} className={classes.gridItem}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">Transparency</Typography>
                  <Typography>Gain a clear understanding of your carbon footprint.</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={3} md={3} className={classes.gridItem}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">Decision Support</Typography>
                  <Typography>Make informed choices for emission reduction.</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={3} md={3} className={classes.gridItem}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">Cost Savings</Typography>
                  <Typography>Identify opportunities to optimize operations and reduce costs.</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={3} md={3} className={classes.gridItem}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">Sustainability Goals</Typography>
                  <Typography>
                    Contribute to India's climate commitments and achieve carbon neutrality.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Carbon Footprint Section */}
        <Box ref={carbonFootprintRef} className={classes.carbonFootprintContainer}>
      <Typography className={classes.carbonFootprintTitle} variant="h2" align="center">
        Current Carbon Footprint - 2023
      </Typography>
      <Grid container spacing={3}>
        
        {/* Second Row */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.carbonFootprintPaperCard}>
            <Typography variant="h6">Total Fuel Emission (2023)</Typography>
            <Typography variant="h3" color="primary">
              {animatedValues.totalFuelEmissions.toFixed(2)}
            </Typography>
            <Typography variant="subtitle1">Million tons of CO2e</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.carbonFootprintPaperCard}>
            <Typography variant="h6">Total Electricity Emission (2023)</Typography>
            <Typography variant="h3" color="primary">
              {animatedValues.totalElectricityEmissions.toFixed(2)}
            </Typography>
            <Typography variant="subtitle1">Million tons of CO2e</Typography>
          </Paper>
        </Grid>

        {/* First Row */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.carbonFootprintPaperCard}>
            <Typography variant="h6">Total Carbon Emission (2023) </Typography>
            <Typography variant="h3" color="secondary">
              {animatedValues.totalCarbonEmissions.toFixed(2)}
            </Typography>
            <Typography variant="subtitle1">Million tons of CO2e</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.carbonFootprintPaperCard}>
            <Typography variant="h6">Total Methane Emission (2023)</Typography>
            <Typography variant="h3" color="secondary">
              {animatedValues.totalMethaneEmissions.toFixed(2)}
            </Typography>
            <Typography variant="subtitle1">Million tons of CH4</Typography>
          </Paper>
        </Grid>

      </Grid>
    </Box>
   
   {/* New Box for Pie Chart and Empty Box */}
<Box className={classes.chartSection}> 
  <Grid container spacing={3} style={{ marginTop: '2rem' }}>
    {/* Left Box: Now ONLY for Pie Chart */}
    <Grid item xs={12} sm={6}>
      <Box className={classes.carbonFootprintPaperCard}> 
        <Box className={classes.pieChartBox}> 
          <Pie data={chartData} options={chartOptions} />
        </Box>
      </Box>
    </Grid>
 
    {/* Right Box: Emission table*/}

    {/* Right Box: Emission table*/}
    <Grid item xs={12} sm={6}>
  <Box className={'${classes.carbonFootprintPaperCard} ${classes.mineDataTableContainer}'} style={{ border: '1px solid #ccc', padding: '16px', alignSelf: 'flex-end' }}>
    <Typography variant="h6" align="center">
      Mine Emissions
    </Typography>
    <TableContainer component={Paper} style={{ maxHeight: '295px', overflow: 'auto', }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow style={{ backgroundColor: theme.palette.primary.main, color: 'white' }}> 
            <TableCell style={{ fontWeight: 'bold' }}>Mine Name</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold' }}>Total Carbon Emission</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold' }}>Methane Emission</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {emissionData.breakdown.map((mine, index) => (
            <TableRow key={mine.mine} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }}> 
              <TableCell>{mine.mine}</TableCell>
              <TableCell align="right">
                {(mine.fuel_emission + mine.electricity_emission).toFixed(2)}
              </TableCell>
              <TableCell align="right">
                {mine.methane_emission.toFixed(2)} 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
</Grid>
  </Grid>
</Box>
   {/* Emission Reduction Strategies Section (Full-width) */}
   <Box className={classes.section} style={{ marginTop: '2rem' }}> 
        <Box className={classes.carbonFootprintTitle} p={3}>
          <Typography variant="h2" align="center" gutterBottom>
            Emission Reduction Strategies
          </Typography>
          <Box className={classes.carbonFootprintPaperCard}>            
            <Typography variant="h5" className="call-to-action">
              Explore our simulation tools and take the first step towards a greener, carbon-neutral operation.
            </Typography>

            {/* Four Options (Buttons) with updated colors */}
            <Box mt={3} display="flex" flexDirection="column" alignItems="center" gap={2}>
              <Button variant="contained" color="primary"    component={Link} to="/CleanTechnologies" className="simulation-button"> 
                Clean Technologies Simulation
              </Button>
              <Button variant="contained" color="secondary"  component={Link} to="/RenewableEnergy" className="simulation-button"> 
                Renewable Energy Alternatives
              </Button>
              <Button variant="contained" style={{ backgroundColor: '#2196f3' }} component={Link} to="/CarbonCredits" className="simulation-button"> 
                Carbon Credits Simulation
              </Button>
              <Button variant="contained" style={{ backgroundColor: '#f06292' }} component={Link} to="/Afforestation" className="simulation-button"> 
                Afforestation Plans
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
       

        {/* ... (About Us and Footer sections) ... */}
        <Box className={classes.footer}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6">Contact Us</Typography>
                <Typography>Email: info@carbonneutrality.com</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6">Partners</Typography>
                <Typography>Ministry of Coal, Govt of India</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button startIcon={<ContactMail />} variant="contained" color="secondary">
                  Start Your Journey to Carbon Neutrality Today!
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Homepage;