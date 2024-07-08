import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/ProjectCard.css"; // You can create specific CSS for this component if needed

const ProjectCard = ({ title, description, tech, linkText, linkUrl, external, imageUrl, figmaUrlLofi, figmaUrlHifi }) => {
    return (
        <div className="column">
            <div className="card">
                <h3>{title}</h3>
                {imageUrl && <img src={imageUrl} alt={`Image for ${title}`} className="project-image" />}
                <p>{description}</p>
                <p>{tech}</p>
                <div className="project-links">
                    {linkUrl && (
                        external ? (
                            <a className="githublink" href={linkUrl} target="_blank" rel="noopener noreferrer">{linkText}</a>
                        ) : (
                            <Link className="githublink" to={linkUrl}>{linkText}</Link>
                        )
                    )}
                    {(figmaUrlLofi || figmaUrlHifi) && (
                        <div className="figma-links">
                            {figmaUrlLofi && (
                                <a className="githublink" href={figmaUrlLofi} target="_blank" rel="noopener noreferrer">View Lo-Fi wireframes on Figma</a>
                            )}
                            {figmaUrlHifi && (
                                <a className="githublink" href={figmaUrlHifi} target="_blank" rel="noopener noreferrer">View Hi-Fi wireframes on Figma</a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;