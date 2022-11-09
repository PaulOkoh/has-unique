// Write your code below

// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")(
//   // // returns true
//   hasUniqueChars("Moonday")
// )(
//   // // returns false
//   // Uppercase and lowercase letters should be considered separately:

//   hasUniqueChars("Bob")
// );
// // returns true

//let str = "Moonday";

//function hasUniqueChars(str) {}

// console.log(str[2]);

// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j < str.length; j++) {
//     if (str[i] != str[j]) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
//   //console.log(str[i]);
// }

//Set returns the number of unique elements in an object
//fill a set with all characters and compare its size to the length of the string

function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("Bob"));
