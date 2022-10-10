import "./LatestProjects.css";
import "./LatestProjectsPhotos.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const LatestProjects = () => {
	return (
		<>
			<section className="top-latest-projects">
				<div>
					<div className="decoration-flex">
						<div></div>
						<h2>PROJECTS</h2>
					</div>
					<h1>Latest Projects</h1>
				</div>
			</section>

			<main className="mid-latest-projects">
				<div className="royal-bengal-tiger">
					<section className="mid-flex">
						<div>
							<ArrowBackIosNewIcon />
						</div>
						<h1>ROYAL BENGAL TIGER</h1>
						<div>
							<ArrowForwardIosIcon />
						</div>
					</section>
				</div>
			</main>

			<section className="bottom-latest-projects">
				<div>
					<h2>VIEW PROJECTS</h2>
					<div></div>
				</div>
			</section>
		</>
	);
};

export default LatestProjects;
