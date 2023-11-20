import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    });
  }

  return (
    <div className="container m-5 d-flex justify-content-center w-50">   
    <form onSubmit={handleSubmit}>
    <h5 className='display-5'>Login</h5> 
      <div className="form-group m-2">
        <label htmlFor="username">Username</label>
        <input className="form-control"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div  className="form-group m-2">
        <label htmlFor="password">Password</label>
        <input className="form-control"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-primary m-2" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button> 
      </div>
      
    </form>
    </div>
  );
}

export default LoginForm;