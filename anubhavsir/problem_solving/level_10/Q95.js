function charFrequency(str) {
  return [...str].reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});
}
