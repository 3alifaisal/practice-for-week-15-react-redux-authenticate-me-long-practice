// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormPage";
import SignupFormModal from "../SignupFormPage";
import "./Navigation.css";
import "../../stylesheets/navButtons.css";
function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="right-container">
        <LoginFormModal className="nav-link" />
        <SignupFormModal className="nav-link" />
      </div>
    );
  }

  return (
    <nav>
      <NavLink exact to="/" className="nav-link">
        Home
      </NavLink>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
