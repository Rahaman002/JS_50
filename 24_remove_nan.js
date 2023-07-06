
/*
24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
 */
const unwanted=['0','null','undefined','false','NaN',''];
const remover=(arr,unwanted)=>arr.filter((ele,id)=>(ele !== null) &&(ele !== undefined) &&(!Number.isNaN(ele)) &&(!unwanted.includes(ele.toString())));
console.log(remover([NaN, 0, 15, false, -22, '',undefined, 47, null],unwanted))