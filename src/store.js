import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ingredientsReducer } from "./state/ingredients/reducer";
import { pizzaReducer } from "./state/pizza/reducer";
import { priceReducer } from "./state/price/reducer";
import thunk from "redux-thunk";

export const store = createStore(
    combineReducers({
        ingredients: ingredientsReducer, 
        pizza: pizzaReducer,
        price: priceReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);