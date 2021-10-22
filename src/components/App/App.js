import React from "react";
import Header from "../Header";
import Configurator from "../Configurator";
import Registration from "../Registration";
import Login from "../Login";
import Order from "../Order";
import OrderList from "../OrderList";
import PageNotFound from "../PageNotFound";
import { Route, Link, Switch } from "react-router-dom";
import OrderSuccess from "../OrderSuccess/OrderSuccess";

const App = () => {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<h1>Собери свою пиццу</h1>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/registration">
						<Registration />
					</Route>
					<Route path="/orders">
						<OrderList />
					</Route>
					<Route path="/order">
						<Order />
					</Route>
					<Route path="/success">
						<OrderSuccess />
					</Route>
					<Route exact path="/">
						<Configurator />
					</Route>
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;