import React, { useState } from 'react';
import './EditProfileForm.css';


/**
 * EditProfileForm component takes in prop user and editProfile which
 * is a callback and renders a Edit Profile form. Has state to keep track of
 * formData, errorMsg, and successMsg
 *
 * Props:
 * -user: data about user
 * -editProfile: function on the parent
 *
 * State:
 * -formData: an object like {username, firstName, lastName, email}
 * -errorMsg: an array containing error msgs
 * -successMsg: a string
 *
 * RouteList -> EditProfileForm
 */

function EditProfileForm({ user, editProfile}) {
  const {username, firstName, lastName, email} = user;
  const [formData, setFormData] = useState({username, firstName, lastName, email});
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  // console.log("EditProfileForm formData:", formData);

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
   * handleSubmit invokes the editProfile function passing in formData.
   * formData like {username, firstName, lastName, email}
   *
   * Sets successMsg state on successful submission or sets errorMsg state
   * on failure
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await editProfile(formData);
      setSuccessMsg("Successfully editted profile!");
      setErrorMsg(null);
    } catch (err) {
      setErrorMsg(err);
      setSuccessMsg(null);
    }
  }

  return (
    <div className="EditProfileForm container">
     <div className="row">
     <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
        <div class="card-body p-4 p-sm-5">
        <h5 class="card-title text-left-align mb-3 fw-light fs-5">Edit Profile</h5>
      <form className="EditProfileForm-form" onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
        <label htmlFor="EditProfile-username">Username</label>
        <input
          id="EditProfile-username"
          className="form-control"
          name="username"
          placeholder={formData.username}
          onChange={handleChange}
          disabled
        />
        </div>
        <div class="form-floating mb-3">
        <label htmlFor="EditProfile-fn">First name</label>
        <input
          id="EditProfile-fn"
          className="form-control"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        </div>
        <div class="form-floating mb-3">
        <label htmlFor="EditProfile-ln">Last name</label>
        <input
          id="EditProfile-ln"
          className="form-control"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        </div>
        <div class="form-floating mb-3">
        <label htmlFor="EditProfile-email">Email</label>
        <input
          id="EditProfile-email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        </div>

        {successMsg &&
        <div className="EditProfileForm-success">
          <p>{successMsg}</p>
        </div>
        }

        {errorMsg &&
          <div className="EditProfileForm-error">
            {errorMsg.map((e, i) => <p key={i} >{e}</p>)}
          </div>
        }
        <button className="EditProfileForm-button btn btn-primary">
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

export default EditProfileForm;