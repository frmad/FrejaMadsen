import React from 'react';
import migImage from '../images/mig.jpg';
import '../css/Home.css';
import resume from "../cv/CV24eng.pdf";

function Home() {
    return (
        <div className="home">
            <div className="content">
                <h2>Welcome to My Portfolio!</h2>
                <img src={migImage} alt="Picture of me" className="responsive"/>
                <p className="intro-text">Hello and welcome! I'm a 22-year-old woman driven by energy, commitment, and a
                    structured approach to everything I do. With a diverse background in service, IT, and communication,
                    I bring a wealth of experience in web editing and a passion for leadership and marketing. Whether
                    working independently or collaboratively, I thrive on both challenges and teamwork.

                    Curiosity drives me to constantly develop personally and professionally, always striving to enhance
                    my skills and capabilities.</p>
                <p className="resume-text">Click here to download my resume!</p>
                <a href={resume} download="Freja-resume" className="resume-link">Download Resume</a>
            </div>
        </div>
    );
}

export default Home;

