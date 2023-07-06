/*
42. Write a JavaScript function to find unique elements in two arrays.

Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]
 */
const difference = (arr1, arr2) => {
    const mergedArray = [...arr1.flat(Number.MAX_SAFE_INTEGER), ...arr2.flat(Number.MAX_SAFE_INTEGER)];
    const uniqueValues = Array.from(new Set(mergedArray));
    return uniqueValues.map((ele) => ele + "");
  };
  
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
  