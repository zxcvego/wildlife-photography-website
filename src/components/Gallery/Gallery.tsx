import "./Gallery.css";

import image1 from "../../assets/Gallery/image1.jpg";
import image2 from "../../assets/Gallery/image2.jpg";
import image3 from "../../assets/Gallery/image3.jpg";
import image4 from "../../assets/Gallery/image4.jpg";
import image5 from "../../assets/Gallery/image5.jpg";
import image6 from "../../assets/Gallery/image6.jpg";
import image7 from "../../assets/Gallery/image7.jpg";
import image8 from "../../assets/Gallery/image8.jpg";
import image9 from "../../assets/Gallery/image9.jpg";
import image10 from "../../assets/Gallery/image10.jpg";
import SingleImage from "./SingleImage";

const Gallery = () => {
	const galleryImages = [
		{ image: image1, imageDescription: "image1Desc" },
		{ image: image2, imageDescription: "image2Desc" },
		{ image: image3, imageDescription: "image3Desc" },
		{ image: image4, imageDescription: "image4Desc" },
		{ image: image5, imageDescription: "image5Desc" },
		{ image: image6, imageDescription: "image6Desc" },
		{ image: image7, imageDescription: "image7Desc" },
		{ image: image8, imageDescription: "image8Desc" },
		{ image: image9, imageDescription: "image9Desc" },
		{ image: image10, imageDescription: "image10Desc" },
	];

	return (
		<>
			<div id="gallery" className="gallery-container">
				<div className="grid">
					{[...Array(10)].map((_x, i) => (
						<SingleImage key={i} id={i} galleryImages={galleryImages} />
					))}
				</div>
				<div className="gallery-button-container">
					<h2>SEE MY GALLERY</h2>
					<div></div>
				</div>
			</div>
		</>
	);
};

export default Gallery;
