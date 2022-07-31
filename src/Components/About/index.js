import React from "react";

const About = () => {
  return (
    <div id="about">
      <h1 id="main-section-header">About me</h1>
      <hr id="main-section-hr" />
      <div id="about-wrapper">
        <img
          id="portrait"
          src="https://i.postimg.cc/T1SP0ZkD/My-project.jpg"
          alt="Portrait of Feroz"
        />
        <div id="about-inner-wrapper">
          <h1>Hi, I'm Feroz</h1>
          <p>
            I'm a Full stack developer with 3 years of experience in digital
            marketing and content creation. I have creativity skills, love to
            solve critical problems and a keen to always improve and learn more.
            <br />
            <br />
            HTML, CSS, MySQL (sqlite2), JavaScript (Node.js, Express.js,
            Sequelize, Heroku, Sessions, Handlebars, working with API (POST,
            GET, DELETE & PUT), jQuery, React.js, Bootstrap, localStorage &
            Tailwind/DaisyUi) & experienced in different development structures
            such as TDD, OOP, ORM & MVC. Lastly, an expert in Adobe Premiere
            Rush, and Adobe Photoshop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
