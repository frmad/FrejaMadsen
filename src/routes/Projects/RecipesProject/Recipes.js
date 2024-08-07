import React from 'react';
import './Recipes.css';
import RecipeCard from './RecipeCard';
import lasangeImage from '../../../images/img.png';
import {Link} from "react-router-dom";


const recipes = [
    {
        title: 'Lasagna',
        image: lasangeImage,
        description: 'Classic Italian lasagna with layers of pasta, meat sauce, and cheese.',
        ingredients: [
            '1 pound Italian sausage',
            '1 onion, chopped',
            '2 cloves garlic, minced',
            '1 can crushed tomatoes',
            '1 jar pasta sauce',
            '12 lasagna noodles, cooked and drained',
            '3 cups ricotta cheese',
            '2 cups shredded mozzarella cheese',
            '1/2 cup grated Parmesan cheese',
            '1/4 cup chopped fresh parsley',
            '1 egg',
            'Salt and pepper to taste'
        ],
        instructions: [
            'In a large skillet, cook sausage, onion, and garlic over medium heat until sausage is no longer pink; drain.',
            'Stir in tomatoes and pasta sauce; simmer 10 minutes.',
            'In a bowl, combine ricotta cheese, 1 1/2 cups mozzarella cheese, Parmesan cheese, parsley, egg, salt, and pepper.',
            'Spread 1 cup meat sauce in a greased 13x9 inch baking dish.',
            'Layer with 4 noodles, 1 1/2 cups meat sauce, 1 1/2 cups cheese mixture, and 1 cup mozzarella cheese.',
            'Repeat layers.',
            'Cover and bake at 350 degrees F for 45 minutes.',
            'Uncover; bake 10 minutes longer or until bubbly.',
            'Let stand 10 minutes before cutting.'
        ]
    },
    {
        title: 'Chicken Alfredo Pasta',
        image: lasangeImage,
        description: 'Creamy chicken alfredo pasta with a rich garlic parmesan sauce.',
        ingredients: [
            '8 oz fettuccine pasta',
            '2 boneless, skinless chicken breasts, thinly sliced',
            '2 tbsp olive oil',
            '4 cloves garlic, minced',
            '1 cup heavy cream',
            '1 cup grated Parmesan cheese',
            'Salt and pepper to taste',
            'Fresh parsley, chopped (for garnish)'
        ],
        instructions: [
            'Cook fettuccine pasta according to package instructions; drain and set aside.',
            'In a large skillet, heat olive oil over medium-high heat. Add chicken slices and cook until browned and cooked through. Remove chicken from skillet and set aside.',
            'In the same skillet, add minced garlic and cook until fragrant.',
            'Reduce heat to medium-low. Stir in heavy cream and grated Parmesan cheese, stirring constantly until sauce thickens.',
            'Season with salt and pepper to taste. Add cooked fettuccine pasta and cooked chicken back to the skillet, tossing until well coated in the sauce.',
            'Serve hot, garnished with chopped fresh parsley.'
        ]
    },
    {
        title: 'Chocolate Chip Cookies',
        image: lasangeImage,
        description: 'Classic homemade chocolate chip cookies with a soft and chewy texture.',
        ingredients: [
            '1 cup unsalted butter, softened',
            '1 cup granulated sugar',
            '1 cup packed light brown sugar',
            '2 tsp vanilla extract',
            '2 large eggs',
            '3 cups all-purpose flour',
            '1 tsp baking soda',
            '1/2 tsp salt',
            '2 cups semisweet chocolate chips'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.',
            'In a large mixing bowl, cream together softened butter, granulated sugar, light brown sugar, and vanilla extract until smooth and creamy.',
            'Add eggs one at a time, mixing well after each addition.',
            'In a separate bowl, whisk together flour, baking soda, and salt. Gradually add dry ingredients to the butter mixture, mixing until well combined.',
            'Stir in semisweet chocolate chips.',
            'Drop rounded tablespoons of dough onto prepared baking sheets, spacing them about 2 inches apart.',
            'Bake in preheated oven for 10-12 minutes or until edges are golden brown.',
            'Remove from oven and let cool on baking sheets for 5 minutes before transferring to wire racks to cool completely.'
        ]
    },
    // Add more recipes as needed
];

const Recipes = () => {
    const linkUrl = '/projects'; // Update with your project page URL
    const linkText = 'Go Back';

    return (
        <div className="recipes-container">
            <Link className="gobacklink" to={linkUrl}>
                {linkText}
            </Link>
            <h2 className="recipes-title">Recipes</h2>
            <p className="recipes-intro">
                Welcome to the Recipes page, where you'll discover an assortment of delicious recipes. These are my
                personally curated and commonly used recipes.
            </p>
            <div className="recipes-list">
                {recipes.map((recipe, index) => (
                    <RecipeCard
                        key={index}
                        title={recipe.title}
                        image={recipe.image}
                        description={recipe.description}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                    />
                ))}
            </div>
        </div>
    );
};

export default Recipes;