import './App.css'
import Data from '../public/Data.json'
import Course from './Components/Course'

function App() {
    console.log(Data);

    return (
        <>
       {Data.map((content, index) => {
                return (
                    <Course content = {content}/>
                )
            })}

        </>
    )
}

export default App
