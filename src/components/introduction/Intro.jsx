import React from 'react';
import "./style.css";
import imgIntro from "../../assets/img/face-intro.jpg"


const Intro = () => {
    return (
        <section className="intro" id="home">
            <h1 data-aos="fade-up"
                data-aos-duration="2000"
                className="section__title section__title--intro">

                Hi, I am <strong>Bohdan Hrabynskyi</strong>

            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src={imgIntro}  className="intro__img" alt="a picture of Bohdan Hrabynskyi"/>
        </section>
    );
};

export default Intro;