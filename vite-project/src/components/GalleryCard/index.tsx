import { NavLink } from "react-router-dom";
import "./_galleryCard.scss";

interface GalleryCardProps {
	key: string;
	id: string;
	src: string;
	content: string;
	title: string;
	url: string;
	link: {
		youtube?: { url: string; image: string }[];
		twitch?: { url: string; image: string }[];
		twitter?: { url: string; image: string }[];
		dailymotion?: { url: string; image: string }[];
	};
}

function GalleryCard({
	key,
	id,
	src,
	content,
	title,
	url,
	link,
}: GalleryCardProps) {
	return (
		<div className="galleryCard" id={id} key={key}>
			<div className="galleryCard__preview">
				<img className="galleryCard__preview--img" src={src} alt="Preview" />
				<div className="galleryCard__preview__titlebox">
					<h2 className="galleryCard__preview__titlebox--title">{title}</h2>
				</div>
			</div>
			<div className="galleryCard__content">
				<div className="galleryCard__content__description">
					<h3 className="galleryCard__content__description--title">
						Description:
					</h3>
					<p className="galleryCard__content__description--text">{content}</p>
				</div>
				<div className="galleryCard__content__link">
					<div className="galleryCard__content__link--nav">
						{link.youtube?.map((yt, index) => (
							<a key={`youtube-${index}`} href={yt.url}>
								<img src={yt.image} alt="YouTube" />
							</a>
						))}
						{link.twitch?.map((tw, index) => (
							<a key={`twitch-${index}`} href={tw.url}>
								<img src={tw.image} alt="Twitch" />
							</a>
						))}
						{link.twitter?.map((tw, index) => (
							<a key={`twitter-${index}`} href={tw.url}>
								<img src={tw.image} alt="Twitter" />
							</a>
						))}
						{link.dailymotion?.map((dm, index) => (
							<a key={`dailymotion-${index}`} href={dm.url}>
								<img src={dm.image} alt="Dailymotion" />
							</a>
						))}
					</div>
					<NavLink className="galleryCard__content__link--watch" to={url}>
						Watch
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default GalleryCard;
