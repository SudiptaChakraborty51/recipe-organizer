import React, { createContext, useContext, useState } from "react";
import { RecipeContext } from "./recipeContext";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { recipeState } = useContext(RecipeContext);

  const [selectedCuisineType, setSelectedCuisineType] = useState("name");

  const [userInput, setUserInput] = useState("");

  let filteredRecipes = recipeState;

  if (selectedCuisineType === "name") {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe?.name
        ?.toLowerCase()
        ?.trim()
        ?.includes(userInput?.toLowerCase()?.trim())
    );
  } else if (selectedCuisineType === "cuisine") {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe?.cuisineType
        ?.toLowerCase()
        ?.trim()
        ?.includes(userInput?.toLowerCase()?.trim())
    );
  } else if (selectedCuisineType === "ingredients") {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe?.ingredients?.find((item) =>
        item?.toLowerCase()?.trim()?.includes(userInput?.toLowerCase()?.trim())
      )
    );
  }

  return (
    <FilterContext.Provider
      value={{
        selectedCuisineType,
        setSelectedCuisineType,
        filteredRecipes,
        userInput,
        setUserInput,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
