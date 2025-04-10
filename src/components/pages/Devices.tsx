import React from 'react';

// Icons
import DevicesIcon from '@mui/icons-material/Devices';
import ListItemIcon from '@mui/material/ListItemIcon';

// Layout components
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Guide data
import {
    deviceSecurityGuide,
    computerSecurityGuide,
    hiddenDeviceGuide,
} from '../../data/deviceSecurityGuide.ts';

const allSecurityGuides = [deviceSecurityGuide, computerSecurityGuide, hiddenDeviceGuide];

function Devices() {
    const cardStyles = React.useMemo(
        () => ({
            p: 3,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 250,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
        }),
        []
    );

    return (
        <Grid container spacing={8} className="justify-center w-full pt-8">
            {/* Section Heading */}
            <Grid size={12} className="text-center">
                <DevicesIcon sx={{ fontSize: 65, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                    Secure Your Devices
                </Typography>
            </Grid>

            {/* Introductory Section */}
            <Grid sx={{ xs: 12, sm: 10, md: 8 }}>
                <Paper elevation={3} sx={cardStyles}>
                    <Box sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
                        <Typography variant="h5" fontWeight="bold">
                            Securing Your Personal Devices
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Your personal devices store sensitive information, track your location,
                            and connect to online accounts. If someone has access to your phone,
                            laptop, or smartwatch, they may be able to monitor your activity, track
                            your movements, or even control your accounts remotely. This section
                            provides step-by-step guidance on how to lock down your devices, prevent
                            tracking, and remove any unwanted access.
                        </Typography>
                    </Box>
                </Paper>
            </Grid>

            {/* Render Each Guide Card */}
            {allSecurityGuides.map((guide, index) => (
                <Grid key={index} size={12} sx={{ pb: 6 }}>
                    <Paper elevation={3} sx={cardStyles}>
                        <Box sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
                            <Typography variant="h5" fontWeight="bold">
                                {guide.title}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {guide.intro}
                            </Typography>
                        </Box>
                        {/* The List will take full width and be left aligned */}
                        <List sx={{ width: '100%', textAlign: 'left' }}>
                            {guide.steps.map((step, idx) => (
                                <ListItem key={idx} disableGutters>
                                    <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }} />
                                    <ListItemText primary={step} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default Devices;
