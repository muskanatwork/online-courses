import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Nav from './Nav';

const ProductDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const content = location.state;

    return (
        <>
            <Nav />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                <Box sx={{ maxWidth: 600 }}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <Link color="inherit" href="/">
                            Home
                        </Link>
                        <Link color="inherit" href="/products">
                            Products
                        </Link>
                        <Typography color="textPrimary">{content.title}</Typography>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                <Card
                    variant="outlined"
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                    }}
                >
                    <Box sx={{ flex: { xs: '0 0 auto', md: '1 1 auto' } }}>
                        <CardMedia
                            component="img"
                            width="100"
                            height="100"
                            src={content.image}
                            sx={{
                                borderRadius: '6px',
                                width: { xs: '100%', sm: 150 },
                                flex: { xs: '0 0 auto', md: '1 1 auto' },
                            }}
                        />
                    </Box>
                    <Box sx={{ flex: { xs: '0 0 auto', md: '1 1 auto' } }}>
                        <Typography variant="body2" color="text.secondary" fontWeight="regular">
                            {content.author}
                        </Typography>
                        <Typography variant="p" gutterBottom fontSize={20} fontWeight={600}>
                            {content.price}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget quam arcu. Nulla sed accumsan nulla. Cras non neque non turpis laoreet euismod. Fusce finibus leo at nisi faucibus, ut consequat lorem vestibulum. Donec non lectus sit amet dui vulputate interdum sed a mauris. Mauris vitae urna quis sapien rhoncus pellentesque. Integer et volutpat magna, ut tempus lacus.
                        </Typography>
                        <Box mt={2}>
                            <Button variant="contained" color="primary" onClick={() => {/* Add to Cart functionality */}}>
                                Add to Cart
                            </Button>
                            <Button variant="outlined" color="primary" onClick={() => {/* Add to Wishlist functionality */}}>
                                Add to Wishlist
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ flex: { xs: '0 0 auto', md: '1 1 auto' } }}>
                        <video width="640" height="360" controls>
                            <source src='src/assets/Make Money 💰.mp4' type="video/mp4" />
                        </video>
                    </Box>
                </Card>
            </Box>
        </>
    );
};

export default ProductDetail;
