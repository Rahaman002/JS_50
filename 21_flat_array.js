/*
21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]
 */
const flatten=(arr,depth)=>!depth?arr.flat(Number.MAX_SAFE_INTEGER):arr.flat(1);
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));