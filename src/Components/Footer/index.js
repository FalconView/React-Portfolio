import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <hr />
      <div id="footer-wrapper">
        <a
          href="https://github.com/FalconView"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icons"
            src="https://i.imgur.com/Dr5B5zu.png"
            alt="Icon of the Github logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/feroz-zargar-33b51537/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icons"
            src="https://imgpile.com/images/RVPzv8.png"
            alt="Icon of the Linkedin logo"
          />
        </a>
        <a
          href="https://www.instagram.com/ferozargar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icons"
            src="https://imgpile.com/images/RVPVwb.png"
            alt="Icon of the Instagram logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
