// styles/theme.ts
import { createTheme } from '@mui/material/styles';

/* Shared depth: used by Paper, Card, Button, etc. */
const neuShadow =
    '10px 10px 20px rgba(0, 0, 0, 0.1), ' +
    '-10px -10px 20px rgba(255,255,255,0.95), ' +
    'inset 0 0 0 1px rgba(0,0,0,0.02), ' +
    'inset 0 0 0 2px rgba(255,255,255,0.6)';

/* Slightly darker than body so edges pop */
const paperGradient = 'linear-gradient(145deg, #f5f7fa 0%, #e9edf3 100%)';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#fafbfd',
            paper: '#f8f9fb',
        },
        primary: { main: '#4c6ef5' },
        text: { primary: '#334155' },
    },

    /* Soft corners everywhere */
    shape: { borderRadius: 24 },

    typography: {
        h4: {
            fontSize: '2.5rem',
            fontWeight: 700,
            '@media (max-width:600px)': { fontSize: '2rem' },
        },
        h5: {
            fontSize: '2rem',
            fontWeight: 600,
            '@media (max-width:600px)': { fontSize: '1.5rem' },
        },
        h6: {
            fontSize: '1.5rem',
            fontWeight: 500,
            '@media (max-width:600px)': { fontSize: '1.25rem' },
        },
        body1: {
            fontSize: '1.15rem',
            lineHeight: 1.7,
            '@media (max-width:600px)': { fontSize: '1rem' },
        },
    },

    components: {
        /* Page backdrop */
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: 'linear-gradient(145deg,#fafbfd 0%, #f1f4f9 100%)',
                },
            },
        },

        /* Paper (and Card) styling */
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: paperGradient,
                    boxShadow: neuShadow,
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.6)',
                },
            },
        },
        MuiCard: {
            styleOverrides: { root: { boxShadow: neuShadow } },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: neuShadow,
                    transition: 'transform .18s ease, box-shadow .18s ease',
                    '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow:
                            '6px 6px 14px rgba(0,0,0,.12), -6px -6px 14px rgba(255,255,255,.95)',
                    },
                    '&:active': { transform: 'translateY(-1px)' },
                },
            },
        },
    },
});

export default lightTheme;
