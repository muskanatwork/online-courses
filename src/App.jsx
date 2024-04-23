import './App.css'
import Data from '../public/Data.json'
import Course from './Components/Course'
import Nav from './Components/Nav'
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';


function App() {
    const [search, setSearch] = useState('')



    const searchItem = Data.filter((item) => {
        if (search === "") {
            return item
        } else if (item.author.toLowerCase().includes(search.toLowerCase())) {
            return item
        }
    })

    return (
        <>
            <Nav />
                <input type="text" value={search} placeholder='Search' onChange={event => setSearch(event.target.value)} />

            {searchItem.map((content, index) => {
                return (
                    <Course content={content} />
                )
            })}
            <Pagination
                count={3} variant="outlined" shape="rounded" />


        </>
    )
}

export default App
