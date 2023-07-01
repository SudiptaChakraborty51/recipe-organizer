import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import RecipeProvider from "./contexts/recipeContext";
import FilterProvider from "./contexts/filterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <RecipeProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </RecipeProvider>
    </Router>
  </React.StrictMode>
);
