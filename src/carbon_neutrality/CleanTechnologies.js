import React, { useState } from 'react';
import {
  Paper, Box, TextField, Button, Typography, Grid, Tooltip, Card, CardContent,
  Divider, Alert, Stepper, Step, StepLabel
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Bar } from 'react-chartjs-2';

const CleanTechnologies = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [cleanTechData, setCleanTechData] = useState({
    technology: '',
    cost: '',
    emissionReduction: '',
  });
  const [simulationResults, setSimulationResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCleanTechData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const simulateCleanTech = () => {
    const { cost, emissionReduction } = cleanTechData;
    const baselineEmissions = 1000;

    const reduction = (baselineEmissions * emissionReduction) / 100;
    const costPerTon = (cost / reduction); // The cost is in INR per ton of reduction

    setSimulationResults({
      reduction,
      costPerTon,
      remainingEmissions: baselineEmissions - reduction,
    });

    // Move to the next step after simulation
    setActiveStep(2);
  };

  const steps = ['Select Technology', 'Enter Costs & Reductions', 'View Results'];

  const chartData = {
    labels: ['Baseline Emissions', 'Remaining Emissions After Reduction'],
    datasets: [
      {
        label: 'CO2 Emissions (tons)',
        data: [
          1000,
          simulationResults ? simulationResults.remainingEmissions : 1000,
        ],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'CO2 Emissions (tons)',
        },
      },
    },
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom align="center">
        Clean Technologies Simulation
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
        {/* Step 1: Technology Selection */}
        {activeStep === 0 && (
          <Box>
            <Typography variant="h6">Step 1: Select Clean Technology</Typography>
            <TextField
              label="Technology"
              name="technology"
              select
              value={cleanTechData.technology}
              onChange={handleInputChange}
              fullWidth
              sx={{ mt: 2 }}
              variant="outlined"
            >
              <MenuItem value="Electric Vehicles">Electric Vehicles</MenuItem>
              <MenuItem value="Solar Power">Solar Power</MenuItem>
              <MenuItem value="Wind Energy">Wind Energy</MenuItem>
            </TextField>

            {cleanTechData.technology && (
              <Alert sx={{ mt: 2 }} severity="info">
                You selected {cleanTechData.technology}.
              </Alert>
            )}

            <Button
              variant="contained"
              sx={{ mt: 3 }}
              onClick={() => setActiveStep(1)}
              disabled={!cleanTechData.technology}
            >
              Next
            </Button>
          </Box>
        )}

        {/* Step 2: Cost and Emission Reduction */}
        {activeStep === 1 && (
          <Box>
            <Typography variant="h6">Step 2: Input Costs & Emission Reduction</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <Tooltip title="Enter the total cost in INR for implementing the technology">
                  <TextField
                    label="Estimated Cost (in INR)"
                    name="cost"
                    type="number"
                    value={cleanTechData.cost}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={6}>
                <Tooltip title="Percentage of CO2 emission reduction expected from this technology">
                  <TextField
                    label="Emission Reduction (%)"
                    name="emissionReduction"
                    type="number"
                    value={cleanTechData.emissionReduction}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  />
                </Tooltip>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{ mt: 3 }}
              onClick={simulateCleanTech}
              disabled={!cleanTechData.cost || !cleanTechData.emissionReduction}
            >
              Simulate
            </Button>
          </Box>
        )}

        {/* Step 3: Results and Chart */}
        {activeStep === 2 && simulationResults && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Simulation Results
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="body1">
                      <strong>Technology:</strong> {cleanTechData.technology}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      <strong>CO₂ Reduction:</strong> {simulationResults.reduction.toFixed(2)} tons
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      <strong>Cost per Ton:</strong> ₹{simulationResults.costPerTon.toFixed(2)}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      <strong>Remaining Emissions:</strong> {simulationResults.remainingEmissions.toFixed(2)} tons
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={8}>
                <Bar data={chartData} options={chartOptions} />
              </Grid>
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

export default CleanTechnologies;
