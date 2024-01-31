import "./about-me.scss";
import Me from "../../assets/me.jpg";
const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <img className="picture" src={Me} alt="me" />
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
    </div>
  );
};

export default AboutMe;
