import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.img} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <div className="recipe-content">
        <h4>Cuisine Type:</h4>
        <p>{recipe.cuisineType}</p>
      </div>
      <div className="recipe-content">
        <h4>Ingredients:</h4>
        <Link className="see-recipes" to={`/recipe/${recipe.name}`}>
          See Recipe <i class="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="recipe-content">
        <h4>Instructions:</h4>
        <Link className="see-recipes" to={`/recipe/${recipe.name}`}>
          See Recipe <i class="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
