import { BrowserRouter } from "react-router-dom";
import Navigation from './routes-nav/Navigation.js';
import RoutesList from './routes-nav/RoutesList.js';
import JoblyApi from './api/api.js';
import React, { useEffect, useState } from 'react';
import './App.css';
import userContext from "./context/userContext.js";
import { jwtDecode } from 'jwt-decode';

/** Renders Jobly App and Navigation componenet
 *
 * Props: None
 *
 * State:
 * -user: State about user in object like {userData, isLoading}
 * -token: String representing token
 * -applications: Set of job IDs saved as numbers?
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  const [currentUser, setCurrentUser] = useState({
    data: null,
    isLoading: false,
  });
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const token = localStorage.getItem("_token");

  /**Get user data and set userData to userResult
   *  and isLoading to false if token exists */
  useEffect(function loadUserInfo() {
    console.log("loadUserInfo");

    async function fetchUserData() {
      if(token){
        let { username } = jwtDecode(token)
        JoblyApi.token = token;
        const userResult = await JoblyApi.getUser(username);
        setCurrentUser({
          data: userResult,
          isLoading: false,
        });
      }
    }
    fetchUserData();
  }, [token]);

  /**
   * loginUser function will take in an object with properties 'username' and
   * 'password' both with strings as values. Updates token state.
   */

  async function loginUser({ username, password }) {
    console.log("loginUser");
    const token = await JoblyApi.loginUser(username, password);
    localStorage.setItem("_token", token);
    setCurrentUser({
      data: username,
      isLoading: false,
    });
    // setToken(token);
  }

  /**
   * registerUser function will take in an object like
   * {username, password, firstName, lastName, email}.
   * Updates user state and token
   */

  async function registerUser({ username, password, firstName, lastName, email }) {
    const token = await JoblyApi.registerUser(
      username,
      password,
      firstName,
      lastName,
      email);
    localStorage.setItem("_token", token);
    setCurrentUser({
      data: username,
      isLoading: false,
    });
    // setToken(token);
  };


  /**
   * logoutUser function logs user out and resets token and user State.
   */

  function logoutUser() {
    setCurrentUser({
      data: null,
      isLoading: false,
    });
    localStorage.clear();
    // setToken(null);
  };

  /**
   * editProfile function takes in an object like
   * {username, firstName, lastName, email} and updates user state.
   */
  async function editProfile({ username, firstName, lastName, email }) {
    const user = await JoblyApi.editUser(username, firstName, lastName, email);
    setCurrentUser({
      data: user,
      isLoading: false
    });
  };

  /**hasAppliedToJob function takes in a job id and returns True if job
   * has been applied for, else False.
   */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /**
   * applyToJob function takes in a job id updates user's set of applied jobs
   */
  function applyToJob(id) {
    const username = currentUser.username;
    if(hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(username, id);
    setApplicationIds(new Set([...applicationIds, id]))
  };


  if (currentUser.isLoading) return <p>Loading...</p>;
  if (currentUser.data === null && token){
    return <p>We are loading...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider
          value={{
            currentUser: currentUser.data,
            hasAppliedToJob,
            applyToJob
          }}
        >
          <Navigation logout={logoutUser} user={currentUser.data} />
          <RoutesList
            user={currentUser.data}
            login={loginUser}
            register={registerUser}
            editProfile={editProfile}
            applyToJob={applyToJob}
          />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
