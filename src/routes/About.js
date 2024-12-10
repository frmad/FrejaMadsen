import React from 'react';
import '../css/About.css';
import migImage from '../images/mig4.jpg';
import Wave from '../routes/Elements/Wave';
import diploma from '../icons/diploma.png';
import work from '../icons/business.png';

function About() {
    return (
        <div>
            <Wave/>
            <div className="flex" style={{position: 'relative'}}> {/* Make this container relative */}
                <div className="right">
                    <img src={migImage} alt="Profile picture of Freja Marie Madsen" className="mig-image-ny"/>
                    <h4>Freja Marie Madsen</h4>
                    <h5>Software developer</h5>
                </div>

                <div className="circle-div-first">
                    <div className="circle">
                        <img src={diploma} alt="Icon representing my diploma" className="about-icon-diploma"/>
                    </div>
                    <p>
                        Bachelor's Degree in Software Engineering from the University of Southern Denmark (SDU).
                        The program focused on software design, development, and maintenance, combining theoretical
                        knowledge with practical experience through projects.
                    </p>
                </div>

                <div className="circle-div-second">
                    <div className="circle">
                        <img src={work} alt="Icon representing my work experience" className="about-icon"/>
                    </div>
                    <p>
                        Diverse work experience in customer service and IT roles, where I developed strong
                        communication skills and a customer-focused mindset. Passionate about web development,
                        I have worked on various projects that enhanced my technical abilities.
                    </p>
                </div>

                {/*<div className="blob-ny">
                    <p className="blob-text">Your special text here</p>
                </div>*/}
            </div>

            <div className="textSection-ny">
                <p className="aboutMeText">
                    <div className="left-blob">
                        <div className="blob-ny">

                            <p className="blob-text"><span>Mail:</span> frejamadsen1408@gmail.com</p>

                        </div>
                    </div>
                    Hello, I'm Freja Marie Madsen, a 23-year-old software developer with a strong passion
                    for web development, design, and personal growth. My journey into technology started
                    with a deep interest in business and IT, leading me to earn a Bachelor's degree in
                    Software Engineering from the University of Southern Denmark (SDU). This education has
                    provided me with a solid foundation in software development, web design, and
                    problem-solving, complemented by valuable experience in customer service from previous
                    jobs.<br/><br/>

                    Throughout my studies, I’ve worked with a diverse range of technologies including Java,
                    PHP, HTML, CSS, JavaScript, React, Kotlin, and Python. I also have experience with
                    relational databases like PostgreSQL and NoSQL databases such as MongoDB, along with
                    container technologies like Docker and Kubernetes. Additionally, I am proficient in
                    version control with GitHub and have experience with hosting projects using GitHub
                    Pages.<br/><br/>

                    My academic and project work has involved developing prototypes, designing, and
                    implementing features based on user feedback. I am particularly passionate about
                    creating seamless user experiences through thoughtful design and analysis.<br/><br/>

                    In addition to my technical skills, my Bachelor’s degree has provided me with practical
                    experience in programming, software architecture, and project management. My high school
                    education at Nyborg Gymnasium has also given me a strong foundation in economics,
                    marketing, and languages.<br/><br/>

                    As a person, I am structured, practical, and highly organized. I am accustomed to being
                    adaptable, solution-oriented, and maintaining a clear perspective during busy periods.
                    My customer-facing roles have enhanced my communication skills and ability to work
                    effectively both independently and as part of a team. I consider myself dedicated and
                    goal-driven, driven by a strong work ethic and a commitment to excellence. Always eager
                    to learn and grow, I thrive on exploring new areas, improving my skills, and embracing
                    challenges that support both personal and professional development.<br/><br/>

                    If you are looking for someone who brings energy, dedication, and a versatile skill set
                    to the table, I would love to connect. <br/><br/>

                    Thank you for visiting my portfolio, and I look forward to potential opportunities to
                    collaborate. <br/><br/>

                    <div className="right-blob">
                        <div className="blob-ny-with-rotation">
                            <p className="blob-text-with-rotation"><span>Tel:</span> 21854409</p>
                        </div>
                    </div>
                </p>
            </div>


            {/*<div className="content-about">
                {/* About Me Section */}
            {/*<div className="aboutMe" id="about">
                    <div className="headerAbout">

                        <h4>About Me</h4>
                        <h5>Freja Marie Madsen</h5>*/}

                        {/* Uncomment and add styles for the blob container */}
                        {/*<div className="blob-container">
                        <div className="blobBack"></div>
                        <div className="blob"></div>
                        <img src={migImage} alt="Picture of me" className="blob-image"/>
                    </div>*/}
                        {/*</div>

                    <div className="flexcontainerAbout">
                        <div className="textSection">
                            <p className="aboutMeText">
                                Hello, I'm Freja Marie Madsen, a 23-year-old software developer with a strong passion
                                for web development, design, and personal growth. My journey into technology started
                                with a deep interest in business and IT, leading me to earn a Bachelor's degree in
                                Software Engineering from the University of Southern Denmark (SDU). This education has
                                provided me with a solid foundation in software development, web design, and
                                problem-solving, complemented by valuable experience in customer service from previous
                                jobs.<br/><br/>

                                Throughout my studies, I’ve worked with a diverse range of technologies including Java,
                                PHP, HTML, CSS, JavaScript, React, Kotlin, and Python. I also have experience with
                                relational databases like PostgreSQL and NoSQL databases such as MongoDB, along with
                                container technologies like Docker and Kubernetes. Additionally, I am proficient in
                                version control with GitHub and have experience with hosting projects using GitHub
                                Pages.<br/><br/>

                                My academic and project work has involved developing prototypes, designing, and
                                implementing features based on user feedback. I am particularly passionate about
                                creating seamless user experiences through thoughtful design and analysis.<br/><br/>

                                In addition to my technical skills, my Bachelor’s degree has provided me with practical
                                experience in programming, software architecture, and project management. My high school
                                education at Nyborg Gymnasium has also given me a strong foundation in economics,
                                marketing, and languages.<br/><br/>

                                As a person, I am structured, practical, and highly organized. I am accustomed to being
                                adaptable, solution-oriented, and maintaining a clear perspective during busy periods.
                                My customer-facing roles have enhanced my communication skills and ability to work
                                effectively both independently and as part of a team. I consider myself dedicated and
                                goal-driven, driven by a strong work ethic and a commitment to excellence. Always eager
                                to learn and grow, I thrive on exploring new areas, improving my skills, and embracing
                                challenges that support both personal and professional development.<br/><br/>

                                If you are looking for someone who brings energy, dedication, and a versatile skill set
                                to the table, I would love to connect. <br/><br/>

                                Thank you for visiting my portfolio, and I look forward to potential opportunities to
                                collaborate.
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
            </div>*/}
        </div>
    );
}

export default About;
