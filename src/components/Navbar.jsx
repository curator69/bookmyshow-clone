import React from "react";

import logo from "../assets/images/bookmyshow-logo-vector.png";
import searchIcon from "../assets/icons/search-outline.svg";
import dropDownIcon from "../assets/icons/caret-down-outline.svg";
import hamburgerIcon from "../assets/icons/reorder-three-outline.svg";

const Navbar = () => {
  return (
    <>
      <div className="nav-primary">
        <div className="nav-primary--left">
          <img className="logo" src={logo} alt="logo" />
          <div>
            <img className="searchIcon" src={searchIcon} alt="searchIcon" />
            <input
              type="text"
              placeholder="Search for Movies, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div className="nav-primary--right">
          <div>
            <p>Mumbai</p>
            <img
              className="dropDownIcon"
              src={dropDownIcon}
              alt="dropDownIcon"
            />
          </div>
          <a href="#">Sign In</a>
          <img src={hamburgerIcon} alt="hamburgerIcon" />
        </div>
      </div>
      <div className="nav-secondary">
        <div className="nav-secondary--left">
          <ul>
            <li>
              <a href="#">Mumbai</a>
              <a href="#">Stream</a>
              <a href="#">Events</a>
              <a href="#">Plays</a>
              <a href="#">Sports</a>
              <a href="#">Activites</a>
              <a href="#">Buzz</a>
            </li>
          </ul>
        </div>
        <div className="nav-secondary--right">
          <ul>
            <li>
              <a href="#">List Your Show</a>
              <a href="#">Corporates</a>
              <a href="#">Offers</a>
              <a href="#">Gift Cards</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
