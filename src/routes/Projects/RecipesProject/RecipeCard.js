import React, { useState } from 'react';
import './RecipeCard.css'; // You can create specific CSS for this component if needed


const RecipeCard = ({ title, image, description, ingredients, instructions }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="column">
            <div className={`card ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
                <h3>{title}</h3>
                <img src={image} alt={title} className="recipe-image" />
                <p>{description}</p>
                {expanded && (
                    <div className="expanded-content">
                        <h4>Ingredients:</h4>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h4>Instructions:</h4>
                        <ol>
                            {instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeCard;
