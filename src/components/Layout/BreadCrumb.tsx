import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { titleCase } from 'title-case';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

function Breadcrumb() {
    const location = useLocation();
    const pathnames = React.useMemo(() => {
        return location.pathname.split('/').filter(Boolean);
    }, [location.pathname]);

    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            {/* Home Link */}
            <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
                <Typography fontWeight="bold">Home</Typography>
            </Link>

            {/* Dynamically render the path segments */}
            {pathnames.map((segment, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                if (isLast) {
                    return (
                        <Typography key={to} color="text.primary">
                            {titleCase(segment)}
                        </Typography>
                    );
                } else {
                    return (
                        <Link key={to} to={to} style={{ textDecoration: 'none', color: '#1976d2' }}>
                            <Typography>{titleCase(segment)}</Typography>
                        </Link>
                    );
                }
            })}
        </Breadcrumbs>
    );
}

export default Breadcrumb;
