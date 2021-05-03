import React from "react";
import Checkbox from "./Checkbox";

const CheckboxGroup = ({label, data}) => {

    const checkboxItems = data.map((item) => {
        let id = Math.floor(Math.random() * 1000000);
        return <Checkbox key={id} itemConfig={item} />
    });

    return (
        <div className="col flex flex-col">
            <span className="mb-10">{label}</span>
            <div className="flex space-between checkboxGroup">
                { checkboxItems }
            </div>
        </div>
    );
}

export default CheckboxGroup;