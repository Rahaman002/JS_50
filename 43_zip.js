/*
43. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

Test Data :
unzip([['a', 1, true], ['b', 2, false]])
unzip([['a', 1, true], ['b', 2]])
Expected Output:
[["a","b"],[1,2],[true,false]]
[["a","b"],[1,2],[true]]
*/
const unzip = (arr1, arr2) => {
    const big = arr1.length > arr2.length ? arr1.length : arr2.length;
    return Array.from({ length: big }, (_, i) => {
      if (arr1[i] === undefined || arr2[i] === undefined) {
        return arr1[i] === undefined ? [arr2[i]] : [arr1[i]];
      } else {
        return [arr1[i], arr2[i]];
      }
    });
  };
  
  console.log(unzip(['a', 1, true], ['b', 2, false]));
  
