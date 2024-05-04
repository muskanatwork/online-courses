import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddCard from './Components/AddCard.jsx'
import Form from './Components/Form'
import AddWishlist from './Components/AddWishlist.jsx'
import InquiryForm from './Components/InquiryForm.jsx'

import {
  // BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {

    path: "/AddCard",
    element: <AddCard/>,
  },
  {

    path: "/wishlist",
    element: <AddWishlist/>,
  },
  {

    path: "/profile",
    element: <Form />,
  },
  {

    path: "/InquiryForm",
    element: <InquiryForm />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>)

