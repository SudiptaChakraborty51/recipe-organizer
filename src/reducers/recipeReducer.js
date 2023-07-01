export const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      localStorage.setItem(
        "recipes",
        JSON.stringify([action.payload, ...state])
      );
      return (state = [action.payload, ...state]);
    case "EDIT_RECIPE":
      localStorage.setItem(
        "recipes",
        JSON.stringify(
          state.map((recipe) =>
            recipe.id === action.payload.id ? { ...action.payload } : recipe
          )
        )
      );
      return state.map((recipe) =>
        recipe.id === action.payload.id ? { ...action.payload } : recipe
      );

    case "REMOVE_RECIPE":
      localStorage.setItem(
        "recipes",
        JSON.stringify(state.filter((recipe) => recipe.id !== action.payload))
      );
      return state.filter((recipe) => recipe.id !== action.payload);
    default:
      return state;
  }
};
