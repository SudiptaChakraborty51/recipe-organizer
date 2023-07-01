import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FilterContext } from "../contexts/filterContext";

const RecipeDetails = () => {
  const { name } = useParams();

  const { filteredRecipes } = useContext(FilterContext);

  const selectedItem = filteredRecipes?.find(
    (recipe) =>
      recipe?.name?.toLowerCase()?.trim() === name?.toLowerCase()?.trim()
  );

  const navigate = useNavigate();

  return (
    <div className="recipe-details">
      <div className="recipe-header">
        <i
          class="fa-solid fa-arrow-left"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        ></i>
        <h1>{selectedItem?.name}</h1>
      </div>
      <div className="recipe-details-content">
        <img src={selectedItem?.img} alt={selectedItem?.name} />
        <div className="recipe-details-main">
          <h4>Cuisine: {selectedItem?.cuisineType}</h4>
          <div>
            <strong>Ingredients: </strong>
            {selectedItem?.ingredients?.join(", ")}
          </div>
          <div>
            <strong>Instructions: </strong>
            <ol>
              {selectedItem?.instructions?.split(".")?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
