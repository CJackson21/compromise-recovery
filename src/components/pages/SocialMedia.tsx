import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaSnapchatGhost } from 'react-icons/fa';

interface PlatformData {
    name: string;
    Icon?: React.ComponentType<any>;
    color?: string;
    isSocialIcon?: boolean;
    url?: string;
    sxExtra?: object;
}

export default function SocialMedia() {
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

    // mui's library at this time does not have a
    // snapchat icon, so the one used in this project
    // was pulled from another library, this just
    // makes it look cleaner
    const SnapchatIcon = React.useMemo(() => {
        return () => (
            <Box
                sx={{
                    height: 60,
                    width: 60,
                    borderRadius: '10%',
                    backgroundColor: '#FFFC00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 0,
                }}
            >
                <FaSnapchatGhost style={{ fontSize: 40, color: 'black ' }} />
            </Box>
        );
    }, []);

    // Define the data for each social media platform
    const socialMediaData: PlatformData[] = React.useMemo(
        () => [
            {
                name: 'Facebook',
                Icon: FacebookIcon,
                color: '#1877F2',
            },
            {
                name: 'Instagram',
                Icon: InstagramIcon,
                color: '#E4405F',
            },
            {
                name: 'Twitter',
                Icon: TwitterIcon,
                color: '#1DA1F2',
            },
            {
                name: 'Snapchat',
                Icon: SnapchatIcon,
            },
        ],
        []
    );

    // Helper function to render the icon
    const renderIcon = React.useCallback((platform: PlatformData) => {
        if (platform.Icon) {
            const IconComponent = platform.Icon;
            return (
                <IconComponent
                    style={{
                        fontSize: 55,
                        color: platform.color,
                        marginBottom: 8,
                    }}
                />
            );
        }
        return null;
    }, []);

    // Wrap every card with Link for internal navigation
    const renderedCards = React.useMemo(() => {
        return socialMediaData.map((platform) => {
            const cardContent = (
                <Paper
                    elevation={3}
                    sx={{
                        ...cardStyles,
                        cursor: 'pointer',
                    }}
                >
                    {renderIcon(platform)}
                </Paper>
            );

            return (
                <Link
                    key={platform.name}
                    to={`/guide/${platform.name.toLowerCase()}`}
                    style={{ textDecoration: 'none' }}
                >
                    {cardContent}
                </Link>
            );
        });
    }, [socialMediaData, cardStyles]);

    return (
        <Grid container spacing={8} justifyContent="center" className="w-full">
            {/* Section Heading */}
            <Grid size={12} textAlign="center">
                <LocationOnIcon sx={{ fontSize: 65, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                    Protect Your Family's Digital Security
                </Typography>
            </Grid>

            {/* Introductory Section */}
            <Grid container justifyContent="center" size={{ xs: 12, sm: 10, md: 8 }}>
                <Paper elevation={3} sx={{ backgroundColor: 'white', ...cardStyles }}>
                    <Typography variant="body1" className="text-center" gutterBottom>
                        In today's digital world, protecting your family's online presence is more
                        important than ever. Below, you'll find links to official guides from
                        Facebook, Instagram, Snapchat, and Twitter/X. These resources provide
                        step-by-step instructions on strengthening your account security, disabling
                        location tracking, and managing who can see your activity. Whether you want
                        to fine-tune your privacy settings, secure your accounts, or log out from
                        unrecognized devices, these guides will help you stay in control of your
                        digital footprint.
                    </Typography>
                </Paper>
            </Grid>

            {/* Social Media Icons and Links */}
            <Grid size={12} textAlign="center">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={4}
                    flexWrap="wrap"
                >
                    {renderedCards}
                </Box>
            </Grid>
        </Grid>
    );
}
