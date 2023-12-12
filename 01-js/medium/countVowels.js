/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let lower=str.toLowerCase();
    count =0;
    const vowels=['a','e','i','o','u'];

    let splitted=lower.split("");
    splitted.forEach(element => {
      if(vowels.includes(element))
        count++
    });

    return count

}

module.exports = countVowels;

