/**
 * @param {number[]} sortedArr array of SORTED integers
 * @param {number} searchVal
 * @return {boolean}
 * 
 * Is the given value in the array?
 * DON'T ITERATE THROUGH THE ENTIRE ARRAY
 */

 // check the midpoint of the portion we're searching
 // If it's the element we want, return true
 // if it's less than what we want, move the start index one above where we are
 // if it's greater than, move the end index one below where we are

 Math.floor(2.5) --> 2
 Math.ceil(2.5) --> 3

 /** 
  * use the function to split the array in half
  * Check the mid number to see if thats the number we are looking 
  * If the mid number > searchVal we're searching for, move the high-index to the midpoint
  * If the mid number < value we're searching for, move the low-index to the midpoint
  * If the number found -> return true
  * If high index == low index -> return false
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
  
  console.log(binarySearch([1, 2, 3, 4, 5], 3));
  // should log true
  
  console.log(binarySearch([1, 2, 4, 5], 3));
  // should log false
  
  console.log(binarySearch([1, 2, 4, 5, 6, 7, 9], 3));
  // should log false
  
  








  
  /**
   * BONUS: Once done, create this version
   * returns the number of occurrences of the value
   * 
   * @param {number[]} sortedArr array of SORTED integers
   * @param {number} searchVal
   * @return {number} the number of occurrences of the searched for value
   */
  
  function binarySearchBonus(sortedArr, searchVal) {
    var lowInd = 0;
    var highInd = sortedArr.length - 1;
    var count = 0;

    while(lowInd != highInd){
      var midInd = Math.floor((lowInd + highInd) / 2);
      if(searchVal == sortedArr[midInd]){
        // return true;
        count++;
        for(var i = midInd; )
      }
      else if(sortedArr[midInd] > searchVal){
        highInd = midInd;
      }
      else if(sortedArr[midInd] < searchVal){
        lowInd = midInd;
      }
    }

    // return false;
  }
  
  console.log(binarySearchBonus([1, 2, 3, 4, 5], 3));
  // should log 1
  
  console.log(binarySearchBonus([1, 2, 4, 4, 4, 5], 4));
  // should log 3