import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/ProjectCard.css"; // Ensure this path is correct

const ProjectCard = ({ title, description, tech, linkText, linkUrl, external, imageUrl, figmaUrlLofi, figmaUrlHifi }) => {
    return (
        <div className="column">
            <div className="card">
                <h3 className="card-title">{title}</h3>
                {imageUrl && <img src={imageUrl} alt={`Image for ${title}`} className="card-image" />}
                <p className="card-description">{description}</p>
                <p className="card-tech">{tech}</p>
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
