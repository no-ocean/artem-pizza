import React from "react";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";

const dataPizzaSizes = [
    {
        name: "size",
        val: 30,
        label : "30 см",
        isChecked: true
    },
    {
        name: "size",
        val: 35,
        label : "35 см",
    }
]

const dataPizzaDough = [
    {
        name: "dough",
        val: "thin",
        label : "Тонкое",
        isChecked: true
    },
    {
        name: "dough",
        val: "thick",
        label : "Толстое",
    }
]

const dataPizzaSauces = [
    {
        name: "sauces",
        val: "tomato",
        label: "Томатный",
        isChecked: true
    },
    {
        name: "sauces",
        val: "mayonnaise",
        label: "Майонез"
    },
    {
        name: "sauces",
        val: "spicy",
        label: "Острый"
    },
    {
        name: "sauces",
        val: "mushroom",
        label: "Грибной"
    }
];

const dataPizzaCheese = [
    {
        name: "cheese",
        val: "mozzarella",
        label: "Моцарелла",
        price: 29,
        isChecked: true
    },
    {
        name: "cheese",
        val: "cheddar",
        label: "Чеддер",
        price: 29
    },
    {
        name: "cheese",
        val: "dor_blue",
        label: "Дор Блю",
        price: 29
    }
];

const dataPizzaVegetables = [
    {
        name: "vegetables",
        val: "tomatoes",
        label: "Помидоры",
        price: 29,
        isChecked: true
    },
    {
        name: "vegetables",
        val: "mushrooms",
        label: "Грибы",
        price: 29
    },
    {
        name: "vegetables",
        val: "pepper",
        label: "Перец",
        price: 29
    }
];

const dataPizzaMeat = [
    {
        name: "meat",
        val: "bacon",
        label: "Бекон",
        price: 29,
        isChecked: true
    },
    {
        name: "meat",
        val: "pepperoni",
        label: "Пепперони",
        price: 29
    },
    {
        name: "meat",
        val: "ham",
        label: "Ветчина",
        price: 29
    }
];

const Configurator = () => {

    return (
        <>
            <form>
                <div className="row mb-30">
                    <RadioGroup label={"Размер"} data={dataPizzaSizes} />
                    <RadioGroup label={"Тесто"} data={dataPizzaDough} />
                </div>
                <div className="row mb-30">
                    <RadioGroup label={"Выберите соус"} data={dataPizzaSauces} />
                </div>
                <div className="row mb-30">
                    <CheckboxGroup label={"Добавьте сыр"} data={dataPizzaCheese} />
                </div>
                <div className="row mb-30">
                    <CheckboxGroup label={"Добавьте овощи"} data={dataPizzaVegetables} />
                </div>
                <div className="row mb-30">
                    <CheckboxGroup label={"Добавьте мясо"} data={dataPizzaMeat} />
                </div>
                <div className="row flex">
                    <div className="col">
                        <button className="btn btn-primary">Заказать</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Configurator;