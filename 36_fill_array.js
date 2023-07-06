/*
36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.
Test Data :
console.log(array_filled(6, 0));
[0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11));
[11, 11, 11, 11]
 */
const array_filled=(len,item)=>Array.from({length:len},()=>item);
console.log(array_filled(6, 0));
console.log(array_filled(4, 11));