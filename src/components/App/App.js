import React from "react";
import Configurator from "../Configurator";
import Registration from "../Registration";
import Login from "../Login";
import PageNotFound from "../PageNotFound";
import { Route, Link, Switch } from "react-router-dom";

const dataConfig = {
	size: {
		title: "Размер",
		data: [
			{
				id: 1,
				name: "size",
				val: "30 см",
				label: "30 см",
				price: 0
			},
			{
				id: 2,
				name: "size",
				val: "35 см",
				label: "35 см",
				price: 50
			}
		]
	},
	dough: {
		title: "Тесто",
		data: [
			{
				id: 1,
				name: "dough",
				val: "Тонкое",
				label: "Тонкое",
				price: 0
			},
			{
				id: 2,
				name: "dough",
				val: "Пышное",
				label: "Пышное",
				price: 0
			}
		]
	},
	sauces: {
		title: "Выберите соус",
		data: [
			{
				id: 1,
				name: "sauces",
				val: "Томатный",
				label: "Томатный",
				price: 0
			},
			{
				id: 2,
				name: "sauces",
				val: "Майонезный",
				label: "Майонез",
				price: 0
			},
			{
				id: 3,
				name: "sauces",
				val: "Острый",
				label: "Острый",
				price: 0
			},
			{
				id: 4,
				name: "sauces",
				val: "Грибной",
				label: "Грибной",
				price: 0
			}
		]
	},
	cheese: {
		title: "Добавьте сыр",
		data: [
			{
				id: 1,
				name: "cheese",
				val: "Моцарелла",
				label: "Моцарелла",
				price: 29
			},
			{
				id: 2,
				name: "cheese",
				val: "Чеддер",
				label: "Чеддер",
				price: 29
			},
			{
				id: 3,
				name: "cheese",
				val: "Дор Блю",
				label: "Дор Блю",
				price: 29
			}
		]
	},
	vegetables: {
		title: "Добавьте овощи",
		data: [
			{
				id: 1,
				name: "vegetables",
				val: "Помидоры",
				label: "Помидоры",
				price: 29
			},
			{
				id: 2,
				name: "vegetables",
				val: "Грибы",
				label: "Грибы",
				price: 29
			},
			{
				id: 3,
				name: "vegetables",
				val: "Перец",
				label: "Перец",
				price: 29
			}
		]
	},
	meat: {
		title: "Добавьте мясо",
		data: [
			{
				id: 1,
				name: "meat",
				val: "Бекон",
				label: "Бекон",
				price: 29
			},
			{
				id: 2,
				name: "meat",
				val: "Пепперони",
				label: "Пепперони",
				price: 29
			},
			{
				id: 3,
				name: "meat",
				val: "Ветчина",
				label: "Ветчина",
				price: 29
			}
		]
	}
}

const App = () => {
	return (
		<div className="App">
			<nav className="mb-30">
				<Link className="mr-10" to="/">App</Link>
				<Link className="mr-10" to="/registration">Registration</Link>
				<Link className="mr-10" to="/login">Login</Link>
			</nav>
			<h1>Собери свою пиццу</h1>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/registration">
					<Registration />
				</Route>
				<Route exact path="/">
					<Configurator dataConfig={dataConfig}/>
				</Route>
				<Route>
					<PageNotFound />
				</Route>
			</Switch>
			<button className="btn btn-error mb-30" onClick={() => {throw new Error("Something went wrong!")}}>Break the world</button>	
		</div>
	);
}

export default App;