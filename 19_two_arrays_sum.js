/*19. There are two arrays with individual values. 
Write a JavaScript program to compute the sum of each individual index value in the given array.
 */
const two_array_sum = (input1, input2) =>Array.from({ length: Math.max(input1.length, input2.length) }, (_, i) =>
  (input1[i] || 0) + (input2[i] || 0)
);

console.log(two_array_sum([1,0,2,3,4],[3,5,6,7,8,13]));

