export const pizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_PIZZA":
            return action.payload;
        default:
            return state;
    }
}