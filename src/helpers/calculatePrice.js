export const calculatePrice = (data, values, defaultPrice) => {

    const { size, dough, sauces, cheese, vegetables, meat } = values;

    // const meatPrice = meat.reduce((acc, item) => {
    //     const instance = data.find((dataItem) => dataItem.slug === item);
    //     return acc + +instance.price;
    // }, 0); 

    const cheesePrice = cheese.reduce((acc, item) => {
        return acc + +data[item].price;
    }, 0);

    const meatPrice = meat.reduce((acc, item) => {
        return acc + +data[item].price;
    }, 0);

    const vegetablesPrice = vegetables.reduce((acc, item) => {
        return acc + +data[item].price;
    }, 0);


    // const sizePrice = SIZE.data[size].price;
    // const doughPrice = DOUGH.data[dough].price;
    // const saucesPrice = SAUCES.data[sauces].price;

    // const cheesePrice = cheese.reduce((price, cheese) => {
    //     return price + CHEESE.data[cheese].price;
    // }, 0);

    return defaultPrice + cheesePrice + vegetablesPrice + meatPrice;
}