import "./HomepageSlider.css";
import CircleButton from "./CircleButton";
import nobleDeerImg from "../../assets/HomepageSlider/noble-deer.jpg";
import tigerImg from "../../assets/HomepageSlider/tiger.jpg";
import bearImg from "../../assets/HomepageSlider/bear.jpg";
import { useState } from "react";
import "animate.css";

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
			<div id="home" className="homepage-slider-container">
				<img src={sliderImages[sliderImageNumber].image} alt="slider" />
				<div className="slider-content-container">
					<div className="slider-upper-title-container animate__fadeInDown">
						<div className="white-stripe"></div>
						<h2 className="slider-upper-title">JOHN DOE</h2>
						<div className="white-stripe"></div>
					</div>
					<h1 className="slider-title animate__fadeInLeft">
						WILDLIFE PHOTOGRAPHER
					</h1>
					<h2 className="slider-bottom-title animate__fadeInUp">SINCE 2012</h2>
				</div>
				<div className="circle-button-container">
					{[...Array(3)].map((_x, i) => (
						<CircleButton
							key={i}
							id={i}
							active={sliderImages[i].active}
							setSliderImageNumber={setSliderImageNumber}
							sliderImages={sliderImages}
							setSliderImages={setSliderImages}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default HomepageSlider;
