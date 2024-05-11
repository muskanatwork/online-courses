import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import AddCard from './Components/AddCard';
import AddWishlist from './Components/AddWishlist'
import Form from './Components/Form'
import InquiryForm from "./Components/InquiryForm";
import ProductDetail from './Components/ProductDetail'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AddCard" element={<AddCard />} />
                <Route path="/wishlist" element={<AddWishlist />} />
                <Route path="/profile" element={<Form />} />
                <Route path="/InquiryForm" element={<InquiryForm />} />
                <Route path="/ProductDetail" element={<ProductDetail />} />

            </Routes>
        </Router>
    );
}

export default App;
