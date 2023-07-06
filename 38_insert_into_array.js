/*
38. Write a JavaScript function to move an array element from one position to another.

Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40]
 */
const move=(arr,start,newstart)=>{
    start=start<0?arr.length+start:start;
    newstart=newstart<0?arr.length+newstart:newstart;
    temp=arr.splice(start,1)[0];
    arr.splice(newstart,0,temp)
    return arr
}
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));