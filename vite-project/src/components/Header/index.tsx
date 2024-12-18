import { Link, NavLink } from "react-router-dom";

// style
import "./_header.scss";

// images
import logo from "../../assets/images/logos/logoSite.png";

function Header() {
	return (
		<header className="header">
			<Link className="header__logo" to="/">
				<img className="header__logo--img" src={logo} alt="Logo du site" />
			</Link>
			<h1 className="header--title">Py-HUB</h1>
			<nav className="header__navbar">
				<NavLink className={"header__navbar--link"} to="/">
					Accueil
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
