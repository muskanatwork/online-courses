import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import WishListDetails from './WishListDetails';
import Nav from './Nav';
import { useEffect } from 'react';

const AddWishlist = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let wishlist = location.state.wishlist
    
    // console.log(wishlist);
    useEffect(() => {
        wishlist = JSON.parse(localStorage.getItem("wishlist"));
    }, []);
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
