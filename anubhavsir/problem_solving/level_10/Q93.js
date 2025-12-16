function characterFrequency(str) {
  let result = {};

  for (let char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}


console.log(characterFrequency("aab"));    
console.log(characterFrequency("hello"));  
console.log(characterFrequency(""));       
