// style
import "./_gallery.scss";

// components
import GalleryCard from "../GalleryCard";

// information des chaines
import { data } from "../../data/galleryData";

interface Info {
	id: string;
	title: string;
	image: string;
	description: string;
	url: string;
	link: {
		youtube?: { url: string; image: string }[];
		twitch?: { url: string; image: string }[];
		twitter?: { url: string; image: string }[];
		dailymotion?: { url: string; image: string }[];
	};
}

function Gallery() {
	return (
		<div className="gallery">
			{data.map((info: Info) => (
				<GalleryCard
					key={info.id}
					id={info.id}
					src={info.image}
					content={info.description}
					title={info.title}
					url={info.url}
					link={info.link}
				/>
			))}
		</div>
	);
}

export default Gallery;
