import React, { useEffect } from "react";
import RadioGroup from "../RadioGroup";
import CheckboxGroup from "../CheckboxGroup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { calculatePrice } from "../../helpers/calculatePrice";
import { useDispatch, useSelector } from "react-redux";
import { setPizza } from "../../state/pizza/actions";
import { setPrice } from "../../state/price/actions";
import { fetchIngredients } from "../../state/ingredients/thunk";
import { getIngredients, getIsLoading, getError } from "../../state/ingredients/selectors";


const Configurator = () => {

	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchIngredients());
	}, []);

	const data = useSelector(getIngredients);
	const isLoading = useSelector(getIsLoading);
	const error = useSelector(getError);

	const defaultPizza = {
		size: "30",
		dough: "thin",
		sauces: "tomate",
		cheese: ["cheddar"],
		vegetables: ["broccoli"],
		meat: ["bacon"]
	}

	const { register, handleSubmit, watch } = useForm({
		defaultValues: defaultPizza
	});

	if (isLoading || !data) {
		return <h1>LOADING...</h1>
	}

	if (error.name === "Error") {
		return <h1>ERROR: {error.message}</h1>
	}

	const values = watch();
	console.log(values)

	const groupData = (groupName) => {
		return Object.values(data).filter((item) => {
			return item.category === groupName;
		});
	}

	let finalPrice = calculatePrice(data, values, 200)

	const onSubmit = (formData) => {
		dispatch(setPizza(formData));
		dispatch(setPrice(finalPrice));
		history.push("/order");
	};

	return (
		<>
			<form className="row" onSubmit={handleSubmit(onSubmit)}>
				<div className="col-xl-6">
					<div className="row mb-30">
						<div className="">
							<RadioGroup
								title={"Размер"}
								data={groupData("size")}
								register={register}
							/>
						</div>
						<div className="">
							<RadioGroup
								title={"Тесто"}
								data={groupData("dough")}
								register={register}
							/>
						</div>
					</div>
					<div className="row mb-30">
						<div className="">
							<RadioGroup
								title={"Выберите соус"}
								data={groupData("sauces")}
								register={register}
							/>
						</div>
					</div>
					<div className="row mb-10">
						<CheckboxGroup
							title={"Добавьте сыр"}
							data={groupData("cheese")}
							register={register}
						/>
					</div>
					<div className="row mb-10">
						<CheckboxGroup
							title={"Добавьте овощи"}
							data={groupData("vegetables")}
							register={register}
						/>
					</div>
					<div className="row mb-10">
						<CheckboxGroup
							title={"Добавьте мясо"}
							data={groupData("meat")}
							register={register}
						/>
					</div>
				</div>
				<div className="col-xl-6">
					<div className="pizza">
						<ul className="pizza__view">
							<li><img src="./images/plate.png" alt="plate" /></li>
						</ul>
					</div>
					<div className="row flex mb-30">
						<div className="col">
							<button className="btn btn-primary" >Заказать за {finalPrice} &#8381;</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}

export default Configurator;