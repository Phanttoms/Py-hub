// style
import "./_footer.scss";

// components
import gitHubLogo from "../../assets/images/logos/logoGitHubWhite.png";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__logo">
				<a href="https://github.com/Phanttoms" target="_blank">
					<img src={gitHubLogo} alt="GitHub Logo" />
				</a>
			</div>
			<div className="footer--text">
				2024 Yohan PRUCHE, site réalisé avec Vite, React, et TypeScript.
			</div>
		</footer>
	);
}

export default Footer;
