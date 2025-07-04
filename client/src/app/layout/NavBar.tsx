import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography, useTheme, LinearProgress } from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from '@mui/icons-material';
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setDarkMode } from "./uiSlice";
import { useFetchBasketQuery } from "../../features/basket/basketApi";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

export default function NavBar() {
const theme = useTheme();
const {isLoading, darkMode} = useAppSelector(state => state.ui);
const dispatch = useAppDispatch();
const {data: basket} = useFetchBasketQuery();
const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

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
                <img 
                    src="/ebook.png" 
                    alt="CourseStore Icon" 
                    style={{ width: 30, height: 30, marginRight: 8 }} 
                />
                <Typography 
                    component={NavLink} 
                    to='/' 
                    variant="h6"
                    sx={{   
                    color: theme.palette.mode === 'light' ? '#7b3fe4' : 'text.primary',
                    typography: 'h6',
                    textDecoration: 'none',
                    '&:hover': { fontWeight: 'bold' },
                    '&.active': { typography: 'h5', fontWeight: 'bold' }
                    }}
                >
                    COURSESTORE
                </Typography>
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
                            '&.active': {typography: 'h5', fontWeight: 'bold'}}} 
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size="large" sx={{  color: theme.palette.mode === 'light' ? '#7b3fe4' : 'text.primary' }}>
                        <Badge badgeContent={itemCount} color="secondary">                           
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
                                '&.active': {typography: 'h5', fontWeight: 'bold'}
                                }} 
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                    <IconButton onClick={() => dispatch(setDarkMode())} sx={{ ml: 1 }}>
                    {darkMode
                        ? <DarkMode sx={{ color: '#fff' }} />
                        : <LightMode sx={{ color: '#7b3fe4' }} />}
                </IconButton>
                </Box>
        </Toolbar>
        {isLoading && (
                <Box sx={{width: '100%'}}>
                    <LinearProgress color="secondary" />
                </Box>
        )}
    </AppBar>
);
}
