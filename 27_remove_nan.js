/*
27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
 */
const unwanted=[null,0,false,'',NaN,undefined];
const remover=(arr)=>arr.filter((ele,id)=>!unwanted.includes(ele))
console.log(remover( [NaN, 0, 15, false, -22, '',undefined, 47, null]));