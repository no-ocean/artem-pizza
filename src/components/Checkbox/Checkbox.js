import React from "react";

const Checkbox = ({itemConfig, order}) => {
    
    const { name, val, label, price } = itemConfig;

    return (
        <div className="checkbox mr-10">
            <label className="flex flex-col">
                <span>{label}</span>
                <div className="flex flex-v-center space-between">
                    <span className="mr-10">{price} &#8381;</span>
                    <input 
                        type="checkbox" 
                        name={name} 
                        value={val} 
                        defaultChecked={order[name].includes(val)}
                        data-price={price}
                    />
                </div>
            </label>
        </div>
    );
}

export default Checkbox;