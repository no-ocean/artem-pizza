import React, {useContext} from "react";
import { ConfigContext } from "../../helpers/ConfigContext";

const Check = () => {

    const [context] = useContext(ConfigContext);
    const { orderData, finalPrice } = context;
    // const { SIZE, DOUGH, SAUCES, CHEESE, VEGETABLES, MEAT } = dataConfig;
    const { size, dough, sauces, cheese, vegetables, meat } = orderData;

    // const ingridients = (DATA, ingridient) => {
    //     if (ingridient) {
    //         return ingridient.map((item) => {
    //             let id = Math.floor(Math.random() * 1000000);
    //             return <span key={id} className="ingridient">{DATA.data[item].label}</span>
    //         });
    //     };
    // }

    // return (
    //     <div className="check mb-30">
    //         <h2>Твоя пицца</h2>
    //         <p>{SIZE.data[size].label}, {DOUGH.data[dough].label} тесто</p>
    //         <div className="flex flex-wrap mb-30">
    //             <span className="ingridient">
    //                 {SAUCES.data[sauces].label !== "Майонез" ? SAUCES.data[sauces].label + " соус" : SAUCES.data[sauces].label}
    //             </span>
    //             { ingridients(CHEESE, cheese) }
    //             { ingridients(VEGETABLES, vegetables) }
    //             { ingridients(MEAT, meat) }

    //         </div>
    //         <h3 className="mb-30">Сумма заказа: {finalPrice} &#8381;</h3>
    //     </div>
    // );

    return (
        <div>{JSON.stringify(orderData)}</div>
    )
};

export default Check;