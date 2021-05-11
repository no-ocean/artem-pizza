import React from "react";

const Order = ({order, totalPrice, onBack}) => {

    const { size, dough, sauces, cheese, vegetables, meat } = order;

    console.log(size, dough, sauces, cheese, vegetables, meat)

    const ingridients = (ingridient) => {
        if (ingridient) {
            return ingridient.map((item) => {
                let id = Math.floor(Math.random() * 1000000);
                return <span key={id} className="ingridient">{item}</span>
            });
        };
    }

    return (
        <div>
            <h2>Твоя пицца</h2>
            <p>{size}, {dough} тесто</p>
            <div className="flex mb-30">
                <span className="ingridient">{sauces} соус</span>
                { ingridients(cheese) }
                { ingridients(vegetables) }
                { ingridients(meat) }
            </div>
            <h3 className="mb-30">Сумма заказа: {totalPrice} &#8381;</h3>
            <button className="btn btn-primary" onClick={onBack}> К странице заказа</button>
        </div>
    );
}

export default Order;