import React from 'react';
import './styles/styles.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavigationBar } from './core/components/navigation-bar';
import { AppRoutes } from './core/components/app-routes';

function App() {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark'
        },
      });
    
    return (
            // Enable the Material UI Theme Provider
            <ThemeProvider theme={darkTheme}>
                {/* Enable Material UI typography (h1, h2 etc.) */}
                <Typography>
                    <NavigationBar></NavigationBar>
                    <AppRoutes></AppRoutes>
                </Typography>
            </ThemeProvider>
    );
}

export default App;
