import React from "react";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const GitHubBtn = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <FontAwesomeIcon icon={faGithub} style={{fontSize: "1.05em"}}/>
            GitHub repo
        </a>
    );
};

export default GitHubBtn;