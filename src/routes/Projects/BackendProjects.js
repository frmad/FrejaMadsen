import React from 'react';
import ProjectCard from './ProjectCard';
import sem3 from '../../figmaimages/sem3.pdf';

const BackendProjects = () => {
    return (
        <div>
            <h4 className="categoryTitle">Backend-Based Projects</h4>
            <div className="row">
                <ProjectCard
                    title="Recipe Page Project"
                    description="A simple website that keeps track of my favorite recipes"
                    tech="Developed with React JavaScript, CSS, and a local database"
                    linkText="Open Recipe Project"
                    linkUrl="https://frmad.github.io/Recipe-application"
                    external={true}
                />
                <ProjectCard
                    title="Software Maintenance Project - School Project"
                    description="Enhancement of the maintainability of the provided code of a drawing application"
                    tech="Developed with Java"
                    linkText="View Git Repository"
                    linkUrl="https://github.com/frmad/JHotDraw"
                    external={true}
                />
                <ProjectCard
                    title="2D Game - Semester Project"
                    description="A 2D game focusing on AI and component-based development"
                    tech="Developed with Java"
                    linkText="View Git Repository"
                    linkUrl="https://github.com/Nolle10/InVasion"
                    external={true}
                />
                <ProjectCard
                    title="SDG Game - Semester Project"
                    description="A game based on the Sustainable Development Goals (SDG)"
                    tech="Developed with Java and JavaFX"
                    linkText="View Git Repository"
                    linkUrl="https://github.com/mathiasgredal/1-Semesterprojekt-Civil-Gruppe-5.2"
                    external={true}
                />
                <ProjectCard
                    title="Data Security Microservice - Semester Project"
                    description="A microservice for a music streaming platform, focusing on GDPR compliance and safeguarding user passwords through encryption"
                    tech="Developed with Java, SQL and REST API integration"
                    linkText="View Report"
                    linkUrl={sem3} // PDF
                    external={true}
                />
            </div>
        </div>
    );
};

export default BackendProjects;
