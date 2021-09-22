export const registrationReducer = (state = false, action) => {
    switch (action.type) {
        case "SET_REGISTRATION":
            return action.payload;
        default:
            return state;
    }
}