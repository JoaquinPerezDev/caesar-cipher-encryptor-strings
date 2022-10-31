// Given a non-empty string of lowercase letters and a non-negative integer 
// representing a key, write a funciton that returns a new string obtained 
// by shifting every letter in the input string by k positions in the alphabet, 
// where k is the key.

// Not that letters should "wrap" around the alphabet; in other words, the 
// letter z shifted by one returns the letter a.

// Sample input: string = "xyz"
//                 key = 2
// Sample output:         "zab"

//naive approach: We can declare a new variable that represents every letter in the 
//alphabet and we can split this string, to have a point of reference when shifting
//the input string by the given key value. We can then loop through the string
//and push the shifted values to a new array that we can then join together once
//the loop is completed.

//time complexity: This algorithm runs in linear O(n) where n is the size of the 
//string. This is because we're just looping through the string once and using 
//the helper function to get the shifted letters helps speed this up.

//space complexity: Given our use of an array to store the shifted values,
//the space required here is O(n) where n is the size of the string.


//O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for(const letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetters.join('');
}

function getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return alphabet[newLetterCode % 26];
}

