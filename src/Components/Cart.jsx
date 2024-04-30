import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import AddCourseDetils from './AddCourseDetils'

const Cart = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedCourseList = location.state
    console.log(selectedCourseList);
    return (
        <>{selectedCourseList.map((courseDetils,i)=>{
            return(<AddCourseDetils courseDetils = {courseDetils} key={i}/>)
        })
}
        </>
    )
}

export default Cart

