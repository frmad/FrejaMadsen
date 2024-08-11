import React from 'react';
import '../css/About.css';
import migImage from '../images/mig.jpg';

function About() {
    return (
        <div>
            <div className="projectsPage">
                <h2>About Me</h2>
            </div>

            {/* About Me Section */}
            <div className="aboutMe" id="about">
                <div className="headerAbout">
                    <img src={migImage} alt="Picture of me" className="aboutImage"/>
                    <h4>Freja Marie Madsen</h4>
                    <p className="centered">
                            Energetic, dedicated, and organized engineering student with experience in
                            service, IT, and communication. Background in web editing and a passion for
                            project management and web development. Skilled in independent work but also
                            excels in collaborative efforts. Curious and committed to personal and
                            professional development, as well as striving to enhance my skills.
                    </p>
                </div>

                    <p className="centered-orange"><span>Mail:</span> frejamadsen1408@gmail.com</p>
                    <p className="centered-orange"><span>Tel:</span> 21854409</p>

                    <hr className="break"/>

                    {/* Technical Skills */}
                    <h4 className="header">Technical Skills</h4>
                    <div className="box">
                        {renderSkill("HTML", "html", "90%")}
                        {renderSkill("CSS", "css", "80%")}
                        {renderSkill("Java", "css", "80%")}
                        {renderSkill("JavaScript", "js", "65%")}
                        {renderSkill("PHP", "php", "60%")}
                        {renderSkill("React", "php", "60%")}
                        {renderSkill("SQL", "php", "60%")}
                        {renderSkill("Python", "python", "30%")}
                        {renderSkill("MongoDB", "python", "30%")}
                        {renderSkill("Docker", "docker", "20%")}
                        {renderSkill("Kubernetes", "docker", "20%")}
                        {renderSkill("CI/CD", "docker", "20%")}
                    </div>

                    {/* Semi-technical Skills */}
                    <h4 className="header">Semi-technical Skills</h4>
                    <div className="box">
                        {renderSkill("Word", "html", "90%")}
                        {renderSkill("Excel", "css", "80%")}
                        {renderSkill("Powerpoint", "css", "80%")}
                    </div>

                    {/* Language Skills */}
                    <h4 className="header">Language Skills</h4>
                    <div className="box">
                        {renderSkill("Danish", "danish", "100%")}
                        {renderSkill("English", "css", "80%")}
                        {renderSkill("German", "php", "60%")}
                    </div>
            </div>
        </div>
    );
}

// Helper function to render skill progress bars
function renderSkill(name, className, level) {
    return (
        <div>
            <p>{name}</p>
            <div className="container">
                <div className={`skills ${className}`}>{level}</div>
            </div>
        </div>
    );
}

export default About;
