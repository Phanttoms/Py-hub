// style
import "./_catalogue.scss";

// image test
import img3 from "../../assets/images/testimage/chien3.jpg";

function Catalogue() {
	return (
		<div className="catalogue">
			<div className="catalogue__banner">
				<img
					className="catalogue__banner--img"
					src={img3}
					alt="Image de banière"
				/>
				<h2 className="catalogue__banner--title">Wankil Studio</h2>
			</div>
			<div className="catalogue__content">
				<div className="catalogue__content__categorie">
					<ul>
						<li>test 1</li>
						<li>test 2</li>
						<li>test 3</li>
					</ul>
				</div>
				<div className="catalogue__content__gallery">
					<div className="catalogue__content__gallery__playlist">
						<div className="catalogue__content__gallery__playlist__titlebox">
							<h3 className="catalogue__content__gallery__playlist__titlebox--title">
								Titre catégorie 1
							</h3>
						</div>
						<div className="catalogue__content__gallery__playlist__box">
							<div className="catalogue__content__gallery__playlist__box--video">
								video 1
							</div>
							<div className="catalogue__content__gallery__playlist__box--video">
								video 2
							</div>
							<div className="catalogue__content__gallery__playlist__box--video">
								video 3
							</div>
						</div>
					</div>
					<div className="catalogue__content__gallery__playlist">
						<div className="catalogue__content__gallery__playlist__titlebox">
							<h3 className="catalogue__content__gallery__playlist__titlebox--title">
								Titre catégorie 2
							</h3>
						</div>
						<div className="catalogue__content__gallery__playlist__box">
							<div className="catalogue__content__gallery__playlist__box--video">
								video 1
							</div>
							<div className="catalogue__content__gallery__playlist__box--video">
								video 2
							</div>
							<div className="catalogue__content__gallery__playlist__box--video">
								video 3
							</div>
						</div>
					</div>
					<div className="catalogue__content__gallery__playlist">
						<div className="catalogue__content__gallery__playlist__titlebox">
							<h3 className="catalogue__content__gallery__playlist__titlebox--title">
								Titre catégorie 3
							</h3>
						</div>
						<div className="catalogue__content__gallery__playlist__box">
							<div className="catalogue__content__gallery__playlist__box--video">
								video 1
							</div>
							<div className="catalogue__content__gallery__playlist__box--video">
								video 2
							</div>
							<div className="catalogue__content__gallery__playlist__box--video">
								video 3
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Catalogue;
