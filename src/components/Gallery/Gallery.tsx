import "./Gallery.css";

import image1 from "../../assets/Gallery/image1.jpg";
import image2 from "../../assets/Gallery/image2.jpg";
import image3 from "../../assets/Gallery/image3.jpg";
import image4 from "../../assets/Gallery/image4.jpg";
import image5 from "../../assets/Gallery/image5.png";
import image6 from "../../assets/Gallery/image6.jpg";
import image7 from "../../assets/Gallery/image7.jpg";
import image8 from "../../assets/Gallery/image8.jpg";
import image9 from "../../assets/Gallery/image9.jpg";
import image10 from "../../assets/Gallery/image10.jpg";
import SingleImage from "./SingleImage";

const galleryImages = [
	{ image: image1, imageDescription: "red deer" },
	{ image: image2, imageDescription: "red panda" },
	{ image: image3, imageDescription: "african lions" },
	{ image: image4, imageDescription: "african lions" },
	{ image: image5, imageDescription: "innocent buffalo" },
	{ image: image6, imageDescription: "northern\n white\n rhinoceros" },
	{ image: image7, imageDescription: "forest owl" },
	{ image: image8, imageDescription: "common chimpanzee" },
	{ image: image9, imageDescription: "red deer" },
	{ image: image10, imageDescription: "plains zebra" },
];

const Gallery = () => {
	return (
		<>
			<div id="gallery" className="gallery-container">
				<div className="grid">
					{[...Array(galleryImages.length)].map((_x, i) => (
						<SingleImage
							key={i}
							image={galleryImages[i].image}
							imageDescription={galleryImages[i].imageDescription}
						/>
					))}
				</div>
				<div className="gallery-button-container">
					<span>
						<h2>SEE MY GALLERY</h2>
						<div></div>
					</span>
				</div>
			</div>
		</>
	);
};

export default Gallery;
