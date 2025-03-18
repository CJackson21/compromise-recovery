import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SocialIcon } from 'react-social-icons';

import { guideLinks } from '../../data/guideLinks';

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

    const linkTypographyStyle = React.useMemo(
        () => ({
            display: 'block',
            textAlign: 'center',
            margin: '4px 0',
        }),
        []
    );

    // Define the data for each social media platform
    const socialMediaData = React.useMemo(
        () => [
            {
                name: 'Facebook',
                Icon: FacebookIcon,
                color: '#1877F2',
                links: guideLinks.facebook,
            },
            {
                name: 'Instagram',
                Icon: InstagramIcon,
                color: '#E4405F',
                links: guideLinks.instagram,
            },
            {
                name: 'Twitter',
                Icon: TwitterIcon,
                color: '#1DA1F2',
                links: guideLinks.twitter,
            },
            {
                name: 'Snapchat',
                isSocialIcon: true,
                url: 'https://snapchat.com',
                links: guideLinks.snapchat,
                sxExtra: { mb: { xs: 4, md: 0 } },
            },
        ],
        []
    );

    // Memoize the mapped list of cards
    const renderedCards = React.useMemo(() => {
        return socialMediaData.map((platform) => (
            <Paper
                elevation={3}
                key={platform.name}
                sx={{
                    ...cardStyles,
                    ...(platform.sxExtra || {}),
                }}
            >
                {platform.isSocialIcon ? (
                    <SocialIcon
                        url={platform.url}
                        style={{
                            height: 55,
                            width: 55,
                            marginBottom: 8,
                            pointerEvents: 'none',
                        }}
                    />
                ) : (
                    React.createElement(platform.Icon as React.ElementType, {
                        sx: { fontSize: 55, color: platform.color, mb: 1 },
                    })
                )}
                <Box sx={{ mt: 1 }}>
                    {platform.links.map((link, index) => (
                        <Typography key={index} variant="body2" sx={linkTypographyStyle}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'inherit', textDecoration: 'none' }}
                            >
                                {link.label}
                            </a>
                        </Typography>
                    ))}
                </Box>
            </Paper>
        ));
    }, [socialMediaData, cardStyles, linkTypographyStyle]);

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
