import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const Course = ({ content, index, addCardClick, addWishlist }) => {
    const [showProduct, setShowProduct] = useState(content);
    const [isLiked, setIsLiked] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        if (!isLiked) {
            addWishlist(index);
        } else {
            // Remove from wishlist
        }
    };

    const handleAddToCart = () => {
        addCardClick(index);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    mt: 5,
                    p: 2,
                    display: 'flex',
                    flexWrap: 'wrap',
                    zIndex: 1,
                }}
            >
                <Link className='inquiry' to={`/ProductDetail`} state={showProduct}>
                    <Tooltip className='Details-Tooltip' title="More Course Details" followCursor>
                        <CardMedia
                            component="img"
                            width="100"
                            height="100"
                            src={content.image}
                            sx={{
                                borderRadius: '6px',
                                width: { xs: '100%', sm: 170 },
                            }}
                        />
                    </Tooltip>
                </Link>
                <div className='inquiry-button'>
                    <Link className='inquiry' to={`/InquiryForm`}>
                        <Button variant="contained">Inquiry</Button>
                    </Link>
                </div>

                <Box sx={{ alignSelf: 'center', ml: 4, display: 'flex', gap: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        {content.description}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" fontWeight="regular">
                        {content.author}
                    </Typography>

                    <Button onClick={handleLikeClick} sx={{ '&.MuiButton-root': { outline: 'none' } }}>
                        {isLiked ? (
                            <FavoriteIcon style={{ color: 'red' }} />
                        ) : (
                            <FavoriteBorderIcon />
                        )}
                    </Button>

                    <Typography variant="p" gutterBottom fontSize={20} fontWeight={600}>
                        {content.price}
                    </Typography>
                    <Button onClick={handleAddToCart} variant="contained">Add to cart</Button>
                </Box>
            </Card>

            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Successfully added to cart"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleDialogClose} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Course;
