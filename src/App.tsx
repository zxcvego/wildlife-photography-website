import Navbar from "./components/Navbar/Navbar";
import HomepageSlider from "./components/HomepageSlider/HomepageSlider";
import AboutMe from "./components/AboutMe/AboutMe";
import Gallery from "./components/Gallery/Gallery";
import LatestProjects from "./components/LatestProjects/LatestProjects";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
const App = () => {
	return (
		<>
			<Navbar />
			<HomepageSlider />
			<AboutMe />
			<Gallery />
			<LatestProjects />
			<Sponsors />
			<Footer />
		</>
	);
};

export default App;
