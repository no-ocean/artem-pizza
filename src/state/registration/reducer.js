// export const registrationReducer = (state = false, action) => {
//     switch (action.type) {
//         case "SET_REGISTRATION":
//             return action.payload;
//         default:
//             return state;
//     }
// }

import { createReducer } from "@reduxjs/toolkit";
import { setRegistration } from "./actions";

export const registrationReducer = createReducer(false, (builder) => {
    builder
        .addCase(setRegistration, (state, action) => {
            return action.payload
        })    
        .addDefaultCase((state) => state)
})