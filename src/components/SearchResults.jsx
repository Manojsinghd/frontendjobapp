// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const SearchResults = () => {
//   const location = useLocation();
//   const { skills, experience, location: userLocation } = location.state || {};

//   useEffect(() => {
//     console.log('Search Results for:', { skills, experience, userLocation });
//     // Fetch data based on search parameters if needed
//   }, [skills, experience, userLocation]);

//   return (
//     <div>
//       <h1>Search Results</h1>
//       <p>Skills: {skills}</p>
//       <p>Experience: {experience}</p>
//       <p>Location: {userLocation}</p>
//       {/* Display job results here */}
//     </div>
//   );
// };

// export default SearchResults;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5001/jobs");
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
};

export default Jobs;
