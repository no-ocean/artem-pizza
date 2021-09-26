// export const setRegistration = (payload) => ({
//     type: "SET_REGISTRATION",
//     payload
// })
import { createAction } from "@reduxjs/toolkit";

export const setRegistration = createAction("registration/setRegistration")