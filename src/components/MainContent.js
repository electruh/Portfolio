// src/components/MainContent.js
import React from 'react';
import yourImage from '../assets/me.jpg';
import {faArrowRight, faDownload} from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MainContent = () => {
    return (
        <main className="content">
            <div className="links-icon">
                <ul className="social-icons">
                    <li><a href="mailto:allanissumaya22@gmail.com"><i className="far fa-envelope"></i></a></li>
                    <li><a href="https://github.com/electruh" target="_blank"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/alluhnis/"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/allaniselectrajoice.sumaya"><i className="fab fa-facebook"></i></a></li>
                    {/*<li><a href="#"><i className="fab fa-telegram"></i></a></li> /!* Add Telegram icon *!/*/}
                </ul>
            </div>
            <div className="greeting">
                <h1>Hi There! </h1>
                <h1>I'm <span className="pink-text">Allanis Sumaya</span></h1>
                <h1>I am into <span className="blue-text">Programming</span></h1>



            </div>
            <div className="image">
                <img src={yourImage} alt="Your Image Description" className="rounded-image" />
            </div>
        </main>
    );
};
export default MainContent;
