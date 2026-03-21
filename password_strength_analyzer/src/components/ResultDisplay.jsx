import React from "react";

function ResultDisplay({ score }) {
  const getLabel = () => {
    if (score < 30) return "Weak";
    if (score < 60) return "Moderate";
    if (score < 80) return "Strong";
    return "Very Strong";
  };

  return (
    <div>
      <p>Score: {score}</p>
      <p>Strength: {getLabel()}</p>
    </div>
  );
}

export default ResultDisplay;