import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import WishListDetails from './WishListDetails';
import Nav from './Nav';

const AddWishlist = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const wishlist = location.state.wishlist
    console.log(wishlist);
    return (
        <>
            <Nav />
            {wishlist.map((content, i) => {
                return (<WishListDetails content={content} key={i} index={i} />)
            })
            }
        </>
    )
}

export default AddWishlist
