import React from "react";

function ResultDisplay( { score, crackTime , suggestions}) { 
  const getLabel = () => {
    if (score < 30) return "Weak";
    if (score < 60) return "Moderate";
    if (score < 80) return "Strong";
    return "Very Strong";
  };

  return (
    <div style={{ marginTop: "15px" }}>
    <p><strong>Score:</strong> {score}</p>
    <p><strong>Strength:</strong> {getLabel()}</p>
    <p><strong>Crack Time:</strong> {crackTime}</p>

    <div style={{ marginTop: "15px" }}>
      <h4>Suggestions</h4>

      {suggestions.length === 0 && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Excellent password 🔥
        </p>
      )}

      <ul style={{ paddingLeft: "20px", color: "#555" }}>
        {suggestions.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default ResultDisplay;