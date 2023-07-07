/*
48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

Test Data :
([2,3,5,7]) -> true
([2,3,5,7,8]) -> false
Expected Output:
Original array of integers: 2,3,5,7
In the said array check every numbers are prime or not! true
Original array of integers: 2,3,5,7,8
In the said array check every numbers are prime or not! false
 */
const isprime=n=>
    {if( n <= 1)
    return false
    for(var i=2;i<n;i++)
        if( n % i == 0)
            return false
    return true
}
const arr_of_integer_prime=(arr)=>(arr.map((ele)=>isprime(ele)).includes(false))
console.log(""+(!arr_of_integer_prime([2,3,5,7,8])))