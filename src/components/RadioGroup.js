import React from "react";
import RadioButton from "./RadioButton";

const RadioGroup = ({title, data, order, onChange}) => {
   
    const radioItems = data.map((item) => {
        let id = Math.floor(Math.random() * 1000000);
        return <RadioButton key={id} itemConfig={item} order={order}/>
    });

    return (
        <div className="col flex flex-col">
            <span className="mb-10">{title}</span>
            <div className="flex radiogroup" onChange={onChange}>
                { radioItems }
            </div>
        </div>
    );
}

export default RadioGroup;