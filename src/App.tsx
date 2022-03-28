import React from 'react';
import './styles/styles.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// Import a Material UI icon
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import { TextField, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark'
        },
      });
    
    return (
        <ThemeProvider theme={darkTheme}>
            {/* Enable Material UI typography (h1, h2 etc.) */}
            <Typography>
                <h1>React Condensed Demo</h1>
                {/* Display an icon */}
                <EmojiEmotions></EmojiEmotions>
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Typography>
        </ThemeProvider>
    );
}

export default App;
