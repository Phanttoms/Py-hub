// images chaines
import galleryImg1 from "../assets/images/galleryImg/Wankil-Studio.jpg";
import galleryImg2 from "../assets/images/galleryImg/Raiju-Lucifurus.jpg";
import galleryImg3 from "../assets/images/galleryImg/El-Jj.jpg";

// logo link
import youtubeImg from "../assets/images/logos/youtube.png";
import twitchImg from "../assets/images/logos/twitch.png";
import twitterImg from "../assets/images/logos/twitter.png";
import dailymotionImg from "../assets/images/logos/dailymotion.png";

export const data = [
	{
		id: "1",
		title: "Wankil Studio",
		image: galleryImg1,
		description:
			"Maecenas ultricies turpis est, ut volutpat nisi vulputate sed. Nullam libero odio, pulvinar et justo et, ornare ultrices dolor. Donec a nulla nec nisi scelerisque aliquet. Fusce aliquet, nulla blandit feugiat accumsan, turpis leo ultricies orci, sit amet tincidunt dolor libero ac mi.",
		link: {
			youtube: [
				{
					url: "",
					image: youtubeImg,
				},
			],
			twitch: [
				{
					url: "",
					image: twitchImg,
				},
			],
			twitter: [
				{
					url: "",
					image: twitterImg,
				},
			],
		},

		url: "/wankil-studio",
	},
	{
		id: "2",
		title: "Rayju Lucifurus",
		image: galleryImg2,
		description:
			"Vestibulum et risus et leo finibus pulvinar. Phasellus lobortis nisi id sagittis tempor. Etiam ut finibus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate sapien lorem.",
		link: {
			youtube: [
				{
					url: "",
					image: youtubeImg,
				},
			],
			dailymotion: [
				{
					url: "",
					image: dailymotionImg,
				},
			],
		},

		url: "/rayju",
	},
	{
		id: "3",
		title: "El Jj",
		image: galleryImg3,
		description:
			"Proin tincidunt eu velit sit amet dignissim. Morbi laoreet vulputate mollis. Nunc elementum sapien sed mi facilisis mollis. Morbi maximus ipsum metus, sit amet aliquet mi feugiat nec. Integer sit amet ex at nibh blandit molestie id id elit. Donec eleifend ornare elit nec sagittis.",
		link: {
			youtube: [
				{
					url: "",
					image: youtubeImg,
				},
			],
			twitter: [
				{
					url: "",
					image: twitterImg,
				},
			],
		},

		url: "/eljj",
	},
];
