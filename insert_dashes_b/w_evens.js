/*
6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
 */
let num=prompt("Enter a interger:");
num=num.toString();
temp=[num[0]];
for(let i=1;i<num.length;i++)
{
    (Number(num[i-1])%2==0 && (Number(num[i])%2==0))? temp.push('-',num[i]):temp.push(num[i]);
}
console.log(temp.join(''));