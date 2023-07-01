import { useContext } from "react";
import { FilterContext } from "../../contexts/filterContext";
import "./Filter.css";

export const Filter = () => {
  const {
    selectedCuisineType,
    setSelectedCuisineType,
    userInput,
    setUserInput,
  } = useContext(FilterContext);
  return (
    <div className="filters">
      <input
        value={userInput}
        placeholder={`Search by ${selectedCuisineType}...`}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div>
        <h3>Filters: </h3>
      </div>
      <label for="name">
        <input
          id="name"
          type="radio"
          name="recipe"
          value="name"
          checked={selectedCuisineType === "name"}
          onChange={(e) => setSelectedCuisineType(e.target.value)}
        />{" "}
        Name
      </label>
      <label for="cuisine">
        <input
          id="cuisine"
          type="radio"
          name="recipe"
          value="cuisine"
          checked={selectedCuisineType === "cuisine"}
          onChange={(e) => setSelectedCuisineType(e.target.value)}
        />{" "}
        Cuisine
      </label>
      <label for="ingredients">
        <input
          id="ingredients"
          type="radio"
          name="recipe"
          value="ingredients"
          checked={selectedCuisineType === "ingredients"}
          onChange={(e) => setSelectedCuisineType(e.target.value)}
        />{" "}
        Ingredients
      </label>
    </div>
  );
};
