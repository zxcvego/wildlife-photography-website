import { useState } from "react";
import "./SingleImage.css";

const SingleImage = (props: any) => {
	const { galleryImages, id } = props;
	const [ifOnHover, setIfOnHover] = useState(false);

	console.log(galleryImages[id]);
	return (
		<>
			<img
				src={galleryImages[id].image}
				alt={galleryImages[id].imageDescription}
				onClick={() => setIfOnHover(true)}
			/>
		</>
	);
};

export default SingleImage;
