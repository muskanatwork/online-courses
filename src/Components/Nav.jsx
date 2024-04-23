import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Nav() {
    return (
        <AppBar position="static">
            <Toolbar>
            <Button variant="outlined" color='inherit'>qualden.com</Button>

                <IconButton>
                </IconButton>
                <Typography variant="h6" component='Div'
                 sx={{ flexGrow :1,
                
                }}>
                </Typography>
                <Box>
                    <Button color='inherit'>Course</Button>
                    <Button color='inherit'>Wishlist</Button>
                    <AddShoppingCartIcon />
                    <AccountCircleIcon />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Nav