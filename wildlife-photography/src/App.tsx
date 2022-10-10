import Navbar from "./components/Navbar/Navbar";
import HomepageSlider from "./components/HomepageSlider/HomepageSlider";
import AboutMe from "./components/AboutMe/AboutMe";
import Gallery from "./components/Gallery/Gallery";
import LatestProjects from "./components/LatestProjects/LatestProjects";

const App = () => {
	return (
		<>
			<Navbar />
			<HomepageSlider />
			<AboutMe />
			<Gallery />
			<LatestProjects />
		</>
	);
};

export default App;
