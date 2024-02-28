import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./style.css";
import DarkModeBtn from "../buttons/darkModeBtn/darkModeBtn";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <DarkModeBtn/>

                    <ul className={`nav-list ${isOpen ? "is-open" : ""}`}>
                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink
                                to="/legal-notice"
                                className={({isActive}) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Legal notice
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink
                                to="/privacy-policy"
                                className={({isActive}) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Privacy policy
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({isActive}) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                    <button className="burger-menu" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;