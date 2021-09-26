// export const loginReducer = (state = false, action) => {
//     switch (action.type) {
//         case "SET_LOGIN":
//             return action.payload;
//         default:
//             return state;
//     }
// }

import { createReducer } from "@reduxjs/toolkit";
import { setLogin } from "./actions";

export const loginReducer = createReducer(false, (builder) => {
    builder
        .addCase(setLogin, (state, action) => {
            return action.payload
        })
        .addDefaultCase((state) => state)
});
