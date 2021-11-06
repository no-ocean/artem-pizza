export const getOrders = (state) => state.orders;
export const getIsLoading = (state) => {
    return state.orders === "loading"
};
export const getError = (state) => state.orders;