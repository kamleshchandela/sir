function charFrequency(str) {
  let freq = {};

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  return freq;
}


console.log(charFrequency("aab"));    
console.log(charFrequency("hello"));  
console.log(charFrequency(""));       
