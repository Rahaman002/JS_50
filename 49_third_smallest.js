/*
49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.

Test Data :
(2,3,5,7,1) -> 3
(2,3,0,5,7,8,-2,-4) -> 0
Expected Output:
Original array of numbers: 2,3,5,7,1
Third smallest number of the said array of numbers: 3
Original array of numbers: 2,3,0,5,7,8,-2,-4
Third smallest number of the said array of numbers: 0
 */
const third_smallest_element=arr=>(arr.sort((a,b)=>a-b))[2]
console.log(third_smallest_element([2,3,0,5,7,8,-2,-4]))

