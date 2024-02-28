import "./about-me.scss";

import Email from '../../assets/mail.png'
import Github from '../../assets/github-mark-white.png'
import Linked from '../../assets/linkedin.png'
import Me from "../../assets/me.jpg";
import { handleClick } from "../../helpers/component.helpers";

const AboutMe = () => {
	return (
		<div
			id="me"
			className="about-wrapper"
		>
			<img
				className="picture"
				src={Me}
				alt="me"
			/>
			<div className="blurb">
				<p>
					Hi! My Name is Robert Adame Jr., I am a Software Engineer with a
					passion for creating applications both web computer based. I have
					knowledge and experience with creating React Apps, working in the AWS
					ecosystem, Django and ESRI. This diverse experience allows me to
					continually learn and grow and always be challened with new
					opportunity.
				</p>
				<p>
					When I am not developing, I enjoy watching some shows, playing some
					games or just vibin out listening to some vinyls.
				</p>
			</div>
			<div className="contact-me">
				Want to build something together? Contact Me: 
			</div>
			<div className="contact-links">
				<img data-testid="contact linkedin" className="contact linkedin" alt="linked-in" src={Linked} onClick={() => handleClick('https://www.linkedin.com/in/radamejr/')}/>
				<img data-testid="contact github" className="contact github" alt="email" src={Github} onClick={() => handleClick('https://github.com/radamejr/')}/>
				<img data-testid="contact email" className="contact email" alt="email" src={Email} onClick={() => handleClick("mailto:radamejr@gmail.com?subject=Let's work together!")}/>
			</div>
		</div>
	);
};

export default AboutMe;
