import React, { useState } from "react";

import '../../App.css'

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            name="userId"
            className="form-control"
            placeholder="Enter User ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            // value={password}
            // onChange={handleChange}
            className="form-control"
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
