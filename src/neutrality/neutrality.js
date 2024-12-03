import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Container,
    Grid,
    Grow,
    Fade,
} from '@mui/material';
import {
    Co2,
    Grass,
    ElectricCar,
    WbSunny,
    Factory,
} from '@mui/icons-material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

function CarbonNeutralityCalculator() {
    const [selectedMine, setSelectedMine] = useState('');
    const [mineOptions, setMineOptions] = useState([]);
    const [totalEmission, setTotalEmission] = useState(0);
    const [methaneEmission, setMethaneEmission] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const calculatePathwayValues = () => {
        const absorbedCO2_PCC = (70 / 100) * totalEmission;
        const remainingCO2_PCC = (40 / 100) * totalEmission;

        const absorbedCO2_Afforestation = (0.05 / 100) * remainingCO2_PCC;
        const remainingCO2_Afforestation = remainingCO2_PCC - absorbedCO2_Afforestation;

        const decreasedEmission_EV = (18 / 100) * remainingCO2_Afforestation;
        const remainingEmission_EV = remainingCO2_Afforestation - decreasedEmission_EV;

        const decreasedEmission_Solar = (11.95 / 100) * remainingEmission_EV;
        const remainingEmission_Solar = remainingEmission_EV - decreasedEmission_Solar;

        return {
            absorbedCO2_PCC,
            remainingCO2_PCC,
            absorbedCO2_Afforestation,
            remainingCO2_Afforestation,
            decreasedEmission_EV,
            remainingEmission_EV,
            decreasedEmission_Solar,
            remainingEmission_Solar,
        };
    };

    const pathwayValues = calculatePathwayValues();

    useEffect(() => {
        setTimeout(() => setLoaded(true), 300);

        fetch('/emission_data.json')
            .then((response) => response.json())
            .then((data) => {
                const mineNames = data.map((entry) => entry.mine_name);
                setMineOptions(mineNames);

                if (selectedMine) {
                    const selectedMineData = data.find(
                        (entry) => entry.mine_name === selectedMine
                    );
                    if (selectedMineData) {
                        setTotalEmission(Number(selectedMineData.total_emission) || 0);
                        setMethaneEmission(Number(selectedMineData.methane_emission) || 0);
                    }
                }
            })
            .catch((error) => {
                console.error('Error fetching mine data:', error);
            });
    }, [selectedMine]);

    const handleMineChange = (event) => {
        setSelectedMine(event.target.value);
    };

    return (
        <Container maxWidth="md">
            <Grow in={loaded}>
                <Box sx={{ bgcolor: '#f9f9f9', p: 4, mt: 4, borderRadius: 2, boxShadow: 4 }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Select a Mine:
                    </Typography>
                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel id="mine-select-label">Mine</InputLabel>
                        <Select
                            labelId="mine-select-label"
                            id="mine-select"
                            value={selectedMine}
                            label="Mine"
                            onChange={handleMineChange}
                        >
                            {mineOptions.map((mineName) => (
                                <MenuItem key={mineName} value={mineName}>
                                    {mineName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Fade in={loaded} timeout={500}>
                                <Box
                                    sx={{
                                        bgcolor: '#f0f0f0',
                                        p: 2,
                                        borderRadius: 2,
                                        width: 180,
                                        height: 120,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        boxShadow: 3,
                                    }}
                                >
                                    <Co2 fontSize="large" color="action" />
                                    <Typography variant="body1">Total CO2 Emission per year</Typography>
                                    <Typography variant="h6" sx={{ mt: 1 }}>
                                        {Number(totalEmission).toFixed(2)} tons of CO2
                                    </Typography>
                                </Box>
                            </Fade>
                        </Grid>
                        <Grid item>
                            <Fade in={loaded} timeout={1000}>
                                <Box
                                    sx={{
                                        bgcolor: '#f0f0f0',
                                        p: 2,
                                        borderRadius: 2,
                                        width: 180,
                                        height: 120,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        boxShadow: 3,
                                    }}
                                >
                                    <Factory fontSize="large" color="action" />
                                    <Typography variant="body1">Methane Emission per year</Typography>
                                    <Typography variant="h6" sx={{ mt: 1 }}>
                                        {Number(methaneEmission).toFixed(2)} m3 of CH4
                                    </Typography>
                                </Box>
                            </Fade>
                        </Grid>
                    </Grid>

                    <Typography variant="h6" align="center" gutterBottom sx={{ mt: 4 }}>
                        Pathway Options:
                    </Typography>

                    <Timeline position="alternate">
                        {[
                            {
                                title: 'Post Combustion Carbon Capture',
                                icon: <Co2 fontSize="large" color="primary" />,
                                values: [
                                    { label: 'Absorbed CO2:', value: pathwayValues.absorbedCO2_PCC.toFixed(2) + ' tons of CO2' },
                                    { label: 'Remaining CO2:', value: pathwayValues.remainingCO2_PCC.toFixed(2) + ' tons of CO2' },
                                ],
                            },
                            {
                                title: 'Afforestation',
                                icon: <Grass fontSize="large" color="success" />,
                                values: [
                                    { label: 'Absorbed CO2:', value: pathwayValues.absorbedCO2_Afforestation.toFixed(2) + ' tons of CO2' },
                                    { label: 'Remaining CO2:', value: pathwayValues.remainingCO2_Afforestation.toFixed(2) + ' tons of CO2' },
                                ],
                            },
                            {
                                title: 'Electric Vehicles',
                                icon: <ElectricCar fontSize="large" color="primary" />,
                                values: [
                                    { label: 'Decreased Emission:', value: pathwayValues.decreasedEmission_EV.toFixed(2) + ' tons of CO2' },
                                    { label: 'Remaining Emission:', value: pathwayValues.remainingEmission_EV.toFixed(2) + ' tons of CO2' },
                                ],
                            },
                            {
                                title: 'Solar Power',
                                icon: <WbSunny fontSize="large" color="warning" />,
                                values: [
                                    { label: 'Decreased Emission:', value: pathwayValues.decreasedEmission_Solar.toFixed(2) + ' tons of CO2' },
                                    { label: 'Remaining Emission:', value: pathwayValues.remainingEmission_Solar.toFixed(2) + ' tons of CO2' },
                                ],
                            },
                        ].map((pathway) => (
                            <TimelineItem key={pathway.title}>
                                <TimelineSeparator>
                                    <TimelineDot>{pathway.icon}</TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Box
                                        sx={{
                                            bgcolor: '#e0e0e0',
                                            p: 3,
                                            borderRadius: 2,
                                            boxShadow: 2,
                                            mb: 2,
                                            transition: 'background-color 0.3s',
                                            '&:hover': {
                                                bgcolor: '#d0d0d0',
                                            },
                                        }}
                                    >
                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                            {pathway.title}
                                        </Typography>
                                        {pathway.values.map((valueItem) => (
                                            <Typography variant="body2" key={valueItem.label}>
                                                {valueItem.label} <strong>{valueItem.value}</strong>
                                            </Typography>
                                        ))}
                                    </Box>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Box>
            </Grow>
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
                        <Grid item>
                            <Fade in={loaded} timeout={1500}>
                                <Box
                                    sx={{
                                        bgcolor: '#f0f0f0',
                                        p: 2,
                                        borderRadius: 2,
                                        width: 180,
                                        height: 120,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        boxShadow: 3,
                                    }}
                                >
                                    <Co2 fontSize="large" color="action" />
                                    <Typography variant="body1">Total CO2 Emission per year</Typography>
                                    <Typography variant="h6" sx={{ mt: 1 }}>
                                        {totalEmission.toFixed(2)} tons of CO2
                                    </Typography>
                                </Box>
                            </Fade>
                        </Grid>
                        <Grid item>
                            <Fade in={loaded} timeout={2000}>
                                <Box
                                    sx={{
                                        bgcolor: '#f0f0f0',
                                        p: 2,
                                        borderRadius: 2,
                                        width: 180,
                                        height: 120,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        boxShadow: 3,
                                    }}
                                >
                                    <Co2 fontSize="large" color="action" />
                                    <Typography variant="body1">Total CO2 Offset per year</Typography>
                                    <Typography variant="h6" sx={{ mt: 1 }}>
                                        {totalEmission.toFixed(2)} tons of CO2
                                    </Typography>
                                </Box>
                            </Fade>
                        </Grid>
                    </Grid>

                    <Typography variant="h6" align="center" sx={{ mt: 3, fontWeight: 'bold', color: 'green' }}>
                        Carbon Neutrality Achieved
                    </Typography>
        </Container>
    );
}

export default CarbonNeutralityCalculator;
