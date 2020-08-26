/**
 * @param {number[]} sortedArr a SORTED array of numbers
 * @param {number} searchVal a value to search for
 * @return {boolean} Is the value in the array?
 * BONUS: Do it without slice
 */

function binarySearch(sortedArr, searchVal) {
    // your code here
    var lowInd = 0;
    var highInd = sortedArr.length - 1;

    while(lowInd <= highInd){
      var midInd = Math.floor((lowInd + highInd) / 2);
      if(searchVal == sortedArr[midInd]){
        return true;
      }

      if(sortedArr[midInd] > searchVal){
        highInd = midInd - 1;
      }
      else if(sortedArr[midInd] < searchVal){
        lowInd = midInd + 1;
      }
    }

    return false;
  }

// base case
// recursive statement
// forward movement

function rBinarySearch(sortedArr, searchVal) {
    var lowInd = 0;
    var highInd = sortedArr.length - 1;
    var midInd = Math.floor((lowInd + highInd) / 2);
    
    // base case
    if (searchVal == sortedArr[midInd]) return true;
    else if(lowInd > highInd) return false;

    if(searchVal > sortedArr[midInd]){
        lowInd = midInd + 1;
    }
    else{
        highInd = midInd - 1;
    }

    return rBinarySearch(sortedArr.slice(lowInd, highInd + 1), searchVal)
  }
  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  // [1, 2, 3, 4, 5].slice(1, 4) returns [2, 3, 4], which is a NEW ARRAY
  // [1, 2, 3, 4, 5].slice(2) returns [3, 4, 5], which is a NEW ARRAY

//   [1,2,3,4,5].slice(2)
//   [1,2] [3,4,5]
  
  console.log(rBinarySearch([1, 2, 3, 4, 5], 3)); // should log true
  console.log(rBinarySearch([1, 2, 4, 5], 3)); // should log false
  


















  
  /**
   * @param {string} str a string to reverse
   * @return {string} a new string with the characters reversed
   */

function stringReverse(str){
    var newStr = ''
    for(var i = 0; i < str.length; i++){
        newStr = str[i] + newStr;
    }
    return newStr;
}
  
  function rStringReverse(str) {
    // your code here
    // base case
    if(str.length == 1){
        return str;
    }

    return rStringReverse(str.slice(1)) + str[0];
//  return rStringReverse('ello') + 'h';
//  return (rStringReverse('llo') + 'e') + 'h';
//  return ((rStringReverse('lo') + 'l') + 'e') + 'h';
//  ...
//  return 'o' + 'l' + 'l' + 'e' + 'h';
  }
  
  console.log(rStringReverse('hello')); // should log 'olleh'
  console.log(rStringReverse('world')); // should log 'dlrow'


  'hello'.slice(1) // -> returns 'ello'