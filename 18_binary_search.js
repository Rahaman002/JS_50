/*18.Write a JavaScript program to perform a binary search. */
const binary_Search=(it,value)=>it.indexOf(value);
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4