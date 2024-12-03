import React, { useState, useMemo, useEffect } from 'react';
import { Grid, Typography, Paper, Select, MenuItem, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Box, IconButton } from '@mui/material';
import { ResponsiveContainer, BarChart, XAxis, YAxis, LabelList, CartesianGrid, Legend, Tooltip, Bar } from 'recharts'; 
import { Terrain, LocalGasStation, FlashOn, People, Landscape } from '@mui/icons-material';
import emissionData from './emission_data.json'; 
import CountUp from 'react-countup';
import predictedYearlyData from './predicted_yearly_data.json';
import yearData from './yearly_emission.json';

function Dashboard() {
    const [selectedYear, setSelectedYear] = useState('2023');
    const [selectedChartOption, setSelectedChartOption] = useState('total_emission');

    const totalCarbonEmission = emissionData.reduce((sum, data) => sum + data.fuel_emission + data.electricity_emission, 0);
    const totalFuelEmission = emissionData.reduce((sum, data) => sum + data.fuel_emission, 0);
    const totalElectricityEmission = emissionData.reduce((sum, data) => sum + data.electricity_emission, 0);
    const totalMethaneEmission = emissionData.reduce((sum, data) => sum + data.methane_emission, 0);

    const [coalProduction, setCoalProduction] = useState('');
    const [fuelConsumption, setFuelConsumption] = useState('');
    const [electricityConsumption, setElectricityConsumption] = useState('');
    const [selectedCoalMine, setSelectedCoalMine] = useState('');
    const [totalEmission, setTotalEmission] = useState('');
    const [perCapitaEmission, setPerCapitaEmission] = useState('');
    const [numEmployees, setNumEmployees] = useState('');
    const [carbonCredits, setCarbonCredits] = useState('');
    const [afforestationArea, setAfforestationArea] = useState('');
    const coalMines = [...new Set(emissionData.map((mine) => mine.mine_name))];
    

    const calculateEmission = () => {
        const coalEmission = parseFloat(coalProduction) * 2.86;
        const fuelEmission = parseFloat(fuelConsumption) * 2.31;
        const electricityEmission = parseFloat(electricityConsumption) * 0.92;
    
        const total = coalEmission + fuelEmission + electricityEmission;
        setTotalEmission(total.toFixed(2));
    
        if (numEmployees) {
          const perCapita = total / parseInt(numEmployees);
          setPerCapitaEmission(perCapita.toFixed(2));
        }
    
        const estimatedCredits = total * 10;
        setCarbonCredits(estimatedCredits.toFixed(2));
      };

      useEffect(() => {
        calculateEmission();
      }, [coalProduction, fuelConsumption, electricityConsumption, numEmployees]);


      const getTableCellData = (data, selectedChartOption) => {
        if (selectedChartOption === 'total_emission') {
            return data.total_emission.toLocaleString();
        } else if (selectedChartOption === 'methane_emission') {
            return data.methane_emission.toLocaleString();
        }
        return ''; // Default case if needed
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: 'rgba(255, 255, 255,  0.9)', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <p className="label">{`${label} : ${payload[0].value.toLocaleString()}`}</p> 
                </div>
            );
        }

        return null;
    };
    const prepareChartData = () => {
      return Object.keys(yearData).map(year => ({
          year,
          fuel_emission: yearData[year]["fuel emission"],
          electricity_emission: yearData[year]["electricity emission"],
          total_emission: yearData[year]["total emission"],
          methane_emission: yearData[year]["methane emission (m3)"],
      }));
  };
  
   const lineChartData = prepareChartData();


   const [selectedLineChartEmission, setSelectedLineChartEmission] = useState('total_emission');

