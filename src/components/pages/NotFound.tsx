// Layout components
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

function NotFound() {
    return (
        <Grid spacing={2} container direction="column" className="w-full max-h-screen">
            {/* Header message */}
            <Grid size={{ xs: 'auto' }}>
                <Typography variant="h4" align="center" fontWeight="bold">
                    Sorry! The page you are looking for could not be found.
                </Typography>
            </Grid>

            {/* Main dancing cat area */}
            <Grid size={12} className="flex items-center justify-center overflow-hidden mt-5">
                <img
                    src="/img/error-not-found-img/dancing_cat.gif"
                    alt="Dancing Cat"
                    className="min-h-[60vh] max-w-[60vw]"
                />
            </Grid>
        </Grid>
    );
}

export default NotFound;
