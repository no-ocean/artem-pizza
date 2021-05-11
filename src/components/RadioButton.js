import React from "react";

const RadioButton = ({itemConfig, order}) => {
    
    const { name, val, label, price } = itemConfig; 

    return (
        <div className="radio mr-10">
            <label className="flex flex-v-center">
                <span>{label}</span>
                <input
                    type="radio" 
                    name={name} 
                    value={val}
                    defaultChecked={order[name] === val}
                    data-price={price}
                />
            </label>
        </div>
    );
}

export default RadioButton;