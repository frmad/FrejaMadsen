import React, { useState } from "react";
import Wave from '../routes/Elements/Wave';
import '../css/Courses.css';

function Courses() {
    const [progressAngular] = useState(100);
    const [progressReact] = useState(10);
    const [progressReactIDA] = useState(100);
    const [progressCSharp] = useState(50);

    return (
        <div>
            <Wave />
            <div className="courses-container">
                <h1>Courses</h1>
                <h2>Online Courses</h2>

                <div>
                    <h3>Angular</h3>
                    <p>Angular For Beginners from Angular University (2024)</p>
                    <a href="https://angular-university.io/course/getting-started-with-angular2" target="_blank" rel="noopener noreferrer">
                        Find the course here 
                    </a>
                    <div className="progress-box">
                        <div className="progress-bar" style={{ width: `${progressAngular}%` }}></div>
                    </div>
                </div>

                <div>
                    <h3>React</h3>
                    <p>JS - Full Beginner’s Tutorial from Free Code Camp (2024)</p>
                    <a href="https://www.youtube.com/watch?v=x4rFhThSX04&t=543s" target="_blank" rel="noopener noreferrer">
                        Find the course here 
                    </a>
                    <div className="progress-box">
                        <div className="progress-bar" style={{ width: `${progressReact}%` }}></div>
                    </div>
                </div>

                <div>
                    <h3>Frontend development in React/JavaScript</h3>
                    <p>Course for IDA members (2025)</p>
                    <div className="progress-box">
                        <div className="progress-bar" style={{ width: `${progressReactIDA}%` }}></div>
                    </div>
                </div>

                <div>
                    <h3>C# for beginners</h3>
                    <p>Course for IDA members (2025)</p>
                    <div className="progress-box">
                        <div className="progress-bar" style={{ width: `${progressCSharp}%` }}></div>
                    </div>
                </div>

                {/*<h2>Online Courses</h2>*/}
            </div>
        </div>
    );
}

export default Courses;
