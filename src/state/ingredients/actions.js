// export const ingredientsRequest = () => ({
//    type: "ingredients/request"
// });

// export const ingredientsSuccess = (payload) => ({
//     type: "ingredients/success",
//     payload
// });

// export const ingredientsError = (payload) => ({
//     type: "ingredients/error",
//     payload
// });
import { createAction } from "@reduxjs/toolkit";

export const ingredientsRequest = createAction("ingredients/request");
export const ingredientsSuccess = createAction("ingredients/success");
export const ingredientsError = createAction("ingredients/error");