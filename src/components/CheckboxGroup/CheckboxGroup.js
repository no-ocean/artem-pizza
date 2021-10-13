import React from "react";
import Checkbox from "../Checkbox";
import "./CheckboxGroup.scss";

const CheckboxGroup = ({title, data, register}) => {

    let checkboxItems = [];

    for (let key in data) {
        const item = data[key];
        const { id } = data[key];
        checkboxItems.push(<Checkbox key={id} itemConfig={item} register={register}/>);
    }

    const classNames = `flex checkboxGroup ${checkboxItems.length > 2 ? "scroller" :""}`

    return (
        <div className="fieldset col flex flex-col">
            <span className="mb-10">{title}</span>
            <div className={classNames}>
                { checkboxItems }
            </div>
        </div>
    );
}

export default CheckboxGroup;