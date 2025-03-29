import React from 'react';

// Icons
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';

// Layout components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { physicalSecurityGuides } from '../../data/physicalSecurityGuide.ts';

function PhysicalSecurity() {
    const cardStyles = React.useMemo(
        () => ({
            p: 3,
            borderRadius: 2,
            minWidth: 250,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
        }),
        []
    );

    return (
        <Grid container spacing={8} className="w-full pt-8 justify-center">
            {/* Section Heading */}
            <Grid size={12} className="text-center">
                <LockIcon sx={{ fontSize: 65, color: 'primary.main', mb: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                    Ensure you are not only secured digitally, but physically too
                </Typography>
            </Grid>

            {/* Guide Sections */}
            {physicalSecurityGuides.map((section, index) => (
                <Grid key={index} sx={{ xs: 12, sm: 10, md: 8, mt: index === 1 ? 4 : 0, mb: 5 }}>
                    <Paper elevation={3} sx={cardStyles}>
                        <Typography variant="h5" fontWeight="bold" className="text-center" mb={4}>
                            {section.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className="text-center"
                            mb={4}
                        >
                            {section.description}
                        </Typography>
                        <List>
                            {section.steps.map((step, i) => (
                                <ListItem key={i}>
                                    <ListItemIcon>
                                        {section.icon === 'email' ? (
                                            <LockIcon color="action" />
                                        ) : (
                                            <GroupIcon color="action" />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={step} />
                                </ListItem>
                            ))}
                        </List>
                        <Typography variant="h6" fontWeight="bold" mt={4}>
                            🔗 Official Guides:
                        </Typography>
                        <Box mt={2} mb={5}>
                            {section.links.map((link, i) => (
                                <Typography key={i} variant="body2">
                                    <Link
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="primary"
                                    >
                                        {link.label}
                                    </Link>
                                </Typography>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default PhysicalSecurity;
