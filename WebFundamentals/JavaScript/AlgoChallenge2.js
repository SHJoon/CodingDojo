/* 
  Array: Concat
  .push allowed
  Replicate JavaScript’s concat() . Create a standalone function that accepts two arrays.
  Return a new array containing the first array’s elements, followed by the second array’s elements.
  Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2] .
*/

// Given array1, and array2
// Create new array to append both arrays
// Loop through first array, and push each elements to the new array
// Loop through second array, and push each elements to the new array
// Return new array

function arrConcat(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }
  return newArr;
}

var myArr1 = [2, 4, 6];
var myArr2 = [-1, 6, 10, 11];
console.log(arrConcat(myArr1, myArr2));

/* 
  Array: Reverse
  Given a numerical array, reverse the order of values, in-place. The reversed array
  should have the same length, with existing elements moved to other indices so that
  order of elements is reversed. Working ‘in-place’ means that you cannot use a second array
  – move values within the array that you are given . As always, do not use built-in array functions such as splice() .
*/
// [a, b, c, d] --> [d, c, b, a]
// [a, b, c, d] --> [a, b, c, a] --> [d, c, b, a]

function reverse(arr) {
  var temp = 0;
  for (var i = 0; i < arr.length / 2; i++) {
    temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

var myArr = ["a", "b", 1, 2];
// console.log(myArr);
reverse(myArr);
console.log(myArr);



/*
    Reverse: Reverse string
    Given a string, return a reveresed string.
*/
// example = "hello"
// output: "olleh"

function reverseString(str) {
  var reverseStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
   reverseStr += str[i]; 
  }
  return reverseStr;
}

var myStr = "hello";
console.log(reverseString(myStr));

// str: "hello"
// revStr:"" -> "o" -> "ol" -> "oll" -> "olle" -> "olleh"
// i: 4 -> 3 -> 2 -> 1 -> 0 -> -1

// output: ojoDgnidoC