import './createNewPage.css';
import _ from 'lodash';
import {useEffect, useState} from "react";

function CreateNewPage() {
    const [filesArr, setFilesArr] = useState([]);

    function showUploadedFiles (el) {
        let fileName = el.target.files[0].name;
        let filetype = el.target.value.split(".").pop();
        let copy = _.clone(filesArr);
        copy.push({
            name: fileName,
            type: filetype,
        })
        setFilesArr(copy);
    }

    function removeUploadedFiles (index) {
        let copy = _.clone(filesArr);
        copy.splice(index, 1);
        setFilesArr(copy);
    }

    // optional and *
    return (
        <div className="create-new-form">
            <div className="ui info message form-message">
                <div className="header">Hello! We are seeking for new exciting startups that need funding. </div>
                <p>Here you can <b>share</b> your idea for
                    further development.</p>
            </div>
            <div className="creation-form">
                <form className="ui form">
                    <div className="equal width fields">
                        <div className="field"><label>First name</label>
                            <div className="ui fluid input"><input type="text" placeholder="First name"/></div>
                        </div>
                        <div className="field"><label>Last name</label>
                            <div className="ui fluid input"><input type="text" placeholder="Last name"/></div>
                        </div>
                    </div>
                    <div className="equal width fields">
                        <div className="field"><label>E-mail</label>
                            <div className="ui fluid input"><input type="text" placeholder="E-mail"/></div>
                        </div>
                        <div className="field"><label>Phone number (optional)</label>
                            <div className="ui fluid input"><input type="text" placeholder="Phone number"/></div>
                        </div>
                    </div>
                    <div className="field"><label>Project name</label><input placeholder="Name"/></div>
                    <div className="field"><label>Description</label><input placeholder="Write a short and catchy description"/></div>
                    <div className="field">
                        <label>Full information</label>
                        <textarea placeholder="Tell us more about project..." rows="3"></textarea>
                    </div>
                    <div className="field attach-file-button">
                        <label>Additional files</label>
                        <input type="file" id="upload" name="filename" hidden onChange={showUploadedFiles}/>
                        <label htmlFor="upload" id="upload-label" className="upload-label">
                            <div className="upload-info">
                                <div className="upload-icon">
                                    <i className="cloud upload icon"></i>
                                </div>
                                <p className="upload-text">Click here to upload</p>
                            </div>
                        </label>
                    </div>
                    <div className="field uploaded-files">
                        <label>Uploaded files</label>
                        <div className="uploaded-files-list">
                            {
                                filesArr.map((value, index) => {
                                    return (
                                    <div className="file" key={index}>
                                        <div className="left-file-info">
                                            <div className="file-type">
                                                {value.type.toUpperCase()}
                                            </div>
                                            <div className="file-name">
                                                 {value.name}
                                            </div>
                                        </div>
                                        <div className="right-file-info" onClick={() => {removeUploadedFiles(index)}}>
                                            <i className="close icon"></i>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                            <div className={filesArr.length === 0 ? "no-files" : "hidden-message"}>No files uploaded</div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" id="agreement" readOnly="" />
                            <label htmlFor="agreement">I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <div className="field ui blue buttons">
                        <button className="ui button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateNewPage;