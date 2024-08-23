import React from 'react';
import '../css/About.css';
import migImage from '../images/mig3.png';
import Wave from '../routes/Elements/Wave';

function About() {
    return (
        <div>
            {/* About Me Section */}
            <div className="aboutMe" id="about">
                <div className="headerAbout">
                    <Wave/>
                    <h4>About Me</h4>
                    <h5>Freja Marie Madsen</h5>

                    {/* Uncomment and add styles for the blob container */}
                    {/*<div className="blob-container">
                        <div className="blobBack"></div>
                        <div className="blob"></div>
                        <img src={migImage} alt="Picture of me" className="blob-image"/>
                    </div>*/}
                </div>

                <div className="flexcontainerAbout">
                    <div className="textSection">
                        <p className="aboutMeText">
                            Hello, I'm Freja Marie Madsen, a 23-year-old passionate about web development, design, and
                            continuous personal growth. My journey in the tech world began with a keen interest in business
                            and IT, which naturally led me to pursue a Bachelor's degree in Software Engineering from the
                            University of Southern Denmark (SDU). Throughout my academic and professional experiences, I
                            have built a solid foundation in software development, web editing, and problem-solving, coupled
                            with valuable experience in customer service and leadership.
                            <br/><br/>
                            My background in IT has led me to become acquainted with languages like Java, PHP, and
                            JavaScript, as well gaining some experience with databases, Docker, and Kubernetes.
                            <br/><br/>
                            Beyond my technical expertise, I am a highly organized and dedicated professional. My experience
                            in customer-facing roles has sharpened my communication skills, allowing me to work effectively
                            both independently and as part of a team. I am driven by a strong work ethic and a commitment to
                            excellence in every task I undertake, whether leading a project or providing exceptional service
                            to clients.
                            <br/><br/>
                            I’m always eager to explore new areas, enhance my skills, and take on new challenges that push
                            me to grow both personally and professionally. If you're looking for someone who brings energy,
                            dedication, and a versatile skill set to the table, please contact me.
                            <br/><br/>
                            I’m excited to see where my journey takes me next and how I can contribute to the success of
                            your team.
                        </p>
                    </div>

                    <div className="infoSection">
                        <div className="blob-container">
                            <div className="blobBack"></div>
                            <div className="blob"></div>
                            <img src={migImage} alt="Picture of me" className="blob-image"/>
                        </div>
                        <p className="centered-orange"><span>Mail:</span> frejamadsen1408@gmail.com</p>
                        <p className="centered-orange"><span>Tel:</span> 21854409</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
