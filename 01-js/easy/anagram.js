/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  strr1=str1.toLowerCase();
  strr2=str2.toLowerCase();

 const sorted1=strr1.split("").sort().join('');
 const sorted2=strr2.split("").sort().join('');

return sorted1==sorted2



}

module.exports = isAnagram;

