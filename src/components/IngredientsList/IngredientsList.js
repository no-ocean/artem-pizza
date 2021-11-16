import React from "react";
import { useSelector } from "react-redux";
import { getPizza } from "../../state/pizza/selectors";
import { getPrice } from "../../state/price/selectors";
import { getIngredients } from "../../state/ingredients/selectors";

const IngredientsList = ({price}) => {

	const data = useSelector(getIngredients);
	const pizza = useSelector(getPizza)
	const finalPrice = useSelector(getPrice);

	const { size, dough, sauces, cheese, vegetables, meat } = pizza;

	const ingredients = (ingredient) => {
		if (ingredient) {
			return ingredient.map((item) => {
				return <span key={data[item].id} className="ingredients__item">{data[item].name}</span>
			});
		};
	}

	return (
		<>
			<h2 className="ingredients__title">Твоя пицца</h2>
			<p className="ingredients__item">{data[size].name}, {data[dough].name} тесто</p>
			<div className="flex flex-wrap mb-30">
				<span className="ingredients__item">
					{data[sauces].name} соус
				</span>
				{ingredients(cheese)}
				{ingredients(vegetables)}
				{ingredients(meat)}

			</div>
			{ price ? <h3 className="mb-30">Сумма заказа: {finalPrice} &#8381;</h3> : "" }
		</>
	);
};

export default IngredientsList;