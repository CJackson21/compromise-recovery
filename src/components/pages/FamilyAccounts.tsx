import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { SocialIcon } from 'react-social-icons';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LockIcon from '@mui/icons-material/Lock';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function FamilyAccounts() {
    return (
        <Grid container spacing={6} justifyContent="center" className="w-full pt-6">
            {/* Section Heading */}
            <Grid size={12} textAlign="center">
                <LockIcon sx={{ fontSize: 65, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                    Protect Your Family's Digital Security
                </Typography>
            </Grid>

            {/* Family account intro section */}
            <Grid sx={{ xs: 12, sm: 10, md: 8 }}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: 2, backgroundColor: 'white' }}>
                    <Typography variant="body1" textAlign="center">
                        Social media and mobile apps often track and share more information than you
                        might realize. Location data, account recovery options, and privacy settings
                        can all impact your security. This section provides links to official guides
                        on how to adjust privacy settings, turn off location tracking, and secure
                        your accounts across popular platforms.
                    </Typography>
                </Paper>
            </Grid>
            {/* Social Media Icons */}
            <Grid size={12} textAlign="center">
                <FacebookIcon sx={{ fontSize: 50, color: '#1877F2', mx: 1 }} />
                <InstagramIcon sx={{ fontSize: 50, color: '#E4405F', mx: 1 }} />
                <TwitterIcon sx={{ fontSize: 50, color: '#1DA1F2', mx: 1 }} />
                <Box sx={{ mx: 1, display: 'inline-block' }}>
                    <SocialIcon url="https://snapchat.com" style={{ height: 50, width: 50 }} />
                </Box>
            </Grid>
        </Grid>
    );
}
