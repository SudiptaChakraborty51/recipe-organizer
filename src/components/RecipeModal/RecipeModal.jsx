import React, { useContext, useState } from "react";
import "./RecipeModal.css";
import { v4 as uuidv4 } from "uuid";
import { RecipeContext } from "../../contexts/recipeContext";

const RecipeModal = ({ addModal, setAddModal }) => {

    const {recipeDispatch} = useContext(RecipeContext);
    
    const [recipeDetails, setRecipeDetails] = useState({
        id: uuidv4(),
        name: "",
        cuisineType: "",
        ingredients: [],
        instructions: "",
        img: ""
    })

    const [ingredient, setIngredient] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setRecipeDetails((prev) => ({ ...prev, ingredients: ingredient.split(", ") }));
        recipeDispatch({ type: "ADD_RECIPE", payload: recipeDetails });
        setAddModal({ ...addModal, show: false, type: "" });
        setRecipeDetails({
          id: "",
          name: "",
          cuisineType: "",
          ingredients: [],
          instructions: "",
          img: ""
        });
      };

  return (
    <div className="add-recipe-modal">
      <div className="add-recipe-modal-main">
        <div className="add-recipe-modal-header">
          <h2>{addModal.type} Recipe</h2>
          <i class="fa-solid fa-xmark" onClick={() => setAddModal({ ...addModal, show: false, type: "" })}></i>
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
              setRecipeDetails({ ...recipeDetails, cuisineType: e.target.value })
            }
          />

          <label for="ingredients">Ingredients</label>
          <textarea id="ingredients" placeholder="Add ingredients" value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}></textarea>

          <label for="instructions">Instructions</label>
          <textarea
            id="instructions"
            value={recipeDetails?.instructions}
            placeholder="Add instructions"
            onChange={(e) =>
              setRecipeDetails({ ...recipeDetails, instructions: e.target.value })
            }
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default RecipeModal;
