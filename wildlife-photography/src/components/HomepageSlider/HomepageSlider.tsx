import "./HomepageSlider.css";
import nobleDeerImg from "../../assets/noble-deer.png";

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
			</div>
		</>
	);
};

export default HomepageSlider;
