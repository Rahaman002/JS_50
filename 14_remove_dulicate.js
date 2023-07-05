//1st approach
const remove_duplicate1=(arr)=>arr.filter((ele,id)=>arr.indexOf(ele)===id)
//2nd approach
const remove_duplicate2=(arr)=>[...new Set(arr)];
console.log(remove_duplicate1([1,2,3,4,5,6,2,1,99,4]));
console.log(remove_duplicate2([1,2,3,4,5,6,2,1,99,4]));