import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
// import { useLocation, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




const Form = () => {
    const inputRef = useRef(null)

    const [image, setImage] = useState('')

    function handleImageClick() {
        inputRef.current.click();
    }

    function handleImageChange(event) {
        const fill = event.target.files[0];
        console.log(fill);
        setImage(event.target.files[0]);
    }

    return (
        <>
            <div className='profil'>
                <div onClick={handleImageClick}>
                    {image ? (
                        <img src={URL.createObjectURL(image)}></img>
                    ) : (
                        <AccountCircleIcon />
                    )}
                    <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
                </div>
            </div>

            <FormLabel id="demo-radio-buttons-group-label">Are you a student or a professional?
            </FormLabel>
            <br />
            <textarea />

            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                // onSubmit={handleSubmit}
                >
                    <div className='container'>
                        <div>
                            <TextField
                                label="First Name"
                                id="firstName"
                                size="small"
                                required
                            />
                            <TextField
                                label="Last Name"
                                id="lastName"
                                size="small"
                                required
                            />
                            <FormGroup>
                                <FormLabel id="demo-radio-buttons-group-label">Your area of interest
                                </FormLabel>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="UP" />
                                <FormControlLabel control={<Checkbox />} label="MP" />
                                <FormControlLabel control={<Checkbox />} label="Bihar" />
                                <FormControlLabel control={<Checkbox />} label="Goa" />

                            </FormGroup>
                            <div className='Are'>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Are you a student or a professional?
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Professional" />
                                        <FormControlLabel value="male" control={<Radio />} label="Student" />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <br />
                            <div className='Are1'>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Experience
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="0-5" />
                                        <FormControlLabel value="male" control={<Radio />} label="5-10" />
                                        <FormControlLabel value="male" control={<Radio />} label="10 & above" />

                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <br />

                            <div className='Are2'>

                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Expertise
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Expertise" />
                                        <FormControlLabel value="male" control={<Radio />} label="Frontend" />
                                        <FormControlLabel value="male" control={<Radio />} label="Fullstack" />

                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <div className='button'>
                                <Button variant="contained" type='submit'>Submit</Button>
                            </div>
                        </div>
                    </div>
                </Box >
            </div >
        </>
    )
}

export default Form
