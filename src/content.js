import './content.css';
import { Routes, Route } from  "react-router-dom"
import StartupsPage from "./startupsPage";
import CreateNewPage from "./createNewPage";

function Content() {

    return (
        <div className="content-main">
            <div className="content-center">
                <Routes>
                    <Route path="/startups" element={<StartupsPage/>}/>
                    <Route path="/create-new-startup" element={<CreateNewPage/>} />
                    <Route  />
                </Routes>
            </div>
        </div>
    )
}

export default Content;