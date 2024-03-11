import React, { useState, useEffect, useContext } from 'react';
import userContext from '../context/userContext';
import './JobCard.css'


/**
 * JobCard component takes in prop jobData and renders job info.
 *
 * Props:
 * - jobData: {id, title, salary, equity, companyHandle, companyName}
 *
 * State:
 * - applied
 *
 * JobCardList -> JobCard
 */

function JobCard({ jobData }) {
  const { id, title, companyName, salary, equity} = jobData

  const { hasAppliedToJob, applyToJob } = useContext(userContext);
  const [applied, setApplied] = useState();

  useEffect(function updateJobStatusOnMount(){
    async function checkStatus() {
      setApplied(hasAppliedToJob(id));
    }
    checkStatus();
  }, [id, hasAppliedToJob]);

  /** Applies to job, and sets apply status to true */
  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <div className="JobCard container col-10 mb-3">
      <div className='card-body'>
        <h5><b>{title}</b></h5>
        <h7><i>{companyName}</i></h7>
        <p className='mb-0 mt-2'>Salary: {salary}</p>
        <p className='mb-2'>Equity: {equity}</p>
        <button
          className="Jobcard-btn btn btn-primary"
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;