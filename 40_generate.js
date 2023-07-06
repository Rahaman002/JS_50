/*
40. Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

Test Data :
console.log(array_range(1, 4));
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]
 */
const array_range=(start,len)=>Array.from({length:len},()=>start++);
console.log(array_range(1, 4));