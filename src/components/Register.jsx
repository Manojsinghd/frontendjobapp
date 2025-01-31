import React from "react";

const Register = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create your Jobconnect profile</h2>
        <p>Search & apply to jobs from India's No.1 Job Site</p>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="What is your name?" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" placeholder="Tell us your Email ID" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="(Minimum 6 characters)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <div className="mobile-input">
            <span>+91</span>
            <input
              type="text"
              id="mobile"
              placeholder="Enter your mobile number"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="workStatus">Work Status</label>
          <select id="workStatus">
            <option value="experienced">I'm experienced</option>
            <option value="fresher">I'm a fresher</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" /> Send me important updates & promotions via
            SMS, email, and WhatsApp
          </label>
        </div>

        <p>
          By clicking Register, you agree to the{" "}
          <a href="#">Terms and Conditions</a> &{" "}
          <a href="#">Privacy Policy</a> of JobConnect.com
        </p>

        <button>Register Now</button>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Register;
