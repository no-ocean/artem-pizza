import React from "react";

const Checkbox = ({itemConfig, register}) => {
    
    const { name, slug, category, price, image, thumbnail } = itemConfig; 

    return (
        <div className="checkbox mr-10">
            <label className="flex flex-col">
                <span>{name}</span>
                <div className="flex flex-v-center space-between">
                    <span className="mr-10">{price} &#8381;</span>
                    <input 
                        type="checkbox" 
                        value={slug}
                        {...register(category)}
                    />
                </div>
            </label>
        </div>
    );
}

export default Checkbox;