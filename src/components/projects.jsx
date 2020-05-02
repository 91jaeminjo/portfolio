import React from 'react';
import {
    Link
} from "react-router-dom";


export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>My Projects</h1>
            <ul className="text-left">
                <li><Link to="/TimeClock">Time Clock</Link></li>
            </ul>
        </div>
    )
}