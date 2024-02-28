
const MenuMobile = () => {
    return (
        <div className="menu-mobile_container">
            {/*<button>*/}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            {/*</button>*/}
        </div>
    );
}

export default MenuMobile;


// MenuMobile.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";


const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`menu-mobile-container ${isOpen ? "open" : ""}`}>
            <button className="menu-toggle-btn" onClick={toggleMenu}>
                Menu
            </button>
            <ul className="menu-list">
                <li className="menu-list__item">
                    <NavLink to="/" activeClassName="activeLink" onClick={toggleMenu}>
                        Home
                    </NavLink>
                </li>
                <li className="menu-list__item">
                    <NavLink
                        to="/legal-notice"
                        activeClassName="activeLink"
                        onClick={toggleMenu}
                    >
                        Legal notice
                    </NavLink>
                </li>
                <li className="menu-list__item">
                    <NavLink
                        to="/privacy-policy"
                        activeClassName="activeLink"
                        onClick={toggleMenu}
                    >
                        Privacy policy
                    </NavLink>
                </li>
                <li className="menu-list__item">
                    <NavLink
                        to="/contacts"
                        activeClassName="activeLink"
                        onClick={toggleMenu}
                    >
                        Contacts
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MenuMobile;

