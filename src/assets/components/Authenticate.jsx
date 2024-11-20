import React from "react";
import { useState } from "react";

export default function Authenticate({ token }) {
  const [error, setError] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log("token", token);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Authenticate</h2>
      {error && <p>{error}</p>}
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Authenticate
      </button>
    </div>
  );
}
