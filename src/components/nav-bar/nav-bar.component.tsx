import "./nav-bar.scss";

const NavBar = () => {
	const handleClick = (id: string) => {
		document.getElementById(id)?.scrollIntoView();
	};
	return (
		<div className="navbar-wrapper">
			<button
				onClick={() => {
					handleClick("me");
				}}
			>
				Home
			</button>
			<button
				onClick={() => {
					handleClick("skill");
				}}
			>
				Technologies
			</button>
			<button
				onClick={() => {
					handleClick("work");
				}}
			>
				Work
			</button>
		</div>
	);
};

export default NavBar;
