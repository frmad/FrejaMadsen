import React from 'react';
import FrontendProjects from "./Projects/FrontendProjects";
import BackendProjects from "./Projects/BackendProjects";
import "../css/Project.css";
function Projects() {
    return (
        <div className="projectsPage">
            <h2>Projects</h2>
            <div>
                <p className="about-text">Welcome to my portfolio of projects!</p>
                <p className="about-text">Below, you'll discover a curated selection of projects that I've had the
                    pleasure
                    of contributing to.</p>
                <p className="about-text">Feel free to explore each project by clicking on the links provided.</p>
            </div>
            <FrontendProjects/>
            <BackendProjects/>
        </div>
    );
}

export default Projects;