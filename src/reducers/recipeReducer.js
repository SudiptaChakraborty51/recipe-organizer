export const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return (state = [action.payload, ...state]);
      case "REMOVE_RECIPE":
        return state.filter((recipe) => recipe.id !== action.payload);
    default:
      return state;
  }
};
