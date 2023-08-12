import React from "react";
import "./Navbar.css";
import companyLogo from "../../Icons/companyLogo.png";
import searchIcon from "../../Icons/searchIcon.png";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-left">
        <img src={companyLogo} alt="" class="company-logo" />
        <div class="dropdown">
          <button class="dropbtn">Courses ˅</button>
          <div class="dropdown-content">
            <a href="course">Course 1</a>
            <a href="course">Course 2</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Program ˅</button>
          <div class="dropdown-content">
            <a href="Program">Program 1</a>
            <a href="Program">Program 2</a>
          </div>
        </div>
      </div>
      <div class="navbar-right">
        <img src={searchIcon} alt="Search Icon" class="search-icon" />
        <button class="login-button">Log in</button>
        <button class="join-button">Join Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
