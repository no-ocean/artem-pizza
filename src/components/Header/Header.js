import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar">
                    <Link to="/" className="logo mr-10">
                        <img className="logo__img" src="/images/logo.svg" alt="logo" />
                    </Link>
                    <Link className="mr-10" to="/registration">Registration</Link>
                    <Link className="mr-10" to="/login">Login</Link>
                    <Link className="ml-a" to="/orders">Мои заказы</Link>
                </nav>
            </div>
        </div>
    )
};

export default Header;