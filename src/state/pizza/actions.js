// export const setPizza = (payload) => ({
//     type: "SET_PIZZA",
//     payload
// });
import { createAction } from "@reduxjs/toolkit";

export const setPizza = createAction("pizza/setPizza");