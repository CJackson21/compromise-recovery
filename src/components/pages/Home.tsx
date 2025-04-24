import React from 'react';
import { Link } from 'react-router-dom';

// Layout components
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// Icons
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DevicesIcon from '@mui/icons-material/Devices';
import LockIcon from '@mui/icons-material/Lock';

function Home() {
    // Memoize styles
    const linkStyles = React.useMemo(
        () => ({
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            },
            '&:focus, &:active': {
                outline: 'none',
            },
        }),
        []
    );

    // Neumorphism Lite style for the boxes
    const boxStyles = React.useMemo(
        () => ({
            /* --- unchanged sizing --- */
            width: '100%',
            maxWidth: 280,
            height: '11em',

            /* --- flex layout --- */
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',

            /* --- neumorphism-lite look --- */
            borderRadius: '1.5rem',
            background: 'linear-gradient(145deg, #f5f7fa 0%, #e9edf3 100%)',
            p: 3,
            boxShadow: `
            8px 8px 16px rgba(0, 0, 0, 0.08),   /* darker bottom-right */
            -8px -8px 16px rgba(255, 255, 255, 0.9), /* lighter top-left */
            inset 0 0 0 1px rgba(0, 0, 0, 0.02),     /* faint inner ring */
            inset 0 0 0 2px rgba(255, 255, 255, 0.6) /* faint highlight ring */
          `,
            transition: 'transform 0.18s ease, box-shadow 0.18s ease',

            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: `
              4px 4px 12px rgba(0, 0, 0, 0.12),
              -4px -4px 12px rgba(255, 255, 255, 0.95),
              inset 0 0 0 1px rgba(0, 0, 0, 0.02),
              inset 0 0 0 2px rgba(255, 255, 255, 0.6)
            `,
            },
            '&:active': {
                transform: 'translateY(-2px)',
            },

            /* --- icon & text tweaks --- */
            '& svg': {
                fontSize: '3rem',
                color: '#4c6ef5', // accent the icon a bit
            },
            '& .MuiTypography-root': {
                marginTop: '0.5rem',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#334155',
            },
        }),
        []
    );

    const arrowStyles = React.useMemo(
        () => ({
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            mx: { xs: 0, md: -5 },
        }),
        []
    );

    return (
        <Grid container spacing={1} className="justify-center">
            <Grid gap={6} className="pt-1 flex flex-col flex-wrap md:flex-nowrap">
                {/* Discretionary Message */}
                <Grid size={12} className="w-full display-flex justify-center">
                    <Typography variant="h4" fontWeight="bold" className="text-red-500 text-center">
                        If you feel you are in immediate danger, call 9-1-1
                    </Typography>
                </Grid>

                {/* Intro Section */}
                <Grid size={12} className="my-1">
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        className="text-center"
                        sx={{ mb: 3 }}
                    >
                        The resources available on this page are intended to help you take full
                        control of your digital presence.
                    </Typography>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 2, mb: 4 }}>
                        <Typography variant="body1" className="text-center">
                            These resources provide practical tools and guidance for securing your
                            devices, online accounts, and even your physical location. Whether
                            you're looking to protect sensitive information, prevent unauthorized
                            access, or maintain privacy, these materials are designed to be
                            accessible for everyone. No matter your level of expertise, these tools
                            are here to support you in safeguarding your digital and physical
                            footprint effectively.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Bottom Section: Box Layout */}
            <Grid
                sx={{
                    display: 'flex',
                    gap: 6,
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                }}
            >
                {/* Box 1: Social Media & Location Services */}
                <Box component={Link} to="/social" sx={{ ...boxStyles, ...linkStyles }}>
                    <LocationOnIcon sx={{ fontSize: '3rem', mb: 1 }} />
                    <Typography variant="h6" className="p-2">
                        Social Media & App Location Services
                    </Typography>
                </Box>

                {/* Arrow 1 */}
                <Box sx={arrowStyles}>
                    <TrendingFlatIcon sx={{ fontSize: '4rem' }} />
                </Box>

                {/* Box 2: Email and Family Accounts */}
                <Box component={Link} to="/family" sx={{ ...boxStyles, ...linkStyles }}>
                    <MailOutlineIcon sx={{ fontSize: '3rem', mb: 1 }} />
                    <Typography variant="h6" className="p-2">
                        Email and Family Accounts
                    </Typography>
                </Box>

                {/* Arrow 2 */}
                <Box sx={arrowStyles}>
                    <TrendingFlatIcon sx={{ fontSize: '4rem' }} />
                </Box>

                {/* Box 3: Devices */}
                <Box component={Link} to="/devices" sx={{ ...boxStyles, ...linkStyles }}>
                    <DevicesIcon sx={{ fontSize: '3rem', mb: 1 }} />
                    <Typography variant="h6" className="p-2">
                        All Devices e.g. Laptop and Phones
                    </Typography>
                </Box>

                {/* Arrow 3 */}
                <Box sx={arrowStyles}>
                    <TrendingFlatIcon sx={{ fontSize: '4rem' }} />
                </Box>

                {/* Box 4: Physical Security */}
                <Box component={Link} to="/physical" sx={{ ...boxStyles, ...linkStyles, mb: 4 }}>
                    <LockIcon sx={{ fontSize: '3rem', mb: 1 }} />
                    <Typography variant="h6" className="p-2">
                        Physical Security
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Home;
