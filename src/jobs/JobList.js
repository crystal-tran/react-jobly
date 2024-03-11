import React, { useState, useEffect } from 'react';
import SearchForm from '../common/SearchForm.js';
import JobCardList from './JobCardList';
import JoblyApi from '../api/api';

/**
 * JobList renders a search bar and a list of job cards
 *
 * Props: None
 *
 * State:
 * - jobs: an object: {data, isLoading}
 *    - data: [{id, title, salary, equity, companyHandle, companyName}, ...]
 *    - isLoading: boolean
 * - term: string
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

function JobList () {
  const  [term, setSearchTerm]= useState('');
  const [jobs, setJobList] = useState({
    data: null,
    isLoading: true,
    errors: null
  });

  // console.log("jobs:", jobs, "term:", term);

  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {
      try {
        const jobsData = await JoblyApi.getJobs(term);
        setJobList({
          data: jobsData,
          isLoading: false,
          errors: null
        });
      } catch (err){
        setJobList({
          data: null,
          isLoading: false,
          errors: err,
        });
      }
    }
    fetchJobs();
  }, [term]);

  /**
   * search function takes in term and updates term state
   * and jobs state
   */
  function searchJobs(term){
    setJobList({ data: null, isLoading: true });
    setSearchTerm(term);
  }

  if(jobs.isLoading){
    return <p>Loading... </p>
  } else if (jobs.errors){
    return <i>There was an error.</i>
  }



  return (
    <div className='container'>
      <SearchForm search={searchJobs} term={term}/>
      {jobs.data.length
      ? <JobCardList jobsData={jobs.data}/>
      : <p>Sorry, no results were found!</p>
      }
    </div>
  );
};

export default JobList;