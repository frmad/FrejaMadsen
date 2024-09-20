import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import FrontendProjects from "./Projects/FrontendProjects";
import BackendProjects from "./Projects/BackendProjects";
import "../css/Project.css";
import Wave from '../routes/Elements/Wave';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    useEffect(() => {
        gsap.fromTo(".front",
            { opacity: 0, x: "-100vw" }, // Initial state: move out of view
            {
                opacity: 1,
                x: "0vw",
                duration: 1.5,
                scrollTrigger: {
                    trigger: ".front", // This is the element being observed
                    start: "top 80%", // Start animation when the top of .front is 80% from the top of the viewport
                    end: "top 20%", // End animation when the top of .front is 20% from the top of the viewport
                    scrub: true, // Smoothly animate based on scroll position
                    markers: false // Remove markers for production
                }
            }
        );

        gsap.fromTo(".back",
            { opacity: 0, x: "100vw" }, // Initial state: move out of view
            {
                opacity: 1,
                x: "0vw",
                duration: 1.5,
                scrollTrigger: {
                    trigger: ".back", // This is the element being observed
                    start: "top 80%", // Start animation when the top of .back is 80% from the top of the viewport
                    end: "top 20%", // End animation when the top of .back is 20% from the top of the viewport
                    scrub: true, // Smoothly animate based on scroll position
                    markers: false // Remove markers for production
                }
            }
        );
    }, []);

    return (
        <div>
            <Wave />
            <div className="projectsPage">
                <div className="intro">
                    <h2 className="section-title">Project Portfolio</h2>
                    <p className="about-text">Welcome to my portfolio of projects!</p>
                    <p className="about-text">Below, you'll discover a selection of projects that I've had the pleasure of contributing to.</p>
                    <p className="about-text">Feel free to explore each project by clicking on the links provided.</p>
                </div>

                <div className="front">
                    <FrontendProjects />
                </div>
                <div className="back">
                    <BackendProjects />
                </div>
            </div>
        </div>
    );
}

export default Projects;