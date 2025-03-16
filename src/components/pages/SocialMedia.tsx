import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LockIcon from '@mui/icons-material/Lock';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SocialIcon } from 'react-social-icons';

import { guideLinks } from '../../data/guideLinks';

export default function SocialMedia() {
    // Memoize styles for cards
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

    // Memoize styles for typography
    const linkTypographyStyle = React.useMemo(
        () => ({
            display: 'block',
            textAlign: 'center',
            margin: '4 0',
        }),
        []
    );

    return (
        <Grid container spacing={8} justifyContent="center" className="w-full">
            {/* Section Heading */}
            <Grid size={12} textAlign="center">
                <LockIcon sx={{ fontSize: 65, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                    Protect Your Family's Digital Security
                </Typography>
            </Grid>

            {/* Merged Introductory Section */}
            <Grid container justifyContent="center">
                <Grid sx={{ xs: 12, sm: 10, md: 8 }}>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 2, backgroundColor: 'white' }}>
                        <Typography variant="body1" className="text-center" gutterBottom>
                            In today's digital world, protecting your family's online presence is
                            more important than ever. Below, you'll find links to official guides
                            from Facebook, Instagram, Snapchat, and Twitter/X. These resources
                            provide step-by-step instructions on strengthening your account
                            security, disabling location tracking, and managing who can see your
                            activity. Whether you want to fine-tune your privacy settings, secure
                            your accounts, or log out from unrecognized devices, these guides will
                            help you stay in control of your digital footprint.
                        </Typography>
                    </Paper>
                </Grid>
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
                    {/* Facebook */}
                    <Paper elevation={3} sx={cardStyles}>
                        <FacebookIcon sx={{ fontSize: 55, color: '#1877F2', mb: 1 }} />
                        <Box sx={{ mt: 1 }}>
                            {guideLinks.facebook.map((link, index) => (
                                <Typography key={index} variant="body2" sx={linkTypographyStyle}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {link.label}
                                    </a>
                                </Typography>
                            ))}
                        </Box>
                    </Paper>

                    {/* Instagram */}
                    <Paper elevation={3} sx={cardStyles}>
                        <InstagramIcon sx={{ fontSize: 55, color: '#E4405F', mb: 1 }} />
                        <Box sx={{ mt: 1 }}>
                            {guideLinks.instagram.map((link, index) => (
                                <Typography key={index} variant="body2" sx={linkTypographyStyle}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {link.label}
                                    </a>
                                </Typography>
                            ))}
                        </Box>
                    </Paper>

                    {/* Twitter */}
                    <Paper elevation={3} sx={cardStyles}>
                        <TwitterIcon sx={{ fontSize: 55, color: '#1DA1F2', mb: 1 }} />
                        <Box sx={{ mt: 1 }}>
                            {guideLinks.twitter.map((link, index) => (
                                <Typography key={index} variant="body2" sx={linkTypographyStyle}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {link.label}
                                    </a>
                                </Typography>
                            ))}
                        </Box>
                    </Paper>

                    {/* Snapchat */}
                    <Paper elevation={3} sx={{ ...cardStyles, mb: { xs: 4, md: 0 } }}>
                        <SocialIcon
                            url="https://snapchat.com"
                            style={{
                                height: 55,
                                width: 55,
                                marginBottom: 8,
                                pointerEvents: 'none',
                            }}
                        />
                        <Box sx={{ mt: 1 }}>
                            {guideLinks.snapchat.map((link, index) => (
                                <Typography key={index} variant="body2" sx={linkTypographyStyle}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {link.label}
                                    </a>
                                </Typography>
                            ))}
                        </Box>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
}
