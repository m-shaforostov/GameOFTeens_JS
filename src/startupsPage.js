import './startupsPage.css';
import {useEffect} from "react";

function StartupsPage() {
    const admin = require('./admin.json');
    const startups = admin.startups;
    return (
        <div className="startups-list">
            {
                Object.keys(startups).map((key, index) => {//[x]
                    return (
                        <div className="startup-list-item">
                            <div className="description-side">
                                <div className="startup-name">
                                    <b>{startups[key].name}</b>
                                </div>
                                <div className="startup-short-description">
                                    {startups[key]["short-description"]}
                                </div>
                                <div className="startup-full-explanation">
                                    {startups[key]["full-explanation"]}
                                </div>
                                <div className="startup-creator">
                                    <div className="creator-name">
                                        Creator: <b>{startups[key]["creator-name"]}</b>
                                    </div>
                                    <div className="creator-contacts">
                                        Contacts: <b>{startups[key]["creator-contacts"]}</b>
                                    </div>
                                </div>
                            </div>
                            <div className="photo-side">
                                <div className="startup-photo">
                                    <img src={startups[key]["pictures"]} alt="startup-photo"/>
                                    {/*<div className="ui active centered inline loader"></div>*/}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StartupsPage;