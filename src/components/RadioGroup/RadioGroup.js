import React from "react";
import RadioButton from "../RadioButton";

const RadioGroup = ({title, data, register}) => {

    let radioItems = [];

    for (let key in data) {
        const item = data[key];
        const { id } = data[key];
        radioItems.push(<RadioButton key={id} itemConfig={item} register={register}/>);
    }

    const classNames = `flex radiogroup ${radioItems.length > 2 ? "scroller" :""}`

    return (
        <div className="fieldset col flex flex-col">
            <span className="mb-10">{title}</span>
            <div className={classNames}>
                { radioItems }
            </div>
        </div>
    );
}

export default RadioGroup;