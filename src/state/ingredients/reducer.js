// export const ingredientsReducer = (state = null, action) => {
//     switch (action.type) {
//         case "ingredients/success": 
//             return {...action.payload};
//         case "ingredients/error":
//             return {...action.payload};
//         case "ingredients/request":
//             return "loading";
//         default:
//             return state;
//     }
// }

import { createReducer } from "@reduxjs/toolkit";
import { ingredientsError, ingredientsRequest, ingredientsSuccess } from "./actions";

const initialState = null;

export const ingredientsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ingredientsSuccess, (state, action) => {
            return {...action.payload}
        })
        .addCase(ingredientsError, (state, action) => {
            return {...action.payload}
        })
        .addCase(ingredientsRequest, () => {
            return "loading"
        })
        .addDefaultCase((state) => state)
})