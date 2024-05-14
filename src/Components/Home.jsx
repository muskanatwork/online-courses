import { useEffect, useState} from 'react';
import Data from '../Data/Data.json';
import Course from './Course';
import Nav from './Nav';
import Pagination from '@mui/material/Pagination';
import '../App.css'

function Home() {
    const courses = JSON.parse(localStorage.getItem("selectedCourse"))?JSON.parse(localStorage.getItem("selectedCourse")):[]
    const likeCourse = JSON.parse(localStorage.getItem("wishlist"))?JSON.parse(localStorage.getItem("wishlist")):[]

    const [search, setSearch] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(courses);
    const [wishlist, setWishlist] = useState(likeCourse);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState(''); // State to track sorting order

    const coursesPerPage = 3;

    const addCardClick = (index) => {
        setSelectedCourse([...selectedCourse, Data[index]]);
    };

    useEffect(()=>{
        localStorage.setItem('selectedCourse',JSON.stringify(selectedCourse))
    },[selectedCourse])


    const addWishlist = (index) => {
        setWishlist([...wishlist, Data[index]]);
    };

    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    },[wishlist])



    // For Search 
    const searchItem = Data.filter((item) => {
        if (search === "") {
            return item;
        } else if (item.author.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
    });

    // Function to sort courses based on price
    const sortedCourses = () => {
        let sortedData = [...searchItem]; // Copying search results to avoid mutating original data
        if (sortOrder === 'highToLow') {
            sortedData.sort((a, b) => b.price - a.price); // Sort from high to low
        } else if (sortOrder === 'lowToHigh') {
            sortedData.sort((a, b) => a.price - b.price); // Sort from low to high
        }
        return sortedData;
    };

    //For Pagination
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = sortedCourses().slice(indexOfFirstCourse, indexOfLastCourse);

    // Function to handle sorting selection change
    const handleSortChange = (event) => {
        setSortOrder(event.target.value); // Update sorting order state
    };

    // Function to handle page change
    const handleChangePage = (event, page) => {
        setCurrentPage(page);
    };

    // Rendered component
    return (
        <>
            <div className='search-baar'>
                {/* Nav bar components */}
                <Nav state={{ selectedCourse, wishlist }} />


                {/* Search input */}
                <input className='search-input' type="text" value={search} placeholder='Search' onChange={event => setSearch(event.target.value)} />
            </div>
            <div className='sort-order'>
                {/* Dropdown for sorting */}
                <select value={sortOrder} onChange={handleSortChange}>
                    <option value="">Sort</option>
                    <option value="highToLow">High to Low</option>
                    <option value="lowToHigh">Low to High</option>
                </select>
            </div>

            {/* Display courses */}
            {currentCourses.map((content, index) => (
                <Course content={content} index={index} key={index} addCardClick={addCardClick} addWishlist={addWishlist} />
            ))}

            {/* Pagination component */}
            <div className='pagination'>
                <Pagination
                    count={Math.ceil(sortedCourses().length / coursesPerPage)}
                    variant="outlined" shape="rounded"
                    page={currentPage}
                    onChange={handleChangePage}
                />
            </div>
        </>
    );
}

export default Home;
