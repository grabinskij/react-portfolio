import React from "react";
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const WebBtn = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <FontAwesomeIcon icon={faGlobe} />
            Web site
        </a>
    );
};

export default WebBtn;