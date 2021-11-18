import { Link, useLocation, useHistory } from "react-router-dom";

const HeaderAuth = () => {

	let history = useHistory();
	let location = useLocation();
	let title, linkTitle, linkPath;

	const onClick = () => {
		history.goBack();
	}

	switch (location.pathname) {
		case "/login":
			title = "Авторизация";
			linkTitle = "Регистрация";
			linkPath = "/registration";
			break;
		case "/registration":
			title = "Регистрация";
			linkTitle = "Авторизация";
			linkPath = "/login";
			break;
		default:
			title = "Авторизация";
			linkTitle = "Регистрация";
			linkPath = "/registration";
	}

	return (
		<header className="header">
			<div className="container">
				<nav className="navbar">
					<Link className="navbar__button" to="/">
						<span className="mdi mdi-arrow-left navbar__icon"></span>
						<span>Назад</span>
					</Link>
					<h2 className="header__title">{title}</h2>
					<Link className="navbar__button" to={linkPath}>{linkTitle}</Link>
				</nav>
			</div>
		</header>
	)
};

export default HeaderAuth;