import React, { useContext, useState } from "react";
import "./RecipeModal.css";
import { v4 as uuidv4 } from "uuid";
import { RecipeContext } from "../../contexts/recipeContext";
import { toast } from "react-toastify";

const RecipeModal = ({
  addModal,
  setAddModal,
  recipe,
  showEditModal,
  setShowEditModal,
}) => {
  const { recipeDispatch } = useContext(RecipeContext);

  const [recipeDetails, setRecipeDetails] = useState(
    recipe || {
      id: uuidv4(),
      name: "",
      cuisineType: "",
      ingredients: [],
      instructions: "",
      img: "",
    }
  );

  const [ingredient, setIngredient] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (recipe) {
      recipeDispatch({ type: "EDIT_RECIPE", payload: recipeDetails });
      toast.success("Recipe is edited successfully!");
    } else {
      recipeDispatch({ type: "ADD_RECIPE", payload: recipeDetails });
      toast.success("Added a new recipe successfully!");
    }
    recipe
      ? setShowEditModal({ ...addModal, show: false, type: "" })
      : setAddModal({ ...addModal, show: false, type: "" });
    setRecipeDetails({
      id: "",
      name: "",
      cuisineType: "",
      ingredients: [],
      instructions: "",
      img: "",
    });
  };

  return (
    <div className="add-recipe-modal">
      <div className="add-recipe-modal-main">
        <div className="add-recipe-modal-header">
          <h2>{recipe ? showEditModal.type : addModal.type} Recipe</h2>
          <i
            class="fa-solid fa-xmark"
            onClick={() =>
              recipe
                ? setShowEditModal({ ...addModal, show: false, type: "" })
                : setAddModal({ ...addModal, show: false, type: "" })
            }
          ></i>
        </div>
        <form onSubmit={submitHandler}>
          <label for="image">Add Image Link</label>
          <input
            id="image"
            type="url"
            value={recipeDetails?.img}
            placeholder="https://source.unsplash.com/random/800x800/?chicken"
            onChange={(e) =>
              setRecipeDetails({ ...recipeDetails, img: e.target.value })
            }
          />

          <label for="name">Name</label>
          <input
            id="name"
            placeholder="Add name"
            value={recipeDetails?.name}
            onChange={(e) =>
              setRecipeDetails({ ...recipeDetails, name: e.target.value })
            }
          />

          <label for="cuisine">Cuisine</label>
          <input
            id="cuisuine"
            value={recipeDetails?.cuisineType}
            placeholder="Add cuisine"
            onChange={(e) =>
              setRecipeDetails({
                ...recipeDetails,
                cuisineType: e.target.value,
              })
            }
          />

          <label for="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            placeholder="Add ingredients seperated by ,(space)"
            value={recipe ? recipeDetails?.ingredients?.join(", ") : ingredient}
            onChange={(e) => {
              setIngredient(e.target.value);
              setRecipeDetails((recipeDetails) => ({
                ...recipeDetails,
                ingredients: ingredient.split(", "),
              }));
            }}
          ></textarea>

          <label for="instructions">Instructions</label>
          <textarea
            id="instructions"
            value={recipeDetails?.instructions}
            placeholder="Add instructions seperated by ."
            onChange={(e) =>
              setRecipeDetails({
                ...recipeDetails,
                instructions: e.target.value,
              })
            }
          ></textarea>
          <button type="submit">{recipe ? "Edit" : "Add"}</button>
        </form>
      </div>
    </div>
  );
};

export default RecipeModal;
