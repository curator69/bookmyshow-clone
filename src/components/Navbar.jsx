import React from "react";

import logo from "../assets/images/svgviewer-output.svg";
import searchIcon from "../assets/icons/search-outline.svg";
import dropDownIcon from "../assets/icons/caret-down-outline.svg";
import hamburgerIcon from "../assets/icons/icons8-menu.svg";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-primary flex">
          <div className="nav-primary__left flex">
            <img className="logo" src={logo} alt="logo" />
            <div className="input-section flex">
              <img className="searchIcon" src={searchIcon} alt="searchIcon" />
              <input
                type="text"
                placeholder="Search for Movies, Plays, Sports and Activities"
              />
            </div>
          </div>
          <div className="nav-primary__right flex">
            <div className="flex">
              <p>Mumbai</p>
              <img
                className="dropDownIcon"
                src={dropDownIcon}
                alt="dropDownIcon"
              />
            </div>
            <a href="#">Sign In</a>
            <img
              className="hamburgerIcon"
              src={hamburgerIcon}
              alt="hamburgerIcon"
            />
          </div>
        </div>
        <div className="nav-secondary flex">
          <div className="nav-secondary__left flex">
            <ul className="flex">
              <a href="#">Mumbai</a>
              <a href="#">Stream</a>
              <a href="#">Events</a>
              <a href="#">Plays</a>
              <a href="#">Sports</a>
              <a href="#">Activites</a>
              <a href="#">Buzz</a>
            </ul>
          </div>
          <div className="nav-secondary__right flex">
            <ul className="flex">
              <a href="#">List Your Show</a>
              <a href="#">Corporates</a>
              <a href="#">Offers</a>
              <a href="#">Gift Cards</a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
