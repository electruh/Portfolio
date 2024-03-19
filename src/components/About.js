// src/components/MainContent.js
import React from 'react';
import yourImage from '../assets/me.jpg';
import {faArrowRight, faDownload} from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import resume from '../file/Allanissumaya--Resume.pdf';
import coverletter from '../file/CoverLetter-AllanisSumaya.pdf';


const MainContent = () => {
    return (
        <main className="contentAbout">
            <div className="aboutMe">
                <div className="aboutBorder">
                <h1><span className="pink-text">Allanis Sumaya</span></h1>
                <p><span className="blue-text">Welcome </span> to my corner of the web! I'm Allanis Sumaya, a 23-year-old Filipino currently studying computer programming and analysis at George Brown College. My time at George Brown has equipped me with a solid foundation in programming concepts, project management, and problem-solving.</p>
                <p>Through my website, I'll share insights, experiences, and projects, giving you a peek into my journey as a budding computer programmer analyst.</p>

                <a href={resume} target="_blank" className="resume-link">
                    <button className="resume">
                        <FontAwesomeIcon icon={faFile} /> Resume
                    </button>
                </a>

                <a href={coverletter} target="_blank" className="coverletter-link">
                    <button className="coverletter">
                        <FontAwesomeIcon icon={faFile} /> Cover Letter
                    </button>
                </a>
                </div>

            </div>
            <div className="philosophy">
                <h3><span className="pink-text">"</span>Coding the Future: <span className="pink2-text">&nbsp;&nbsp;&nbsp;Where Creativity</span> &nbsp;&nbsp;&nbsp;Meets Possibility<span className="pink-text">"</span></h3>
            </div>
        </main>
    );
};
export default MainContent;
