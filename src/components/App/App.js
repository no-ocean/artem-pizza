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
import HeaderAuth from "../HeaderAuth";

const App = () => {
	return (
		<div className="app">
			<Switch>
				<Route path="/login">
					<HeaderAuth />
					<Login />
				</Route>
				<Route path="/registration">
					<HeaderAuth />
					<Registration />
				</Route>
				<Route path="/orders">
					<Header />
					<OrderList />
				</Route>
				<Route path="/order">
					<Header />
					<Order />
				</Route>
				<Route path="/success">
					<Header />
					<OrderSuccess />
				</Route>
				<Route exact path="/">
					<Header />
					<Configurator />
				</Route>
				<Route>
					<Header />
					<PageNotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;