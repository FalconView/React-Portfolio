import React, { useState } from "react";

const Navigation = ({ setActivePage, activePage }) => {
  const handlePage = (e) => {
    if (
      e.target.innerText == "About me" ||
      e.target.innerText == "Feroz Zargar"
    ) {
      document.title = `Main - ${e.target.innerText}`;
      setActivePage({ about: true });
    } else if (e.target.innerText == "Portfolio") {
      document.title = e.target.innerText;
      setActivePage({ portfolio: true });
    } else if (e.target.innerText == "Contact") {
      document.title = e.target.innerText;
      setActivePage({ contact: true });
    } else if (e.target.innerText == "Resume") {
      document.title = e.target.innerText;
      setActivePage({ resume: true });
    }
    setActiveNav(false);
  };

  const [activeNav, setActiveNav] = useState(false);

  return (
    <div>
      <ul id="desktop-nav">
        <li>
          <a
            className={`navItem ${activePage.about ? "active" : ""}`}
            href="#About"
            onClick={(e) => handlePage(e)}
          >
            About me
          </a>
        </li>
        <p>/</p>
        <li>
          <a
            className={`navItem ${activePage.portfolio ? "active" : ""}`}
            href="#Portfolio"
            onClick={(e) => handlePage(e)}
          >
            Portfolio
          </a>
        </li>
        <p>/</p>
        <li>
          <a
            className={`navItem ${activePage.contact ? "active" : ""}`}
            href="#Contact"
            onClick={(e) => handlePage(e)}
          >
            Contact
          </a>
        </li>
        <p>/</p>
        <li>
          <a
            className={`navItem ${activePage.resume ? "active" : ""}`}
            href="#Resume"
            onClick={(e) => handlePage(e)}
          >
            Resume
          </a>
        </li>
      </ul>
      <img
        onClick={() => setActiveNav(!activeNav)}
        className={`nav-stack ${activeNav ? "active" : ""}`}
        src="https://i.postimg.cc/zfbjmMvj/588a64e0d06f6719692a2d10.png"
        alt="Navigation Icon"
      ></img>
      <ul className={`mobile-nav ${activeNav ? "active" : ""}`}>
        <li>
          <a
            className={`navItem ${activePage.about ? "active" : ""}`}
            href="#About"
            onClick={(e) => handlePage(e)}
          >
            About me
          </a>
        </li>
        <li>
          <a
            className={`navItem ${activePage.portfolio ? "active" : ""}`}
            href="#Portfolio"
            onClick={(e) => handlePage(e)}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className={`navItem ${activePage.contact ? "active" : ""}`}
            href="#Contact"
            onClick={(e) => handlePage(e)}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className={`navItem ${activePage.resume ? "active" : ""}`}
            href="#Resumes"
            onClick={(e) => handlePage(e)}
          >
            Resume
          </a>
        </li>
        <li id="nav-logo">
          <a className={`navItem`} href="#About" onClick={(e) => handlePage(e)}>
            Feroz Zargar
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
