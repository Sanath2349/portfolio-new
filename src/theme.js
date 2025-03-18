import { createTheme } from "@mui/material/styles";

export const gradientTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: {
      default: "121212", // Vibrant gradient
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff", // Default text in dark mode
      secondary: "#e0e0e0", // Subtle gray for secondary text
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          // Target "Frontend Developer" (h2) specifically
          color: "#fff", // Bright white in dark mode
        },
        h4: {
          color: "white",
        },
        h6: {
          color: "white",
        },
        body2: {
          color: "white",
        },
      },
    },
  },
});


// Light Theme (Solid background)
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { 
      default: '#f5f5f5', // Soft white background
      paper: '#fff',
    },
    text: { 
      primary: '#000000',
      secondary: '#666',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: { color: '#1976d2' }, // Blue for "Frontend Developer" in light mode
      },
    },
  },
});
