import React from 'react';
import Projects from "../components/projects/Projects";
import Header from "../components/header/Header";
import Services from "../components/services/Services";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const HomePage = () => {
    return (
        <div>

            <Header/>

            <Services/>

            <About/>

            <Projects/>

        </div>
    );
};

export default HomePage;