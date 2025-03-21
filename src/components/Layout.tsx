import React, { ReactNode, useMemo } from 'react';

import { Typography, Container, CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

import TopBar from './TopBar';
import theme from '../styles/theme';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    const location = useLocation();

    // Map routes to page titles
    const pageTitle = useMemo(() => {
        const titleMap: Record<string, string> = {
            '/': 'Secure Your Digital Presence',
            '/social': 'Social Media & App Location Services',
            '/family': 'Email and Family Accounts',
            '/devices': 'All Devices (Laptop & Phones)',
            '/physical': 'Physical Security',
            '/guide/instagram': 'Instagram Security Navigation',
        };
        return titleMap[location.pathname] || '404 - Page Not Found';
    }, [location.pathname]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar title={pageTitle} />
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Box component="header" sx={{ mb: 2 }}>
                    <Typography sx={{ xs: 'h6', sm: 'h5', md: 'h4' }} fontWeight="bold">
                        {title}
                    </Typography>
                </Box>
                <Box component="main">{children}</Box>
            </Container>
        </ThemeProvider>
    );
};

export default Layout;
