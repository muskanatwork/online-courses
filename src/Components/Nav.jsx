import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

function Nav({ state }) {
    return (
        <div className='nav-bar'>
            <AppBar position="static">
                <Toolbar>
                    <Button component={Link} to="/" variant="outlined" color='inherit'>
                        qualden.com
                    </Button>

                    <IconButton>
                    </IconButton>
                    <Typography variant="h6" component='Div'
                        sx={{
                            flexGrow: 1,
                        }} >
                    </Typography>
                    <Box>
                        <Button component={Link} to="/" color='inherit'>
                            Course
                        </Button>

                        <Link className="icons" to={`/wishlist`} state={state}>
                            <Button color='inherit'>Wishlist</Button>
                        </Link>

                        <Link className="icons" to={`/AddCard`} state={state}>
                            <AddShoppingCartIcon />
                        </Link>
                        <Link className="icons" to={`/profile`}>
                            <AccountCircleIcon />
                        </Link>

                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav;
