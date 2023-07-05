/*
16. Write a JavaScript program to find the leap years in a given range of years.
 */
const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min).filter((year)=>((year%400 == 0) || (year%4==0 && year%100!=0))?true:false);
console.log(range(2000,2022));