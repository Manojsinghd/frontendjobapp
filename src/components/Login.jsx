// import React from "react";

// const Login = ({ onClose }) => {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Login</h2>
    
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" placeholder="Enter your username" />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" placeholder="Enter your password" />
//         </div>
       
//         <button>Submit</button>
        
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from "axios";

const Login = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5001/login", {
        username,
        password,
      });

      console.log("Login successful:", response.data);
      alert("Login Successful!");
      setError("");
      onClose(); // Close the modal after successful login
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleLogin}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Login;
