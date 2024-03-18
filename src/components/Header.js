// src/components/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="computer">
                <i className="fas fa-laptop"></i>
            </div>
            <div className="logo"></div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" activeClassName="active-link">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" activeClassName="active-link">
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName="active-link">
                            Projects
                        </NavLink>
                    </li>
                    {/*<li>*/}
                    {/*    <NavLink to="/contact" activeClassName="active-link">*/}
                    {/*        Contact*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
