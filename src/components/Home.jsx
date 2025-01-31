// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Home = () => {
//   const [skills, setSkills] = useState('');
//   const [experience, setExperience] = useState('');
//   const [location, setLocation] = useState('');
//   const history = useHistory();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Search clicked with parameters:", {
//       skills,
//       experience,
//       location,
//     });
    
//     // Navigate to search results page
//     history.push('/search-results', { skills, experience, location });
//   };

//   return (
//     <div>
//       <h1>Welcome to Job Connect</h1>

//       <form className="search-section" onSubmit={handleSearch}>
//         <div className="form-row">
//           <label>Enter skills / designations / companies</label>
//           <input 
//             type="text" 
//             placeholder="Skills / Designations / Companies" 
//             value={skills} 
//             onChange={(e) => setSkills(e.target.value)} 
//           />
//         </div>

//         <div className="form-row">
//           <label>Select experience</label>
//           <select 
//             value={experience} 
//             onChange={(e) => setExperience(e.target.value)}
//           >
//             <option value="">Select Experience</option>
//             <option value="Fresher">Fresher</option>
//             <option value="1-3 Years">1-3 Years</option>
//             <option value="3-5 Years">3-5 Years</option>
//             <option value="5+ Years">5+ Years</option>
//           </select>
//         </div>

//         <div className="form-row">
//           <label>Enter location</label>
//           <input 
//             type="text" 
//             placeholder="Location" 
//             value={location} 
//             onChange={(e) => setLocation(e.target.value)} 
//           />
//         </div>

//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Home = () => {
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search clicked with parameters:", {
      skills,
      experience,
      location,
    });
    
    // Use navigate to redirect to the search results page
    navigate('/search-results', { state: { skills, experience, location } });
  };

  return (
    <div>
      <h1>Welcome to Job Connect</h1>

      <form className="search-section" onSubmit={handleSearch}>
        <div className="form-row">
          <label>Enter skills / designations / companies</label>
          <input 
            type="text" 
            placeholder="Skills / Designations / Companies" 
            value={skills} 
            onChange={(e) => setSkills(e.target.value)} 
          />
        </div>

        <div className="form-row">
          <label>Select experience</label>
          <select 
            value={experience} 
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">Select Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="1-3 Years">1-3 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>
        </div>

        <div className="form-row">
          <label>Enter location</label>
          <input 
            type="text" 
            placeholder="Location" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
