import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logoSite.png";
import "./_header.scss";

function Header() {
	return (
		<header className="header">
			<Link className="header__logo" to="/">
				<img className="header__logo--img" src={logo} alt="Logo du site" />
			</Link>
			<h1 className="header--title">Py-HUB</h1>
		</header>
	);
}

export default Header;
