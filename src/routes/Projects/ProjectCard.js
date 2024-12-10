import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../../css/ProjectCard.css"; // Ensure this path is correct

const ProjectCard = ({ title, description, tech, linkText, linkUrl, external, imageUrl, figmaUrlLofi, figmaUrlHifi, video }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="column">
            <div className={`card ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
                <h3 className="card-title">{title}</h3>
                {imageUrl && <img src={imageUrl} alt={`Preview for the project ${title}`} className="card-image"/>}
                <p className="card-description">{description}</p>
                <p className="card-tech">{tech}</p>
                <div className="project-links">
                    {linkUrl && (
                        external ? (
                            <a className="githublink" href={linkUrl} target="_blank"
                               rel="noopener noreferrer">{linkText}</a>
                        ) : (
                            <Link className="githublink" to={linkUrl}>{linkText}</Link>
                        )
                    )}
                    {(figmaUrlLofi || figmaUrlHifi || video) && ( //checks if at least one of the props is provided
                        <div className="figma-links">
                            {figmaUrlLofi && (
                                <a className="githublink" href={figmaUrlLofi} target="_blank" rel="noopener noreferrer">View
                                    Lo-Fi wireframes on Figma</a>
                            )}
                            {figmaUrlHifi && (
                                <a className="githublink" href={figmaUrlHifi} target="_blank" rel="noopener noreferrer">View
                                    Hi-Fi wireframes on Figma</a>
                            )}
                            {video && expanded && (
                                <div className="video-container">
                                    <video controls className="video-player">
                                        <source src={video} type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                            {video && (
                                <button className="video-button" onClick={toggleExpanded}>
                                    {expanded ? 'Close Demo' : 'View Demo'}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
