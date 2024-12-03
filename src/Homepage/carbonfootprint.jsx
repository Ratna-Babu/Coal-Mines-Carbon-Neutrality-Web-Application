import React, { useRef } from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardContent, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { EnergySavingsLeaf, TrendingUp, Summarize, ContactMail } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bgImage from './bg.webp'; // Importing the background image correctly

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
  // Define keyframes for fade-in animation
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)', // Slight vertical movement
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  hero: {
    backgroundImage: `url(${bgImage})`, // Correct usage of template literals to set the background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    animation: '$fadeIn 1.5s ease-in-out', // Apply fade-in animation to hero section
  },
  heroText: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '2rem',
    animation: '$fadeIn 2s ease-in-out', // Apply fade-in animation with a slightly different timing
  },
  section: {
    padding: '4rem 0',
    maxWidth: '100%', // Set to full width
    width: '100%',
    margin: '0 auto', // Center align
  },
  benefitsSection: {
    backgroundColor: '#e8f5e9', // Green background color
    padding: '4rem 2rem', // Adding padding for spacing around the edges
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
  ctaButton: {
    marginTop: '2rem',
    animation: '$fadeIn 2.5s ease-in-out', // Add fade-in for button too
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '2rem 0',
  },
  clickableCard: {
    cursor: 'pointer', // Makes the cards clickable
  },
  expandedCard: {
    height: '350px', // Adjust height to match the normal card ratio
  },
}));

const Homepage = () => {
  const classes = useStyles();

  // Reference to Key Features section for scrolling
  const keyFeaturesRef = useRef(null);

  // Scroll handler for "Get Started" button
  const handleScrollToFeatures = () => {
    keyFeaturesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Click handler for cards
  const handleCardClick = (feature) => {
    alert(`Clicked on ${feature}`); // Change this action as needed (navigation, etc.)
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
                    <TrendingUp className={classes.featureIcon} />
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

        {/* Testimonials and Footer */}
        <Box className={classes.testimonials}>
          <Typography variant="h2" align="center">
            Testimonials
          </Typography>
          <Typography align="center" style={{ marginTop: '1rem' }}>
            "Using this platform, we were able to reduce our emissions by 30% in one year."
            <br />— Coal Mine A, India
          </Typography>
        </Box>

        <Box className={classes.section}>
          <Typography variant="h2" align="center">
            About Us
          </Typography>
          <Typography align="center" style={{ marginTop: '1rem' }}>
            We are committed to supporting India's climate goals by helping coal mines quantify, reduce, and ultimately
            neutralize their carbon emissions.
          </Typography>
        </Box>

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
