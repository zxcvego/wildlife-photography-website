import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
	const [isNavbarListMenuActive, setIsNavbarListMenuActive] = useState(false);

	const navbarButtons = () => {
		return (
			<>
				<h2>
					<a href="#home">HOME</a>
				</h2>
				<h2>
					<a href="#about">ABOUT</a>
				</h2>
				<h2>
					<a href="#gallery">GALLERY</a>
				</h2>
				<h2>
					<a href="#projects">PROJECTS</a>
				</h2>
				<h2>
					<a href="#contact">CONTACT</a>
				</h2>
			</>
		);
	};

	const expandNavbarListMenu = () => {
		return (
			<>
				<div id="home" className="navbar-list">
					<div className="navbar-buttons-list">{navbarButtons()}</div>
				</div>
				<div
					className="dim"
					onClick={() => setIsNavbarListMenuActive(!isNavbarListMenuActive)}
				></div>
			</>
		);
	};

	return (
		<>
			<div className="navbar-container">
				<h1>John Doe</h1>
				<div className="navbar-buttons-container">
					<div className="navbar-buttons-titles">
						{isNavbarListMenuActive ? expandNavbarListMenu() : navbarButtons()}
					</div>
					<h2 className="menu-icon">
						<MenuIcon
							onClick={() => {
								setIsNavbarListMenuActive(!isNavbarListMenuActive);
								console.log(isNavbarListMenuActive);
							}}
						/>
					</h2>
				</div>
			</div>
		</>
	);
};

export default Navbar;
