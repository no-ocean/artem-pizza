// export const setLogin = (payload) => ({
//     type: "SET_LOGIN",
//     payload
// })
import { createAction } from "@reduxjs/toolkit";

export const setLogin = createAction("login/setLogin");