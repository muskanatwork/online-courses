import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';




const WishList = () => {
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
                        // src={cardItem.image}
                        sx={{
                            borderRadius: '6px',
                            width: { xs: '100%', sm: 150 },
                        }}
                    />
                    <Box sx={{ alignSelf: 'center', ml: 4, display: 'flex', gap: 10 }}>
                        <Typography variant="h6" gutterBottom>
                        </Typography>

                        <Typography variant="body2" color="text.secondary" fontWeight="regular">
                        </Typography>

                        <Typography variant="p" gutterBottom fontSize={20} fontWeight={600}>
                        </Typography>
                    </Box>

                </Card>


        </>
    )
}

export default WishList

