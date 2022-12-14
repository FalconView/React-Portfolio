import React from "react";
import Navigation from "../Navigation";

const Header = ({ setActivePage, activePage }) => {
  return (
    <>
      <h1 onClick={() => setActivePage({ about: true })} id="header-logo">
        Feroz Zargar
      </h1>
      <Navigation setActivePage={setActivePage} activePage={activePage} />
    </>
  );
};

export default Header;
