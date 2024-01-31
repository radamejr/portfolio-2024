import "./work.scss";

const Work = () => {
  return (
    <div className="work-wrapper">
      <div className="aerialsphere">
        <a className="title-link" href="https://www.aerialsphere.com/">
          {" "}
          AerialSphere{" "}
        </a>
        <p>
          AerialSphere is a image solution specialist. Those solutions empower
          you to harness the full potential of imagery, making it easier than
          ever to visualize, manage, and leverage location-based data. My
          Journey with AerialSphere over the last 4+ years has been to help
          plan, develop, and deploy an increasingly large feature set within our
          Panoramic Imagery Viewer. This viewer is utilized across our platform
          including our JavaScript API and within our Web App. I also Developed
          complex solutions for our integration into the ESRI ecosystem by
          building custom internal Computer Software and using Amazon Web
          Services.
        </p>
        <p className="list-title">Contributions:</p>
        <ul>
          <li>Develop and maintain Django REST API's</li>
          <li>Develop and maintain embedded XP360 API for client use</li>
          <li>
            Develop and maintain several AWS technologies including: LAMBDAs,
            DynamoDB, S3, API Gateway
          </li>
          <li>
            Develop React based webapp for both our Zwivel and XP360 API
            customers to login, sign-up, use and manage their accounts
          </li>
          <li>
            Develop propriertary processes for integration into the ESRI
            platform and creation of Oriented Imagery Catalogs
          </li>
          <li>
            Develop JSFiddle examples using our embedded API for our
            documentation
          </li>
        </ul>
        <p className="list-title">Examples:</p>
        <ul>
          <li>
            <a
              href="https://jresaz.com/search-listings/?location=Phoenix&propType=commercial"
              target="_blank"
              rel="noreferrer"
            >
              JRES
            </a>{" "}
            Client work - integrates our JavaScript API into an application with
            google, built to client spec request
          </li>
          <li>
            <a
              href="https://www.derito.com/Aerial/index.html?location=pavillions"
              target="_blank"
              rel="noreferrer"
            >
              Derito
            </a>{" "}
            Client work - Integrated our API viewer into their informational
            display of properties
          </li>
          <li>
            <a
              href="https://app.aerialsphere.com/"
              target="_blank"
              rel="noreferrer"
            >
              Aerial Sphere Web App
            </a>{" "}
            (Requires a sign-up but you can use a free trial)
          </li>
        </ul>
      </div>
      <hr></hr>
      <div className="framehameha">
        <a className="title-link" href="https://www.aerialsphere.com/">
          {" "}
          Framehameha{" "}
        </a>
        <p>
          Framehameha was the first real project that I built. It was intended
          to help bring together several pieces around the popular fighting game
          Dragaonball Fighterz. It is built with React, and connected to a Ruby
          on Rails API backend. It supported a login that I could use as an
          admin to updated and add additional character information. As it
          stands now, however only the learning and universal sections work as
          the API backend Database no longer functions. It is a great reminder
          of how the ambitions of a project can quickly outgrow your capacity
          and how important ongoing maintenance is to keep everything going.
          This is not a 'failure' for me, but a learning part on my journey as a
          Software Engineer.
        </p>
        <p className="list-title">Examples:</p>
        <ul>
          <li>
            <a
              href="https://www.framehameha.com/universal"
              target="_blank"
              rel="noreferrer"
            >
              Universal Data
            </a>{" "}
            Page dedicated to display 'universal' data that is shared across
            characters
          </li>
          <li>
            <a
              href="https://www.framehameha.com/learning"
              target="_blank"
              rel="noreferrer"
            >
              Kame House
            </a>{" "}
            Kame House, in the Dragonball World is Master Roshi's home. He runs
            the Turtle Hermit school and trains Goku and Krillin. The Kame House
            for the site is a learning dojo for new players.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
