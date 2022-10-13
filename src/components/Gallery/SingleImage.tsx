import "./SingleImage.css";

interface imageDetailsI {
	image: string;
	imageDescription: string;
}

const SingleImage = (props: imageDetailsI) => {
	const { image, imageDescription } = props;

	return (
		<div className="image-wrapper animate__fadeIn">
			<p className="image-description">{imageDescription}</p>
			<img src={image} alt={imageDescription} />
		</div>
	);
};

export default SingleImage;
