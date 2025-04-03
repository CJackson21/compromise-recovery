import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { titleCase } from 'title-case';

// Layout components
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

function Breadcrumb() {
    const { pathname } = useLocation();
    const pathnames = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);
    const linkStyle = { textDecoration: 'none', color: '#1976d2' };

    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link to="/" style={linkStyle}>
                <Typography fontWeight="bold">Home</Typography>
            </Link>
            {pathnames.map((segment, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                    <Typography key={to} color="text.primary">
                        {titleCase(segment)}
                    </Typography>
                ) : (
                    <Link key={to} to={to} style={linkStyle}>
                        <Typography>{titleCase(segment)}</Typography>
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}

export default Breadcrumb;
