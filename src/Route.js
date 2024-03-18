// src/Routes.js
import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Routes = () => {
    return (
        <div>
            <Header />
            <Element name="about">
                <About />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </div>
    );
};

export default Routes;
