import React, {useState, useEffect} from "react";
import RadioGroup from "../RadioGroup";
import CheckboxGroup from "../CheckboxGroup";
import Order from "../Order";

const Configurator = ({dataConfig}) => {

    const { size, dough, sauces, cheese, vegetables, meat } = dataConfig;

    const DEFAULT_PRICE = 200;

    const [order, setOrder] = useState({
        size: "30 см",
        dough: "Тонкое",
        sauces: "Томатный",
        cheese: ["Моцарелла"],
        vegetables: ["Помидоры"],
        meat: ["Бекон"],
        sizePrice: 0,
        doughPrice: 0,
        saucesPrice: 0,
        cheesePrice: 29,
        vegetablesPrice: 29,
        meatPrice: 29
    });

    const [totalPrice, setTotalPrice] = useState(DEFAULT_PRICE);

    useEffect(() => {
        setTotalPrice(DEFAULT_PRICE + order.sizePrice + order.doughPrice + order.saucesPrice + order.cheesePrice + order.vegetablesPrice + order.meatPrice);   
    }, [order.sizePrice, order.doughPrice, order.saucesPrice, order.cheesePrice, order.vegetablesPrice, order.meatPrice]);

    const [orderFlag, setOrderFlag] = useState(false);

    const handleRadio = (event) => {
        const radio = event.target;
        const priceGroup = radio.name + "Price";
        const radioPrice = radio.getAttribute("data-price");

        setOrder({
            ...order,
            [radio.name]: radio.value,
            [priceGroup]: +radioPrice
        });
    };

    const handleCheckbox = (event) => {
        const checkbox = event.target;
        const priceGroup = checkbox.name + "Price";
        const itemPrice = checkbox.getAttribute("data-price");
        const totalPrice = order[priceGroup];

        const idx = order[checkbox.name].findIndex(el => el === checkbox.value);
        if (idx === -1) {
            const newArr = [...order[checkbox.name], checkbox.value];
            setOrder({
                ...order,
                [checkbox.name]: newArr,
                [priceGroup]: +totalPrice + +itemPrice
            });
        } else {
            const before = order[checkbox.name].slice(0, idx),
                  after = order[checkbox.name].slice(idx+1);
            const newArr = [...before, ...after];
            setOrder({
                ...order,
                [checkbox.name]: newArr,
                [priceGroup]: +totalPrice - +itemPrice
            });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const flagToggle = () => {
        setOrderFlag(!orderFlag);
    }

    return (
        <>
            { !orderFlag ? 
            <form onSubmit={handleSubmit}>
                <div className="row mb-30">
                    <RadioGroup 
                        title={size.title}
                        data={size.data}
                        order={order}
                        onChange={handleRadio}
                    />
                    <RadioGroup 
                        title={dough.title}
                        data={dough.data}
                        order={order}
                        onChange={handleRadio}
                    />
                </div>
                <div className="row mb-30">
                    <RadioGroup 
                        title={sauces.title}
                        data={sauces.data}
                        order={order}
                        onChange={handleRadio}
                    />
                </div>
                <div className="row mb-30">
                    <CheckboxGroup 
                        title={cheese.title}
                        data={cheese.data}
                        order={order}
                        onChange={handleCheckbox}
                    />
                </div>
                <div className="row mb-30">
                    <CheckboxGroup 
                        title={vegetables.title}
                        data={vegetables.data}
                        order={order}
                        onChange={handleCheckbox}
                    />
                </div>
                <div className="row mb-30">
                    <CheckboxGroup 
                        title={meat.title}
                        data={meat.data}
                        order={order}
                        onChange={handleCheckbox}
                    />
                </div>
                <div className="row flex mb-30">
                    <div className="col">
                        <button className="btn btn-primary" onClick={flagToggle}>Заказать за {totalPrice} руб</button>
                    </div>
                </div>

            </form>
            :    
            <Order 
                order={order}
                totalPrice={totalPrice} 
                onBack={flagToggle}
            />
            }
        </>
    );
}

export default Configurator;