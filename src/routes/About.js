import React from 'react';
import '../css/About.css';
import migImage from '../images/mig.jpg';
function About() {
    return (
        <div>
            <h2>About Me</h2>
            {/* Add content for the about page */}
            <div className="aboutMe" id="about">
                <img src={migImage} alt="Piture of me" className="responsive"/>
                <div className="text">
                    <h4>Freja Marie Madsen</h4>
                    <p className="centered">Energetic, dedicated, and organized engineering student with experience in
                        service, IT, and communication. Back-ground in web editing and a passion for project management
                        and web devel-opment. Skilled in independent work but also excels in collaborative efforts.
                        Curious and committed to personal and profes-sional development, as well as striving to enhance
                        my skills.</p>
                    <p className="centered-orange"><span>Mail:</span> frejamadsen1408@gamil.com</p>
                    <p className="centered-orange"><span>Tel:</span> 21854409</p>

                    <hr className="break"/>

                    {/*Technical skill boxes*/}
                    <h4 className="header">Technical Skills</h4>
                    <div className="box">
                        <p>HTML</p>
                        <div className="container">
                            <div className="skills html">90%</div>
                        </div>

                        <p>CSS</p>
                        <div className="container">
                            <div className="skills css">80%</div>
                        </div>

                        <p>JavaScript</p>
                        <div className="container">
                            <div className="skills js">65%</div>
                        </div>

                        <p>PHP</p>
                        <div className="container">
                            <div className="skills php">60%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;