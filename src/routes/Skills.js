import React from "react";
import Wave from '../routes/Elements/Wave';


function Skills() {

    return (
        <div>
            <Wave/>
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
    );
}

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

export default Skills;
