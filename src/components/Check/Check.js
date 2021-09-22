import React from "react";
import { useSelector } from "react-redux";
import { getPizza } from "../../state/pizza/selectors";
import { getPrice } from "../../state/price/selectors";

const Check = () => { 

    const pizza = useSelector(getPizza)
    const finalPrice = useSelector(getPrice);
    
    const { size, dough, sauces, cheese, vegetables, meat } = pizza;

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
            <p>{size} см, {dough === "thin" ? "тонкое" : "пышное"} тесто</p>
            <div className="flex flex-wrap mb-30">
                <span className="ingridient">
                    {sauces}
                </span>
                { ingridients(cheese) }
                { ingridients(vegetables) }
                { ingridients(meat) }

            </div>
            <h3 className="mb-30">Сумма заказа: {finalPrice} &#8381;</h3>
        </div>
    );
};

export default Check;