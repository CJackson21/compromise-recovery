// SocialMediaGuidePage.tsx
import React from 'react';

import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';

import { socialMediaGuides } from '../../data/socialMediaGuides.ts';

interface Section {
    title: string;
    description?: string;
    steps: string[];
    images?: string[];
    link?: string;
}

interface Guide {
    name: string;
    steps: Section[];
}

export default function SocialMediaGuidePage() {
    const { platform } = useParams();
    const guide: Guide | undefined = platform ? socialMediaGuides[platform] : undefined;

    if (!guide) {
        return (
            <Box p={4}>
                <Typography variant="h4" color="error">
                    Platform not found.
                </Typography>
            </Box>
        );
    }

    return (
        <Box p={4}>
            <Typography variant="h3" gutterBottom fontWeight="bold">
                How to Secure or Delete Your {guide.name} Account
            </Typography>

            {guide.steps.map((section, idx) => (
                <Box key={idx} mb={6}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {section.title}
                    </Typography>

                    {section.description && (
                        <Typography variant="body1" mb={2}>
                            {section.description}
                        </Typography>
                    )}

                    <ol style={{ paddingLeft: '1.5rem' }}>
                        {section.steps.map((step, i) => (
                            <li key={i}>
                                <Typography variant="body1">{step}</Typography>
                            </li>
                        ))}
                    </ol>

                    {section.images && section.images.length > 0 && (
                        <Grid container spacing={2} mt={2}>
                            {section.images.map((imgSrc, i) => (
                                <Grid key={i} sx={{ xs: 12, sm: 6, md: 4 }}>
                                    <Paper elevation={3}>
                                        <Box
                                            component="img"
                                            src={imgSrc}
                                            alt={`Step ${i + 1}`}
                                            sx={{
                                                width: '100%',
                                                maxHeight: 300,
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {section.link && (
                        <Box mt={2}>
                            <Link href={section.link} target="_blank" rel="noopener noreferrer">
                                {section.link}
                            </Link>
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}
