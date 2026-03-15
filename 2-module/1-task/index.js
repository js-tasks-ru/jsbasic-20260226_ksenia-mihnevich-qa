function sumSalary(salaries) {
  let sum = 0;
  let values = Object.values(salaries);
  for (let value of values) {
    if (Number.isFinite(value)) {
      sum += value;
    }
  }
  return sum;
}
