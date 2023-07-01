import React, { useContext } from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
import { RecipeContext } from "../../contexts/recipeContext";

const RecipeCard = ({ recipe }) => {

  const {recipeDispatch} = useContext(RecipeContext);

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
      <i
          onClick={() =>
            recipeDispatch({ type: "REMOVE_RECIPE", payload: recipe.id })
          }
          className="fa-solid fa-trash-can"
        ></i>
    </div>
  );
};

export default RecipeCard;
