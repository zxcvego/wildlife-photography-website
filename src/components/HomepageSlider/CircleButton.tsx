import "./CircleButton.css";
import { sliderImagesI } from "./HomepageSlider";

interface circleButtonI {
	active: boolean;
	id: number;
	setSliderImageNumber: React.Dispatch<React.SetStateAction<number>>;
	sliderImages: sliderImagesI[];
	setSliderImages: React.Dispatch<React.SetStateAction<sliderImagesI[]>>;
}

const CircleButton = (props: circleButtonI) => {
	const { active, id, setSliderImageNumber, sliderImages, setSliderImages } =
		props;

	return (
		<>
			<div
				className={active ? "circle-button-filled" : "circle-button-unfilled"}
				onClick={() => {
					setSliderImageNumber(id);
					const tempSliderImages = sliderImages;
					tempSliderImages.forEach((x: sliderImagesI) => (x.active = false));
					tempSliderImages[id].active = true;
					setSliderImages(tempSliderImages);
				}}
			></div>
		</>
	);
};

export default CircleButton;
