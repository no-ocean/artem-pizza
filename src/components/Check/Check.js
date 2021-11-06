import React from "react";
import { useSelector } from "react-redux";
import { getPizza } from "../../state/pizza/selectors";
import { getPrice } from "../../state/price/selectors";
import { getIngredients } from "../../state/ingredients/selectors";

const Check = () => { 

    const data = useSelector(getIngredients);
    const pizza = useSelector(getPizza)
    const finalPrice = useSelector(getPrice);
    
    const { size, dough, sauces, cheese, vegetables, meat } = pizza;

    console.log(data)

    const ingredients = (ingredient) => {
        if (ingredient) {
            return ingredient.map((item) => {
                return <span key={data[item].id} className="ingridient">{data[item].name}</span>
            });
        };
    }

    return (
        <div className="check mb-30">
            <h2>Твоя пицца</h2>
            <p>{data[size].name}, {data[dough].name} тесто</p>
            <div className="flex flex-wrap mb-30">
                <span className="ingridient">
                    {data[sauces].name} соус
                </span>
                { ingredients(cheese) }
                { ingredients(vegetables) }
                { ingredients(meat) }

            </div>
            <h3 className="mb-30">Сумма заказа: {finalPrice} &#8381;</h3>
        </div>
    );
};

export default Check;