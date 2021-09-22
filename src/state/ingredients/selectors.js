export const getIngredients = (state) => state.ingredients;
export const getIsLoading = (state) => {
    return state.ingredients === "loading"
};
export const getError = (state) => state.ingredients;