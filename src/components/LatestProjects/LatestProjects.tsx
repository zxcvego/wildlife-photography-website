import "./LatestProjects.css";
import "./LatestProjectsPhotos.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const LatestProjects = () => {
	const [currentProject, setCurrentProject] = useState(0);
	const projects = [
		{ name: "royal-bengal-tiger", caption: "royal bengal tiger" },
		{ name: "rhinos", caption: "southern rhinoceros" },
	];

	return (
		<>
			<article id="projects" className="top-latest-projects">
				<div>
					<div className="decoration-flex">
						<div></div>
						<h2>PROJECTS</h2>
					</div>
					<h1>Latest Projects</h1>
				</div>
			</article>

			<article className="mid-latest-projects">
				<div className={`${projects[currentProject].name}`}>
					<main className="mid-flex">
						<div
							onClick={() => {
								if (!(currentProject - 1))
									setCurrentProject(currentProject - 1);
							}}
						>
							<ArrowBackIosNewIcon />
						</div>
						<h1>{projects[currentProject].caption}</h1>
						<div
							onClick={() => {
								if (currentProject + 1 !== projects.length)
									setCurrentProject(currentProject + 1);
							}}
						>
							<ArrowForwardIosIcon />
						</div>
					</main>
				</div>
			</article>

			<article className="bottom-latest-projects">
				<div>
					<h2>VIEW PROJECTS</h2>
					<div></div>
				</div>
			</article>
		</>
	);
};

export default LatestProjects;
