// export const setPrice = (payload) => ({
//     type: "SET_PRICE",
//     payload
// })

import { createAction } from "@reduxjs/toolkit";

export const setPrice = createAction("price/setPrice");
