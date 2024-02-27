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
			<div className="technology-wrapper">
				<img
					data-testid="aws image"
					className="technology-image aws"
					src={aws}
					alt="Amazon Web Services"
					onClick={() => {
						handleClick("https://aws.amazon.com/");
					}}
				/>
				<div className="technoloy-blurb">
					Amazon Web Services (AWS) is the world's most comprehensive and
					broadly adopted cloud, offering over 200 fully featured services from
					data centers globally. Experience includes S3, Lambda, Api Gateway,
					cloudwatch, cloudformation, aws cli, EC2, parameter store.
				</div>
			</div>
			<div className="technology-wrapper">
				<img
					data-testid="django image"
					className="technology-image"
					src={django}
					alt="Django"
					onClick={() => {
						handleClick("https://www.djangoproject.com/");
					}}
				/>
				<div className="technoloy-blurb">
					Django is a high-level Python web framework that encourages rapid
					development and clean, pragmatic design. Built by experienced
					developers, it takes care of much of the hassle of web development, so
					you can focus on writing your app without needing to reinvent the
					wheel.
				</div>
			</div>
			<div className="technology-wrapper">
				<img
					data-testid="js image"
					className="technology-image"
					src={js}
					alt="JavaScript"
					onClick={() => {
						handleClick(
							"https://developer.mozilla.org/en-US/docs/Web/javascript",
						);
					}}
				/>
				<div className="technoloy-blurb">
					JavaScript (JS) is a lightweight interpreted (or just-in-time
					compiled) programming language with first-class functions. JavaScript
					is a prototype-based, multi-paradigm, single-threaded, dynamic
					language, supporting object-oriented, imperative, and declarative
					(e.g. functional programming) styles.
				</div>
			</div>
			<div className="technology-wrapper">
				<img
					data-testid="react image"
					className="technology-image"
					src={react}
					alt="React"
					onClick={() => {
						handleClick("https://react.dev/");
					}}
				/>
				<div className="technoloy-blurb">
					With React, you can be a web and a native developer. Your team can
					ship to many platforms without sacrificing the user experience. Your
					organization can bridge the platform silos, and form teams that own
					entire features end-to-end.
				</div>
			</div>
			<div className="technology-wrapper">
				<img
					data-testid="python image"
					className="technology-image"
					src={python}
					alt="Python"
					onClick={() => {
						handleClick("https://www.python.org/");
					}}
				/>
				<div className="technoloy-blurb">
					Python is a programming language that lets you work quickly and
					integrate systems more effectively.
				</div>
			</div>
			<div className="technology-wrapper">
				<img
					data-testid="redux image"
					className="technology-image"
					src={redux}
					alt="Redux"
					onClick={() => {
						handleClick("https://redux.js.org/");
					}}
				/>
				<div className="technoloy-blurb">
					Redux is a predictable state container for JavaScript apps. It helps
					you write applications that behave consistently, run in different
					environments (client, server, and native), and are easy to test. On
					top of that, it provides a great developer experience, such as live
					code editing combined with a time traveling debugger.
				</div>
			</div>
			<div className="technology-wrapper">
				<img
					data-testid="ts image"
					className="technology-image"
					src={typescript}
					alt="TypeScript"
					onClick={() => {
						handleClick("https://www.typescriptlang.org/");
					}}
				/>
				<div className="technoloy-blurb">
					TypeScript is a strongly typed programming language that builds on
					JavaScript, giving you better tooling at any scale.
				</div>
			</div>
		</div>
	);
};

export default Skills;
