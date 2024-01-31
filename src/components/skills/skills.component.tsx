import aws from "../../assets/amazonaws.png";
import django from "../../assets/django-icon.png";
import js from "../../assets/js.png";
import python from "../../assets/python.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import typescript from "../../assets/typescript.png";

import "./skills.scss";
const Skills = () => {
	const handleClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<div
			id="skill"
			className="skills-wrapper"
		>
			<div className="skills-circle">
				<img
					className="technology-image"
					src={aws}
					alt="Amazon Web Services"
					onClick={() => {
						handleClick("https://aws.amazon.com/");
					}}
				/>
				<img
					className="technology-image"
					src={django}
					alt="Django"
					onClick={() => {
						handleClick("https://www.djangoproject.com/");
					}}
				/>
				<img
					className="technology-image"
					src={js}
					alt="JavaScript"
					onClick={() => {
						handleClick(
							"https://developer.mozilla.org/en-US/docs/Web/javascript",
						);
					}}
				/>
				<img
					className="technology-image"
					src={react}
					alt="React"
					onClick={() => {
						handleClick("https://react.dev/");
					}}
				/>
				<img
					className="technology-image"
					src={python}
					alt="Python"
					onClick={() => {
						handleClick("https://www.python.org/");
					}}
				/>
				<img
					className="technology-image"
					src={redux}
					alt="Redux"
					onClick={() => {
						handleClick("https://redux.js.org/");
					}}
				/>
				<img
					className="technology-image"
					src={typescript}
					alt="TypeScript"
					onClick={() => {
						handleClick("https://www.typescriptlang.org/");
					}}
				/>
			</div>
		</div>
	);
};

export default Skills;
