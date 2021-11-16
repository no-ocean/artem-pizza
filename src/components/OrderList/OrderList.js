import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../state/orders/thunk";
import { getOrders, getIsLoading, getError } from "../../state/orders/selectors";

const OrderList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders())
    }, []);

    const data = useSelector(getOrders);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    if(isLoading || !data) {
        return <h1>LOADING...</h1>
    }

    if(error.name === "Error") {
        return <h1>ERROR: {error.message}</h1>
    }

    let orderItems = Object.values(data).map((item) => {
        return (
            <div className="check mb-30">
                <h2>Твоя пицца</h2>
                <p>{item.size} см, {item.dough === "thin" ? "тонкое" : "пышное"} тесто</p>
                <div className="flex flex-wrap mb-30">
                    <span className="ingredient">
                        {item.sauce}
                    </span>
                    { item.ingredients.join() }

                </div>
                <h3 className="mb-30">Сумма заказа: {item.price} &#8381;</h3>
            </div>
        )
    })

    return (
        <>
            <p>{JSON.stringify(data)}</p>
            <div>
                {orderItems}
            </div>
        </>
    )
}

export default OrderList;