const handleLineChartEmissionChange = (event) => {
    setSelectedLineChartEmission(event.target.value);
};

  
    const [minY, maxY] = useMemo(() => {
        const values = lineChartData.map(item => item[selectedLineChartEmission]);
        const calculatedMin = Math.min(...values);
        const adjustedMin = calculatedMin > 0 ? calculatedMin * 0.95 : calculatedMin - (Math.abs(calculatedMin) * 0.05); 
        return [adjustedMin, Math.max(...values)];
    }, [lineChartData, selectedLineChartEmission]); 

    // Enhanced Tooltip for Line Chart
    const CustomLineChartTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
          return (
              <div className="custom-tooltip" style={{ backgroundColor: 'rgba(255, 255, 255,  0.9)', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                  <p className="label">{`Year: ${label}`}</p>
                  <p className="label">{`${selectedLineChartEmission}: ${payload[0].value.toLocaleString()} tons CO2e`}</p> 
              </div>
          );
      }
      return null;
  };

  // Formatter for Y-axis labels
  const formatYAxis = (value) => {
      if (value >= 1000000) {
          return `${(value / 1000000).toFixed(1)}M tons CO2e`;
      } else if (value >= 1000) {
          return `${(value / 1000).toFixed(1)}K tons CO2e`;
      }
      return `${value} tons CO2e`;
  };
  

    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: '#3f51b5' }}>
                Emission Summary
            </Typography>

            <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
                <Grid item> 
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="year-select-label">Year</InputLabel>
                        <Select
                            labelId="year-select-label"
                            id="year-select"
                            value={selectedYear}  
                            label="Year"
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            <MenuItem value="2023">2023</MenuItem> 
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="chart-option-label">Chart Option</InputLabel>
                        <Select
                            labelId="chart-option-label"
                            id="chart-option"
                            value={selectedChartOption}
                            label="Chart Option"
                            onChange={(e) => setSelectedChartOption(e.target.value)}
                        >
                            <MenuItem value="total_emission">Total Carbon Emission</MenuItem>
                            <MenuItem value="methane_emission">Methane Emission</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container spacing={3} justifyContent="center" mt={2}>
                <Grid item xs={3}>
                    <Paper 
                        elevation={3} 
                        sx={{
                            p: 3, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            backgroundColor: '#fff',
                            borderRadius: '15px',
                            transition: 'transform 0.3s, box-shadow 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.08)', 
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)', 
                            },
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 2, color: '#3f51b5' }}>Total Carbon Emission</Typography> 
                        <Typography variant="h5" sx={{ transition: 'color 0.3s' , '&:hover': { color: '#0288d1' } }}> 
                            <CountUp end={totalCarbonEmission} duration={2} separator="," />
                        </Typography>
                        <Typography variant="body2" color="textSecondary">tons of CO2</Typography> {/* Add unit */}
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            borderRadius: '15px',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.08)',
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
                            },
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 2, color: '#388e3c' }}>Total Fuel Emission</Typography>
                        <Typography variant="h5" sx={{ transition: 'color 0.3s', '&:hover': { color: '#43a047' } }}>
                            <CountUp end={totalFuelEmission} duration={2} separator="," />
                        </Typography>
                        <Typography variant="body2" color="textSecondary">tons of CO2</Typography> 
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper 
                        elevation={3} 
                        sx={{
                            p: 3, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            backgroundColor: '#fff',
                            borderRadius: '15px',
                            transition: 'transform 0.3s, box-shadow 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.08)', 
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)', 
                            },
                        }}
                    >
                         <Typography variant="h6" sx={{ mb: 2, color: '#f57c00' }}>Total Electricity Emission</Typography>
                        <Typography variant="h5" sx={{ transition: 'color 0.3s', '&:hover': { color: '#fb8c00' } }}>
                            <CountUp end={totalElectricityEmission} duration={2} separator="," />
                        </Typography>
                        <Typography variant="body2" color="textSecondary">tons of CO2</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper 
                        elevation={3} 
                        sx={{
                            p: 3, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            backgroundColor: '#fff',
                            borderRadius: '15px',
                            transition: 'transform 0.3s, box-shadow 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.08)', 
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)', 
                            },
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 2, color: '#d32f2f' }}>Total Methane Emission</Typography>
                        <Typography variant="h5" sx={{ transition: 'color 0.3s' , '&:hover': { color: '#e53935' } }}>
                            <CountUp end={totalMethaneEmission} duration={2} separator="," />
                        </Typography>
                        <Typography variant="body2" color="textSecondary">tons of CH4</Typography> 
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={2} mt={4}>
                <Grid item xs={6}>
                    <Paper elevation={3} sx={{ p: 2, height: 300, borderRadius: '10px', backgroundColor: '#fafafa',transition: 'transform 0.3s, box-shadow 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.02)', 
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)', 
                            }, }}> 
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={emissionData}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="mine_name" fontSize={7} interval={5} angle={-45} textAnchor='end' />
                                <YAxis fontSize={7} label={{ value: selectedChartOption === 'total_emission' ? 'Total Carbon Emission (ton)' : 'Methane Emission (ton)', angle: -90, position: 'insideLeft' }} />
                                <Tooltip content={<CustomTooltip />} /> 
                                <Legend />
                                <Bar dataKey={selectedChartOption} fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper elevation={3} sx={{ p: 2, height: 300, borderRadius: '10px', backgroundColor: '#fafafa',transition: 'transform 0.3s, box-shadow 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.02)', 
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)', 
                            }, }}>
                        <TableContainer sx={{ maxHeight: 300 }}>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f5f5f5', '&:hover': { backgroundColor: '#e0e0e0' } }}>
                                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', color: '#3f51b5' }}>Mine Name</TableCell>
                                        <TableCell 
                                            align="right" 
                                            sx={{ 
                                                fontWeight: 'bold', 
                                                fontSize: '1rem', 
                                                color: '#3f51b5',
                                                width: '50%' // Adjust this value as needed
                                            }}
                                        >
                                            {selectedChartOption === 'total_emission' ? 'Total Carbon Emission' : 'Total Methane Emission'}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* ... (rest of the table body remains the same) */}
                                    {emissionData.map((data, index) => (
                                        <TableRow key={data.sno} sx={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff', '&:hover': { backgroundColor: '#f0f0f0' }, transition: 'background-color 0.3s' }}>
                                            <TableCell component="th" scope="row" sx={{ fontSize: '0.875rem', padding: '8px' }}>{data.mine_name}</TableCell>
                                            <TableCell align="right" sx={{ fontSize: '0.875rem', padding: '8px' }}>
                                                {getTableCellData(data, selectedChartOption)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>


           {/* Emission Calculator */}
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '10px', backgroundColor: '#fafafa',transition: 'transform 0.3s, box-shadow 0.3s', 
                            '&:hover': {
                                transform: 'scale(1.02)', 
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)', 
                            }, }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>Emission Calculator</Typography>

            <Grid container spacing={2}>
              {/* Coal Production */}
              <Grid item xs={4}>
                <TextField
                  label="Coal Production (in MT)"
                  type="number"
                  value={coalProduction}
                  onChange={(e) => setCoalProduction(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <IconButton>
                        <Terrain />
                      </IconButton>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true, // This will prevent overlapping
                  }}
                  fullWidth
                />
              </Grid>

              {/* Fuel Consumption */}
              <Grid item xs={4}>
                <TextField
                  label="Fuel Consumption (Liters)"
                  type="number"
                  value={fuelConsumption}
                  onChange={(e) => setFuelConsumption(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <IconButton>
                        <LocalGasStation />
                      </IconButton>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true, // Prevent overlapping of label
                  }}
                  fullWidth
                />
              </Grid>

              {/* Electricity Consumption */}
              <Grid item xs={4}>
                <TextField
                  label="Electricity Consumption (kWh)"
                  type="number"
                  value={electricityConsumption}
                  onChange={(e) => setElectricityConsumption(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <IconButton>
                        <FlashOn />
                      </IconButton>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true, // Prevent overlapping
                  }}
                  fullWidth
                />
              </Grid>

              {/* Number of Employees */}
              <Grid item xs={4}>
                <TextField
                  label="Number of Employees"
                  type="number"
                  value={numEmployees}
                  onChange={(e) => setNumEmployees(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <IconButton>
                        <People />
                      </IconButton>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true, // Prevent overlapping
                  }}
                  fullWidth
                />
              </Grid>

              {/* Select Coal Mine */}
              <Grid item xs={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel shrink>Select Coal Mine</InputLabel> {/* Added shrink here */}
                  <Select
                    value={selectedCoalMine}
                    onChange={(e) => setSelectedCoalMine(e.target.value)}
                    label="Select Coal Mine"
                  >
                    <MenuItem value="">Select a coal mine</MenuItem>
                    {coalMines.map((mine, index) => (<MenuItem key={index} value={mine}>{mine}
                    </MenuItem>))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Calculate Button */}
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        variant="contained" 
        sx={{ 
          backgroundColor: '#007bff', 
          color: 'white',             
          borderRadius: '10px',       
          fontWeight: 'bold',         
          textTransform: 'none',     
          padding: '15px 30px',       // Increased padding for a larger size
          fontSize: '1.2rem',         // Increased font size for larger text
          '&:hover': {
            backgroundColor: '#0056b3', 
          },
        }}
        onClick={calculateEmission} 
        fullWidth
      >
        Calculate Emission
      </Button>
    </Grid>


              {/* Total Emission */}
              <Grid item xs={4}>
                <Paper elevation={2} sx={{ p: 2, textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: '10px' }}>
                  <Typography variant="h6">Total Emission (tons of CO2)</Typography>
                  <Typography variant="h5" color="primary">
                    <CountUp end={parseFloat(totalEmission)} duration={2} />
                  </Typography>
                </Paper>
              </Grid>

              {/* Per Capita Emission */}
              <Grid item xs={4}>
                <Paper elevation={2} sx={{ p: 2, textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: '10px' }}>
                  <Typography variant="h6">Per Capita Emission</Typography>
                  <Typography variant="h5" color="primary">
                    <CountUp end={parseFloat(perCapitaEmission)} duration={2} />
                  </Typography>
                </Paper>
              </Grid>

              {/* Carbon Credits */}
              <Grid item xs={4}>
                <Paper elevation={2} sx={{ p: 2, textAlign: 'center', backgroundColor: '#e3f2fd', borderRadius: '10px' }}>
                  <Typography variant="h6">Carbon Credits Estimation </Typography>
                  <Typography variant="h5" color="primary">
                    <CountUp end={parseFloat(carbonCredits)} duration={2} />
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            
          </Paper>
          
           {/* Enhanced Yearly Emissions Section */}
           <Grid container spacing={2} mt={4}>
           <Grid item xs={12}>
        <Paper elevation={3} sx={{ 
            p: 3, 
            borderRadius: '10px', 
            backgroundColor: '#fafafa',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' 
        }}>
            <Typography variant="h5" align="center" gutterBottom sx={{
                mb: 2,
                fontWeight: 'bold',
                color: '#3f51b5'
            }}>
                Yearly Emissions
            </Typography>

           {/* Dropdown to select emission type */}
    <FormControl fullWidth variant="outlined" sx={{
        marginBottom: 2,
        '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
        },
        '& .MuiInputLabel-root': {
            backgroundColor: '#fff',
        }
    }}>
        <InputLabel id="emission-select-label">Select Emission Type</InputLabel>
        <Select
            labelId="emission-select-label"
            id="emission-select"
            value={selectedLineChartEmission}
            label="Select Emission Type"
            onChange={handleLineChartEmissionChange}
        >
            <MenuItem value="total_emission">Total Carbon Emission</MenuItem>
            <MenuItem value="fuel_emission">Fuel Emission</MenuItem>
            <MenuItem value="electricity_emission">Electricity Emission</MenuItem>
            <MenuItem value="methane_emission">Methane Emission</MenuItem>
        </Select>
    </FormControl>

    <ResponsiveContainer width="100%" height={300}>
        <BarChart
            data={lineChartData}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" fontSize={10} />
            <YAxis fontSize={10} tickFormatter={(value) => value.toLocaleString()} />
            <Tooltip />
            <Legend />
            <Bar dataKey={selectedLineChartEmission} fill="#8884d8">
                <LabelList dataKey={selectedLineChartEmission} position="top" />
            </Bar>
        </BarChart>
    </ResponsiveContainer>
        </Paper>
    </Grid>
            </Grid>
        </Grid>
      </Grid>     

        </div>
    );
}

export default Dashboard;
