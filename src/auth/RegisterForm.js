import React, { useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';


const DEFAULT_INITIAL_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: ""
};

/**
 * RegisterForm component takes in prop initialData and register which is a
 * callback and renders a registration form. Has state to keep track of
 * formData.
 *
 * Props:
 * -initialData: value to populate register
 * -register: function on the parent
 *
 * State:
 * -formData
 * -errorMsg: an array containing error msgs
 *
 * RouteList -> RegisterForm
 */

function RegisterForm({ initialData = DEFAULT_INITIAL_DATA, register}) {
  const [formData, setFormData] = useState(initialData);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  // console.log("RegisterForm formData:", formData);

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
   * handleSubmit invokes the register function passing in formData. On success,
   * navigates user to homepage.
   *
   * If not successful, updates error state.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await register(formData);
      navigate("/");
    } catch (err) {
      setErrorMsg(err);
    }
  }
//TODO: have labels in their own div and inputs to their own div
//TODO: further study: can make a component that handles errors
  return (
    <div className="RegisterForm container">
      <div className="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-3 fw-light fs-5">Register Today</h5>
              <p>Fill in the data below.</p>
        <form className="RegisterForm-form" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              id="register-username"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />
          </div>
          <div className="form-floating mb-3">
            <input
              id="register-password"
              className="form-control"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
            />
          </div>

          <div className="form-floating mb-3">
            <input
              id="register-fn"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          {errorMsg &&
             <div className="RegisterForm-error">
              {errorMsg.map((e, i) => <p key={i} >{e}</p>)}
            </div>
          }
          <button className="RegisterForm-btn btn">
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

export default RegisterForm;