import React from "react";
import IngredientsList from "../IngredientsList";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { postData } from "../../helpers/api";
import { useSelector } from "react-redux";
import { getPizza } from "../../state/pizza/selectors";
import { getPrice } from "../../state/price/selectors";


const Order = () => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const pizza = useSelector(getPizza);
    const finalPrice = useSelector(getPrice);

    const {size, dough, sauce, meat, vegetables, cheese} = pizza;

    const normalizeCardNumber = (value) => {
        return (
            value
                .replace(/^[A-Za-z]+$/i, "")
                .replace(/^[А-Яа-я]+$/i, "")
                .replace(/\s/g, "")
                .match(/.{1,4}/g)?.join(" ")
                .substr(0, 19) || ""
        );
    }

    const normalizeCardDate = (value) => {
        return (
            value
                .replace(/^[A-Za-z]+$/i, "")
                .replace(/^[А-Яа-я]+$/i, "")
                .replace(/\s/g, "")
                .match(/\d{1,2}/g)?.join("/")
                .substr(0, 5) || ""
        );
    }

    const normalizeCardCVV = (value) => {
        return (
            value
                .replace(/^[A-Za-z]+$/i, "")
                .replace(/^[А-ЯЁа-яё]+$/i, "")
                .replace(/\s/g, "")
                .substr(0, 3) || ""
        );
    }

    const normalizeCardName = (value) => {
        return (
            value
                .replace(/^[0-9А-ЯЁа-я]+$/g, "")
                .substr(0, 50)
                .toUpperCase() || ""
        );
    }

    const cardNumber = register("cardNumber");
    const cardDate = register("cardDate");
    const cardCVV = register("cardCVV");
    const cardName = register("cardName");

    const onSubmit = async (data) => {
        const order = {
            size,
            dough,
            sauce,
            ingredients: [
                ...meat, 
                ...vegetables, 
                ...cheese
            ],
            address: `${data.address}, подъезд: ${data.entrance}, этаж: ${data.floor}, квартира: ${data.flat}`,
            name: data.cardName,
            card_number: data.cardNumber,
            price: finalPrice,
        }

        try {
            await postData(order, "orders").then(() => {
                history.push("/success");
            });
        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" value="" {...register("size")}/>
            <div className="col-6 sm-col-12">
                <div className="form-section mb-20">
                    <div className="flex flex-col mb-30">
                        <h2 className="mb-20">Адрес доставки</h2>
                        <input 
                            {...register("address")}
                            className="input"
                            type="text"
                            placeholder="Введите адрес"
                        />
                    </div>
                    <div className="flex">
                        <label className="flex flex-col mw-110 mr-10">
                            <span className="mb-10">подъезд</span>
                            <input
                                {...register("entrance")}
                                className="input"
                                type="text"
                            />
                        </label>
                        <label className="flex flex-col mw-110 mr-10">
                            <span className="mb-10">этаж</span>
                            <input
                                {...register("floor")}
                                className="input"
                                type="text"
                            />
                        </label>
                        <label className="flex flex-col mw-110 mr-10">
                            <span className="mb-10">квартира</span>
                            <input
                                {...register("flat")}
                                className="input"
                                type="text"
                            />
                        </label>
                    </div>
                </div>
                <div className="form-section mb-20">
                    <div className="flex flex-col">
                        <h2 className="mb-20">Данные для оплаты</h2>
                        <input 
                            className="input mb-30"
                            type="text"
                            {...register("cardNumber")}
                            inputMode="numeric"
                            autoComplete="cc-number"
                            ref={cardNumber.ref}
                            onBlur={cardNumber.onBlur}
                            onChange={(event) => {
                                cardNumber.onChange(event);
                                event.target.value = normalizeCardNumber(event.target.value);
                            }}
                            placeholder="Номер карты"
                        />
                        <div className="flex space-between mb-30">
                            <input 
                                className="input mw-82 mr-10"
                                type="text"
                                {...register("cardDate")}
                                inputMode="numeric"
                                autoComplete="cc-exp"
                                ref={cardDate.ref}
                                onBlur={cardDate.onBlur}
                                onChange={(event) => {
                                    cardDate.onChange(event);
                                    event.target.value = normalizeCardDate(event.target.value);
                                }}
                                placeholder="MM/YY"
                            />
                            <input 
                                className="input mw-64"
                                type="text"
                                {...register("cardCVV")}
                                inputMode="numeric"
                                autoComplete="cc-csc"
                                ref={cardCVV.ref}
                                onBlur={cardCVV.onBlur}
                                onChange={(event) => {
                                    cardCVV.onChange(event);
                                    event.target.value = normalizeCardCVV(event.target.value);
                                }}
                                placeholder="CVV"
                            />
                        </div>
                        <input 
                            className="input"
                            type="text"
                            {...register("cardName")}
                            autoComplete="cc-name"
                            ref={cardName.ref}
                            onBlur={cardName.onBlur}
                            onChange={(event) => {
                                cardName.onChange(event);
                                event.target.value = normalizeCardName(event.target.value);
                            }}
                            placeholder="Имя как на карте"
                        />
                    </div>
                </div>
                <div className="form-description mb-20">
                    <p>Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер не бросает</p>
                </div>
            </div>
            <div className="col-6 sm-col-12">
                <div className="check mb-30">
                    <IngredientsList price={true}/>
                </div>
                <button className="btn btn-primary mb-30">Оплатить {finalPrice} &#8381;</button>
            </div>
        </form>
    );
}

export default Order;