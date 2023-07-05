/*
11.Write a JavaScript program to find the sum of squares of a numerical vector.
 */
const sum_sq = (arr) =>  arr.reduce((sum, ele) =>sum + ele * ele, 0);
console.log(sum_sq([0, 1, 2, 3, 4]));
  