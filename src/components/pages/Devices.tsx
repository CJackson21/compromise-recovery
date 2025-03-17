import React from 'react';

// Icons
import DevicesIcon from '@mui/icons-material/Devices';

import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function Devices() {
    return (
        <Grid container spacing={8} justifyContent="center" className="w-full pt-8">
            {/* Section Heading */}
            <Grid size={12} textAlign="center">
                <DevicesIcon sx={{ fontSize: 65, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                    Securing Your Devices: Phones, Laptops & More
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Devices;
