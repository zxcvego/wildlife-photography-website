import { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarButton from "./NavbarButton";
import logo from "../../assets/john-doe-logo.svg";

const buttons = [
	{ title: "home", navigation: "homepage" },
	{ title: "about", navigation: "about" },
	{ title: "gallery", navigation: "gallery" },
	{ title: "projects", navigation: "projects" },
	{ title: "contact", navigation: "contact" },
];

const Navbar = () => {
	const [isNavbarListMenuActive, setIsNavbarListMenuActive] = useState(false);

	const turnOffNavbarList = () => {
		if (isNavbarListMenuActive)
			setIsNavbarListMenuActive(!isNavbarListMenuActive);
	};

	const navbarButtons = () => {
		return [...Array(buttons.length)].map((_x, i) => (
			<NavbarButton
				key={i}
				name={buttons[i].title}
				navigatesTo={buttons[i].navigation}
				turnOffNavbarList={turnOffNavbarList}
			/>
		));
	};

	const showHorizontalNavbarButtons = () => {
		return <ul className="horizontal-navbar-buttons">{navbarButtons()}</ul>;
	};

	const showVerticalNavbarButtons = () => {
		return (
			<>
				<div className="navbar-list animate__fadeInDown">{navbarButtons()}</div>

				<div
					id="dim"
					onClick={() => setIsNavbarListMenuActive(!isNavbarListMenuActive)}
				></div>
			</>
		);
	};

	return (
		<div className="navbar-container" id="home">
			<img src={logo} alt="" />
			{isNavbarListMenuActive
				? showVerticalNavbarButtons()
				: showHorizontalNavbarButtons()}
			<span id="menu-icon">
				<MenuIcon
					onClick={() => setIsNavbarListMenuActive(!isNavbarListMenuActive)}
				/>
			</span>
		</div>
	);
};

export default Navbar;
