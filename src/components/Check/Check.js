import React, {useContext} from "react";
import { ConfigContext } from "../../helpers/ConfigContext";

const Check = () => {

    const [context] = useContext(ConfigContext);
    const { orderData, finalPrice } = context;
    
    const { size, dough, sauces, cheese, vegetables, meat } = orderData;

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