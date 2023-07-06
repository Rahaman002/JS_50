/*
23. Write a JavaScript function to find the difference between two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
 */
const arr1 = [12, 1, 1, 23, 4];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr3 = Array.from(new Set([...arr1, ...arr2]));
const symmetricDifference = arr3.filter((ele) => !(arr1.includes(ele) && arr2.includes(ele)));
console.log(symmetricDifference);