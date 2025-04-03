import React, { ReactNode, useMemo } from 'react';

// Layout components
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

// Theme
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';

import { useLocation } from 'react-router-dom';

// Page layout helper components
import TopBar from './TopBar.tsx';
import Breadcrumb from './BreadCrumb.tsx';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

function PageLayout({ children, title }: LayoutProps) {
    const location = useLocation();

    // Titles the page based on which url is being visited
    const pageTitle = useMemo(() => {
        const titleMap: Record<string, string> = {
            '/': 'Secure Your Digital Presence',
            '/social': 'Social Media & App Location Services',
            '/family': 'Email and Family Accounts',
            '/devices': 'All Devices (Laptop & Phones)',
            '/physical': 'Physical Security',
            '/social/instagram': 'Instagram Security Navigation',
        };
        return titleMap[location.pathname] || '404 - Page Not Found';
    }, [location.pathname]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar title={pageTitle} />
            <Box sx={{ position: 'relative', width: '100%' }}>
                <Box sx={{ position: 'absolute', left: '1rem', zIndex: 10 }}>
                    <Breadcrumb />
                </Box>

                {/* Main layout grid */}
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    sx={{ mt: 4, px: 2, maxWidth: 'lg', mx: 'auto' }}
                >
                    {/* Page title */}
                    <Grid size={12}>
                        <Box component="header" sx={{ mb: 2 }}>
                            <Typography variant="h4" fontWeight="bold">
                                {title}
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Main content */}
                    <Grid size={12}>
                        <Box component="main">{children}</Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default PageLayout;
