import React, { useState } from "react";

export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username, password);
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      // console.log("data.token", data.token);
      setToken(data.token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="signup-container">
        <h2>Sign Up Below</h2>
        <br />
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Email"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              value={password}
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            ></input>
          </label>
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
