import React from 'react';
import { Link } from 'react-router-dom';

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

export default function Home() {
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

    const boxStyles = React.useMemo(
        () => ({
            width: '90%',
            minHeight: { xs: '20vh', lg: '25vh' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: '1rem',
            border: '4px solid black',
            background: 'linear-gradient(to bottom right, #c8f2c2, #a6c8ff, #5a85ff)',
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
        <Grid container spacing={6} className="justify-center w-full pt-1">
            {/* Discretionary Message */}
            <Grid size={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    className="text-red-500"
                    textAlign="center"
                >
                    If you feel you are in immediate danger, call 9-1-1
                </Typography>
            </Grid>

            {/* Intro Section */}
            <Grid size={12}>
                <Typography variant="h5" fontWeight="bold" className="text-center pb-4">
                    The resources available on this page are intended to help you take full control
                    of your digital presence.
                </Typography>

                <Grid container justifyContent="center">
                    <Grid size={{ xs: 12, sm: 10, md: 8 }}>
                        <Paper
                            elevation={3}
                            sx={{ p: 3, borderRadius: 2, backgroundColor: 'white' }}
                        >
                            <Typography variant="body1" className="text-center">
                                These resources provide practical tools and guidance for securing
                                your devices, online accounts, and even your physical location.
                                Whether you're looking to protect sensitive information, prevent
                                unauthorized access, or maintain privacy, these materials are
                                designed to be accessible for everyone. No matter your level of
                                expertise, these tools are here to support you in safeguarding your
                                digital and physical footprint effectively.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

            {/* Box Layout */}
            <Grid
                container
                size={12}
                sx={{
                    display: 'flex',
                    gap: 6,
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    justifyContent: 'center',
                }}
                className="w-full max-w-[1200px] px-4"
            >
                {/* Box 1: Social Media & Location Services */}
                <Box
                    component={Link}
                    to="/social"
                    sx={{ ...boxStyles, ...linkStyles }}
                    className="
                        w-[90%] xs:w-[80%] sm:w-1/2 md:w-1/4 
                        min-h-[20vh] lg:min-h-[25vh]
                        bg-gradient-to-br from-green-100 via-blue-200 to-blue-400 
                        flex flex-col items-center justify-center 
                        border-4 border-black 
                        text-center rounded-xl
                    "
                >
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
                <Box
                    component={Link}
                    to="/family"
                    sx={{ ...boxStyles, ...linkStyles }}
                    className="
                        w-[90%] xs:w-[80%] sm:w-1/2 md:w-1/4 
                        min-h-[20vh] lg:min-h-[25vh]
                        bg-gradient-to-br from-green-100 via-blue-200 to-blue-400 
                        flex flex-col items-center justify-center 
                        border-4 border-black 
                        text-center rounded-xl
                    "
                >
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
                <Box
                    component={Link}
                    to="/devices"
                    sx={{ ...boxStyles, ...linkStyles }}
                    className="
                        w-[90%] xs:w-[80%] sm:w-1/2 md:w-1/4 
                        min-h-[20vh] lg:min-h-[25vh]
                        bg-gradient-to-br from-green-100 via-blue-200 to-blue-400 
                        flex flex-col items-center justify-center 
                        border-4 border-black 
                        text-center rounded-xl
                    "
                >
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
                <Box
                    component={Link}
                    to="/physical"
                    sx={{ ...boxStyles, ...linkStyles }}
                    className="
                        w-[90%] xs:w-[80%] sm:w-1/2 md:w-1/4 
                        min-h-[20vh] lg:min-h-[25vh]
                        bg-gradient-to-br from-green-100 via-blue-200 to-blue-400 
                        flex flex-col items-center justify-center 
                        border-4 border-black 
                        text-center rounded-xl
                        mb-10 sm:mb-0
                    "
                >
                    <LockIcon sx={{ fontSize: '3rem', mb: 1 }} />
                    <Typography variant="h6" className="p-2">
                        Physical Security
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}
