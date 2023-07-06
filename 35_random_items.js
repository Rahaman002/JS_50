/*
35. Write a JavaScript function to get random items from an array.
 */
const random_generator=(arr)=>arr[Math.floor(Math.random()*arr.length)];
console.log(random_generator([1,2,3,4,5,6,7,8,9,10,11,13]));

