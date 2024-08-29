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
                            Hello, I'm Freja Marie Madsen, a 23-year-old Full Stack IT Developer with a strong passion for web development, design, and personal growth. My journey into technology started with a keen interest in business and IT, leading me to earn a Bachelor's degree in Software Engineering from the University of Southern Denmark (SDU). This education has provided me with a solid foundation in software development, web design, and problem-solving, complemented by valuable experience in customer service.<br/><br/>
                            Throughout my academic career, I have worked with a diverse range of technologies including Java, PHP, HTML, CSS, JavaScript, React, Kotlin, and Python. My experience extends to working with relational databases like PostgreSQL and NoSQL databases such as MongoDB. I also have hands-on experience with container technologies like Docker and Kubernetes, enhancing my understanding of modern development practices.<br/><br/>
                            My studies and projects have involved developing prototypes, designing, and implementing features based on user feedback. I am particularly passionate about creating seamless user experiences through thoughtful design and analysis. Additionally, I am familiar with version control using GitHub, CI/CD practices with GitHub Actions, and hosting with GitHub Pages.<br/><br/>
                            My academic journey includes a Bachelor’s degree in Software Engineering from the University of Southern Denmark, where I combined theoretical knowledge with practical experience in programming, software architecture, and project management. My high school education at Nyborg Gymnasium provided a solid foundation in economics, marketing, and languages.<br/><br/>
                            Beyond my technical skills, I am highly organized and dedicated. My customer-facing roles have refined my communication skills, enabling me to work effectively both independently and as part of a team. I am driven by a strong work ethic and a commitment to excellence in every task I undertake.<br/><br/>
                            I am always eager to explore new areas, enhance my skills, and embrace challenges that foster both personal and professional growth. If you are looking for someone who brings energy, dedication, and a versatile skill set to the table, I would love to connect.<br/><br/>
                            Thank you for visiting my portfolio, and I look forward to potential opportunities to collaborate.
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
