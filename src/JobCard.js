import React from 'react';
import './JobCard.css'

/**
 * JobCard component takes in prop jobData and renders job info.
 *
 * Props:
 * -jobData: {id, title, salary, equity, companyHandle, companyName}
 *
 * State:
 * -None
 *
 * JobCardList -> JobCard
 */

function JobCard({ jobData }) {
  // console.log("JobCard", "jobData= ", jobData);
  const {title, companyName, salary, equity} = jobData
  return (
    <div className="JobCard container col-10 mb-3">
      <div className='card-body'>
        <h5><b>{title}</b></h5>
        <h7><i>{companyName}</i></h7>
        <p className='mb-0 mt-2'>Salary: {salary}</p>
        <p className='mb-0'>Equity: {equity}</p>
      </div>
    </div>
  );
};

export default JobCard;