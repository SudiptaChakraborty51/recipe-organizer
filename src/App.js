import "./App.css";
import { Routes, Route } from "react-router-dom";
import Recipes from "./pages/recipes";
import RecipeDetails from "./pages/recipeDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:name" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
