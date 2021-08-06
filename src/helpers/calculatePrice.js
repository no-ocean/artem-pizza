export const calculatePrice = (data, values, defaultPrice) => {

    const { size, cheese, vegetables, meat } = values;

    const calcCheckboxes = (value) => {
        return value.reduce((acc, item) => {
            return acc + +data[item].price;
        }, 0);
    };

    const calcRadio = (value) => {
        return +data[value].price;
    }

    return defaultPrice + calcRadio(size) + calcCheckboxes(cheese) + calcCheckboxes(vegetables) + calcCheckboxes(meat);
};
