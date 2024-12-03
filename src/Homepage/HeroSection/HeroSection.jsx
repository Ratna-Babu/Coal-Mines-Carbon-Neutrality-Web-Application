import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import './HeroSection.css';

// Define keyframes using MUI's keyframes utility
const fadeSlideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeSlideRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box className="hero-section">
      <Container maxWidth="lg" className="hero-content">
        <Typography
          variant="h1"
          component="h1"
          className="hero-title"
          sx={{
            animation: `${fadeSlideLeft} 1.5s ease-in-out`,
            ':hover': {
              color: '#ff8c00', // Orange color on hover
              transform: 'scale(1.05)', // Slight scale on hover
              textShadow: '2px 2px 5px rgba(255, 140, 0, 0.5)', // Orange-ish shadow
              transition: 'color 0.3s ease, transform 0.3s ease',
            },
          }}
          gutterBottom
        >
          COAL MINES OF INDIA
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className="hero-subtitle"
          sx={{
            animation: `${fadeSlideRight} 1.5s ease-in-out`,
            ':hover': {
              color: '#ff8c00', // Orange color on hover
              transform: 'scale(1.05)',
              textShadow: '0 0 10px rgba(255, 140, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.5)', // More intense shadow
              transition: 'color 0.3s ease, transform 0.3s ease',
            },
          }}
        >
          Towards Carbon Neutral Coal Mining
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
