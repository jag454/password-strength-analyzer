import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PasswordInput from "./components/PasswordInput";
import StrengthBar from "./components/StrengthBar";
import ResultDisplay from "./components/ResultDisplay";
import { analyzePassword, calculateCrackTime, getSuggestions } from "./utils/passwordAnalyzer";
import StrengthChart from "./components/StrengthChart";

function App() {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [crackTime, setCrackTime] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  useEffect(() => {
    const result = analyzePassword(password);
    setScore(result);

    const time = calculateCrackTime(password);
    setCrackTime(time);
  }, [password]);


  useEffect(() => {
    const result = analyzePassword(password);
    setScore(result);

    const time = calculateCrackTime(password);
    setCrackTime(time);

    const tips = getSuggestions(password);
    setSuggestions(tips);

  }, [password])


  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f7fb"
    }}>
      <div style={{
        width: "400px",
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "20px"
        }}>
          🔐 Password Strength Analyzer
        </h2>
        <p style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "12px",
          color: "#888"
        }}>
          Built for Cyber Security Project
        </p>

        <PasswordInput password={password} setPassword={setPassword} />

        {password && <StrengthBar score={score} />}
        {password && (
          <ResultDisplay
            score={score}
            crackTime={crackTime}
            suggestions={suggestions}
          />
        )}

        <StrengthChart key={score} score={score} />
      </div>
    </div>
  );
}



export default App
