import React, { createContext, useReducer } from "react";
import { recipeReducer } from "../reducers/recipeReducer";
import { recipes } from "../Assets/data";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipeState, recipeDispatch] = useReducer(recipeReducer, recipes);
  return (
    <RecipeContext.Provider value={{ recipeState, recipeDispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
