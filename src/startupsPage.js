import './startupsPage.css';
import { useNavigate } from 'react-router-dom';
import StartInfo from './startupInfo'
import {useState} from "react";

function StartupsPage() {

    const admin = require('./admin.json');
    const startups = admin.startups;
    const navigate = useNavigate();

    function handleButtonClick(path) {
        navigate(path);
    }

    return (
        <div className="startups-list">
            {
                Object.keys(startups).map((key, index) => {//[x]
                    return (
                        <div className="startup-list-item" key={index} onClick={() => {handleButtonClick(`/startup/${index}`)}}>
                            <div className="description-side">
                                <div className="startup-name">
                                    <b>{startups[key].name}</b>
                                </div>
                                <div className="startup-short-description">
                                    {startups[key]["short-description"]}
                                </div>
                                <div className="posting-date">
                                    <p>Posted {startups[key].date}</p>
                                    <p>Earned {startups[key]["accumulated-money"]}</p>
                                </div>
                                <div className="startup-full-explanation">
                                    {startups[key]["full-explanation"]}
                                </div>
                                <div className="startup-creator">
                                    <div className="creator-name">
                                        Creator: <b>{startups[key]["creator-name"]}</b>
                                    </div>
                                    <div className="creator-contacts">
                                        Contacts: <p><b>{startups[key]["creator-contacts"]}</b></p><p><b>{startups[key]["creator-phone"] ? startups[key]["creator-phone"] : ""}</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="ui divider" id="adaptive-divider-column"></div>
                            <div className="photo-side">
                                <div className="startup-photo">
                                    <img src={startups[key]["pictures"][0]} alt="startup-photo"/>
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