/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); //to ignore all symbols and spaces
  let lower=cleanStr.split("");
  let reversed=[...lower].reverse();  //to not point to the same object
  const isEqual = lower.every((value, index) => value == reversed[index]);
   if(isEqual)
       return true
   return false
 
 }


module.exports = isPalindrome;
