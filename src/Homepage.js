import React, {useContext} from 'react'
import userContext from './userContext';
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
  const user = useContext(userContext);

  return(
    <div className="Homepage">
      <h1 className="Homepage-title">Jobly</h1>
      <h2 >All the jobs in one, convenient place.</h2>
      { user.userData
        ? <p className="Homepage-greeting">
          Welcome back, {user.userData.firstName}
          </p>
        : <div>
            <Link to='/login' className="Homepage-btn btn btn-primary">Log in</Link>
            <Link to='/register' className="Homepage-btn btn btn-primary">Sign up</Link>
          </div>
      }
    </div>

  );
}

export default Homepage;