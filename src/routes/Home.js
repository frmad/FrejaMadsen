import React, { useEffect } from 'react';
import migImage from '../images/mig2.jpg';
import scrollDown from '../icons/scroll.png';
import download from '../icons/download.png';
import '../css/Home.css';
import resume from "../cv/CV2024.pdf";
import ExpandableSection from '../routes/Elements/ExpandableSections';

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
                            {/*Hello and welcome! I'm a energetic, engaged, and structured 23-year-old front-end
                            developer with experience in service, software development,
                            and communication. Passionate about web development, project management,
                            and customer relations. Adept at working independently while excelling in collaborative
                            environments. Driven by curiosity and a strong desire for continuous
                            personal and professional growth, always focused on refining and enhancing
                            my skill set.*/}
                            Hello and welcome! I'm a curious and adventurous 23-year-old front-end developer with a passion for exploring new horizons and gaining fresh experiences. Always eager to learn and grow, I find joy in discovering new things and embracing new challenges. My motivation comes from a deep curiosity and a desire to continuously evolve, both personally and professionally. Whether it’s delving into new technologies or seeking out new adventures, I’m always driven by a sense of wonder and excitement.
                        </p>

                        <a href={resume} download="Freja-resume" className="resume-link">
                            <img src={download} alt="Download my resume" className="download-icon"/>
                            Download Resume
                        </a>

                    </div>
                    <img src={migImage} alt="Freja Marie Madsen" className="responsive"/>
                </div>
                <div className="curve"></div>
            </section>

            {/* Additional content section below the wave */}
            <div className="additional-content">
                <div className="moreInfoText">
                    <h3>Read more about me here</h3>
                    <button id="scrollButton" className="scroll-button">
                        <img src={scrollDown} alt="Scroll down to more content" className="scroll-icon"/>
                    </button>
                </div>
                <p>
                    In this section, you'll find further insights into my skills and interest.
                </p>
                {/*<div className="flex-container">
                    <div>
                        <h4>Problem Solving</h4>
                        <p>I like environments where creative problem solving is crucial.
                            My background in software engineering has given me the tools to approach
                            complex technical challenges with innovative thinking.
                            Whether it's developing a new feature, troubleshooting issues,
                            or optimizing performance, I find satisfaction
                            in crafting practical and effective solutions.</p>
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

                    <div>
                        <h4>Frontend Development</h4>
                        <p>Based on my education, I have gained experience in frontend development, which has evolved
                            into a growing passion of mine.
                            I thoroughly enjoy exploring new design tools and learning how to create visually appealing
                            and user-friendly interfaces.
                            My education has provided me with hands-on experience with tools like Figma for wireframing
                            and has given me a solid foundation in design principles.
                            I’m always eager to enhance my skills and study best practices in frontend development, as I
                            find the blend of creativity and technology incredibly rewarding.</p>
                    </div>

                    <div>
                        <h4>Customer and User Interaction</h4>
                        <p>With over six years of experience in customer service, including working in a mini-golf shop
                            and providing direct support to customers, I have developed strong skills in managing
                            customer relationships and addressing their needs. This hands-on experience has enhanced my
                            communication abilities and fostered an empathetic approach to problem-solving.
                            Additionally, my student job at SDU CRM Group involved engaging with users, which further
                            refined my capacity to understand and meet client requirements. These experiences have
                            equipped me with a solid foundation in customer service and user communication, enabling me
                            to build positive relationships and deliver exceptional service.</p>
                    </div>

                    <div>
                        <h4>Ongoing Development in Frontend Skills</h4>
                        <p>I am actively working on enhancing my frontend development skills, with a particular focus on
                            JavaScript. I am dedicating time to deepen my understanding of JavaScript, exploring
                            advanced techniques, and applying best practices to improve my coding knowledge.
                            Additionally, I am committed to refining my UX/UI design skills to create more intuitive and
                            engaging user experiences. To further expand my expertise, I am also delving into 3D
                            graphics with libraries such as Three.js. This ongoing learning journey reflects my
                            dedication to honing my skills in frontend development and delivering innovative
                            solutions.</p>
                    </div>
                </div>*/}

                <div className="flex-container">
                    <ExpandableSection 
                        title="Problem Solving" 
                        content="I like environments where creative problem solving is crucial.
                                My background in software engineering has given me the tools to approach
                                complex technical challenges with innovative thinking.
                                Whether it's developing a new feature, troubleshooting issues,
                                or optimizing performance, I find satisfaction
                                in crafting practical and effective solutions."
                        maxLength={80}
                    />
                    <ExpandableSection 
                        title="Project Management" 
                        content="Project management is one of my main interests. During my studies in Software Engineering, I discovered how much I enjoy organizing and leading projects. Coordinating tasks, setting goals, and collaborating with teams to achieve results is something I find incredibly exciting. My coursework in project management has equipped me with the skills to effectively manage teams and track projects. I thrive on the challenge of keeping projects on track and ensuring everything runs smoothly, and I am eager to pursue a career where I can apply and develop these skills further."
                        maxLength={80}
                    />
                    <ExpandableSection 
                        title="Continuous Learning and Development" 
                        content="Continuous learning is a core part of my personal and professional growth. I am passionate about exploring new technologies, tools, and techniques to continually expand my skill set. This commitment to learning allows me to approach challenges with fresh perspectives and innovative solutions, enhancing my ability to contribute effectively to any team or project."
                        maxLength={80}
                    />
                    <ExpandableSection 
                        title="Frontend Development" 
                        content="Based on my education, I have gained experience in frontend development, which has evolved into a growing passion of mine. I thoroughly enjoy exploring new design tools and learning how to create visually appealing and user-friendly interfaces. My education has provided me with hands-on experience with tools like Figma for wireframing and has given me a solid foundation in design principles. I’m always eager to enhance my skills and study best practices in frontend development, as I find the blend of creativity and technology incredibly rewarding."
                        maxLength={80}
                    />
                    <ExpandableSection 
                        title="Customer and User Interaction" 
                        content="With over six years of experience in customer service, including working in a mini-golf shop and providing direct support to customers, I have developed strong skills in managing customer relationships and addressing their needs. This hands-on experience has enhanced my communication abilities and fostered an empathetic approach to problem-solving. Additionally, my student job at SDU CRM Group involved engaging with users, which further refined my capacity to understand and meet client requirements. These experiences have equipped me with a solid foundation in customer service and user communication, enabling me to build positive relationships and deliver exceptional service."
                        maxLength={80}
                    />
                    <ExpandableSection 
                        title="Ongoing Development in Frontend Skills" 
                        content="I am actively working on enhancing my frontend development skills, with a particular focus on JavaScript. I am dedicating time to deepen my understanding of JavaScript, exploring advanced techniques, and applying best practices to improve my coding knowledge. Additionally, I am committed to refining my UX/UI design skills to create more intuitive and engaging user experiences. To further expand my expertise, I am also delving into 3D graphics with libraries such as Three.js. This ongoing learning journey reflects my dedication to honing my skills in frontend development and delivering innovative solutions."
                        maxLength={80}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
