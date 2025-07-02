import { AppBar, IconButton, Toolbar, Typography, Box, useTheme  } from "@mui/material";
import { DarkMode, LightMode } from '@mui/icons-material';

type Props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}

export default function NavBar({ darkMode, toggleDarkMode }: Props) {
const theme = useTheme();
return (
    <AppBar
        position="fixed"
        elevation={0}
        sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: darkMode ? 'rgba(40, 0, 70, 0.01)' : 'rgba(245, 240, 255, 0.01)',
            borderColor: darkMode ? 'rgba(255, 255, 255, 0.01)' : 'rgba(0, 0, 0, 0.01)',
        }}
    >
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography 
                variant="h6" 
                sx={{ 
                    fontWeight: 600,
                    color: theme.palette.mode === 'light' ? '#7b3fe4' : 'text.primary'
                }}
            >
                COURSESTORE
            </Typography>
            <Box>
                <IconButton onClick={toggleDarkMode} sx={{ ml: 1 }}>
                    {darkMode
                        ? <DarkMode sx={{ color: '#fff' }} />
                        : <LightMode sx={{ color: '#7b3fe4' }} />}
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
);
}
