import React from 'react';
import { Card, Button } from "react-bootstrap";
import chatAppImage from '../assets/chatApp.png';
import capstoneImage from '../assets/capstone.png';
import weatherImage from '../assets/weather.png';
import tictactoeImage from '../assets/tictactoe.png';
import expenseImage from '../assets/expense.png';
import shsProject from '../assets/shsProject.png';
import docu from './DocumentationPage';
import {Link} from "react-router-dom";

function Project({ name, description, techStack, image, githubLink, hasdocu }) {
    return (
        <Card className="project-card">
            <div className="image-container">
                <img src={image} alt={name} className="project-image" />
                <div className="overlay">
                    <div className="project-info">
                        <h5 className="project-name">{name}</h5>
                        <p className="project-description">{description}</p>
                        <p className="project-tech-stack">Tech Stack: {techStack}</p>
                        <Button href={githubLink} target="_blank" className='project-btn' >View GitHub</Button>
                        {hasdocu && (<Link to="/documentation"  className='project-btn' >View Documentation</Link>)}
                    </div>
                </div>
            </div>
        </Card>
    );
}

const Projects = () => {
    const projects = [
        {
            name: "Capstone Project - Barber Mobile Application",
            description: "Our team developed a barber shop application that allows users to book appointments, create an account, browse barber's portfolio, leave reviews, and live barber consultation feature.",
            techStack: "MongoDB, Express.js, React Native, Node.js",
            image: capstoneImage,
            githubLink: "https://github.com/paosanityyy/BarberApp.git",
            hasdocu: true
        },
        {
            name: "Chat Application",
            description: "This app allows users to engage in real-time conversations, create customizable chat rooms, and send private messages.",
            techStack: "MongoDB, HTML, CSS, JavaScript, React.js, Bootstrap",
            image: chatAppImage,
            githubLink: "https://github.com/electruh/101308759_comp3133_chatApp.git",
            hasdocu: false
        },
        {
            name: "Expense Tracker",
            description: "An expense tracker python program that allows users to track their monthly expenses. Data is saved in a database and categorized by expense category.",
            techStack: "Python, SQLite3",
            image: expenseImage,
            githubLink: "https://github.com/paosanityyy/expense_tracker.git",
            hasdocu: false
        },
        {
            name: "Tic Tac Toe Java Application",
            description: "A Tic Tac Toe game developed using Java to implement what we have learned for our data structures and algorithms class. It demonstrates the application of data structures and algorithms concepts in a practical project.",
            techStack: "Java",
            image: tictactoeImage,
            githubLink: "https://github.com/paosanityyy/tic-tac-toe.git",
            hasdocu: false
        },
        {
            name: "Weather App",
            description: "A weather web application that provides real-time weather information using data from the OpenWeather API. Users can access current weather conditions, forecasts, and other meteorological data for various locations.",
            techStack: "HTML, CSS, JavaScript, React.js, Bootstrap, OpenWeather API.",
            image: weatherImage,
            githubLink: "https://github.com/electruh/101308759_comp3123_labtest2.git",
            hasdocu: false
        },
        {
            name: "Dental Management System",
            description: "Our team developed a software solution that revolutionizes dental clinic operations, enabling efficient appointment scheduling, patient management and service booking. " +
                "Year developed: 2017",
            techStack: "C#, mySql",
            image: shsProject,
            githubLink: "",
            hasdocu: false
        },
    ];

    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    name={project.name}
                    description={project.description}
                    techStack={project.techStack}
                    image={project.image}
                    githubLink={project.githubLink}
                    hasdocu={project.hasdocu}
                />
            ))}
        </div>
    );
};

export default Projects;
