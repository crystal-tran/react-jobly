import React from 'react';
import JobCard from './JobCard';

/**
 * JobCardList component takes in prop jobsData and renders JobCard component
 * for each jobsData element.
 *
 * Props:
 * -jobsData: [{id, title, salary, equity, companyHandle, companyName}, ...]
 *
 * State:
 * -None
 *
 * {CompanyDetail, JobList} -> JobCardList -> JobCard
 */

function JobCardList ({ jobsData }) {
  console.log("JobCardList", "jobsData= ", jobsData);

  return (
    <div>
      <JobCard />
    </div>
  )
};

export default JobCardList;