import React, { useContext } from "react";
import { Filter } from "../components/Filter/Filter";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { FilterContext } from "../contexts/filterContext";

const Recipes = () => {
  const { filteredRecipes } = useContext(FilterContext);

  return (
    <div className="recipes-page">
      <Filter />
      <h1>All Recipes: </h1>
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
