// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B22222', 
    },
    secondary: {
      main: '#000000',  
    },
    background: {
        default: '#F5F5F5', // Black background for the entire app
        paper: '#FFFFFF',   // Darker gray background for components like cards
      },
      text: {
        primary: '#333333', // White text on dark backgrounds
        secondary: '#ba181b', // Red text for secondary elements
      },
      action: {
        hover: '#DAA520',
  },

},

  

typography: {
  fontFamily: 'Roboto, sans-serif', // Clean and modern font
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
    color: '#333333',
  },
},
});

export default theme;
