import React from "react";

const RadioButton = ({itemConfig, register}) => {
    
    const { name, slug, category } = itemConfig; 

    return (
        <div className="radio mr-10">
            <label className="flex flex-v-center">
                <span>{name}</span>
                <input
                    type="radio" 
                    value={slug}
                    {...register(category)}
                />
            </label>
        </div>
    );
}

export default RadioButton;