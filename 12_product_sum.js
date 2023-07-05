/*
12.Write a JavaScript program to compute the sum and product of an array of integers
 */
const p_and_s = (arr) => arr.reduce((acc, ele) => ({ sum: acc.sum + ele, product: acc.product * ele }), { sum: 0, product: 1 });

const res=p_and_s([1, 2, 3, 4, 5, 6]);
console.log(`Sum: ${res.sum}, Product: ${res.product}`);