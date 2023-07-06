/*
39. Write a JavaScript function to filter false, null, 0 and blank values from an array.

Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]
 */
const unwanted=[0,false,null,'']
const filter_array_values=(arr)=>arr.filter((ele)=>!unwanted.includes(ele))
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));