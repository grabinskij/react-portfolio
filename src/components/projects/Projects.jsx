import React from 'react';
import {projects} from "../../helpers/projectList";
import Project from "../project/Project";
import "./style.css";


const Projects = () => {
    return (
        <section className="my-work" id="work">
            <div className="container">
                <h2 className="section__title section__title--work">My projects</h2>
                <p className="section__subtitle section__subtitle--work">I have created something</p>
                <ul data-aos="fade-left"
                    data-aos-offset="40"
                    data-aos-easing="ease"
                    className="projects">
                    {projects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                title={project.title}
                                img={project.img}
                                index={index}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Projects;