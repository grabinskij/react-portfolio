import React from 'react';
import {useParams} from "react-router-dom";
import {projects} from "../helpers/projectList";
import GitHubBtn from "../components/buttons/gitHubBtn/GitHubBtn";
import WebBtn from "../components/buttons/webBtn/WebBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ProjectPage = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
        <section className="section">
            <div className="container">
                <div className="project-details">
                    <h1>{project.title}</h1>
                    <a href={project.webLink} target="_blank" rel="noreferrer">
                        <img
                            src={project.imgBig}
                            alt={project.title}
                            className="project-details__cover"
                        />
                    </a>
                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    <div className="project-details__btn">
                        {project.gitHubLink && (
                            <GitHubBtn link={project.gitHubLink}/>
                        )}

                        {project.webLink && (
                            <WebBtn link={project.webLink}/>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectPage;