import AboutMe from "./components/about/about-me.component";
import NavBar from "./components/nav-bar/nav-bar.component";
import Skills from "./components/skills/skills.component";
import Work from "./components/work/work.component";
import "./Portfolio.css";

const Portfolio = () => {
	return (
		<div className="wrapper">
			<AboutMe />
			<NavBar />
			<Skills />
			<Work />
		</div>
	);
};
export default Portfolio;
