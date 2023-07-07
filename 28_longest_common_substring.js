/*
28. Write a JavaScript function to find the longest common starting substring in a set of strings.

Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"
 */
const longest_common_starting_substring = (arr) => {
    const temp = arr[0].length > arr[1].length ? Array.from(arr[1]) : Array.from(arr[0]);
    let result = '';
    
    temp.reduce((acc, ele, id) => {
      if (arr[0].substring(0, id + 1) === arr[1].substring(0, id + 1)) {
        acc += ele;
        result = acc;
      }
      return acc;
    }, '');
    
    return result;
  };
  console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 

  console.log(longest_common_starting_substring(['abcd', '1234'])); // Output: "SQL"
  
  