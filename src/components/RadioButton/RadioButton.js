import React from "react";

const RadioButton = ({itemConfig, register}) => {
    
    const { name, val, label, price } = itemConfig; 

    return (
        <div className="radio mr-10">
            <label className="flex flex-v-center">
                <span>{label}</span>
                <input
                    type="radio" 
                    value={val}
                    data-price={price}
                    {...register(name)}
                />
            </label>
        </div>
    );
}

export default RadioButton;