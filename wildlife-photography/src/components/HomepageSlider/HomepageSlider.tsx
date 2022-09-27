import "./HomepageSlider.css";
import CircleButton from "./CircleButton";
import nobleDeerImg from "../../assets/noble-deer.jpg";
import tigerImg from "../../assets/tiger.jpg";
import bearImg from "../../assets/bear.jpg";
import { useState } from "react";

export interface sliderImagesI {
	image: string;
	active: boolean;
}

const HomepageSlider = () => {
	const [sliderImageNumber, setSliderImageNumber] = useState(0);
	const [sliderImages, setSliderImages] = useState<sliderImagesI[]>([
		{ image: nobleDeerImg, active: true },
		{ image: tigerImg, active: false },
		{ image: bearImg, active: false },
	]);

	return (
		<>
			<div className="homepage-slider-container">
				<img src={sliderImages[sliderImageNumber].image} alt="slider" />
				<div className="slider-upper-title-container">
					<div className="white-stripe"></div>
					<h2 className="slider-upper-title">JOHN DOE</h2>
					<div className="white-stripe"></div>
				</div>
				<h1 className="slider-title">WILDLIFE PHOTOGRAPHER</h1>
				<h2 className="slider-bottom-title">SINCE 2012</h2>
				<div className="circle-button-container">
					<CircleButton
						key={0}
						id={0}
						active={sliderImages[0].active}
						setSliderImageNumber={setSliderImageNumber}
						sliderImages={sliderImages}
						setSliderImages={setSliderImages}
					/>
					<CircleButton
						key={1}
						id={1}
						active={sliderImages[1].active}
						setSliderImageNumber={setSliderImageNumber}
						sliderImages={sliderImages}
						setSliderImages={setSliderImages}
					/>
					<CircleButton
						key={2}
						id={2}
						active={sliderImages[2].active}
						setSliderImageNumber={setSliderImageNumber}
						sliderImages={sliderImages}
						setSliderImages={setSliderImages}
					/>
				</div>
			</div>
		</>
	);
};

export default HomepageSlider;
