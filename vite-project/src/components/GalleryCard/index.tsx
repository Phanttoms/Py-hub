import "./_galleryCard.scss";

interface GalleryCardProps {
	src: string;
}

function GalleryCard({ src }: GalleryCardProps) {
	return (
		<div className="galleryCard">
			<div className="galleryCard__preview">
				<img className="galleryCard__preview--img" src={src} alt="Preview" />
				<div className="galleryCard__preview__titlebox">
					<h2 className="galleryCard__preview__titlebox--title">
						Titreadaadadad
					</h2>
				</div>
			</div>
			<div className="galleryCard__content">
				<div className="galleryCard__content__description">
					<h3 className="galleryCard__content__description--title">
						Description:
					</h3>
					<p className="galleryCard__content__description--text">
						Maecenas ultricies turpis est, ut volutpat nisi vulputate sed.
						Nullam libero odio, pulvinar et justo et, ornare ultrices dolor.
						Donec a nulla nec nisi scelerisque aliquet. Fusce aliquet, nulla
						blandit feugiat accumsan, turpis leo ultricies orci, sit amet
						tincidunt dolor libero ac mi. Vestibulum et risus et leo finibus
						pulvinar. Phasellus lobortis nisi id sagittis tempor. Etiam ut
						finibus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin vulputate sapien lorem. Proin tincidunt eu velit sit amet
						dignissim. Morbi laoreet vulputate mollis. Nunc elementum sapien sed
						mi facilisis mollis. Morbi maximus ipsum metus, sit amet aliquet mi
						feugiat nec. Integer sit amet ex at nibh blandit molestie id id
						elit. Donec eleifend ornare elit nec sagittis.
					</p>
				</div>
				<div className="galleryCard__content__link">
					<div className="galleryCard__content__link--nav">Link</div>
					<div className="galleryCard__content__link--watch">Go to</div>
				</div>
			</div>
		</div>
	);
}

export default GalleryCard;
