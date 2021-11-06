import React from "react";

const Checkbox = ({itemConfig, register}) => {
    
    const { id, name, slug, category, price, image, thumbnail } = itemConfig; 

    const path = "http://localhost:4000/";

    return (
        <div className="checkbox mr-10">
            <input
                id={id}
                className="checkbox__input"
                type="checkbox" 
                value={slug}
                {...register(category)}
            />
            <label htmlFor={id} className="checkbox__label flex flex-col">
                <div className="checkbox__image">
                    <img className="checkbox__img" src={path + thumbnail} alt={name} />
                </div>
                <span className="checkbox__title">{name}</span>
                <div className="flex flex-v-center space-between">
                    <span className="checkbox__price">{price} &#8381;</span>
                    <span className="checkbox__icon"></span>
                </div>
            </label>
        </div>
    );
}

export default Checkbox;