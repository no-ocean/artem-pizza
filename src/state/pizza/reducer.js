// export const pizzaReducer = (state = {}, action) => {
//     switch (action.type) {
//         case "SET_PIZZA":
//             return action.payload;
//         default:
//             return state;
//     }
// }

import { createReducer } from "@reduxjs/toolkit";
import { setPizza } from "./actions";

export const pizzaReducer = createReducer({}, (builder) => {
    builder
        .addCase(setPizza, (state, action) => {
            return action.payload;
        })
        .addDefaultCase((state) => state)
});
