// export const priceReducer = (state = null, action) => {
//     switch (action.type) {
//         case "SET_PRICE":
//             return action.payload;
//         default:
//             return state;
//     }
// }

import { createReducer } from "@reduxjs/toolkit";
import { setPrice } from "./actions";

export const priceReducer = createReducer(null, (builder) => {
    builder
        .addCase(setPrice, (state, action) => {
            return action.payload;
        })
        .addDefaultCase((state) => state);
});
