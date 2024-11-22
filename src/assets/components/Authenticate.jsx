import React from "react";
import { useState } from "react";

export default function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [username, setUsername] = useState(null);

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setSuccessMessage(data.message);
      setUsername(data.username);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth">
      <h2>Authenticate:</h2>
      {error && <p>{error}</p>}
      {successMessage && username ? (
        <p>{`${successMessage}, ${username}`}</p>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
