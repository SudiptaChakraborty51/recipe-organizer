import React, { useContext, useState } from "react";
import { Filter } from "../components/Filter/Filter";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { FilterContext } from "../contexts/filterContext";
import RecipeModal from "../components/RecipeModal/RecipeModal";

const Recipes = () => {
  const { filteredRecipes } = useContext(FilterContext);

  const [addModal, setAddModal] = useState({show: false, type: ""});

  return (
    <div className="recipes-page">
      {addModal.show && <RecipeModal addModal={addModal} setAddModal={setAddModal} />}
      <Filter />
      <h1>All Recipes: </h1>
      <button onClick={() => setAddModal({ ...addModal, show: true, type: "Add" })}>Add Recipe</button>
      <div className="recipes">
        {filteredRecipes?.length === 0 ? (
          <p>There no recipe is present. Add a new Recipe.</p>
        ) : (
          filteredRecipes?.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        )}
      </div>
    </div>
  );
};

export default Recipes;
