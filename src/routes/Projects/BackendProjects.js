import React from 'react';
import ProjectCard from './ProjectCard';
import sem3 from '../../Figmaimages/sem3.pdf';

const BackendProjects = () => {
    return (
        <div>
            <h4>Backend Projects</h4>
            <div className="row">
                <ProjectCard
                    title="Recipe page project"
                    description="I created this project to keep track of my favorite recipes"
                    tech="Developed using React JS"
                    linkText="Open Recipe Project"
                    linkUrl="/recipes"
                    external={false}
                />
                <ProjectCard
                    title="Software maintenance project"
                    description="Improve the maintainability of the provided code"
                    tech="Java"
                    linkText="Link to Git repository"
                    linkUrl="https://github.com/frmad/JHotDraw"
                    external={true}
                />
                <ProjectCard
                    title="Game semester project"
                    description="Create 2d game - AI and componentbased development"
                    tech="Java"
                    linkText="Link to Git repository"
                    linkUrl="https://github.com/Nolle10/InVasion"
                    external={true}
                />
                <ProjectCard
                    title="Game semester project"
                    description="Create game based on Sustainable Development Goals (SDG)"
                    tech="Java and Java FX"
                    linkText="Link to Git repository"
                    linkUrl="https://github.com/mathiasgredal/1-Semesterprojekt-Civil-Gruppe-5.2"
                    external={true}
                />
                <ProjectCard
                    title="Data security semester project"
                    description="Handel data security"
                    tech="Java"
                    linkText="Link to repport"
                    //sem3.pdf
                />
                <a
                    href={sem3} // Use the imported PDF path
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Link to PDF Document
                </a>

            </div>
        </div>
    );
};

export default BackendProjects;