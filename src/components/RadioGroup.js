import React from "react";
import RadioButton from "./RadioButton";

const RadioGroup = ({label, data}) => {

    const radioItems = data.map((item) => {
        let id = Math.floor(Math.random() * 1000000);
        return <RadioButton key={id} itemConfig={item} />
    });

    return (
        <div className="col flex flex-col">
            <span className="mb-10">{label}</span>
            <div className="flex radiogroup">
                { radioItems }
            </div>
        </div>
    );
}

export default RadioGroup;