import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Courses = ({ content }) => {

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
                        <Typography variant="body2" color="text.secondary" fontWeight="regular">
                            {content.author}
                        </Typography>
                        <i class="fa-light fa-star"></i>

                        <Typography variant="body2" color="text.secondary" fontWeight="regular">
                            {content.price}
                        </Typography>
                        <Button variant="contained">Add to cart</Button>
                    </Box>

                </Card>
            </>
        

    )
}

export default Courses

