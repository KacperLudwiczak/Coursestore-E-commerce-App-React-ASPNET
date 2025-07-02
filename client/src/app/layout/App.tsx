import { useState } from "react"
import { Outlet } from "react-router-dom";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: palleteType,
      primary: {
        main: '#7b3fe4', // Light Purple
      },
      secondary: {
        main: '#ae9cff' // Softer accent
      },
      background: {
        default: darkMode ? '#1b1035' : '#fdfbff',
        paper: darkMode ? '#271753' : '#ffffff'
      },
      text: {
        primary: darkMode ? '#ffffff' : '#2c003e', 
        secondary: darkMode ? '#d1c4e9' : '#5c3d99'
      }
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode 
            ? 'radial-gradient(circle, #271753, #1b1035)'
            : 'radial-gradient(circle, #f3e9ff, #ffffff)',
          py: 6
        }}
      >
        <Container maxWidth='xl' sx={{ mt: 8 }}>
          <Outlet />
        </Container>
      </Box>

    </ThemeProvider>
  )
}

export default App
