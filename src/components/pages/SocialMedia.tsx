import React from 'react';

import { Link } from 'react-router-dom';

// Layout
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import XIcon from '@mui/icons-material/X';
import { Snapchat } from 'iconsax-reactjs';

interface PlatformData {
    name: string;
    icon?: React.ComponentType<any>;
    color?: string;
    isSocialIcon?: boolean;
    url?: string;
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

    // Define the data for each social media platform
    const socialMediaData: PlatformData[] = React.useMemo(
        () => [
            {
                name: 'Facebook',
                icon: FacebookIcon,
                color: '#1877F2',
                url: 'facebook',
            },
            {
                name: 'Instagram',
                icon: InstagramIcon,
                color: '#E4405F',
                url: 'instagram',
            },
            {
                name: 'X/Twitter',
                icon: XIcon,
                color: '#000000',
                url: 'twitter',
            },
            {
                name: 'Snapchat',
                icon: Snapchat,
                color: '#FFD700',
                url: 'snapchat',
            },
        ],
        []
    );

    // Helper function to render the icon
    const renderIcon = React.useCallback((platform: PlatformData) => {
        if (!platform.icon) {
            return null;
        }

        const IconComponent = platform.icon;

        const isIconsax = IconComponent === Snapchat;

        if (isIconsax) {
            return (
                <IconComponent
                    size="55"
                    color={platform.color}
                    variant="Bold"
                    style={{ marginBottom: 8 }}
                />
            );
        }
        return (
            <IconComponent
                style={{
                    fontSize: 55,
                    color: platform.color,
                    marginBottom: 8,
                }}
            />
        );
    }, []);

    // Wrap every card with Link for internal navigation
    const renderedCards = React.useMemo(
        () =>
            socialMediaData.map((platform) => (
                <Link
                    key={platform.name}
                    to={`/social/${platform.url}`}
                    style={{ textDecoration: 'none' }}
                >
                    <Paper elevation={3} sx={{ ...cardStyles, cursor: 'pointer' }}>
                        {renderIcon(platform)}
                        <Typography fontWeight="bold">{platform.name}</Typography>
                    </Paper>
                </Link>
            )),
        [socialMediaData, cardStyles]
    );

    return (
        <Grid container spacing={8} className="justify-center w-full pt-8">
            {/* Section Heading */}
            <Grid size={12} className="text-center">
                <LocationOnIcon sx={{ fontSize: 65, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                    Protect Your Family's Digital Security
                </Typography>
            </Grid>

            {/* Introductory Section */}
            <Grid sx={{ xs: 12, sm: 10, md: 8 }}>
                <Paper elevation={3} sx={{ ...cardStyles }}>
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
            <Grid size={12} className="text-center pt-15">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={6}
                    flexWrap="wrap"
                >
                    {renderedCards}
                </Box>
            </Grid>
        </Grid>
    );
}
