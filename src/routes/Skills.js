import React from "react";
import Wave from '../routes/Elements/Wave';


function Skills() {

    return (
        <div>
            <Wave/>
            {/* Technical Skills */}
            <h4 className="header">Technical Skills</h4>
            <div className="box">
                {renderSkill("HTML", "good", "70%")}
                {renderSkill("CSS", "good", "70%")}
                {renderSkill("Java", "okay", "60%")}
                {renderSkill("React", "know", "50%")}
                {renderSkill("SQL", "know", "50%")}
                {renderSkill("JavaScript", "notGood", "30%")}
                {renderSkill("PHP", "notGood", "30%")}
                {renderSkill("Python", "notGood", "30%")}
                {renderSkill("MongoDB", "notGood", "30%")}
                {renderSkill("Typescript", "bad", "20%")}
                {renderSkill("Three.js", "bad", "20%")}
                {renderSkill("Bootstrap", "bad", "20%")}
                {renderSkill("Tailwind", "bad", "20%")}
                {renderSkill("Docker", "bad", "20%")}
                {renderSkill("Kubernetes", "bad", "20%")}
                {renderSkill("CI/CD", "bad", "20%")}
                {renderSkill("Angular", "bad", "20%")}
            </div>

            {/* Other Skills */}
            <h4 className="header">Other Skills</h4>
            <div className="box">
                {renderSkill("Word", "full", "100%")}
                {renderSkill("Powerpoint", "better", "80%")}
                {renderSkill("Excel", "good", "70%")}
            </div>

            {/* Language Skills */}
            <h4 className="header">Language Skills</h4>
            <div className="box">
                {renderSkill("Danish", "full", "100%")}
                {renderSkill("English", "better", "80%")}
                {renderSkill("German", "notGood", "30%")}
            </div>
        </div>
    );
}

function renderSkill(name, className, level) {
    return (
        <div className="skill">
            <p>{name}</p>
            <div className="containerSkills">
                <div className={`skills ${className}`}>{level}</div>
            </div>
        </div>
    );
}

export default Skills;
