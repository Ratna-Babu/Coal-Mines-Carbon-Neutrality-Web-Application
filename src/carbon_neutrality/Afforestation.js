import React, { useState } from 'react';
import {
  Paper, Box, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl,
  Stepper, Step, StepLabel, Grid, Card, CardContent
} from '@mui/material';

const Afforestation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [landArea, setLandArea] = useState('');
  const [treeSpecies, setTreeSpecies] = useState('');
  const [timeline, setTimeline] = useState('');
  const [simulationResults, setSimulationResults] = useState({ totalCost: 0 });

  const treeSpeciesCost = {
    Oak: 5000,   // Cost per hectare in INR for Oak
    Pine: 3000,  // Cost per hectare in INR for Pine
    Teak: 7000,  // Cost per hectare in INR for Teak
    Mahogany: 10000, // Cost per hectare in INR for Mahogany
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    // Ensure valid inputs
    if (!landArea || !treeSpecies || !timeline) {
      alert("Please fill in all fields");
      return;
    }

    // Calculate cost based on land area, tree species, and timeline
    const speciesCost = treeSpeciesCost[treeSpecies] || 0;
    const calculatedCost = parseFloat(landArea) * speciesCost * parseInt(timeline);

    setSimulationResults({
      totalCost: calculatedCost || 0, // Ensure a number is set, fallback to 0 if NaN or undefined
    });

    // Move to the next step
    setActiveStep(2);
  };

  const steps = ['Enter Land Area & Tree Species', 'Enter Timeline', 'View Results'];

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom align="center">
        Afforestation Plan Simulation
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
        {/* Step 1: Enter Land Area and Tree Species */}
        {activeStep === 0 && (
          <Box>
            <Typography variant="h6">Step 1: Enter Land Area and Select Tree Species</Typography>

            <TextField
              label="Land Area (in hectares)"
              value={landArea}
              onChange={(e) => setLandArea(e.target.value)}
              fullWidth
              margin="normal"
              type="number"
            />

            {/* Dropdown for Tree Species */}
            <FormControl fullWidth margin="normal">
              <InputLabel id="tree-species-label">Tree Species</InputLabel>
              <Select
                labelId="tree-species-label"
                value={treeSpecies}
                onChange={(e) => setTreeSpecies(e.target.value)}
                label="Tree Species"
              >
                <MenuItem value="Oak">Oak</MenuItem>
                <MenuItem value="Pine">Pine</MenuItem>
                <MenuItem value="Teak">Teak</MenuItem>
                <MenuItem value="Mahogany">Mahogany</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleNext}
              disabled={!landArea || !treeSpecies}
            >
              Next
            </Button>
          </Box>
        )}

        {/* Step 2: Enter Timeline */}
        {activeStep === 1 && (
          <Box>
            <Typography variant="h6">Step 2: Enter Timeline (in years)</Typography>

            <TextField
              label="Timeline (years)"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              fullWidth
              margin="normal"
              type="number"
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button variant="contained" onClick={handleBack}>
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!timeline}
              >
                Simulate
              </Button>
            </Box>
          </Box>
        )}

        {/* Step 3: View Results */}
        {activeStep === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Simulation Results:
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="body1">
                      <strong>Tree Species:</strong> {treeSpecies}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      <strong>Land Area:</strong> {landArea} hectares
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      <strong>Timeline:</strong> {timeline} years
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      <strong>Total Cost:</strong> ₹{simulationResults.totalCost ? simulationResults.totalCost.toFixed(2) : '0.00'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* You could add a chart here for visualization */}
            </Grid>

            <Button
              variant="contained"
              sx={{ mt: 3 }}
              onClick={() => setActiveStep(0)}
            >
              Run New Simulation
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Afforestation;
