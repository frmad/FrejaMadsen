import React, { useEffect } from 'react';
import migImage from '../images/mig2.jpg';
import scrollDown from '../icons/scroll.png';
import download from '../icons/download.png';
import '../css/Home.css';
import resume from "../cv/CV24eng.pdf";

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
                            Hello and welcome! I'm a 22-year-old woman driven by energy, commitment, and a structured
                            approach to everything I do. With a diverse background in service, IT, and communication, I
                            bring a wealth of experience in web editing and a passion for leadership and marketing. Curiosity drives me to constantly
                            develop personally and professionally, always striving to enhance my skills and capabilities.
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
                        <h4>Creative Problem Solving</h4>
                        <p>I thrive in environments where creative problem solving is key. My background in software engineering has instilled in me a passion for tackling complex technical challenges with innovative solutions. Whether it's designing a new feature, debugging a tricky issue, or optimizing performance, I enjoy the process of finding elegant and effective solutions to technical problems. The thrill of transforming an idea into a functional product or improving an existing system is what drives my enthusiasm for technology.</p>
                    </div>

                    <div>
                        <h4>Collaborative Project Management</h4>
                        <p>Collaboration and teamwork are at the heart of what I enjoy most in my work. I find immense satisfaction in working with diverse teams to achieve common goals. Whether leading a project or contributing as a team member, I value the exchange of ideas, the synergy of collective effort, and the opportunity to learn from others. My experience in customer service and project management has honed my ability to communicate effectively, coordinate tasks, and ensure that projects run smoothly and meet objectives.</p>
                    </div>

                    <div>
                        <h4>Continuous Learning and Development</h4>
                        <p>I am passionate about continuous learning and personal growth. In the fast-evolving fields of technology and design, staying updated with the latest trends and advancements is crucial. I love diving into new technologies, exploring emerging tools, and expanding my skill set. This drive for learning not only keeps me engaged and motivated but also enables me to bring fresh perspectives and innovative approaches to my work.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
