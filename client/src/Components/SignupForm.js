import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,                         
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) =>{
          setUser(user) 
        });
      }
    });
  }

  return (
    <div className="container m-3 d-flex justify-content-center w-50">   
    <form onSubmit={handleSubmit}>
    <h5 className='display-5'>SignUp</h5> 
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
      <div className="form-group m-2">
        <label htmlFor="password">Password</label>
        <input className="form-control"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
     
      <div className="form-group">
        <button className="btn btn-primary m-2" type="submit">Sign Up</button> 
      </div>
    </form>
    </div>
  );
}

export default SignUpForm;