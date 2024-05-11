import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'; // Import Dialog components
import axios from 'axios';

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        course: ''
    });

    const [open, setOpen] = useState(false); 

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/submitForm', formData)
            .then(response => {
                console.log('Email sent successfully!', response);
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    course: ''
                });
                setOpen(true); // Open the dialog when email is sent successfully
            })
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                {/* Form inputs */}
                <div>
                <TextField
                    label="First Name"
                    id="firstName"
                    size="small"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                </div>
                <br/>
                <div>
                <TextField
                    label="Last Name"
                    id="lastName"
                    size="small"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                </div>
                <br />
                <div>
                <TextField
                    label="Phone Number"
                    id="phoneNumber"
                    size="small"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
                </div>
                <br />
                <div>
                <TextField
                    label="Email"
                    id="email"
                    size="small"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
                <br />
                <div>
                <TextField
                    label="Course"
                    id="course"
                    size="small"
                    value={formData.course}
                    onChange={handleChange}
                    required
                />
                </div>
                <br />
                <Button type='submit' variant="contained">Submit</Button>
            </form>
            {/* Dialog component for displaying success message */}
            <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { width: '500px', maxHeight: '80%' } }}>
                <DialogTitle>Email sent successfully!</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default InquiryForm;
