import React from 'react';
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import "./style.css";


const Footer = () => {
    return (
        <section className="footer">
            <a href="mailto:bogdan.grabinskij@gmail.com" className="footer__link">bogdan.grabinskij@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a href="https://www.facebook.com/bogdan.grabinsky" target="_blank" rel="noreferrer" className="social-list__link">
                        <FontAwesomeIcon icon={faFacebook} className="social-list__icon"></FontAwesomeIcon>
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="https://github.com/grabinskij" target="_blank" rel="noreferrer" className="social-list__link">
                        <FontAwesomeIcon icon={faGithub} className="social-list__icon"></FontAwesomeIcon>
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="https://www.linkedin.com/in/bohdan-hrabynskyi" target="_blank" rel="noreferrer" className="social-list__link">
                        <FontAwesomeIcon icon={faLinkedin} className="social-list__icon"></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Footer;