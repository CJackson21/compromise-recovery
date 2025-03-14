import React, { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Container, CssBaseline, Box } from "@mui/material";
import TopBar from "./TopBar";

//---------------------------------------------------------------------------
// Types
//---------------------------------------------------------------------------
interface LayoutProps {
  children: ReactNode; 
  // the ? makes it optional
  title?: string;   
}

//---------------------------------------------------------------------------
// Layout Component
//---------------------------------------------------------------------------
const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <CssBaseline />
      <TopBar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box component="header" sx={{ mb: 2 }}>
          <Typography variant="h4" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box component="main">{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
