function mostFrequent(arr) {
  let freq = {};
  let maxCount = 0;
  let mostFreqNum = arr[0];

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > maxCount) {
      maxCount = freq[num];
      mostFreqNum = num;
    }
  }

  return mostFreqNum;
}

// Test cases
console.log(mostFrequent([1, 2, 2, 3]));      // 2
console.log(mostFrequent([4, 4, 1, 1, 4]));   // 4
console.log(mostFrequent([7]));               // 7
