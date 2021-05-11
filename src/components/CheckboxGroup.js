import React from "react";
import Checkbox from "./Checkbox";

const CheckboxGroup = ({title, data, order, onChange}) => {

    const checkboxItems = data.map((item) => {
        let id = Math.floor(Math.random() * 1000000);
        return <Checkbox key={id} itemConfig={item} order={order}/>
    });

    return (
        <div className="col flex flex-col">
            <span className="mb-10">{title}</span>
            <div className="flex space-between checkboxGroup" onChange={onChange}>
                { checkboxItems }
            </div>
        </div>
    );
}

export default CheckboxGroup;