/*
46. Write a JavaScript program to generate all permutations of an array's elements (including duplicates).

Test Data :
[1, 33, 5]
[1, 3, 5, 7]
[2, 4]
Expected Output:
[[1,33,5],[1,5,33],[33,1,5],[33,5,1],[5,1,33],[5,33,1]]
[[1,3,5,7],[1,3,7,5],[1,5,3,7],[1,5,7,3],[1,7,3,5],[1,7,5,3],[3,1,5,7],[3,1,7,5],[3,5,1,7],[3,5,7,1],[3,7,1,5],[3,7,5,1],[5,1,3,7],[5,1,7,3],[5,3,1,7],[5,3,7,1],[5,7,1,3],[5,7,3,1],[7,1,3,5],[7,1,5,3],[7,3,1,5],[7,3,5,1],[7,5,1,3],[7,5,3,1]]
[[2,4],[4,2]]
 */
const permutation = (arr, dup, n, res, id) => {
    if (res.length === n) {
      console.log(res); // Print the permutation
      return;
    }
    for (var i = 0; i < n; i++) {
      if (!dup[i]) {
        dup[i] = true;
        res.push(arr[i]);
        permutation(arr, dup, n, res);
        res.pop();
        dup[i] = false;
      }
    }
  };
  
  // Example usage:
  const arr = [1, 2, 3];
  const n = arr.length;
  const dup = Array(n).fill(false);
  const res = [];
  permutation(arr, dup, n, res);