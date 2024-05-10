import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import AddCard from './Components/AddCard';
import AddWishlist from './Components/AddWishlist'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AddCard" component={AddCard} />
                <Route exact path="/wishlist" component={AddWishlist} />
                <Route exact path="/profile" component={Form} />
                <Route exact path="/InquiryForm" component={InquiryForm} />
                <Route exact path="/ProductDetail" component={ProductDetail} />
            </Switch>
        </Router>
    );
}

export default App;
