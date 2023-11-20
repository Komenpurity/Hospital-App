import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password_digest, setPasswordDigest] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password_digest,
        image_url: imageUrl,
        bio,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) =>{
          onLogin(user)
          console.log(user)
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
          value={password_digest}
          onChange={(e) => setPasswordDigest(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div className="form-group m-2">
        <label htmlFor="imageUrl">Profile Image</label>
        <input className="form-control"
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div className="form-group m-2">
        <label htmlFor="bio">Bio</label>
        <textarea className="form-control"
          rows="2"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
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