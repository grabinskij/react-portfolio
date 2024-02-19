import React from 'react';
import "./style.css";


const Services = () => {
    return (
            <section className="my-services">
                <h2 className="section__title section__title--services">What I do</h2>
                <div className="services">
                    <div data-aos="flip-down"
                         className="service">
                        <p>I employ modern technologies in my work, such as <span><strong>HTML5, CSS3, SCSS, Bootstrap, JavaScript, React,
                            Redux Toolkit, REST API</strong></span> and others, and use cross-browser and adaptive coding.
                        </p>
                    </div>
                </div>
                <div className="services-btn">
                    <a href="#work" className="btn">My Work</a>
                </div>
            </section>
    );
};

export default Services;