import React, { useContext, useState } from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
import { RecipeContext } from "../../contexts/recipeContext";
import RecipeModal from "../RecipeModal/RecipeModal";
import { toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {
  const { recipeDispatch } = useContext(RecipeContext);

  const [showEditModal, setShowEditModal] = useState({ show: false, type: "" });

  recipe.img = !recipe?.img
    ? "https://source.unsplash.com/random/800x800/?recipes"
    : recipe?.img;

  return (
    <div className="recipe-card">
      <img src={recipe?.img} alt={recipe?.name} />
      <h2>{recipe?.name}</h2>
      <div className="recipe-content">
        <h4>Cuisine Type:</h4>
        <p>{recipe?.cuisineType}</p>
      </div>
      <div className="recipe-content">
        <h4>Ingredients:</h4>
        <Link className="see-recipes" to={`/recipe/${recipe?.name}`}>
          See Recipe <i class="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="recipe-content">
        <h4>Instructions:</h4>
        <Link className="see-recipes" to={`/recipe/${recipe?.name}`}>
          See Recipe <i class="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="recipe-card-icons">
        <i
          onClick={() => {
            setShowEditModal((showEditModal) => ({
              ...showEditModal,
              show: true,
              type: "Edit",
            }));
          }}
          className="fa-solid fa-pencil"
        ></i>
        <i
          onClick={() => {
            recipeDispatch({ type: "REMOVE_RECIPE", payload: recipe?.id });
            toast.success("Recipe is deleted successfully!");
          }}
          className="fa-solid fa-trash-can"
        ></i>
      </div>
      {showEditModal.show && (
        <RecipeModal
          recipe={recipe}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
        />
      )}
    </div>
  );
};

export default RecipeCard;
