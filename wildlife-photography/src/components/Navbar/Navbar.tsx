import React from "react";
import "./Navbar.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Navbar = () => {
	return (
		<>
			<div className="navbar-container">
				<h1>John Doe</h1>
				<div className="navbar-buttons-container">
					<h2>HOME</h2>
					<h2>ABOUT</h2>
					<h2>GALLERY</h2>
					<h2>PROJECTS</h2>
					<h2>CONTACT</h2>
					<h2>
						<DensityMediumIcon />
					</h2>
				</div>
			</div>
		</>
	);
};

export default Navbar;
