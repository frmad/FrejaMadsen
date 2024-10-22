import React, { useState } from 'react';
import '../../css/ExpandableSections.css';

const ExpandableSection = ({ title, content, maxLength}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSection = () => {
        setIsOpen(!isOpen);
    };
    const displayContent = isOpen ? content : content.length > maxLength /*show content for false and some for true*/
        ? content.substring(0, maxLength) + '...' : content; /*show some text and ... for false and whole content for true*/
    return (
        <div className="card">
            <div className="card-content">
            <h2>{title}</h2>
            <p>{displayContent}</p>
            {content.length > maxLength && (
            <button onClick={toggleSection} className="btn">
                {isOpen ? 'Read less' : 'Read more'}
            </button>
            )}
            </div>
        </div>
    );
  };
  
  export default ExpandableSection;