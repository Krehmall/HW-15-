import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { loggedInUser, handleLogout } = useContext(AuthContext);

  const getNavLinkClassName = (props) => {
    if (props.isActive) return "active";
    return;
  };

  return (
    <header>
      <h1 className="header-logo">Students</h1>
      {loggedInUser ? (
        <>
          <h4>Welcome aboard, {loggedInUser.username}</h4>
          {loggedInUser.isAdmin === true ? (
            <nav>
              <NavLink className={getNavLinkClassName} to="/users">
                Users
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/">
                Students
              </NavLink>
            </nav>
          ) : (
            ""
          )}
          <button className="logout-btn" onClick={() => handleLogout()}>
            Logout
          </button>
        </>
      ) : null}
    </header>
  );
};

export default Header;
