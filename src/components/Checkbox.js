import React from "react";

const Checkbox = ({itemConfig}) => {
    
    const { name, val, label, price, isChecked=false } = itemConfig;

    return (
        <div className="checkbox mr-10">
            <label className="flex flex-col">
                <span>{label}</span>
                <div className="flex flex-v-center space-between">
                    <span className="mr-10">{price} &#8381;</span>
                    <input type="checkbox" name={name} value={val} defaultChecked={isChecked} />
                </div>
            </label>
        </div>
    );
}

export default Checkbox;