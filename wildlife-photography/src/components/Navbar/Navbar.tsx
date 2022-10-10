import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
	const [isNavbarListMenuActive, setIsNavbarListMenuActive] = useState(false);

	const navbarButtons = () => {
		return (
			<>
				<h2>HOME</h2>
				<h2>ABOUT</h2>
				<h2>GALLERY</h2>
				<h2>PROJECTS</h2>
				<h2>CONTACT</h2>
			</>
		);
	};

	const expandNavbarListMenu = () => {
		return (
			<>
				<div className="navbar-list">
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
