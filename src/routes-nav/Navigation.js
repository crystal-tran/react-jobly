import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';


/** Displays navigatioal links depending on if user is logged in.
 *
 * Props:
 * -logout: Callback function from parent
 * -user: data about the user
 *
 * State: None
 *
 * App -> Navigation
 *
 */
//TODO: apply CSS styling to nav bar. Have homepage on the far left, and
//and login/signup on the far right
//job, profile, company in the middle

//TODO: use context to pass in the user
//TODO: refactor so that Jobly shows up outside

function Navigation({ logout, user }) {
  return (
      <nav className="navbar navbar-expand-lg  navbar-dark">
      <NavLink to="/" className="navbar-brand">Jobly</NavLink>

      <button className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbar-content"
              aria-controls="navbar-content"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse " id="navbar-content">
        <ul className="navbar-nav ml-auto">
          {user ? (
            <>
              <li className="nav-item">
                <NavLink to="/companies" className="nav-link">Companies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" onClick={logout} className="nav-link">
                  Log out {user.username}
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>

    /* <NavLink to="/companies/baker-santos" end>Baker-Santos</NavLink> */
    /* Above link helps demonstrate potential for subtle bug on CompanyDetails
    useEffect, where if dependecy wasn't specified for company handle, could
    navigate to a page that did not demount the company info. */
  );
}

export default Navigation;