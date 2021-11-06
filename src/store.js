import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ingredientsReducer } from "./state/ingredients/reducer";
import { ordersReducer } from "./state/orders/reducer";
import { pizzaReducer } from "./state/pizza/reducer";
import { priceReducer } from "./state/price/reducer";
import thunk from "redux-thunk";
import { registrationReducer } from "./state/registration/reducer";
import { loginReducer } from "./state/login/reducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        orders: ordersReducer,
        pizza: pizzaReducer,
        price: priceReducer,
        registration: registrationReducer,
        login: loginReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== "production"
});