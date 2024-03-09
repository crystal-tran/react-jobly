import React, { useState } from 'react';

/**
 * SearchForm component takes in prop search which is a callback and renders a
 * searchbar. Has state to keep track of form data.
 *
 * Props:
 * -term: value to populate search bar with
 * -search: callback function
 *
 * State:
 * -formData
 *
 * { CompanyList, JobList } -> SearchForm
 */


function SearchForm({ term, search }) {
  const [searchTerm, setSearchTerm] = useState(term);
  // console.log("SearchForm", "search= ", search, "formData=", formData);

  /**
   * handleChange updates formData state based on user input.
   */

  function handleChange(evt) {
    const userInput = evt.target.value;
    setSearchTerm(userInput);
  }

  /**
   * handleSubmit invokes the search function passing in formData
   */

  function handleSubmit(evt) {
    evt.preventDefault();
    search(searchTerm);
  }

  return (
        <div className="container col-md-10 mb-5 mt-4">
          <form className="SearchForm-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="search"
                className='form-control'
                type="text"
                value={searchTerm}
                placeholder="Search"
                onChange={handleChange}
              />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
  );
};

export default SearchForm;