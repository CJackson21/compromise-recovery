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

function Devices() {
    // Memoize styles for the cards
    const cardStyles = React.useMemo(
        () => ({
            p: 3,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 250,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
        }),
        []
    );

    const securitySteps = React.useMemo(
        () => [
            '✅ Turn Off Location Services - Prevent apps and system services from tracking your movements.',
            '✅ Check for Tracking Apps or Spyware - Look for unknown apps or settings that allow remote access.',
            '✅ Remove Unwanted Devices - Check if your phone or watch is connected to any old accounts.',
            '✅ Turn Off Bluetooth & Wi-Fi When Not in Use - Prevent unauthorized tracking and connections.',
            "✅ Factory Reset if Necessary - If you're unsure whether your device is fully secure, a factory reset ensures a clean start.",
        ],
        []
    );

    return (
        <Grid container spacing={8} justifyContent="center" className="w-full pt-8">
            {/* Section Heading */}
            <Grid size={12} textAlign="center">
                <DevicesIcon sx={{ fontSize: 65, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                    Secure Your Devices
                </Typography>
            </Grid>

            {/* Introductory Section */}
            <Grid sx={{ xs: 12, sm: 10, md: 8 }}>
                <Paper elevation={3} sx={cardStyles}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                        Securing Your Personal Devices
                    </Typography>
                    <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
                        Your personal devices store sensitive information, track your location, and
                        connect to online accounts. If someone has access to your phone, laptop, or
                        smartwatch, they may be able to monitor your activity, track your movements,
                        or even control your accounts remotely. This section provides step-by-step
                        guidance on how to lock down your devices, prevent tracking, and remove any
                        unwanted access.
                    </Typography>
                </Paper>
            </Grid>

            {/* Secure Phone Section */}
            <Grid sx={{ xs: 12, sm: 10, md: 8, pb: 10 }}>
                <Paper elevation={3} sx={cardStyles}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                        Securing Your Phone & Smartwatch
                    </Typography>
                    <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
                        Since phones and smartwatches constantly track location and sync with other
                        devices, take these steps to fully secure them:
                    </Typography>
                    <List>
                        {securitySteps.map((step, index) => (
                            <ListItem key={index}>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary={step} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Devices;
