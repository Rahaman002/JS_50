/*
45. Write a JavaScript program to find all the unique values in a set of numbers.

Test Data :
[1, 2, 2, 3, 4, 4, 5]
[1, 2, 3, 4, 5]
[1, -2, -2, 3, 4, -5, -6, -5]
Expected Output:
[1,2,3,4,5]
[1,2,3,4,5]
[1,-2,3,4,-5,-6]
 */
const unique=(arr)=>Array.from(new set([...arr]))
console.log(unique([1, 2, 3, 4, 5]));
console.log(unique([1, -2, -2, 3, 4, -5, -6, -5]));