/*
Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3
 */
const pair_target = (arr, target) => arr.reduce((acc, ele, id) => {
    arr.slice(id + 1).includes(target - ele)&& acc.push([id, arr.indexOf(target - ele)]);
    return acc;
  }, []);


console.log(pair_target([10,20,10,40,50,60,70], 50)[0]);
