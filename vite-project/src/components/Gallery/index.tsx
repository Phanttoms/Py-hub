import GalleryCard from "../GalleryCard";
import "./_gallery.scss";
import img1 from "../../assets/images/testimage/chien1.webp";
import img2 from "../../assets/images/testimage/chien2.webp";
import img3 from "../../assets/images/testimage/chien3.jpg";

function Gallery() {
	return (
		<div className="gallery">
			<GalleryCard src={img1} />
			<GalleryCard src={img2} />
			<GalleryCard src={img3} />
		</div>
	);
}

export default Gallery;
