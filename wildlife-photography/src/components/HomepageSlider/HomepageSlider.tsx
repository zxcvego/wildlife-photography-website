import "./HomepageSlider.css";
import "./CircleButton.css";
import nobleDeerImg from "../../assets/noble-deer.jpg";

const HomepageSlider = () => {
	return (
		<>
			<div className="homepage-slider-container">
				<img src={nobleDeerImg} alt="noble deer" />
				<div className="slider-upper-title-container">
					<div className="white-stripe"></div>
					<h2 className="slider-upper-title">JOHN DOE</h2>
					<div className="white-stripe"></div>
				</div>
				<h1 className="slider-title">WILDLIFE PHOTOGRAPHER</h1>
				<h2 className="slider-bottom-title">SINCE 2012</h2>
				<div className="circle-button-container">
					<div className="circle-button-filled"></div>
					<div className="circle-button-unfilled"></div>
					<div className="circle-button-unfilled"></div>
				</div>
			</div>
		</>
	);
};

export default HomepageSlider;
