//8/19/2020
/**
 * @param {number[]} sortedArr a SORTED array of numbers
 * @return {number[]} the same OR a new array "deduped"
 * 
 * BONUSES:
 * O(n): no nested loops, new array okay X
 * In place (`no` new array)
 * In place and O(n): no nested loops
 * Keep it O(n) even if unsorted
 */

function removeDuplicates(sortedArr) {
    var newArr=[];
    for (var i=0; i<sortedArr.length; i++){
      if (sortedArr[i] != sortedArr[i+1] ){
        newArr.push(sortedArr[i]);
      }
    }
    return newArr;
  }
  
  console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]));
  // should log [1, 2, 3, 4, 5]
  console.log(removeDuplicates([5, 6, 5, 7, 8, 6, 4, 2, 10]));
  
  /**
   * @param {number[]} intArr array of integers
   * @return {number|number[]}
   * 
   * if one number shows up with the highest frequency, return it
   * if all numbers show up the same number of times, return []
   * if multiple numbers have the same frequency, return them in an array
   */
  
  function findAllModes(intArr) {
    // your code here
    // To get a frequency table for the array
    var freqTable = {}, newArr=[];
    for(var i = 0; i < intArr.length; i++){
      if(freqTable.hasOwnProperty(intArr[i])){
        freqTable[intArr[i]]++;
      }
      else{
        freqTable[intArr[i]] = 1;
      }
    }
    // To find the highest frequency
    var maxFreq = 0;
    for (var key in freqTable){
      if (maxFreq < freqTable[key]){
        maxFreq = freqTable[key]; // maxFreq=2
      }
    }
    
    // Set a flag for when we find an element that doesn't get appended to the newArr
    var found = false;
    // Loop through the freqTable and compare with maximum frequency we found from previous loop
    for (var key in freqTable){
      if (maxFreq == freqTable[key]){
        newArr.push(parseInt(key));
      }
      else {
        found = true;
      }
    }
    // if newArr only has one value that means there's only one highest frequency: --> return this newArr
    if (newArr.length == 1){
      return newArr[0];
    }
   
  
    // if flag is true, that means at least one value in the given array has lower frequency than other values. Also means that this newArr contains values with the same frequency: --> return this newArr
    // if flag is false, that means all values in the given array have the same frequency: --> return an empty array
    return found ? newArr: [];
  
    // if(found){
    //   return newArr
    // }
    // else{
    //   return [];
    // }
  
  }
  
  console.log(findAllModes([1, 2, 3, 4])); // should log []
  console.log(findAllModes([1, 1, 2, 2, 3, 3])); // should log []
  console.log(findAllModes([1, 1, 3, 4])); // should log 1
  console.log(findAllModes([1, 1, 3, 4, 4])); // should log [1, 4]
  //freqTable ={"1": 2, "3":1, "4":2}
  //                   maxFreq=2
  //                  newArr = ["1", "4"]
  //