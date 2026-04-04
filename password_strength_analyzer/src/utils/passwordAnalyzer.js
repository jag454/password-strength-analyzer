export function analyzePassword(password) {
  let score = 0;

  // Length check
  if (password.length >= 8) score += 20;  //score = score+20= 0+20 = 20
  if (password.length >= 12) score += 10;

  if (password.length === 0) score = 0;
  
  else if (password.length < 6) score -= 20;
  else if (password.length < 4) score -= 30;
  console.log(score);


  // Character checks
  if (/[a-z]/.test(password)) score += 15;
  if (/[A-Z]/.test(password)) score += 15;
  if (/[0-9]/.test(password)) score += 15;
  if (/[^A-Za-z0-9]/.test(password)) score += 25;
 
  // Cap score at 100
  if (score > 100) score = 100;

  return score;
}

export function calculateCrackTime(password) {
  let charsetSize = 0;

  if (/[a-z]/.test(password)) charsetSize += 26;
  if (/[A-Z]/.test(password)) charsetSize += 26;
  if (/[0-9]/.test(password)) charsetSize += 10;
  if (/[^A-Za-z0-9]/.test(password)) charsetSize += 32;
  

  if (charsetSize === 0) return "0 seconds";

  const length = password.length;

  const combinations = Math.pow(charsetSize, length);

  // Assume attacker speed: 1 billion attempts/sec
  // limit very large numbers
if (!isFinite(combinations)) {
  return "Millions of years";

}
  const attemptsPerSecond = 1e9;

  const seconds = combinations / attemptsPerSecond;

  return formatTime(seconds) 

}

function formatTime(seconds) {
  if (seconds < 60) return `${Math.round(seconds)} seconds`;

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.round(minutes)} minutes`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.round(hours)} hours`;

  const days = hours / 24;
  if (days < 365) return `${Math.round(days)} days`;

  const years = days / 365;
  if (years > 1000000) return "Millions of years";
  return `${Math.round(years)} years`;
}

export function getSuggestions(password) {
  const suggestions = [];

  if (password.length < 8) {
    suggestions.push("Use at least 8 characters");
  }

  if (!/[a-z]/.test(password)) {
    suggestions.push("Add lowercase letters");
  }

  if (!/[A-Z]/.test(password)) {
    suggestions.push("Add uppercase letters");
  }

  if (!/[0-9]/.test(password)) {
    suggestions.push("Include numbers");
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    suggestions.push("Use special characters (!@#$...)");
  }

  return suggestions;
}