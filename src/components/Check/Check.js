import React from "react";

const Check = ({order, totalPrice}) => {
    const { size, dough, sauces, cheese, vegetables, meat } = order;

    const ingridients = (ingridient) => {
        if (ingridient) {
            return ingridient.map((item) => {
                let id = Math.floor(Math.random() * 1000000);
                return <span key={id} className="ingridient">{item}</span>
            });
        };
    }

    return (
        <div className="check mb-30">
            <h2>Твоя пицца</h2>
            <p>{size}, {dough} тесто</p>
            <div className="flex flex-wrap mb-30">
                <span className="ingridient">{sauces} соус</span>
                { ingridients(cheese) }
                { ingridients(vegetables) }
                { ingridients(meat) }
            </div>
            <h3 className="mb-30">Сумма заказа: {totalPrice} &#8381;</h3>
        </div>
    );
};

export default Check;