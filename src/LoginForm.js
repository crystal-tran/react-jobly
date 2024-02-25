import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const DEFAULT_INITIAL_DATA = {
  username: "",
  password: ""
};

/**
 * LoginForm component takes in prop initialData and login which is a
 * callback and renders a login form. Has state to keep track of formData.
 *
 * Props:
 * -initialData: value to populate login
 * -login: function on the parent
 *
 * State:
 * -formData
 * -errorMsg: an array containing error msgs
 *
 * RouteList -> LoginForm
 */

function LoginForm({ initialData = DEFAULT_INITIAL_DATA, login}) {
  const [formData, setFormData] = useState(initialData);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  // console.log("LoginForm formData:", formData);

  /**
   * handleChange updates formData state based on user input.
   */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({
      ...curr,
      [name]: value,
    }));
  }

  /**
   * handleSubmit invokes the login function passing in formData. On success,
   * navigates user to homepage.
   *
   * If not successful, updates error state.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      console.log(err)
      setErrorMsg(err);
    }
  }
//TODO: wrap labels and inputs in separate divs
//TODO: further study, have a separate error component
  return (
    <div className="LoginForm container">
      <div className="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
        <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
        <form className="LoginForm-form" onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
            <input
              id="login-username"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />
          </div>
          <div class="form-floating mb-3">

            <input
              id="login-password"
              className="form-control"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
            />
          </div>

          {errorMsg &&
            <div className="LoginForm-error">
              <p className="LoginForm-error-ms" >Invalid username/password</p>
            </div>
          }
          <button className="LoginForm-button btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;