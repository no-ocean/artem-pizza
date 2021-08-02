import React, {useState} from "react";
import Configurator from "../Configurator";
import Registration from "../Registration";
import Login from "../Login";
import Order from "../Order";
import PageNotFound from "../PageNotFound";
import { Route, Link, Switch } from "react-router-dom";
import { ConfigContext, ConfigProvider} from "../../helpers/ConfigContext";


const App = () => {
	const [context, setContext] = useState();
	return (
		<div className="App">
			<nav className="mb-30">
				<Link className="mr-10" to="/">App</Link>
				<Link className="mr-10" to="/registration">Registration</Link>
				<Link className="mr-10" to="/login">Login</Link>
			</nav>
			<h1>Собери свою пиццу</h1>
			<ConfigProvider value={[context, setContext]}>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/registration">
						<Registration />
					</Route>
					<Route path="/order">
						<Order/>
					</Route>
					<Route exact path="/">
						<Configurator />
					</Route>
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</ConfigProvider>
			{/* <button className="btn btn-error mb-30" onClick={() => {throw new Error("Something went wrong!")}}>Break the world</button>	 */}
		</div>
	);
}

export default App;