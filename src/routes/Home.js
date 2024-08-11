import React, { useEffect } from 'react';
import migImage from '../images/mig2.jpg';
import scrollDown from '../icons/scroll.png';
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
                            bring a wealth of experience in
                            web editing and a passion for leadership and marketing. Curiosity drives me to constantly
                            develop personally and
                            professionally, always striving to enhance my skills and capabilities.
                        </p>
                        <a href={resume} download="Freja-resume" className="resume-link">Download Resume</a>
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
                    This is some additional content that appears below the wave. You can include more details about
                    yourself or any other information that you want to highlight here.
                </p>
                <div className="flex-container">
                    <div>
                        <h4>Text</h4>
                        <p>Text</p>
                    </div>

                    <div>
                        <h4>Text</h4>
                        <p>Text</p>
                    </div>

                    <div>
                        <h4>Text</h4>
                        <p>Text</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
