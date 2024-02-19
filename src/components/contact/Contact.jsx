import React from 'react';
import "./style.css";

const Contact = () => {
    return (
        <div className="contacts-container">
            <h1>Contacts</h1>
            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="section__title">Location</h2>
                    <p>Templin, Brandenburg, Germany</p>
                </li>
                <li className="content-list__item">
                    <h2 className="section__title">Telegram / WhatsApp</h2>
                    <p>
                        +380685840604
                    </p>
                </li>
                <li className="content-list__item">
                    <h2 className="section__title">Phone</h2>
                    <p>
                        <a href="tel:+491626320634">+491626320634</a>
                    </p>
                </li>
                <li className="content-list__item">
                    <h2 className="section__title">Email</h2>
                    <p>
                        <a href="mailto:bogdan.grabinskij@gmail.com">
                            bogdan.grabinskij@gmail.com
                        </a>
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Contact;