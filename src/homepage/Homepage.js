import React, {useContext} from 'react'
import userContext from '../context/userContext.js';
import {Link} from "react-router-dom"
import "./Homepage.css"

/** Renders Jobly Homepage
 *
 * Props: None
 *
 * State: None
 *
 * App -> RoutesList -> Hompeage
 *
*/

function Homepage(){
  const { currentUser } = useContext(userContext);

  return(
    <div className="Homepage">
      <h1 className="Homepage-title">Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>
      { currentUser
        ? <p className="Homepage-greeting">
          Welcome back, {currentUser.firstName} 👋
          </p>
        : <div>
            <Link to='/login' className="Homepage-btn btn">Log in</Link>
            <Link to='/register' className="Homepage-btn btn">Sign up</Link>
          </div>
      }
    </div>

  );
}

export default Homepage;