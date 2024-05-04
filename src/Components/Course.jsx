import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import AddWishlist from './AddWishlist';
import { Link } from "react-router-dom";

const Courses = ({ content, index, addCardClick, addWishlist }) => {

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
                <CardMedia
                    component="img"
                    width="100"
                    height="100"
                    src={content.image}
                    sx={{
                        borderRadius: '6px',
                        width: { xs: '100%', sm: 150 },
                    }}
                />
                <Box sx={{ alignSelf: 'center', ml: 4, display: 'flex', gap: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        {content.description}
                    </Typography>
                    <Link  className="icons"to={`/InquiryForm`}>
                    <Button variant="contained">Inquiry</Button>
                    </Link >

                    <Typography variant="body2" color="text.secondary" fontWeight="regular">
                        {content.author}
                    </Typography>
                    <FavoriteBorderIcon onClick={() => addWishlist(index)} />

                    <Typography variant="p" gutterBottom fontSize={20} fontWeight={600}>
                        {content.price}
                    </Typography>
                    <Button onClick={() => addCardClick(index)} variant="contained">Add to card</Button>
                </Box>
            </Card>

        </>
    )
}

export default Courses


