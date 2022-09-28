import "./Gallery.css";

import image1 from "../../assets/GalleryImages/image1.jpg";
import image2 from "../../assets/GalleryImages/image2.jpg";
import image3 from "../../assets/GalleryImages/image3.jpg";
import image4 from "../../assets/GalleryImages/image4.jpg";
import image5 from "../../assets/GalleryImages/image5.jpg";
import image6 from "../../assets/GalleryImages/image6.jpg";
import image7 from "../../assets/GalleryImages/image7.jpg";
import image8 from "../../assets/GalleryImages/image8.jpg";
import image9 from "../../assets/GalleryImages/image9.jpg";
import image10 from "../../assets/GalleryImages/image10.jpg";

const Gallery = () => {
	return (
		<>
			<div className="gallery-container">
				<div className="grid">
					<img src={image1} alt="1" />
					<img src={image2} alt="1" />
					<img src={image3} alt="1" />
					<img src={image4} alt="1" />
					<img src={image5} alt="1" />
					<img src={image6} alt="1" />
					<img src={image7} alt="1" />
					<img src={image8} alt="1" />
					<img src={image9} alt="1" />
					<img src={image10} alt="1" />
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
