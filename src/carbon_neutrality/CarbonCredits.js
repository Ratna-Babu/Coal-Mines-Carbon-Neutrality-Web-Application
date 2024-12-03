import React, { useState } from 'react';
import { Paper, Box, TextField, Button, Typography, MenuItem, Card, CardContent, Stepper, Step, StepLabel, Tooltip } from '@mui/material';
import { Bar } from 'react-chartjs-2';

// Reusable FormField Component
const FormField = ({ label, name, value, onChange, type = 'text', select = false, options = [], tooltipText = '' }) => (
  <Tooltip title={tooltipText} arrow>
    <TextField
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      select={select}
      fullWidth
      sx={{ mt: 2 }}
      variant="outlined"
    >
      {select && options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </Tooltip>
);

// Chart Component for displaying the bar chart
const CarbonCreditsChart = ({ simulationResults }) => {
  const chartData = {
    labels: ['Credits Earned', 'Total Value of Credits'],
    datasets: [
      {
        label: 'Carbon Credits',
        data: [
          simulationResults?.creditsEarned || 0,
          simulationResults?.totalValue || 0,
        ],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
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
          text: 'Value in INR',
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

const steps = [
  'Enter Activity Data',
  'Enter Market Rate',
  'View Results',
];

const CarbonCredits = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [carbonCreditsData, setCarbonCreditsData] = useState({
    activityType: '',
    creditsEarned: '',
    marketRate: '',
  });
  const [simulationResults, setSimulationResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarbonCreditsData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (activeStep === 0) {
      // Validate Activity Data
      if (!carbonCreditsData.activityType || !carbonCreditsData.creditsEarned) {
        alert('Please fill in all fields.');
        return;
      }
    } else if (activeStep === 1) {
      // Validate Market Rate
      if (!carbonCreditsData.marketRate) {
        alert('Please enter the market rate.');
        return;
      }
    }
    
    if (activeStep === steps.length - 1) {
      simulateCarbonCredits();
    }
    
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const simulateCarbonCredits = () => {
    const { creditsEarned, marketRate } = carbonCreditsData;
    const totalValue = creditsEarned * marketRate;

    setSimulationResults({
      totalValue,
      creditsEarned,
      marketRate,
    });
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Carbon Credits Simulation
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
        {activeStep === 0 && (
          <Box>
            <FormField
              label="Activity Type"
              name="activityType"
              value={carbonCreditsData.activityType}
              onChange={handleInputChange}
              select
              options={[
                { value: 'Reforestation', label: 'Reforestation' },
                { value: 'Methane Capture', label: 'Methane Capture' },
              ]}
              tooltipText="Select the type of activity that generates carbon credits."
            />
            <FormField
              label="Credits Earned"
              name="creditsEarned"
              value={carbonCreditsData.creditsEarned}
              onChange={handleInputChange}
              type="number"
              tooltipText="Enter the number of carbon credits earned."
            />
          </Box>
        )}

        {activeStep === 1 && (
          <Box>
            <FormField
              label="Market Rate (per credit, in INR)"
              name="marketRate"
              value={carbonCreditsData.marketRate}
              onChange={handleInputChange}
              type="number"
              tooltipText="Enter the market rate for carbon credits in INR."
            />
          </Box>
        )}

        {activeStep === 2 && simulationResults && (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Simulation Results
              </Typography>
              <Typography variant="body1">
                <strong>Total Value of Credits:</strong> ₹{simulationResults.totalValue.toFixed(2)}
              </Typography>
              <Typography variant="body1">
                <strong>Credits Earned:</strong> {simulationResults.creditsEarned}
              </Typography>
              <Typography variant="body1">
                <strong>Market Rate:</strong> ₹{simulationResults.marketRate}
              </Typography>
            </CardContent>
          </Card>
        )}

        {activeStep === 2 && simulationResults && (
          <Box mt={3}>
            <CarbonCreditsChart simulationResults={simulationResults} />
          </Box>
        )}

        <Box mt={3}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CarbonCredits;
