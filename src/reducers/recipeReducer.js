export const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return (state = [action.payload, ...state]);
    default:
      return state;
  }
};
