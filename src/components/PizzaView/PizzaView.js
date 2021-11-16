import IngredientsList from "../IngredientsList";

const PizzaView = ({data, values, finalPrice}) => {

	const doughImg = `./images/${data[values.dough].image}`;

	const creteIngredientImages = (ingredient, layer) => {
		const path = "http://localhost:4000/";

		const items = values[ingredient].map((item, index) => {
			const zInd = index + layer;
			return (
				<li key={data[item].id} className="pizza__item pizza__item_positioned" style={{zIndex: zInd}}>
					<img src={path + data[item].image} alt={data[item].name}/>
				</li>
			);	
		});
		return items;
	}

	const ingredients = (ingredient) => {
		if (ingredient) {
			return values[ingredient].map((item) => {
				return <span key={data[item].id} className="ingredients__item">{data[item].name}</span>
			});
		};
	}

    return (
        <div className="configurator">
			<div className="pizza">
				<ul className="pizza__view">
					<li key="plate" className="pizza__item pizza__item_plate"><img src="./images/plate.png" alt="plate" /></li>
					<li key="dough" className="pizza__item pizza__item_positioned pizza__item_dough"><img src={doughImg} alt="dough" /></li>
					{creteIngredientImages("cheese", 5)}
					{creteIngredientImages("meat", 10)}
					{creteIngredientImages("vegetables", 20)}
				</ul>
			</div>
			<div className="ingredients">
				<h2 className="ingredients__title">Твоя пицца</h2>
				<p className="ingredients__item">{data[values.size].name}, {data[values.dough].name} тесто</p>
				<div className="flex flex-wrap mb-30">
					<span className="ingredients__item">
						{data[values.sauces].name} соус
					</span>
					{ingredients("cheese")}
					{ingredients("vegetables")}
					{ingredients("meat")}
				</div>
			</div>
			<div className="row flex mb-30">
				<div className="col">
					<button className="btn btn-primary" >Заказать за {finalPrice} &#8381;</button>
				</div>
			</div>
		</div>
    );
}

export default PizzaView;