import * as React from 'react';
import { useLocation } from "react-router-dom";
import AddCourseDetils from './AddCourseDetils';
import Nav from './Nav';
import { useState, useEffect } from 'react';

const AddCard = () => {
    const [addCourseList, setAddCourseList] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setAddCourseList(JSON.parse(localStorage.getItem("selectedCourse")));
    }, []);

    // console.log(localStorage.getItem("selectedCourse"));

    const deleteCourse = (index) => {
        const updatedCourseList = [];
        for (let i = 0; i < addCourseList.length; i++) {
            if (i !== index) {
                updatedCourseList.push(addCourseList[i]);
            }
        }
        setAddCourseList(updatedCourseList);
    };
    

    let totalPrice = 0;
    addCourseList.forEach(courseDetails => {
        totalPrice += courseDetails.price;
    });

    return (
        <>
            <Nav />
            {addCourseList.map((courseDetils, i) => (
                    <AddCourseDetils courseDetils={courseDetils} 
                    deleteCourse={deleteCourse} i={i} key={i}  />
            ))}
            <div className='Price'>
                <h3 className='totalPrice'>Total Price:</h3>
                <p>{totalPrice}</p>
            </div>
        </>
    );
}

export default AddCard;
