import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { titleCase } from 'title-case';

// Layout components
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

const Breadcrumb = () => {
    const { pathname } = useLocation();

    const pathSegments = React.useMemo(() => {
        return pathname.split('/').filter(Boolean);
    }, [pathname]);

    const linkStyle = {
        textDecoration: 'none',
        color: '#1976d2',
    };

    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            {/* Always show Home link */}
            <Link to="/" style={linkStyle}>
                <Typography fontWeight="bold">Home</Typography>
            </Link>

            {pathSegments.map((segment, index) => {
                const isLastSegment = index === pathSegments.length - 1;
                const fullPath = '/' + pathSegments.slice(0, index + 1).join('/');

                if (isLastSegment) {
                    return (
                        <Typography key={fullPath} color="text.primary">
                            {titleCase(segment)}
                        </Typography>
                    );
                }

                return (
                    <Link key={fullPath} to={fullPath} style={linkStyle}>
                        <Typography>{titleCase(segment)}</Typography>
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default Breadcrumb;
