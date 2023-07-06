/*
41. Write a JavaScript function to generate an array between two integers of 1 step length.

Test Data :
console.log(rangeBetwee(4, 7));
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
 */
const rangeBetween = (start, end) => {
    const direction = start <= end ? 1 : -1;
  const length = Math.abs(end - start) + 1;
  return Array.from({ length }, (_, i) => start + i * direction)
};

console.log(rangeBetween(1, 5)); // [1, 2, 3, 4, 5]
console.log(rangeBetween(5, 1));