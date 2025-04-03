import React from 'react';
import { Link } from 'react-router-dom';

// Layout components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TopBarProps {
    title?: string;
}

function TopBar({ title = 'Secure Your Digital Presence' }: TopBarProps) {
    return (
        <Box
            sx={{
                width: '100%',
                background: 'linear-gradient(to bottom right, #c8f2c2, #a6c8ff)',
                px: { xs: 2, sm: 4 },
                py: 3,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                <Link to="/">
                    <img
                        src="/img/gf-blue-gold.png"
                        alt="Logo"
                        style={{ height: '3rem', width: 'auto' }}
                        className="sm:h-16"
                    />
                </Link>
                <Typography
                    variant="h4"
                    component="h2"
                    fontWeight="bold"
                    sx={{
                        fontSize: { xs: '1.5rem', sm: '3rem' },
                        color: '#1e3a8a',
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Box>
    );
}

export default React.memo(TopBar);
