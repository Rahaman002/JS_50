/*
30. Write a JavaScript function that merges two arrays and removes all duplicate elements.

Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]
 */
const merge_array=(ar1,ar2)=>Array.from(new Set([...ar1,...ar2]))

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));