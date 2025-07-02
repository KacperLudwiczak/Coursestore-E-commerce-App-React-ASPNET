import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography, useTheme } from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from '@mui/icons-material';
import { NavLink } from "react-router-dom";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

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
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='center'>
                    <Typography component={NavLink} to='/' variant="h6" 
                    sx={{   
                    color: theme.palette.mode === 'light' ? '#7b3fe4' : 'text.primary',
                    typography: 'h6',
                    textDecoration: 'none',
                    '&:hover': {fontWeight: 'bold'},
                    }} 
                    >COURSESTORE</Typography>
                    <IconButton onClick={toggleDarkMode} sx={{ ml: 1 }}>
                    {darkMode
                        ? <DarkMode sx={{ color: '#fff' }} />
                        : <LightMode sx={{ color: '#7b3fe4' }} />}
                </IconButton>
                </Box>

                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{   
                            color: theme.palette.mode === 'light' ? '#7b3fe4' : 'text.primary',
                            typography: 'h6',
                            textDecoration: 'none',
                            '&:hover': {fontWeight: 'bold'},
                            '&.active': {textDecoration: 'underline', textUnderlineOffset: '4px'}}} 
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                    <IconButton size="large" sx={{  color: theme.palette.mode === 'light' ? '#7b3fe4' : 'text.primary' }}>
                        <Badge badgeContent='4' color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={{   
                                color: theme.palette.mode === 'light' ? '#7b3fe4' : 'text.primary',
                                typography: 'h6',
                                textDecoration: 'none',
                                '&:hover': {fontWeight: 'bold'},
                                }} 
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
        </Toolbar>
    </AppBar>
);
}
