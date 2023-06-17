import './content.css';
import { Routes, Route } from  "react-router-dom"
import StartupsPage from "./startupsPage";
import CreateNewPage from "./createNewPage";
import News from "./news";
import StartupInfo from "./startupInfo";

function Content() {

    return (
        <div className="content-main">
            <div className="content-center">
                <Routes>
                    <Route path="/" element={<StartupsPage/>}/>
                    <Route path="/startups" element={<StartupsPage/>}/>
                    <Route path="/create-new-startup" element={<CreateNewPage/>} />
                    <Route path="/news" element={<News/>}/>
                    <Route path="/startup/*" element={<StartupInfo/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Content;