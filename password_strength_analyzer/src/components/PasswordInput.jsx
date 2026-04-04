import React from "react";

function PasswordInput({ password, setPassword }) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div>
      <label>Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        style={{
          width: "90%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          outline: "none",
          fontSize: "14px",
          marginTop: "10px"
        }}
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        style={{
          marginTop: "8px",
          background: "none",
          border: "none",
          color: "#007bff",
          cursor: "pointer"
        }}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
      <button
        onClick={() => navigator.clipboard.writeText(password)}
        style={{
          marginLeft: "10px",
          background: "#4caf50",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Copy
      </button>
    </div>
  );
}

export default PasswordInput;