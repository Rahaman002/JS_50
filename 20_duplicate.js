/*
20. Write a JavaScript program to find duplicate values in a JavaScript array.
 */
const find_duplicate = (arr) => arr.reduce((acc, ele) => {if (arr.indexOf(ele) !== arr.lastIndexOf(ele) && !acc.includes(ele))
        acc.push(ele);
    return acc;
    }, []);
  
  console.log(find_duplicate([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
  