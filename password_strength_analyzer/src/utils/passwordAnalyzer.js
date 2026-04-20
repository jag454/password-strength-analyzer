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
  if (!password) return "0 seconds";

  let entropy = 0;
  const len = password.length;
  
  //console.log("password length-> ", password.length)

  //1. Base Entropy based on length
  if (len >= 1) entropy += 4;                           //First char
  if (len > 1) entropy += Math.min(len - 1, 7) * 2;     //chars 2-8
  if (len > 8) entropy += Math.min(len - 8, 12) * 1.5;  //chars 9-20
  if (len > 20) entropy += (len - 20) * 1;              //chars 21+

  //2. Bonus for complexity
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  
  if (hasUpper && (hasNumber || hasSpecial)) {
    entropy += 6; 
  }

  //3. Simple Dictionary/Pattern Penalty 
  //This catches commonly used words such as "Password", "123456", "Qwerty", "admin", etc.
  const commonPatterns = ["password", "123456", "qwerty", "admin", "welcome", "admin123", "adminPass"];
  if (commonPatterns.includes(password.toLowerCase())) {
    entropy = Math.max(entropy - 15, 5);      //Massive penalty for exact matches
  }

  //console.log("entropy-> ", entropy);

  //4. Calculate Guesses and Time
  //2^entropy = total combinations in the "human-likely" space
  const combinations = Math.pow(2, entropy);
  
  //console.log("combinations-> ", combinations);
  
  //Assuming a medium-pace offline attack (1 million guesses/sec.)
  const attemptsPerSecond = 1e6; 
  const seconds = combinations / attemptsPerSecond;

  if (!isFinite(combinations)) {
    return "Millions of years";

  }
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