/*
9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */
str = "RaHaMaN";
arr = str.split("");
arr = arr.map((ele, id) =>  ele == ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase());

console.log(arr);