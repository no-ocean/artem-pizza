export const priceReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_PRICE":
            return action.payload;
        default:
            return state;
    }
}