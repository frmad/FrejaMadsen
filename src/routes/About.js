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
                    {/*<img src={migImage} alt="Picture of me" className="aboutImage"/>*/}
                    <h4>Freja Marie Madsen</h4>
                    <p className="aboutMeText">
                        Hello, I'm Freja Marie Madsen, a 22-year-old with a passion for technology,<br/>
                        communication, and continuous learning. My journey began with an interest in business and
                        IT,<br/>
                        which led me to pursue a Bachelor's degree in Software Engineering from the University of
                        Southern Denmark (SDU).<br/>
                        Along the way, I’ve developed a strong foundation in software development, web editing, and
                        problem-solving,<br/>
                        combined with valuable experience in customer service and leadership.<br/><br/>

                        My background in IT has given me a unique set of technical skills, including proficiency in
                        languages like Java,<br/>
                        PHP, and JavaScript, as well as experience with databases, Docker, and Kubernetes.<br/>
                        I take pride in my ability to tackle complex problems with a structured and practical
                        approach,<br/>
                        always aiming to deliver high-quality results.<br/><br/>

                        In addition to my technical expertise, I am a highly organized and dedicated individual.<br/>
                        My experience in customer-facing roles has sharpened my communication skills,<br/>
                        allowing me to work effectively both independently and as part of a team.<br/>
                        I’m driven by a strong work ethic and a commitment to excellence in everything I do, whether
                        it’s leading a project,<br/>
                        learning a new technology, or providing top-notch service to clients.<br/><br/>

                        Beyond my professional life, I have a keen interest in frontend web development, design, and
                        personal growth.<br/><br/>

                        I’m always eager to explore new areas, enhance my skills, and take on new challenges that push
                        me to grow both personally and professionally.<br/>
                        If you're looking for someone who brings energy, dedication, and a versatile skill set to the
                        table, let's connect.<br/>
                        I’m excited to see where my journey takes me next and how I can contribute to the success of
                        your team.
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
        <div className="skill">
            <p>{name}</p>
            <div className="container">
                <div className={`skills ${className}`}>{level}</div>
            </div>
        </div>
    );
}

export default About;
