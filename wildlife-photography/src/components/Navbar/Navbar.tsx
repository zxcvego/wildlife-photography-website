import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
	return (
		<>
			<div className="navbar-container">
				<h1>John Doe</h1>
				<div className="navbar-buttons-container">
					<div className="navbar-buttons-titles">
						<h2>HOME</h2>
						<h2>ABOUT</h2>
						<h2>GALLERY</h2>
						<h2>PROJECTS</h2>
						<h2>CONTACT</h2>
					</div>
					<h2>
						<MenuIcon />
					</h2>
				</div>
			</div>
		</>
	);
};

export default Navbar;
