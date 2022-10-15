import "./NavbarButton.css";

interface navbarButtonI {
	name: string;
	navigatesTo: string;
	turnOffNavbarList: () => void;
}

const NavbarButton = (props: navbarButtonI) => {
	const { name, navigatesTo, turnOffNavbarList } = props;

	return (
		<li>
			<a href={`#${navigatesTo}`} onClick={turnOffNavbarList}>
				{name}
			</a>
		</li>
	);
};
export default NavbarButton;
