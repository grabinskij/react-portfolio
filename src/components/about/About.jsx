import React from 'react';
import "./style.css";
import imgAbout from "../../assets/img/face-about.jpg"



const About = () => {
    return (
        <section className="about-me">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Front-end development</p>

            <div className="about-me__body">
                <p data-aos="fade-right" data-aos-easing="ease-out-sine">I am a front-end developer based in Germany. For many years I worked in completely different areas,
                    including construction and trade, but I found my passion in programming. My path to exploring modern information technology was
                    self-education along with university studies. So I obtained a Master's degree in Computer
                    Engineering. After graduation, I did practical training in the company that specializes
                    on CMS Drupal and Wordpress.
                </p>
                <p data-aos="fade-right" data-aos-easing="ease-out-quad" data-aos-delay="50">I accumulated the most experience while creating Landing Pages. 
                    Recently I've begun developing React Apps. My further goals are to improve my front-end skills, and later to become a full-stack developer.
                </p>
                <p data-aos="fade-right" data-aos-easing="ease-out-quad" data-aos-delay="100">I like working with technologies. Besides, I have passion for traveling, sports, and
                    self-improvement.
                </p>

            </div>

            <img src={imgAbout} className="about-me__img" alt="Bohdan"/>
        </section>
    );
};

export default About;