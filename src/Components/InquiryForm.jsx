import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        course: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/submitForm', {
            "username": "Muskan"
        })
            .then(response => {
                console.log('Email sent successfully!', response);
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    course: ''
                });                
            })
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="First Name"
                id="firstName"
                size="small"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <TextField
                label="Last Name"
                id="lastName"
                size="small"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            <TextField
                label="Phone Number"
                id="phoneNumber"
                size="small"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
            />
            <TextField
                label="Email"
                id="email"
                size="small"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <TextField
                label="Course"
                id="course"
                size="small"
                value={formData.course}
                onChange={handleChange}
                required
            />
            {/* Other text fields */}
            <Button type='submit' variant="contained">Submit</Button>
        </form>
    );
};

export default InquiryForm;