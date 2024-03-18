// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import MainContent from './components/MainContent';
import './styles/main.css';
import Skills from "./components/Skills";
import DocumentationPage from "./components/DocumentationPage";




const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<MainContent />} />
                    <Route path="/documentation" element={<DocumentationPage/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
