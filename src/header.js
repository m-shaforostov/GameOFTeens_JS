import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const navigFunc = (path) => () => navigate(path);

    return (
        <div className="header-main">
            <div className="header-logo">
                <div className="logo">GoITeens Lab</div>
            </div>
            <div className="header-buttons">
                <div className="ui secondary menu">
                    <a className="item" href="#" onClick={ navigFunc('/startups') }>Startups</a>
                    <a className="item" href="#" onClick={ navigFunc('/create-new-startup') }>Create new</a>
                    <a className="item" href="#" onClick={ navigFunc('/news') }>News</a>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..."/>
                                <i aria-hidden="true" className="search icon"></i>
                            </div>
                        </div>
                        {/*<a className="item">Logout</a>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;