import React from "react";

function StrengthBar({ score }) {
  const getColor = () => {
    if (score < 30) return "red";
    if (score < 60) return "orange";
    if (score < 80) return "yellow";
    return "green";
  };

  return (
    <div>
      <div style={{ height: "10px", background: "#ddd" }}>
        <div
          style={{
            width: `${score}%`,
            height: "100%",
            background: getColor(),
          }}
        />
      </div>
    </div>
  );
}

export default StrengthBar;