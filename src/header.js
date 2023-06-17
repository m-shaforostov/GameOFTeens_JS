import './header.css';
import { useNavigate } from 'react-router-dom';
import {useState} from "react";

function Header() {
    const navigate = useNavigate();
    const navigFunc = (path) => () => navigate(path);
    const [activeMenu, setActiveMenu] = useState(false);
    return (
        <div className="header-main">
            <div className="header-logo">
                <div className="logo">GoITeens Lab</div>
            </div>
            <div className="header-buttons">
                <div className="ui secondary menu">
                    <a className="item" id="link-button-1" href="#" onClick={ navigFunc('/startups') }>Startups</a>
                    <a className="item" id="link-button-2" href="#" onClick={ navigFunc('/create-new-startup') }>Create new</a>
                    <a className="item" id="link-button-3" href="#" onClick={ navigFunc('/news') }>News</a>
                    <div className="right menu" id="search-input-header">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..."/>
                                <i aria-hidden="true" className="search icon"></i>
                            </div>
                        </div>
                    </div>
                    <div className={`ui pointing vertical menu menu-list`} id={activeMenu ? "" : "menu-list-hidden"}>
                        <a className="item" href="#" onClick={ navigFunc('/startups') }>Startups</a>
                        <a className="item" href="#" onClick={ navigFunc('/create-new-startup') }>Create new</a>
                        <a className="item" href="#" onClick={ navigFunc('/news') }>News</a>
                        <div className="ui icon input" id="search-input-menu">
                            <input type="text" placeholder="Search..."/>
                            <i aria-hidden="true" className="search icon"></i>
                        </div>
                    </div>
                    <div className="burger-menu" onClick={()=> setActiveMenu(!activeMenu)}>
                        <img src="/img/burger.png" alt=""/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;