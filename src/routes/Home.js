import React, { useEffect } from 'react';
import migImage from '../images/mig2.jpg';
import scrollDown from '../icons/scroll.png';
import download from '../icons/download.png';
import '../css/Home.css';
import resume from "../cv/CV2024.pdf";

function Home() {
    useEffect(() => {
        const scrollButton = document.getElementById('scrollButton');
        const additionalContent = document.querySelector('.additional-content');

        // Define the scroll function
        const handleScroll = () => {
            additionalContent.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };

        // Add event listener
        scrollButton.addEventListener('click', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            scrollButton.removeEventListener('click', handleScroll);
        };
    }, []);

    return (
        <div className="home">
            <section>
                <div className="content">
                    <div className="text-content">
                        <h2 className="homeTitle">Welcome to My Portfolio!</h2>
                        <p className="intro-text">
                            Hello and welcome! I'm a 23-year-old energetic, dedicated,
                            and highly organized Full Stack IT Developer with a robust background in service,
                            IT, and communication. My experience spans web editing, leadership, and customer interaction,
                            equipping me with a strong foundation in both independent and collaborative work environments.
                            I am driven by curiosity and a desire for continuous personal and professional development,
                            always striving to enhance my skills and capabilities.
                        </p>

                        <a href={resume} download="Freja-resume" className="resume-link">
                            <img src={download} alt="Download" className="download-icon"/>
                            Download Resume
                        </a>

                    </div>
                    <img src={migImage} alt="Picture of me" className="responsive"/>
                </div>
                <div className="curve"></div>
            </section>

            {/* Additional content section below the wave */}
            <div className="additional-content">
                <div className="moreInfoText">
                    <h3>Read more about me here</h3>
                    <button id="scrollButton" className="scroll-button">
                        <img src={scrollDown} alt="Scroll down" className="scroll-icon"/>
                    </button>
                </div>
                <p>
                    In this section, you'll find further insights into my professional journey, skills, and the unique experiences that shape my work.
                </p>
                <div className="flex-container">
                    <div>
                        <h4>Problem Solving</h4>
                        <p>I thrive in environments where creative problem solving is crucial.
                            My background in software engineering has equipped me with the skills
                            to tackle complex technical challenges with innovative solutions.
                            Whether it's developing a new feature, debugging intricate issues,
                            or optimizing performance, I enjoy the process of finding elegant and
                            effective solutions. My enthusiasm for technology is driven by the excitement
                            of transforming ideas into functional products and continuously improving
                            systems based on user feedback.</p>
                    </div>

                    <div>
                        <h4>Project Management</h4>
                        <p>Project management is one of my main interests. During my studies in Software Engineering, I
                            discovered how much I enjoy organizing and leading projects. Coordinating tasks, setting
                            goals, and collaborating with teams to achieve results is something I find incredibly
                            exciting. My coursework in project management has equipped me with the skills to effectively
                            manage teams and track projects. I thrive on the challenge of keeping projects on track and
                            ensuring everything runs smoothly, and I am eager to pursue a career where I can apply and
                            develop these skills further.</p>
                    </div>

                    <div>
                        <h4>Continuous Learning and Development</h4>
                        <p>Continuous learning is a core part of my personal and professional growth. I am passionate
                            about exploring new technologies, tools, and techniques to continually expand my skill set.
                            This commitment to learning allows me to approach challenges with fresh perspectives and
                            innovative solutions, enhancing my ability to contribute effectively to any team or
                            project.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
