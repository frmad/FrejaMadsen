import React, { useEffect } from 'react';
import migImage from '../images/mig2.jpg';
import scrollDown from '../icons/scroll.png';
import download from '../icons/download.png';
import '../css/Home.css';
import resume from "../assets/cv/CV24-ny.pdf";
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
                            Hello and welcome to my portfolio website! I’m Freja, a 23-year-old front-end developer who loves exploring and trying new things. I’m always curious and excited to learn, whether it’s about new technologies or life in general. I enjoy stepping outside my comfort zone and taking on challenges that help me grow, both as a person and in my career. For me, it’s all about staying curious, learning, and having fun along the way.
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

                <div className="flex-container">
                    <ExpandableSection 
                        title="Problem Solving" 
                        content="I enjoy working in situations where creative problem-solving is key. My background in software engineering helps me tackle tricky technical challenges with fresh ideas. Whether it’s building a new feature, fixing bugs, or making things run better, I love coming up with smart and useful solutions."
                        maxLength={80}
                    />
                    <ExpandableSection 
                        title="Project Management" 
                        content="I’m really interested in project management. While studying Software Engineering, I realized how much I enjoy planning and leading projects. I love organizing tasks, setting goals, and working with teams to get things done. My classes in project management have taught me how to manage teams and keep track of progress effectively. I enjoy the challenge of keeping projects running smoothly and on schedule, and I’m excited to build a career where I can keep improving and using these skills."
                        maxLength={80}
                    />
                    <ExpandableSection 
                        title="Continuous Learning and Development" 
                        content="I’m all about learning and growing, both personally and professionally. I enjoy exploring new technologies, tools, and techniques to keep building my skills."
                        maxLength={80}
                    />
                    <ExpandableSection 
                        title="Frontend Development" 
                        content="Through my education, I’ve gained experience in front-end development, and it’s become a true passion of mine. I really enjoy designing and figuring out how to build applications that are both visually appealing and easy to use. I’ve worked with Figma for wireframing and have learned the fundamentals of good design. This combination of creativity and technology is something I really enjoy."
                        maxLength={80}
                    />
                    <ExpandableSection 
                        title="Customer and User Interaction" 
                        content="With more than six years of experience in customer service, I’ve built some strong skills in managing customer relationships and addressing customer needs. This hands-on experience has improved my communication, helped me become more understanding, and sharpened my focus on fulfilling customers' needs. I also worked at SDU CRM Group in a student role, where I collaborated closely with users, further enhancing my ability to meet client needs. These experiences have given me a solid foundation in customer service and user communication, enabling me to build positive relationships and provide excellent service."
                        maxLength={80}
                    />
                    <ExpandableSection 
                        title="Ongoing Development in Frontend Skills" 
                        content="I'm currently working on improving my frontend development skills, especially in JavaScript. I’m focusing on learning more advanced techniques and best practices to boost my coding abilities. I’m also putting time into refining my UX/UI design skills to create better, more user-friendly experiences. On top of that, I’m exploring 3D graphics with libraries like Three.js to expand my knowledge even further. This ongoing learning is all part of my goal to get better at frontend development and create innovative solutions. "
                        maxLength={80}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
