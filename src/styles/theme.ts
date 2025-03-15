import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#e0e0e0',
            paper: '#ffffff',
        },
        primary: {
            main: '#646cff',
        },
        text: {
            primary: '#213547',
        },
    },
    typography: {
        h4: {
            fontSize: '2.5rem',
            fontWeight: 700,
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
        },
        h5: {
            fontSize: '2rem',
            fontWeight: 600,
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        h6: {
            fontSize: '1.5rem',
            fontWeight: 500,
            '@media (max-width:600px)': {
                fontSize: '1.25rem',
            },
        },
        body1: {
            fontSize: '1.15rem',
            lineHeight: 1.7,
            '@media (max-width:600px)': {
                fontSize: '1rem',
            },
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#edf3fc',
                },
            },
        },
    },
});

export default lightTheme;
