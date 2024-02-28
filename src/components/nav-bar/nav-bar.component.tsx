import "./nav-bar.scss";

const NavBar = () => {
	const handleClick = (id: string) => {
		document.getElementById(id)?.scrollIntoView();
	};
	return (
		<div className="navbar-wrapper">
			<button
				data-testid="me button"
				onClick={() => {
					handleClick("me");
				}}
			>
				About Me
			</button>
			<button
				data-testid="skill button"
				onClick={() => {
					handleClick("skill");
				}}
			>
				Technologies
			</button>
			<button
				data-testid="work button"
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
