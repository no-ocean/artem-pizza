import { getData } from "../../helpers/api";
import { ordersError, ordersRequest, ordersSuccess } from "./actions";

export const fetchOrders = () => async (dispatch) => {
    dispatch(ordersRequest());
    try {
        const json = await getData("orders");
        dispatch(ordersSuccess({...json}));
    } catch (error) {
        dispatch(ordersError(error));
    }
}