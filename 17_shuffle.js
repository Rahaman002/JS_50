/*17. Write a JavaScript program to shuffle an array. */
const array_shuffle = (array) => array.sort(() => Math.random() - 0.5); 
console.log(array_shuffle([1,2,3,4,5,6,7]));
  