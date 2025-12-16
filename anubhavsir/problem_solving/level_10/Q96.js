function averageMarks(marks) {
  const values = Object.values(marks);

  if (values.length === 0) return 0;

  const sum = values.reduce((total, mark) => total + mark, 0);
  return sum / values.length;
}

// Test cases
console.log(averageMarks({ math: 80, science: 90, english: 70 })); // 80
console.log(averageMarks({ only: 100 }));                          // 100
console.log(averageMarks({}));                                     // 0
