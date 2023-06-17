import './startupInfo.css';
import {useNavigate, useLocation} from "react-router-dom";
import admin from "./admin.json";

function StartupInfo() {
    const admin = require('./admin.json');
    const navigate = useNavigate();
    const location = useLocation();
    const startupId = location.pathname.slice(-1);
    const startup = admin.startups[startupId];
    const navigFunc = (path) => () => navigate(path);

    return (
        <div className="chosen-startup-main">
            <div className="header-info">
                <div className="arrow" onClick={ navigFunc('/startups') }>
                    <i className="arrow left icon"></i>
                </div>
                <div className="title">
                    Startup Information
                </div>
            </div>
            <div className="chosen-startup">
                <div className="chosen-startup-name">
                    <b>{startup.name}</b>
                </div>
                <div className="chosen-startup-short-description">
                    {startup["short-description"]}
                </div>
                <div className="chosen-startup-posting-date">
                    <p>Posted {startup.date}</p>
                    <p>Earned {startup["accumulated-money"]}</p>
                </div>
                <div className="chosen-startup-full-explanation">
                    {startup["full-explanation"]}
                </div>
            </div>
            <div className="ui divider"></div>
            <div className="chosen-photos">
                {
                    startup["pictures"].map((value, index) => {
                        return (
                            <div className="photo" key={index}>
                                <img src={value} alt="" className="photo-img"/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="ui divider"></div>

            <div className="chosen-startup-footer">
                <div className="chosen-startap-creator">
                    <div className="chosen-creator-name">
                        Creator: <p><b>{startup["creator-name"]}</b></p>
                    </div>
                    <div className="chosen-creator-contacts">
                        Contacts: <p><b>{startup["creator-contacts"]}{startup["creator-phone"] ? ", " + startup["creator-phone"] : ""}</b></p>
                    </div>
                </div>
                <div className="footer-buttons">
                    <div className="contact-button">
                        Contact
                    </div>
                    <div className="patreon-button">
                        Patreon
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StartupInfo;