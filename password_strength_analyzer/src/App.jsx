import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PasswordInput from "./components/PasswordInput";
import StrengthBar from "./components/StrengthBar";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Password Strength Analyzer</h2>

      <PasswordInput password={password} setPassword={setPassword} />

      <StrengthBar score={score} />

      <ResultDisplay score={score} />
    </div>
  );
}

export default App
