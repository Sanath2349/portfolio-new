import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { default: '#f5f5f5', paper: '#fff' },
    text: { primary: '#000000' }, // Default text color in light mode
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { 
      primary: '#ffffff', // Default text in dark mode
      secondary: '#b0bec5', // Subtle gray for secondary text
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          // Target "Frontend Developer" (h2) specifically
          color: '#90caf9', // Bright white in dark mode
        },
        h4:{
            color:'white'
        },
        h6:{
            color:'white'
        },
        body2:{
            color:'white'
        }
      },
    },
  },
});