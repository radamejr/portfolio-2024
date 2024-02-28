import AboutMe from "./components/about/about-me.component";
import NavBar from "./components/nav-bar/nav-bar.component";
import Skills from "./components/skills/skills.component";
import Work from "./components/work/work.component";
import "./Portfolio.css";
import "./background-stars.scss"

const Portfolio = () => {
	return (
		<div className="wrapper">
			<AboutMe />
			<NavBar />
			<Skills />
			<Work />
			<div className="bg-animation">
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
				<div id="stars4"></div>
    		</div>
		</div>
	);
};
export default Portfolio;
