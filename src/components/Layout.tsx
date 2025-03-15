import React, { ReactNode } from "react";
import { Typography, Container, CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import TopBar from "./TopBar";
import theme from "../styles/theme";

//---------------------------------------------------------------------------
// Types
//---------------------------------------------------------------------------
interface LayoutProps {
  children: ReactNode; 
  title?: string;   
}

//---------------------------------------------------------------------------
// Layout Component
//---------------------------------------------------------------------------
const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box component="header" sx={{ mb: 2 }}>
          <Typography 
            sx={{ xs: "h6", sm: "h5", md: "h4" }} 
            fontWeight="bold"
          >
            {title}
          </Typography>
        </Box>
        <Box component="main">{children}</Box>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
