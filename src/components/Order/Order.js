import React from "react";
import Check from "../Check";

const Order = ({order, totalPrice, onBack}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-6 sm-col-12">
                <div className="form-section mb-20">
                    <div className="flex flex-col mb-30">
                        <h2 className="mb-20">Адрес доставки</h2>
                        <input 
                            className="input"
                            type="text"
                            placeholder="Введите адрес"
                        />
                    </div>
                    <div className="flex">
                        <label className="flex flex-col mw-110 mr-10">
                            <span className="mb-10">подъезд</span>
                            <input
                                className="input"
                                type="text"
                            />
                        </label>
                        <label className="flex flex-col mw-110 mr-10">
                            <span className="mb-10">этаж</span>
                            <input
                                className="input"
                                type="text"
                            />
                        </label>
                        <label className="flex flex-col mw-110 mr-10">
                            <span className="mb-10">квартира</span>
                            <input
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
                            placeholder="Номер карты"
                        />
                        <div className="flex space-between mb-30">
                            <input 
                                className="input mw-102 mr-10"
                                type="text"
                                placeholder="MM/YYYY"
                            />
                            <input 
                                className="input mw-70"
                                type="text"
                                placeholder="CVV"
                            />
                        </div>
                        <input 
                            className="input"
                            type="text"
                            placeholder="Имя как на карте"
                        />
                    </div>
                </div>
                <div className="form-description mb-20">
                    <p>Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер не бросает</p>
                </div>
            </div>
            <div className="col-6 sm-col-12">
                <Check order={order} totalPrice={totalPrice} />
                <button className="btn btn-primary mb-30" onClick={onBack}> К странице заказа</button>
            </div>
        </form>
    );
}

export default Order;