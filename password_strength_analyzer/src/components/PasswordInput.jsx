import React from "react";

function PasswordInput({ password, setPassword }) {
  return (
    <div>
      <label>Password:</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
    </div>
  );
}

export default PasswordInput;