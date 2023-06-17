import './header.css';

function Header() {

    return (
        <div className="header-main">
            <div className="header-logo">
                <div className="logo">GoITeens Lab</div>
            </div>
            <div className="header-buttons">
                <div className="ui secondary menu">
                    <a className="item">Startups</a>
                    <a className="item">Create new</a>
                    <a className="item">News</a>
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