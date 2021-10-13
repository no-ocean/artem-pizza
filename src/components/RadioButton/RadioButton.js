import React from "react";
import "./RadioButton.scss";

const RadioButton = ({itemConfig, register}) => {
    
    const { id, name, slug, category } = itemConfig; 

    return (
        <div className="radio flex flex-center">
            <input
                id={id}
                type="radio" 
                value={slug}
                {...register(category)}
            />
            <label htmlFor={id} className="radio__label flex flex-center">
                <span>{name}</span>
            </label>
        </div>
    );
}

export default RadioButton;