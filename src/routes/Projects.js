import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import FrontendProjects from "./Projects/FrontendProjects";
import BackendProjects from "./Projects/BackendProjects";
import "../css/Project.css";

function Projects() {
    const frontendRef = useRef(null);
    const backendRef = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(frontendRef.current, {
            origin: 'left',
            distance: '150%',
            duration: 700,
            easing: 'ease-in-out',
            opacity: 0,
            reset: true // Resets animation when element leaves viewport
        });

        ScrollReveal().reveal(backendRef.current, {
            origin: 'right',
            distance: '150%',
            duration: 700,
            easing: 'ease-in-out',
            opacity: 0,
            reset: true
        });
    }, []);

    return (
        <div className="projectsPage">
            <div className="intro">
                <h2 className="section-title">Project Portfolio</h2>
                <p className="about-text">Welcome to my portfolio of projects!</p>
                <p className="about-text">Below, you'll discover a curated selection of projects that I've had the pleasure of contributing to.</p>
                <p className="about-text">Feel free to explore each project by clicking on the links provided.</p>
            </div>

            <div className="front" ref={frontendRef}>
                <FrontendProjects />
            </div>
            <div className="back" ref={backendRef}>
                <BackendProjects />
            </div>
        </div>
    );
}

export default Projects;
