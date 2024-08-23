import React from 'react';
import "../../css/Wave.css";

const Wave = () => {
    return (
        <div className="wave-container">
            {/*Wave*/}
            <svg className="wave-top" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="rgba(0, 66, 37)" d="
                              M0,78
                              Q60,90,80,94
                              C160,110,320,142,480,136.7
                              C640,131,800,89,960,88.7
                              C1120,89,1280,131,1360,152.7
                              L1440,174V0
                              H1360
                              C1280,0,1120,0,960,0
                              C800,0,640,0,480,0
                              C320,0,160,0,80,0
                              H0Z">
                </path>
            </svg>
        </div>
    );
};

export default Wave;