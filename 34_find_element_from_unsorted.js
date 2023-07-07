/*
34.Write a JavaScript function to get the nth largest element from an unsorted array.

Test Data:
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89
 */
const nthlargest=(arr,tar)=>arr.sort((a,b)=>b-a)[tar-1]

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));