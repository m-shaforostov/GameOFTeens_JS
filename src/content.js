import './content.css';
import { Routes, Route } from  "react-router-dom"
import StartupsPage from "./startupsPage";

function Content() {

    return (
        <div className="content-main">
            <div className="content-center">
                <Routes>
                    <Route path="/" element={<StartupsPage/>}/>
                    <Route  />
                    <Route  />
                </Routes>
            </div>
        </div>
    )
}

export default Content;