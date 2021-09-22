import { getData } from "../../helpers/api";
import { radioData } from "../../helpers/radioData";
import { ingredientsError, ingredientsRequest, ingredientsSuccess } from "./actions";

export const fetchIngredients = () => async (dispatch) => {
    dispatch(ingredientsRequest());
    try {
        const json = await getData("ingredients");
        const normalizeJson = json.reduce((acc, item) => {
            acc[item.slug] = item;
            return acc;
        }, {})
        dispatch(ingredientsSuccess({...radioData, ...normalizeJson}));
    } catch (error) {
        dispatch(ingredientsError(error));
    }
}