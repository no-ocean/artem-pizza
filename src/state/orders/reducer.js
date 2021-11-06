import { createReducer } from "@reduxjs/toolkit";
import { ordersError, ordersRequest, ordersSuccess } from "./actions";

const initialState = null;

export const ordersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ordersSuccess, (state, action) => {
            return {...action.payload}
        })
        .addCase(ordersError, (state, action) => {
            return {...action.payload}
        })
        .addCase(ordersRequest, () => {
            return "loading"
        })
        .addDefaultCase((state) => state)
});
