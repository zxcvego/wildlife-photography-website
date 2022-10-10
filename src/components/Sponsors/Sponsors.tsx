import ozoneLogo from "../../assets/Sponsors/ozone..png";
import grabmazeLogo from "../../assets/Sponsors/Grabmaze.png";
import natureflowLogo from "../../assets/Sponsors/Natureflow.png";
import allaroundLogo from "../../assets/Sponsors/AllAround.png";
import igntLogo from "../../assets/Sponsors/IGnt.png";
import "./Sponsors.css";
const Sponsors = () => {
	return (
		<section className="sponsors-container">
			<div>
				<img src={ozoneLogo} alt="" />
				<img src={grabmazeLogo} alt="" />
				<img src={natureflowLogo} alt="" />
				<img src={allaroundLogo} alt="" />
				<img src={igntLogo} alt="" />
			</div>
		</section>
	);
};

export default Sponsors;
