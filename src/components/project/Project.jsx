import { NavLink } from 'react-router-dom';
import "./style.css";

const Project = ({ title, img, index }) => {
    return (
        <NavLink to={`/project/${index}`}>
            <div className="project-wrapper">
                <li className="project">
                    <img src={img} alt={title} className="project__img" />
                    <h3 className="project__title">{title}</h3>
                </li>
            </div>
        </NavLink>
    );
};

export default Project;