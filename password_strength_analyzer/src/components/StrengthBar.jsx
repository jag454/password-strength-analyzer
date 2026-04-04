import React from "react";

function StrengthBar({ score }) {
  const getColor = () => {
    if (score < 30) return "red";
    if (score < 60) return "orange";
    if (score < 80) return "yellow";
    return "green";
  };

  return (
   <div style={{ marginTop: "15px" }}>
    <div style={{
      height: "12px",
      background: "#eee",
      borderRadius: "10px",
      overflow: "hidden"
    }}>
      <div
        style={{
          width: `${score}%`,
          height: "100%",
          background: getColor(),
          transition: "all 0.4s ease"
        }}
      />
    </div>
  </div>
);
}

export default StrengthBar;