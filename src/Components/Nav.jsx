import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

function Nav({state}) {
    // console.log(state);
    return (
        <AppBar position="static" >
            <Toolbar >
                <Button variant="outlined" color='inherit'>qualden.com</Button>

                <IconButton>
                </IconButton>
                <Typography variant="h6" component='Div'
                    sx={{
                        flexGrow: 1,

                    }} >
                </Typography>
                <Box>
                    <Button color='inherit'>Course</Button>

                    <Link to={`/wishlist`}>
                        <Button color='inherit'>Wishlist</Button>
                    </Link >

                    <Link to={`/cart`} state={state}>
                        <AddShoppingCartIcon />
                    </Link >
                    <Link to={`/profile`}>
                    <AccountCircleIcon />
                    </Link >

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Nav