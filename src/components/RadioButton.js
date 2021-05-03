import React from "react";

const RadioButton = ({itemConfig}) => {
    
    const { name, val, label, isChecked=false } = itemConfig;

    return (
        <div className="radio mr-10">
            <label className="flex flex-v-center">
                <span>{label}</span>
                <input type="radio" name={name} value={val} defaultChecked={isChecked} />
            </label>
        </div>
    );
}

export default RadioButton;