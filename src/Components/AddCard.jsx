import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import AddCourseDetils from './AddCourseDetils'

const AddCard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedCourseList = location.state.selectedCourse
    console.log(selectedCourseList);
    let totelPrice = 0;
    for(let i = 0;i<selectedCourseList.length;i++){
        totelPrice += selectedCourseList[i].price
    }
    console.log(totelPrice);
    
    
    return (
        <>{selectedCourseList.map((courseDetils, i) => {
            return (<AddCourseDetils courseDetils={courseDetils} key={i} />)
        })
        }
        <div> <h3 className='taotalPrice'>Total Price:</h3> <p>{totelPrice}</p></div>
        </>
    )
}

export default AddCard

