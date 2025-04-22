import React from 'react';
import { useParams } from 'react-router-dom';

// Layout components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Collapse from '@mui/material/Collapse';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

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

function SocialMediaGuidePage() {
    const { platform } = useParams<{ platform?: string }>();
    const guide = React.useMemo(() => {
        return platform && platform in socialMediaGuides
            ? socialMediaGuides[platform as keyof typeof socialMediaGuides]
            : undefined;
    }, [platform]);

    const [expanded, setExpanded] = React.useState<number | null>(
        // Auto-expand the dropdown if it is the only one available
        guide?.steps.length === 1 ? 0 : null
    );

    // Using useCallback with a functional update to reliably toggle expansion.
    const handleExpandClick = React.useCallback((idx: number) => {
        setExpanded((prev) => (prev === idx ? null : idx));
    }, []);

    if (!guide) {
        return (
            <Box className="p-6 text-center">
                <Typography variant="h4" color="error">
                    Platform not found.
                </Typography>
            </Box>
        );
    }

    return (
        <Box className="p-4">
            <Typography variant="h3" fontWeight="bold" className="pb-8 text-center">
                How to Secure or Delete Your {guide.name} Account
            </Typography>
            {guide.steps.map((section, idx) => (
                <Card
                    key={idx}
                    sx={{
                        mb: 4,
                        boxShadow: 3,
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                    }}
                >
                    <CardHeader
                        title={
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                className="text-left mb-1 cursor-pointer"
                            >
                                {section.title}
                            </Typography>
                        }
                        onClick={() => handleExpandClick(idx)}
                    />
                    <Collapse in={expanded === idx} timeout="auto" unmountOnExit={false}>
                        <CardContent className="p-4">
                            {section.steps.map((step, i) => (
                                <Box key={i} className="mb-2 p-4 rounded border border-gray-300">
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        className="text-center mb-1"
                                    >
                                        {step}
                                    </Typography>
                                    {section.images?.[i] && (
                                        <Box
                                            component="img"
                                            src={section.images[i]}
                                            alt={`Step ${i + 1}`}
                                            loading="lazy"
                                            className="w-full mt-1 rounded max-h-[950px] object-contain"
                                        />
                                    )}
                                </Box>
                            ))}
                            {section.link && (
                                <Link
                                    href={section.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 block text-blue-600 underline break-words"
                                >
                                    {section.link}
                                </Link>
                            )}
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </Box>
    );
}

export default SocialMediaGuidePage;
